import { useState, useCallback, useEffect, useRef } from 'react';
import {
  DEPARTAMENTOS, REGIONES_ESTRATEGICAS,
  PREGUNTAS_CARACTERIZACION, PREGUNTAS_INTERESES, PREGUNTAS_ACTIVIDADES,
  PREGUNTAS_FORTALEZAS, PREGUNTAS_VIRTUAL, PREGUNTAS_MOTIVACIONES,
  PREGUNTAS_CONTEXTO, PREGUNTAS_REGIONALES, PREGUNTAS_NIVEL_EDUCATIVO,
  ESCALA_INTERESES, ESCALA_ACTIVIDADES, ESCALA_FORTALEZAS, ESCALA_VIRTUAL,
  PERFILES, FAMILIAS,
} from './data';
import { calcularResultadoCompleto } from './algorithm';
import {
  Trophy, Cpu, ChartBar, Users, PaintBrush, Leaf, Handshake, Gear,
  Lightbulb, Star, Monitor, Target, BookOpen, WhatsappLogo, FileText,
  ArrowCounterClockwise
} from '@phosphor-icons/react';
import './App.css';

const STORAGE_KEY = 'brujula_vocacional_v2';

// ═══════════════════════════════════════════════════════════════
// COMPONENTES COMPARTIDOS
// ═══════════════════════════════════════════════════════════════

function AnimatedBg() {
  return <>
    <div className="animated-bg"><div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/></div>
    <div className="particles-container">
      {Array.from({length:14},(_,i)=>(
        <div key={i} className="particle" style={{
          left:`${(i*7+11)%100}%`,
          animationDelay:`${i*0.6}s`,
          animationDuration:`${7+i%5}s`,
          width:`${4+i%4}px`,
          height:`${4+i%4}px`,
          opacity:0.12+((i%3)*0.05),
          background:['#1A5DAB','#4DACE8','#F5A623'][i%3],
        }}/>
      ))}
    </div>
  </>;
}

function Header() {
  return <header className="app-header">
    <img src="/logo.png" alt="Logo" />
    <h1>Innovación <span className="header-accent">e-Learning</span> S.A.S.</h1>
  </header>;
}

function GlobalProgress({ current, total }) {
  const pct = Math.round(((current) / total) * 100);
  return <div className="global-progress">
    <div className="global-progress-info">
      <span>Paso {current} de {total}</span>
      <span className="global-progress-pct">{pct}%</span>
    </div>
    <div className="global-progress-bar">
      <div className="global-progress-fill" style={{width: `${pct}%`}}/>
    </div>
  </div>;
}

function LikertQuestion({ question, value, onChange, index, scale }) {
  return (
    <fieldset
      className={`question-card fade-in${value ? ' answered' : ''}`}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <legend className="sr-only">{question.text || question}</legend>
      <p className="question-text" aria-hidden="true">
        <span className="question-num">{index + 1}.</span> {question.text || question}
      </p>
      <div className="likert-buttons">
        {scale.map(s => (
          <button
            key={s.value}
            type="button"
            className={`likert-btn${value === s.value ? ' selected' : ''}`}
            onClick={() => onChange(s.value)}
            aria-label={`${s.value} – ${s.label}`}
            aria-pressed={value === s.value}
          >
            {s.value}
          </button>
        ))}
      </div>
      <div className="likert-labels">
        <span className="likert-label">{scale[0].label}</span>
        <span className="likert-label">{scale[scale.length-1].label}</span>
      </div>
      {value && (
        <p className="likert-selected-label" aria-live="polite">
          {scale.find(s => s.value === value)?.label}
        </p>
      )}
      {value && <div className="answer-progress-line" style={{ width: `${value * 20}%` }} />}
    </fieldset>
  );
}

function RadioQuestion({ q, value, onChange, index }) {
  const options = q.options || [];
  return (
    <div className="radio-question fade-in" style={{ animationDelay: `${index * 0.06}s` }}>
      <p className="question-text"><span className="question-num">{index + 1}.</span> {q.question}</p>
      <div className="radio-options">
        {options.map((opt, i) => {
          const optValue = typeof opt === 'object' ? opt.value : opt;
          const optText = typeof opt === 'object' ? opt.text : opt;
          return (
            <label key={i} className={`radio-option${value === optValue ? ' selected' : ''}`}>
              <input
                type="radio"
                name={q.id}
                value={optValue}
                checked={value === optValue}
                onChange={() => onChange(optValue)}
              />
              <span className="radio-circle"/>
              <span className="radio-text">{optText}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function CheckboxQuestion({ q, values = [], onChange, index }) {
  const options = q.options || [];
  const maxSelect = q.maxSelect || 99;
  const toggle = (val) => {
    if (values.includes(val)) {
      onChange(values.filter(v => v !== val));
    } else if (values.length < maxSelect) {
      onChange([...values, val]);
    }
  };
  return (
    <div className="radio-question fade-in" style={{ animationDelay: `${index * 0.06}s` }}>
      <p className="question-text">
        <span className="question-num">{index + 1}.</span> {q.question}
        {q.maxSelect && <span className="max-select-hint"> (Máximo {q.maxSelect} opciones)</span>}
      </p>
      <div className="radio-options">
        {options.map((opt, i) => (
          <label key={i} className={`checkbox-option${values.includes(opt) ? ' selected' : ''}${values.length >= maxSelect && !values.includes(opt) ? ' disabled' : ''}`}>
            <input
              type="checkbox"
              checked={values.includes(opt)}
              onChange={() => toggle(opt)}
              disabled={values.length >= maxSelect && !values.includes(opt)}
            />
            <span className="checkbox-box"/>
            <span className="radio-text">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA 1: BIENVENIDA
// ═══════════════════════════════════════════════════════════════
function PantallaBienvenida({ onNext }) {
  return <div className="welcome-screen">
    <div className="welcome-glass fade-in">
      <div className="welcome-logo-wrap"><img src="/logo.png" alt="Logo" /></div>
      <h2 className="welcome-title">Brújula Vocacional</h2>
      <p className="welcome-tagline">✨ Descubre el camino que conecta con tu futuro ✨</p>
      <div className="welcome-desc">
        <p>Elegir qué estudiar es una de las decisiones más importantes de tu vida.</p>
        <p>La <strong>Brújula Vocacional</strong> ha sido diseñada para ayudarte a descubrir las áreas de formación que mejor se relacionan con tus intereses, fortalezas, motivaciones y proyecto de vida.</p>
        <p><strong>No existen respuestas buenas o malas.</strong></p>
        <p>Responde con sinceridad y al finalizar recibirás una orientación personalizada junto con programas académicos que podrían ajustarse a tu perfil.</p>
      </div>
      <p className="welcome-duration">⏱ Duración aproximada: 10 a 12 minutos</p>
      <button className="btn-start fade-in d2" onClick={onNext}>
        Quiero descubrir mi perfil →
      </button>
    </div>
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA 2: DATOS PERSONALES
// ═══════════════════════════════════════════════════════════════
function PantallaDatos({ data, onChange, onNext, onBack }) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (d) => {
    const e = {};
    if (!d.nombre?.trim()) e.nombre = 'Requerido';
    if (!d.correo?.trim() || !/\S+@\S+\.\S+/.test(d.correo)) e.correo = 'Correo inválido';
    if (!d.celular?.trim() || !/^\d{7,10}$/.test(d.celular.replace(/\s/g,''))) e.celular = 'Celular inválido (7-10 dígitos)';
    if (!d.edad || isNaN(d.edad) || +d.edad < 14 || +d.edad > 80) e.edad = 'Edad inválida (14–80)';
    if (!d.departamento) e.departamento = 'Selecciona un departamento';
    return e;
  };

  const set = (field, val) => {
    const updated = {...data, [field]: val};
    onChange(updated);
    setTouched(p => ({...p, [field]: true}));
    setErrors(validate(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    setTouched({nombre:true,correo:true,celular:true,edad:true,departamento:true});
    if (Object.keys(errs).length === 0) onNext();
  };

  return <div className="form-screen">
    <form className="form-glass fade-in" onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="form-badge">👤 Paso 1</div>
        <h2>Conozcámonos</h2>
        <p>Todos los campos son obligatorios</p>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="nombre">Nombre completo</label>
        <input id="nombre" className={`form-input${errors.nombre&&touched.nombre?' error':''}`}
          type="text" placeholder="Ej: María García López"
          value={data.nombre||''} onChange={e=>set('nombre',e.target.value)} />
        {errors.nombre&&touched.nombre && <p className="form-error">{errors.nombre}</p>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="correo">Correo electrónico</label>
        <input id="correo" className={`form-input${errors.correo&&touched.correo?' error':''}`}
          type="email" placeholder="Ej: maria@email.com"
          value={data.correo||''} onChange={e=>set('correo',e.target.value)} />
        {errors.correo&&touched.correo && <p className="form-error">{errors.correo}</p>}
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="celular">Celular</label>
          <input id="celular" className={`form-input${errors.celular&&touched.celular?' error':''}`}
            type="tel" placeholder="Ej: 3001234567"
            value={data.celular||''} onChange={e=>set('celular',e.target.value)} />
          {errors.celular&&touched.celular && <p className="form-error">{errors.celular}</p>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="edad">Edad</label>
          <input id="edad" className={`form-input${errors.edad&&touched.edad?' error':''}`}
            type="number" placeholder="Ej: 22" min="14" max="80"
            value={data.edad||''} onChange={e=>set('edad',e.target.value)} />
          {errors.edad&&touched.edad && <p className="form-error">{errors.edad}</p>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="departamento">Departamento</label>
        <select id="departamento" className={`form-input${errors.departamento&&touched.departamento?' error':''}`}
          value={data.departamento||''} onChange={e=>set('departamento',e.target.value)}>
          <option value="">Seleccionar…</option>
          {DEPARTAMENTOS.map(d=><option key={d} value={d}>{d}</option>)}
        </select>
        {errors.departamento&&touched.departamento && <p className="form-error">{errors.departamento}</p>}
      </div>

      <button type="submit" className="btn-form">Continuar →</button>
      <button type="button" className="btn-back" onClick={onBack}>← Volver</button>
    </form>
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA 3: CARACTERIZACIÓN
// ═══════════════════════════════════════════════════════════════
function PantallaCaracterizacion({ answers, onChange, onNext, onBack }) {
  const allAnswered = PREGUNTAS_CARACTERIZACION.every(q => answers[q.id]);
  return <div className="test-container">
    <div className="section-header fade-in">
      <div className="section-badge">📋 Caracterización</div>
      <h3 className="section-title">Cuéntanos un poco sobre ti</h3>
    </div>
    {PREGUNTAS_CARACTERIZACION.map((q, i) => (
      <RadioQuestion key={q.id} q={q} value={answers[q.id]} index={i}
        onChange={val => onChange({...answers, [q.id]: val})} />
    ))}
    <button className={`btn-next${allAnswered?' active':' disabled'}`}
      onClick={allAnswered?onNext:undefined} disabled={!allAnswered}>
      Continuar →
    </button>
    <button className="btn-back" onClick={onBack}>← Volver</button>
    {!allAnswered && <p className="unanswered-msg">⚠ Responde todas las preguntas para continuar</p>}
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA LIKERT GENÉRICA (Intereses, Actividades, Fortalezas, Virtual)
// ═══════════════════════════════════════════════════════════════
function PantallaLikert({ badge, title, subtitle, questions, scale, answers, onChange, onNext, onBack }) {
  const allAnswered = questions.every(q => answers[q.id]);
  return <div className="test-container">
    <div className="section-header fade-in">
      <div className="section-badge">{badge}</div>
      <h3 className="section-title">{title}</h3>
      {subtitle && <p className="section-desc">{subtitle}</p>}
    </div>
    {questions.map((q, i) => (
      <LikertQuestion key={q.id} question={q} value={answers[q.id]} index={i} scale={scale}
        onChange={val => onChange({...answers, [q.id]: val})} />
    ))}
    <button className={`btn-next${allAnswered?' active':' disabled'}`}
      onClick={allAnswered?onNext:undefined} disabled={!allAnswered}>
      Continuar →
    </button>
    <button className="btn-back" onClick={onBack}>← Volver</button>
    {!allAnswered && <p className="unanswered-msg">⚠ Responde todas las preguntas para continuar</p>}
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA 8: MOTIVACIONES
// ═══════════════════════════════════════════════════════════════
function PantallaMotivaciones({ answers, onChange, onNext, onBack }) {
  const allAnswered = PREGUNTAS_MOTIVACIONES.every(q => {
    if (q.type === 'multi') return answers[q.id] && answers[q.id].length > 0;
    return !!answers[q.id];
  });

  return <div className="test-container">
    <div className="section-header fade-in">
      <div className="section-badge">💪 Motivaciones</div>
      <h3 className="section-title">Tus motivaciones</h3>
      <p className="section-desc">
        Las personas deciden estudiar por diferentes razones.
        Queremos conocer qué es lo que más te motiva para continuar con tu formación.
        No existen respuestas correctas o incorrectas.
      </p>
    </div>
    {PREGUNTAS_MOTIVACIONES.map((q, i) => {
      if (q.type === 'multi') {
        return <CheckboxQuestion key={q.id} q={q} values={answers[q.id] || []} index={i}
          onChange={vals => onChange({...answers, [q.id]: vals})} />;
      }
      return <RadioQuestion key={q.id} q={q} value={answers[q.id]} index={i}
        onChange={val => onChange({...answers, [q.id]: val})} />;
    })}
    <button className={`btn-next${allAnswered?' active':' disabled'}`}
      onClick={allAnswered?onNext:undefined} disabled={!allAnswered}>
      Continuar →
    </button>
    <button className="btn-back" onClick={onBack}>← Volver</button>
    {!allAnswered && <p className="unanswered-msg">⚠ Responde todas las preguntas para continuar</p>}
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA 9: CONTEXTO TERRITORIAL
// ═══════════════════════════════════════════════════════════════
function PantallaContexto({ answers, onChange, onNext, onBack, departamento }) {
  const allAnswered = PREGUNTAS_CONTEXTO.every(q => {
    if (q.type === 'multi') return answers[q.id] && answers[q.id].length > 0;
    return !!answers[q.id];
  });

  return <div className="test-container">
    <div className="section-header fade-in">
      <div className="section-badge">🌎 Contexto</div>
      <h3 className="section-title">Tu entorno y tus oportunidades</h3>
      <p className="section-desc">
        Cada persona vive una realidad diferente. Conocer tu entorno nos permitirá brindarte recomendaciones más útiles y un mejor acompañamiento.
        Estas preguntas NO modifican tu perfil vocacional.
      </p>
    </div>

    {/* Departamento pre-cargado (solo lectura) */}
    <div className="readonly-field fade-in">
      <p className="question-text"><span className="question-num">1.</span> ¿Actualmente dónde resides?</p>
      <div className="readonly-value">📍 {departamento}</div>
    </div>

    {PREGUNTAS_CONTEXTO.map((q, i) => {
      if (q.type === 'multi') {
        return <CheckboxQuestion key={q.id} q={q} values={answers[q.id] || []} index={i + 1}
          onChange={vals => onChange({...answers, [q.id]: vals})} />;
      }
      return <RadioQuestion key={q.id} q={{...q}} value={answers[q.id]} index={i + 1}
        onChange={val => onChange({...answers, [q.id]: val})} />;
    })}
    <button className={`btn-next${allAnswered?' active':' disabled'}`}
      onClick={allAnswered?onNext:undefined} disabled={!allAnswered}>
      Continuar →
    </button>
    <button className="btn-back" onClick={onBack}>← Volver</button>
    {!allAnswered && <p className="unanswered-msg">⚠ Responde todas las preguntas para continuar</p>}
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA 9A: BLOQUE REGIONAL CONDICIONAL
// ═══════════════════════════════════════════════════════════════
function PantallaRegional({ region, answers, onChange, onNext, onBack }) {
  const regionData = PREGUNTAS_REGIONALES[region];
  if (!regionData) return null;

  const allAnswered = regionData.questions.every(q => !!answers[q.id]);

  return <div className="test-container">
    <div className="section-header fade-in">
      <div className="section-badge regional-badge">📍 {regionData.title}</div>
      <h3 className="section-title">{regionData.title}</h3>
      <p className="section-desc">{regionData.intro}</p>
    </div>
    {regionData.questions.map((q, i) => (
      <RadioQuestion key={q.id} q={q} value={answers[q.id]} index={i}
        onChange={val => onChange({...answers, [q.id]: val})} />
    ))}
    <button className={`btn-next${allAnswered?' active':' disabled'}`}
      onClick={allAnswered?onNext:undefined} disabled={!allAnswered}>
      Continuar →
    </button>
    <button className="btn-back" onClick={onBack}>← Volver</button>
    {!allAnswered && <p className="unanswered-msg">⚠ Responde todas las preguntas para continuar</p>}
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA 10: NIVEL EDUCATIVO
// ═══════════════════════════════════════════════════════════════
function PantallaNivelEducativo({ answers, onChange, onNext, onBack }) {
  const visibleQuestions = PREGUNTAS_NIVEL_EDUCATIVO.filter(q =>
    !q.showIf || q.showIf(answers)
  );
  const allAnswered = visibleQuestions.every(q => !!answers[q.id]);

  return <div className="test-container">
    <div className="section-header fade-in">
      <div className="section-badge">🎓 Momento Académico</div>
      <h3 className="section-title">Tu momento académico</h3>
      <p className="section-desc">
        Cada etapa de la vida trae nuevos retos y oportunidades.
        Queremos conocer en qué momento académico te encuentras para recomendarte la ruta de formación que mejor se ajuste a tus necesidades.
      </p>
    </div>
    {visibleQuestions.map((q, i) => (
      <RadioQuestion key={q.id} q={q} value={answers[q.id]} index={i}
        onChange={val => {
          const updated = {...answers, [q.id]: val};
          // Limpiar respuestas condicionales al cambiar P1
          if (q.id === 'niv_1') {
            delete updated.niv_2;
            delete updated.niv_3;
          }
          onChange(updated);
        }} />
    ))}

    {allAnswered && (
      <div className="pre-processing-msg fade-in">
        <h4>¡Ya casi terminamos! 🎉</h4>
        <p>Hemos conocido tus intereses, fortalezas, motivaciones y tu momento académico.</p>
        <p>Ahora analizaremos toda la información para identificar las familias de programas que mejor se ajustan a tu perfil.</p>
        <p className="processing-time">⏳ Esto tomará solo unos segundos.</p>
      </div>
    )}

    <button className={`btn-next result-btn${allAnswered?' active':' disabled'}`}
      onClick={allAnswered?onNext:undefined} disabled={!allAnswered}>
      ✨ Ver mi resultado →
    </button>
    <button className="btn-back" onClick={onBack}>← Volver</button>
    {!allAnswered && <p className="unanswered-msg">⚠ Responde todas las preguntas para continuar</p>}
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA PROCESAMIENTO
// ═══════════════════════════════════════════════════════════════
function PantallaProcesamiento({ onDone }) {
  const [step, setStep] = useState(0);
  const steps = [
    'Analizando tus intereses vocacionales...',
    'Evaluando tus actividades preferidas...',
    'Procesando tus fortalezas personales...',
    'Calculando tu preparación virtual...',
    'Identificando tu perfil vocacional...',
    'Seleccionando programas compatibles...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => {
        if (s >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(onDone, 600);
          return s;
        }
        return s + 1;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <div className="processing-screen">
    <div className="processing-glass fade-in">
      <div className="processing-spinner"/>
      <h3>Analizando tu perfil</h3>
      <div className="processing-steps">
        {steps.map((s, i) => (
          <div key={i} className={`processing-step ${i < step ? 'done' : i === step ? 'active' : ''}`}>
            <span className="step-icon">{i < step ? '✓' : i === step ? '◉' : '○'}</span>
            <span>{s}</span>
          </div>
        ))}
      </div>
      <div className="processing-bar">
        <div className="processing-bar-fill" style={{width: `${((step+1)/steps.length)*100}%`}}/>
      </div>
    </div>
  </div>;
}

// ═══════════════════════════════════════════════════════════════
// PANTALLA RESULTADO
// ═══════════════════════════════════════════════════════════════
const FAMILIA_ICONS = {
  TEC: Cpu,
  NEG: ChartBar,
  SOC: Users,
  CRE: PaintBrush,
  AMB: Leaf,
  COM: Handshake,
  PRO: Gear,
  EMP: Lightbulb
};

function PantallaResultado({ result, personalData, motivaciones, onRestart }) {
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const { perfiles, ipmv, fortalezasDestacadas, programasAgrupados, porcentajes } = result;
  const principal = perfiles.principal;
  const complementario = perfiles.complementario;
  const perfData = PERFILES[principal.familia];
  const compData = PERFILES[complementario.familia];

  const PrincipalIcon = FAMILIA_ICONS[principal.familia] || Star;
  const CompIcon = FAMILIA_ICONS[complementario.familia] || Star;

  // Programas iniciales: 2 por nivel
  const prog_alta = programasAgrupados.alta.slice(0, showAllPrograms ? undefined : 2);
  const prog_buena = programasAgrupados.buena.slice(0, showAllPrograms ? undefined : 2);
  const prog_interes = programasAgrupados.interes.slice(0, showAllPrograms ? undefined : 2);
  const totalProgs = programasAgrupados.alta.length + programasAgrupados.buena.length + programasAgrupados.interes.length;
  const visibleProgs = prog_alta.length + prog_buena.length + prog_interes.length;

  return <div>
    {/* Confetti */}
    <div className="confetti-burst">
      {Array.from({length:28},(_,i)=>(
        <div key={i} className="confetti-piece" style={{
          left:`${(i*3.7)%100}%`, animationDelay:`${(i*0.07)%2}s`,
          background:['#1A5DAB','#4DACE8','#F5A623','#1D9E75','#FFD17A'][i%5],
        }}/>
      ))}
    </div>

    <div className="results-container">
      {/* HERO */}
      <div className="results-hero fade-in">
        <span className="results-hero-icon"><Trophy size={48} weight="fill" /></span>
        <h2>Tu perfil vocacional</h2>
        <p>Resultados para <strong>{personalData.nombre}</strong></p>
      </div>

      {/* PERFIL PRINCIPAL */}
      <div className="results-dominant fade-in d1">
        <p className="dominant-label">Perfil Principal</p>
        <div className="dominant-badge">
          <span className="dominant-icon-span" style={{ marginRight: 8, display: 'inline-flex', alignItems: 'center' }}>
            <PrincipalIcon size={24} weight="bold" />
          </span>
          {perfData.nombre}
        </div>
        <div className="dominant-pct">{principal.porcentaje}%</div>
        <p className="dominant-desc">{perfData.descripcion}</p>

        {perfiles.hayEmpate && (
          <div className="empate-section">
            <p className="empate-label">Perfil Complementario</p>
            <div className="empate-badge">
              <span style={{ marginRight: 6, display: 'inline-flex', alignItems: 'center' }}>
                <CompIcon size={20} weight="bold" />
              </span> 
              {compData.nombre}
              <span className="empate-pct">{complementario.porcentaje}%</span>
            </div>
            <p className="empate-msg">Tus intereses muestran afinidad con ambas áreas.</p>
          </div>
        )}
      </div>

      {/* TOP 3 PERFILES */}
      <div className="top-profiles fade-in d2">
        <h3 className="chart-title">
          <ChartBar size={20} weight="bold" style={{ marginRight: 6, verticalAlign: 'middle' }} /> 
          Tus áreas de afinidad
        </h3>
        {perfiles.todosOrdenados.slice(0, 5).map((p, i) => {
          let afinidadClass = '';
          let afinidadLabel = '';
          if (p.porcentaje >= 90) { afinidadClass = 'afinidad-alta'; afinidadLabel = '🟢 Alta afinidad'; }
          else if (p.porcentaje >= 75) { afinidadClass = 'afinidad-buena'; afinidadLabel = '🟡 Buena afinidad'; }
          else if (p.porcentaje >= 60) { afinidadClass = 'afinidad-interes'; afinidadLabel = '🔵 También podría interesarte'; }
          
          const BarIcon = FAMILIA_ICONS[p.familia] || Star;
          return (
            <div key={p.familia} className={`profile-bar-item ${afinidadClass}`}>
              <div className="profile-bar-header">
                <span className="profile-bar-emoji" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <BarIcon size={18} weight="bold" />
                </span>
                <span className="profile-bar-name">{p.nombre}</span>
                <span className="profile-bar-pct">{p.porcentaje}%</span>
              </div>
              <div className="profile-bar-bg">
                <div className="profile-bar-fill" style={{width:`${p.porcentaje}%`, background: FAMILIAS[p.familia]?.color || '#1A5DAB'}}/>
              </div>
              {afinidadLabel && <span className="afinidad-tag">{afinidadLabel}</span>}
            </div>
          );
        })}
      </div>

      {/* FORTALEZAS DESTACADAS */}
      {fortalezasDestacadas.length > 0 && (
        <div className="fortalezas-card fade-in d2">
          <h3 className="chart-title">
            <Star size={20} weight="bold" style={{ marginRight: 6, verticalAlign: 'middle' }} /> 
            Fortalezas destacadas
          </h3>
          <div className="fortalezas-list">
            {fortalezasDestacadas.map((f, i) => (
              <span key={i} className="fortaleza-tag">
                <Star size={14} weight="fill" style={{ marginRight: 4, verticalAlign: 'middle' }} /> 
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* IPMV */}
      <div className={`ipmv-card ipmv-${ipmv.nivel} fade-in d3`}>
        <h3 className="ipmv-title">
          <Monitor size={20} weight="bold" style={{ marginRight: 6, verticalAlign: 'middle' }} /> 
          Tu preparación para estudiar en modalidad virtual
        </h3>
        <div className="ipmv-level">{ipmv.nivel === 'alto' ? 'Alta' : ipmv.nivel === 'medio' ? 'Media' : 'En desarrollo'}</div>
        <p className="ipmv-message">{ipmv.mensaje}</p>
      </div>

      {/* MOTIVACIÓN PRINCIPAL */}
      {motivaciones?.mot_1 && (
        <div className="motivation-card fade-in d3">
          <h3 className="chart-title">
            <Target size={20} weight="bold" style={{ marginRight: 6, verticalAlign: 'middle' }} /> 
            Tu motivación principal
          </h3>
          <p className="motivation-text">{motivaciones.mot_1}</p>
          {motivaciones.mot_5 && motivaciones.mot_5.length > 0 && (
            <div className="barriers-section">
              <p className="barriers-label">Posibles barreras identificadas:</p>
              <div className="barriers-list">
                {motivaciones.mot_5.map((b, i) => <span key={i} className="barrier-tag">{b}</span>)}
              </div>
            </div>
          )}
        </div>
      )}

      {/* PROGRAMAS RECOMENDADOS */}
      <div className="programs-section fade-in d4">
        <h3 className="programs-title">
          <BookOpen size={20} weight="bold" style={{ marginRight: 6, verticalAlign: 'middle' }} /> 
          Programas recomendados
        </h3>
        <p className="programs-subtitle">
          Basados en tu perfil <strong>{perfData.nombre}</strong>
        </p>

        {prog_alta.length > 0 && (
          <div className="program-group">
            <div className="program-group-label alta">🟢 Alta afinidad</div>
            {prog_alta.map((p, i) => (
              <div key={i} className="program-item program-alta">
                <div className="program-info">
                  <span className="program-name">{p.programa}</span>
                  <span className="program-meta">{p.nivel} · {p.modalidad || 'Virtual'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {prog_buena.length > 0 && (
          <div className="program-group">
            <div className="program-group-label buena">🟡 Buena afinidad</div>
            {prog_buena.map((p, i) => (
              <div key={i} className="program-item program-buena">
                <div className="program-info">
                  <span className="program-name">{p.programa}</span>
                  <span className="program-meta">{p.nivel} · {p.modalidad || 'Virtual'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {prog_interes.length > 0 && (
          <div className="program-group">
            <div className="program-group-label interes">🔵 También podría interesarte</div>
            {prog_interes.map((p, i) => (
              <div key={i} className="program-item program-interes">
                <div className="program-info">
                  <span className="program-name">{p.programa}</span>
                  <span className="program-meta">{p.nivel} · {p.modalidad || 'Virtual'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalProgs > visibleProgs && !showAllPrograms && (
          <button className="btn-more-programs" onClick={() => setShowAllPrograms(true)}>
            Ver más programas relacionados ({totalProgs - visibleProgs} más)
          </button>
        )}
      </div>

      {/* BOTONES FINALES */}
      <a href="https://wa.me/573144377691?text=Hola,%20realic%C3%A9%20el%20Test%20Vocacional%20y%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20sobre%20mis%20opciones%20acad%C3%A9micas." target="_blank" rel="noopener noreferrer" className="btn-asesoria fade-in d5">
        <WhatsappLogo size={22} weight="fill" style={{ marginRight: 8, verticalAlign: 'middle' }} /> Quiero recibir asesoría
      </a>
      <button className="btn-download fade-in d6 no-print" onClick={()=>window.print()}>
        <FileText size={18} weight="bold" style={{ marginRight: 6, verticalAlign: 'middle' }} /> Descargar resultado
      </button>
      <button className="btn-restart fade-in d6 no-print" onClick={()=>{
        if(window.confirm('¿Seguro que quieres empezar de nuevo?')) onRestart();
      }}>
        <ArrowCounterClockwise size={18} weight="bold" style={{ marginRight: 6, verticalAlign: 'middle' }} /> Volver a empezar
      </button>
    </div>
  </div>;
}

/**
 * Envía los resultados y datos del test vocacional a Google Sheets mediante una petición HTTP POST.
 *
 * @param {Object} datos - El objeto JSON con los datos del test vocacional.
 * @returns {Promise<Object>} La respuesta del servidor en formato JSON.
 */
async function enviarResultadosAGoogleSheets(datos) {
  const url = 'https://script.google.com/macros/s/AKfycbzWpjh4qO5To0Zan6bISkHchE7wW5vA8OhrC9ATZzmEREqXahJCEoKdXh4toxXV1LQzoA/exec';
  console.log("enviarResultadosAGoogleSheets - Iniciando petición HTTP POST...");
  console.log("URL de destino:", url);
  console.log("Método: POST");
  console.log("Headers:", { 'Content-Type': 'text/plain;charset=utf-8' });
  console.log("Body enviado:", JSON.stringify(datos));

  try {
    console.log("Ejecutando fetch...");
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(datos),
    });

    console.log("Respuesta HTTP recibida.");
    console.log("Código de estado (status):", response.status);
    console.log("ok:", response.ok);

    if (!response.ok) {
      console.warn("La respuesta HTTP no es ok. Generando error...");
      throw new Error(`Error en la petición HTTP: ${response.status} ${response.statusText}`);
    }

    // Google Apps Script redirects might not always return JSON directly due to CORS redirects,
    // so we attempt to read text or JSON and log it.
    let responseText = "";
    try {
      responseText = await response.text();
      console.log("Contenido completo de la respuesta (texto):", responseText);
    } catch (readErr) {
      console.warn("No se pudo leer el cuerpo de la respuesta como texto o hubo restricción de CORS al leer la redirección:", readErr);
    }

    try {
      const responseJson = JSON.parse(responseText);
      console.log("Contenido completo de la respuesta (JSON parseado):", responseJson);
      console.log("=== ENVÍO EXITOSO ===");
      return responseJson;
    } catch {
      console.log("La respuesta no tiene formato JSON válido o no se pudo parsear.");
      console.log("=== ENVÍO FINALIZADO (sin JSON de retorno) ===");
      return null;
    }
  } catch (error) {
    console.error("Excepción detectada en enviarResultadosAGoogleSheets:", error);
    console.log("=== ENVÍO FALLIDO ===");
    throw error;
  }
}

// ═══════════════════════════════════════════════════════════════
// APP PRINCIPAL — ORQUESTADOR
// ═══════════════════════════════════════════════════════════════
const PANTALLAS = [
  'bienvenida',          // 0
  'datos',               // 1
  'caracterizacion',     // 2
  'intereses',           // 3
  'actividades',         // 4
  'fortalezas',          // 5
  'virtual',             // 6
  'motivaciones',        // 7
  'contexto',            // 8
  'regional',            // 9 (condicional)
  'nivel_educativo',     // 10
  'procesamiento',       // 11
  'resultado',           // 12
];

export default function App() {
  const [pantallaIdx, setPantallaIdx] = useState(0);
  const [personalData, setPersonalData] = useState({});
  const [caracterizacion, setCaracterizacion] = useState({});
  const [intereses, setIntereses] = useState({});
  const [actividades, setActividades] = useState({});
  const [fortalezas, setFortalezas] = useState({});
  const [virtual, setVirtual] = useState({});
  const [motivaciones, setMotivaciones] = useState({});
  const [contexto, setContexto] = useState({});
  const [regional, setRegional] = useState({});
  const [nivelEducativo, setNivelEducativo] = useState({});
  const [resultado, setResultado] = useState(null);
  const [showResume, setShowResume] = useState(false);

  const pantallaActual = PANTALLAS[pantallaIdx];

  // Determinar si hay región estratégica
  const regionEstrategica = REGIONES_ESTRATEGICAS[personalData.departamento] || null;

  // Guardar en localStorage en cada cambio
  useEffect(() => {
    if (pantallaIdx > 0 && pantallaIdx < PANTALLAS.length - 1) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          pantallaIdx, personalData, caracterizacion, intereses,
          actividades, fortalezas, virtual, motivaciones,
          contexto, regional, nivelEducativo,
        }));
      } catch {}
    }
  }, [pantallaIdx, personalData, caracterizacion, intereses, actividades, fortalezas, virtual, motivaciones, contexto, regional, nivelEducativo]);

  // Detectar progreso guardado
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.pantallaIdx > 0) setShowResume(true);
      }
    } catch {}
  }, []);

  const handleResume = useCallback(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      setPersonalData(saved.personalData || {});
      setCaracterizacion(saved.caracterizacion || {});
      setIntereses(saved.intereses || {});
      setActividades(saved.actividades || {});
      setFortalezas(saved.fortalezas || {});
      setVirtual(saved.virtual || {});
      setMotivaciones(saved.motivaciones || {});
      setContexto(saved.contexto || {});
      setRegional(saved.regional || {});
      setNivelEducativo(saved.nivelEducativo || {});
      setPantallaIdx(saved.pantallaIdx || 1);
    } catch { setPantallaIdx(0); }
    setShowResume(false);
  }, []);

  const goNext = useCallback(() => {
    let nextIdx = pantallaIdx + 1;
    // Saltar pantalla regional si no hay región estratégica
    if (PANTALLAS[nextIdx] === 'regional' && !regionEstrategica) {
      nextIdx++;
    }
    setPantallaIdx(nextIdx);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pantallaIdx, regionEstrategica]);

  const goBack = useCallback(() => {
    let prevIdx = pantallaIdx - 1;
    // Saltar pantalla regional si no hay región estratégica
    if (PANTALLAS[prevIdx] === 'regional' && !regionEstrategica) {
      prevIdx--;
    }
    if (prevIdx >= 0) {
      setPantallaIdx(prevIdx);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [pantallaIdx, regionEstrategica]);

  const handleProcesar = useCallback(async () => {
    console.log("=== INICIO DE PROCESAMIENTO Y ENVÍO DE DATOS ===");
    const niv = nivelEducativo.niv_1 || 'bachiller';
    console.log("Nivel educativo seleccionado:", niv);

    console.log("Calculando resultados completos...");
    const res = calcularResultadoCompleto({
      intereses,
      actividades,
      fortalezas,
      virtual,
      nivelEducativo: niv,
    });
    console.log("Resultados calculados con éxito:", res);

    setResultado(res);
    localStorage.removeItem(STORAGE_KEY);

    // Preparar objeto de datos para Google Sheets exactamente con las propiedades solicitadas
    const datosEnvio = {
      nombre: personalData.nombre || "",
      correo: personalData.correo || "",
      celular: personalData.celular || "",
      edad: personalData.edad ? Number(personalData.edad) : "",
      departamento: personalData.departamento || "",

      motivacionPrincipal: motivaciones.mot_1 || "",
      aspectoImportante1: motivaciones.mot_2?.[0] || "",
      aspectoImportante2: motivaciones.mot_2?.[1] || "",
      metaFutura: motivaciones.mot_3 || "",
      estadoActual: motivaciones.mot_4 || "",
      barreraPrincipal: motivaciones.mot_5?.[0] || "",
      barreraSecundaria: motivaciones.mot_5?.[1] || "",

      nivelEducativo: nivelEducativo.niv_1 || "",
      objetivoProfesional: (nivelEducativo.niv_1 === 'profesional' 
        ? nivelEducativo.niv_3 
        : (['tecnico', 'tecnologo'].includes(nivelEducativo.niv_1) 
            ? nivelEducativo.niv_2 
            : "")) || "",
      modalidadPreferida: nivelEducativo.niv_4 || "",

      perfilPrincipal: PERFILES[res.perfiles.principal.familia]?.nombre || res.perfiles.principal.familia || "",
      porcentajePerfilPrincipal: res.perfiles.principal.porcentaje ? Number(res.perfiles.principal.porcentaje) : "",

      perfilComplementario: res.perfiles.complementario ? (PERFILES[res.perfiles.complementario.familia]?.nombre || res.perfiles.complementario.familia) : "",
      porcentajePerfilComplementario: (res.perfiles.complementario && res.perfiles.complementario.porcentaje) ? Number(res.perfiles.complementario.porcentaje) : "",

      afinidadExploradorTecnologico: res.porcentajes.TEC ? Number(res.porcentajes.TEC) : "",
      afinidadEstrategaNegocios: res.porcentajes.NEG ? Number(res.porcentajes.NEG) : "",
      afinidadAgenteCambio: res.porcentajes.SOC ? Number(res.porcentajes.SOC) : "",
      afinidadInnovadorCreativo: res.porcentajes.CRE ? Number(res.porcentajes.CRE) : "",
      afinidadGestorTerritorio: res.porcentajes.AMB ? Number(res.porcentajes.AMB) : "",

      preparacionVirtual: res.ipmv.porcentaje ? Number(res.ipmv.porcentaje) : "",

      motivacionDetectada: motivaciones.mot_1 || "",
      barreraDetectada: (motivaciones.mot_5 && motivaciones.mot_5.length > 0) ? motivaciones.mot_5.join(', ') : "",

      fortalezas: res.fortalezasDestacadas || [],

      programaRecomendado1: res.programasFiltrados?.[0]?.programa || "",
      programaRecomendado2: res.programasFiltrados?.[1]?.programa || "",
      programaRecomendado3: res.programasFiltrados?.[2]?.programa || ""
    };

    console.log("Objeto de datos preparado para envío:", datosEnvio);

    try {
      console.log("Llamando a la función enviarResultadosAGoogleSheets...");
      const resultEnvio = await enviarResultadosAGoogleSheets(datosEnvio);
      console.log("enviarResultadosAGoogleSheets finalizó. Retorno:", resultEnvio);
    } catch (err) {
      console.error("Error capturado en handleProcesar al enviar los resultados a Google Sheets:", err);
    }

    console.log("Transicionando a la pantalla de resultados (goNext)...");
    goNext(); // a resultado
  }, [intereses, actividades, fortalezas, virtual, nivelEducativo, personalData, motivaciones, goNext]);

  const handleRestart = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setPantallaIdx(0);
    setPersonalData({}); setCaracterizacion({}); setIntereses({});
    setActividades({}); setFortalezas({}); setVirtual({});
    setMotivaciones({}); setContexto({}); setRegional({});
    setNivelEducativo({}); setResultado(null);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  // Total de pasos visibles (sin procesamiento ni resultado)
  const totalPasos = regionEstrategica ? 10 : 9;
  const pasoActual = (() => {
    if (pantallaIdx <= 0) return 0;
    let paso = pantallaIdx;
    // Si saltamos regional, ajustar
    if (!regionEstrategica && pantallaIdx >= 10) paso--;
    return Math.min(paso, totalPasos);
  })();

  return <div>
    <Header/>
    <AnimatedBg/>

    {showResume && (
      <div className="resume-banner fade-in">
        <p className="resume-text">Tienes un test en progreso. ¿Deseas continuar donde lo dejaste?</p>
        <div className="resume-actions">
          <button className="resume-btn-yes" onClick={handleResume}>Sí, continuar</button>
          <button className="resume-btn-no" onClick={()=>{ localStorage.removeItem(STORAGE_KEY); setShowResume(false); }}>
            Empezar de nuevo
          </button>
        </div>
      </div>
    )}

    {/* Barra de progreso global (solo en pasos 1-10) */}
    {pantallaIdx > 0 && pantallaIdx < PANTALLAS.indexOf('procesamiento') && (
      <GlobalProgress current={pasoActual} total={totalPasos} />
    )}

    {pantallaActual === 'bienvenida' && (
      <PantallaBienvenida onNext={goNext} />
    )}

    {pantallaActual === 'datos' && (
      <PantallaDatos data={personalData} onChange={setPersonalData} onNext={goNext} onBack={goBack} />
    )}

    {pantallaActual === 'caracterizacion' && (
      <PantallaCaracterizacion answers={caracterizacion} onChange={setCaracterizacion} onNext={goNext} onBack={goBack} />
    )}

    {pantallaActual === 'intereses' && (
      <PantallaLikert
        badge="🎯 Intereses Vocacionales"
        title="Tus intereses"
        subtitle="Ahora queremos conocer qué temas despiertan más tu interés. Lee cada afirmación y selecciona qué tanto te identifica."
        questions={PREGUNTAS_INTERESES} scale={ESCALA_INTERESES}
        answers={intereses} onChange={setIntereses}
        onNext={goNext} onBack={goBack}
      />
    )}

    {pantallaActual === 'actividades' && (
      <PantallaLikert
        badge="🎮 Actividades que disfruto"
        title="Actividades que disfruto"
        subtitle="Cada persona disfruta actividades diferentes. Cuéntanos cuáles te motivan más. ¿Qué tanto disfrutas realizar las siguientes actividades?"
        questions={PREGUNTAS_ACTIVIDADES} scale={ESCALA_ACTIVIDADES}
        answers={actividades} onChange={setActividades}
        onNext={goNext} onBack={goBack}
      />
    )}

    {pantallaActual === 'fortalezas' && (
      <PantallaLikert
        badge="💎 Fortalezas Personales"
        title="Fortalezas personales"
        subtitle="Todas las personas tienen fortalezas únicas. Ayúdanos a conocer las tuyas. ¿Qué tanto te identificas con las siguientes afirmaciones?"
        questions={PREGUNTAS_FORTALEZAS} scale={ESCALA_FORTALEZAS}
        answers={fortalezas} onChange={setFortalezas}
        onNext={goNext} onBack={goBack}
      />
    )}

    {pantallaActual === 'virtual' && (
      <PantallaLikert
        badge="💻 Educación Virtual"
        title="Aprender en modalidad virtual"
        subtitle="Cada persona tiene una forma diferente de aprender. La educación virtual ofrece flexibilidad, pero también requiere organización, compromiso y autonomía. Las siguientes preguntas nos ayudarán a conocer cómo te sientes frente a esta modalidad."
        questions={PREGUNTAS_VIRTUAL} scale={ESCALA_VIRTUAL}
        answers={virtual} onChange={setVirtual}
        onNext={goNext} onBack={goBack}
      />
    )}

    {pantallaActual === 'motivaciones' && (
      <PantallaMotivaciones answers={motivaciones} onChange={setMotivaciones} onNext={goNext} onBack={goBack} />
    )}

    {pantallaActual === 'contexto' && (
      <PantallaContexto answers={contexto} onChange={setContexto}
        onNext={goNext} onBack={goBack} departamento={personalData.departamento} />
    )}

    {pantallaActual === 'regional' && regionEstrategica && (
      <PantallaRegional region={regionEstrategica} answers={regional}
        onChange={setRegional} onNext={goNext} onBack={goBack} />
    )}

    {pantallaActual === 'nivel_educativo' && (
      <PantallaNivelEducativo answers={nivelEducativo} onChange={setNivelEducativo}
        onNext={handleProcesar} onBack={goBack} />
    )}

    {pantallaActual === 'procesamiento' && (
      <PantallaProcesamiento onDone={goNext} />
    )}

    {pantallaActual === 'resultado' && resultado && (
      <PantallaResultado result={resultado} personalData={personalData}
        motivaciones={motivaciones} onRestart={handleRestart} />
    )}
  </div>;
}
