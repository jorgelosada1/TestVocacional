import { useState, useCallback } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import {
  REGIONES, NIVELES_EDUCATIVOS, SITUACIONES, BUSQUEDAS,
  PROFILE_LABELS, PROFILE_FORTALEZAS, ORIENTACION_PERFIL, NOTA_NIVEL, getProgramas, getTipoBusqueda,
  getLikertProfile, getVirtualViability, getAcademiaScore, getRisk,
  getDominantProfile, buildSections,
} from './data';
import {
  Target, Monitor, BookOpen, Globe, Rocket, Trophy, Medal, GraduationCap,
  Cpu, Users, ChartBar, Star, Leaf, WifiHigh, Brain, ShieldCheck,
  Lightbulb, ArrowCounterClockwise, Sparkle, Warning,
  CaretRight, CaretLeft, TrendUp, ListChecks, PaintBrush,
  MapPin, UserCircle, Buildings,
} from '@phosphor-icons/react';
import './App.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const PROFILE_ICONS = { tecnologico: Cpu, social: Users, emprendedor: Rocket, administrativo: ChartBar, servicios: Star, creativo: PaintBrush };
const SECTION_ICONS = [Target, Monitor, Brain, Rocket, MapPin, UserCircle];

/* ── ANIMATED BACKGROUND ─────────────────────────────────── */
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

/* ── WELCOME ─────────────────────────────────────────────── */
function WelcomeScreen({ onStart }) {
  return <div className="welcome-screen">
    <div className="welcome-glass fade-in">
      <div className="welcome-logo-wrap"><img src="/logo.png" alt="Logo" /></div>
      <h2 className="welcome-title">Test Vocacional</h2>
      <p className="welcome-tagline"><Sparkle size={18} weight="fill" /> Descubre tu camino formativo <Sparkle size={18} weight="fill" /></p>
      <p className="welcome-desc">
        Identifica qué programas se alinean con tus intereses, tu región y tu perfil educativo.
        El test toma entre <strong>10 y 12 minutos</strong>.
      </p>
      <div className="welcome-stats">
        <div className="welcome-stat"><span className="stat-num">44</span><span className="stat-label">preguntas</span></div>
        <div className="welcome-stat-divider"/>
        <div className="welcome-stat"><span className="stat-num">5</span><span className="stat-label">regiones</span></div>
        <div className="welcome-stat-divider"/>
        <div className="welcome-stat"><span className="stat-num">3</span><span className="stat-label">perfiles</span></div>
      </div>
      <button className="btn-start fade-in d2" onClick={onStart}>
        Comenzar <CaretRight size={18} weight="bold" />
      </button>
    </div>
  </div>;
}

/* ── FORM FIELD COMPONENTS (outside FormScreen to avoid remount on re-render) ── */
function FormField({ k, label, type='text', ph, form, errors, touched, set }) {
  return <div className="form-group">
    <label className="form-label">{label}</label>
    <input
      className={`form-input${errors[k]&&touched[k]?' error':''}`}
      type={type} placeholder={ph}
      value={form[k]}
      onChange={e => set(k, e.target.value)}
    />
    {errors[k]&&touched[k] && <p className="form-error">{errors[k]}</p>}
  </div>;
}

function FormSelect({ k, label, opts, form, errors, touched, set }) {
  return <div className="form-group">
    <label className="form-label">{label}</label>
    <select
      className={`form-input${errors[k]&&touched[k]?' error':''}`}
      value={form[k]}
      onChange={e => set(k, e.target.value)}
    >
      <option value="">Seleccionar…</option>
      {opts.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
    {errors[k]&&touched[k] && <p className="form-error">{errors[k]}</p>}
  </div>;
}

/* ── FORM ─────────────────────────────────────────────────── */
function FormScreen({ onSubmit, onBack }) {
  const init = { nombre:'', edad:'', ciudad:'', departamento:'', region:'', nivel:'', situacion:'', busqueda:'', cc:'' };
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (f) => {
    const e = {};
    if (!f.nombre.trim()) e.nombre = 'Requerido';
    if (!f.edad || isNaN(f.edad) || +f.edad < 14 || +f.edad > 80) e.edad = 'Edad inválida (14–80)';
    if (!f.ciudad.trim()) e.ciudad = 'Requerido';
    if (!f.departamento.trim()) e.departamento = 'Requerido';
    if (!f.region) e.region = 'Selecciona una región';
    if (!f.nivel) e.nivel = 'Selecciona tu nivel';
    if (!f.situacion) e.situacion = 'Selecciona una opción';
    if (!f.busqueda) e.busqueda = 'Selecciona una opción';
    if (!/^\d{6,12}$/.test(f.cc.replace(/\s/g,''))) e.cc = 'Documento inválido (6–12 dígitos)';
    return e;
  };

  const set = useCallback((field, val) => {
    setForm(prev => {
      const updated = {...prev, [field]: val};
      setErrors(validate(updated));
      return updated;
    });
    setTouched(p => ({...p, [field]: true}));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched(Object.fromEntries(Object.keys(init).map(k=>[k,true])));
    if (Object.keys(errs).length === 0) onSubmit(form);
  };

  const fp = { form, errors, touched, set };

  return <div className="form-screen">
    <form className="form-glass fade-in" onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="form-badge"><UserCircle size={16}/> Caracterización inicial</div>
        <h2>Datos del aspirante</h2>
        <p>Completa tu información para personalizar el test</p>
      </div>

      <div className="form-grid-2">
        <FormField k="nombre" label="Nombre completo" ph="Ej: Juan Pérez López" {...fp}/>
        <FormField k="edad" label="Edad" type="number" ph="Ej: 22" {...fp}/>
      </div>
      <div className="form-grid-2">
        <FormField k="ciudad" label="Ciudad / Municipio" ph="Ej: Duitama" {...fp}/>
        <FormField k="departamento" label="Departamento" ph="Ej: Boyacá" {...fp}/>
      </div>
      <FormSelect k="region" label="Región de la sede más cercana" opts={REGIONES} {...fp}/>
      <div className="form-grid-2">
        <FormSelect k="nivel" label="Nivel educativo actual" opts={NIVELES_EDUCATIVOS} {...fp}/>
        <FormSelect k="situacion" label="Actualmente…" opts={SITUACIONES} {...fp}/>
      </div>
      <FormSelect k="busqueda" label="¿Qué buscas hoy?" opts={BUSQUEDAS} {...fp}/>
      <FormField k="cc" label="Cédula / Documento de identidad" ph="Ej: 1234567890" {...fp}/>

      <button type="submit" className="btn-form">Iniciar test <CaretRight size={16} weight="bold"/></button>
      <button type="button" className="btn-back" onClick={onBack} style={{marginTop:10}}>
        <CaretLeft size={14} weight="bold"/> Volver
      </button>
    </form>
  </div>;
}

/* ── PROGRESS BAR ─────────────────────────────────────────── */
function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return <div className="progress-container">
    <div className="progress-info">
      <span className="progress-section-label">Sección {current+1} de {total}</span>
      <span className="progress-percent">{pct}%</span>
    </div>
    <div className="progress-bar-bg"><div className="progress-bar-fill" style={{width:pct+'%'}}/></div>
    <div className="progress-steps">
      {Array.from({length:total},(_,i)=>
        <div key={i} className={`progress-dot ${i<current?'done':i===current?'active':''}`}/>
      )}
    </div>
  </div>;
}

/* ── QUESTION CARD ────────────────────────────────────────── */
function QuestionCard({ question, value, onChange, index }) {
  return <div className={`question-card fade-in${value?' answered':''}`} style={{animationDelay:`${index*0.06}s`}}>
    <p className="question-text">{question.text}</p>
    <div className="likert-buttons">
      {[1,2,3,4,5].map(v=>(
        <button key={v} className={`likert-btn${value===v?' selected':''}`}
          onClick={()=>onChange(question.id,v)}>{v}</button>
      ))}
    </div>
    <div className="likert-labels">
      <span className="likert-label">En desacuerdo</span>
      <span className="likert-label">Muy de acuerdo</span>
    </div>
    {value && <div className="answer-progress-line" style={{background:'var(--color-primary)',width:`${value*20}%`}}/>}
  </div>;
}

/* ── TEST SCREEN ──────────────────────────────────────────── */
function TestScreen({ sections, sectionIdx, answers, setAnswer, onNext, onBack }) {
  const section = sections[sectionIdx];
  const allAnswered = section.questions.every(q => answers[q.id]);
  const Icon = SECTION_ICONS[Math.min(sectionIdx, SECTION_ICONS.length-1)];
  return <div>
    <ProgressBar current={sectionIdx} total={sections.length}/>
    <div className="test-container" key={sectionIdx}>
      <div className="section-header fade-in">
        <div className="section-badge"><Icon size={15}/> Sección {sectionIdx+1} de {sections.length}</div>
        <h3 className="section-title">{section.title}</h3>
        <p className="section-desc">{section.description}</p>
      </div>
      {section.questions.map((q,i)=>
        <QuestionCard key={q.id} question={q} value={answers[q.id]} onChange={setAnswer} index={i}/>
      )}
      <button className={`btn-next${allAnswered?' active':' disabled'}`}
        onClick={allAnswered?onNext:undefined} disabled={!allAnswered}>
        {sectionIdx<sections.length-1
          ? <>Siguiente sección <CaretRight size={16} weight="bold"/></>
          : <><Sparkle size={16} weight="fill"/> Ver mi resultado <CaretRight size={16} weight="bold"/></>}
      </button>
      {sectionIdx>0 && <button className="btn-back" onClick={onBack}><CaretLeft size={14} weight="bold"/> Sección anterior</button>}
      {!allAnswered && <p className="unanswered-msg"><Warning size={14} weight="fill"/> Responde todas las preguntas para continuar</p>}
    </div>
  </div>;
}

/* ── RESULTS ──────────────────────────────────────────────── */
function ResultsScreen({ result, userData, onRestart }) {
  const { profile, dominant, secondary, viability, academia, risk, programs } = result;
  const DominantIcon = PROFILE_ICONS[dominant] || Star;
  const SecondaryIcon = PROFILE_ICONS[secondary] || ChartBar;
  const vColors = { alta:'#1D9E75', media:'#BA7517', condicionada:'#D85A30' };
  const rColors = { bajo:'#1D9E75', medio:'#BA7517', alto:'#D85A30' };

  const radarData = {
    labels: Object.keys(profile).map(k => PROFILE_LABELS[k]),
    datasets: [{
      data: Object.values(profile),
      backgroundColor: 'rgba(26,93,171,0.12)',
      borderColor: '#1A5DAB', borderWidth: 2.5,
      pointBackgroundColor: '#1A5DAB', pointBorderColor: '#fff',
      pointBorderWidth: 2, pointRadius: 5,
    }],
  };
  const radarOpts = {
    responsive: true, maintainAspectRatio: true,
    plugins: { legend: { display: false } },
    scales: { r: {
      beginAtZero: true, max: 5,
      ticks: { stepSize:1, font:{family:'Montserrat',size:10}, backdropColor:'transparent', color:'#B0B9C6' },
      grid: { color:'rgba(26,93,171,0.06)' }, angleLines: { color:'rgba(26,93,171,0.06)' },
      pointLabels: { font:{family:'Montserrat',size:10,weight:'600'}, color:'#3A3A3A' },
    }},
    animation: { duration:1200, easing:'easeOutQuart' },
  };

  const entries = Object.entries(profile).sort((a,b)=>b[1]-a[1]);

  return <div>
    <AnimatedBg/>
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
        <span className="results-hero-icon"><Trophy size={46} weight="fill"/></span>
        <h2>Tu perfil vocacional</h2>
        <p>Resultados para <strong>{userData.nombre}</strong></p>
        <div className="results-hero-chips">
          <span className="results-chip"><MapPin size={13} weight="fill"/> {userData.region}</span>
          <span className="results-chip">
            {result.tipo === 'posgrado' ? <><Medal size={13} weight="fill"/> Posgrado</> : <><GraduationCap size={13} weight="fill"/> Pregrado</>}
          </span>
          <span className="results-chip"><UserCircle size={13} weight="fill"/> {userData.nivel}</span>
        </div>
      </div>

      {/* PERFIL DOMINANTE */}
      <div className="results-dominant fade-in d1">
        <p className="dominant-label">Perfil dominante</p>
        <div className="dominant-badge"><DominantIcon size={22}/> {PROFILE_LABELS[dominant]}</div>
        {secondary && <p className="secondary-label">Con tendencia <strong>{PROFILE_LABELS[secondary]}</strong> <SecondaryIcon size={13}/></p>}
      </div>

      {/* FORTALEZAS */}
      <div className="fortalezas-card fade-in d2">
        <h3 className="chart-title"><Brain size={17} weight="duotone"/> Tus fortalezas detectadas</h3>
        <div className="fortalezas-list">
          {(PROFILE_FORTALEZAS[dominant]||[]).map((f,i)=>(
            <span key={i} className="fortaleza-tag"><Star size={12} weight="fill"/> {f}</span>
          ))}
        </div>
      </div>

      {/* MÉTRICAS */}
      <div className="metrics-grid fade-in d2">
        {[
          { icon: <WifiHigh size={24} weight="duotone"/>, label:'Viabilidad virtual', val:viability, color:vColors[viability] },
          { icon: <Brain size={24} weight="duotone"/>, label:'Autonomía académica', val:academia, color:vColors[academia] },
          { icon: <ShieldCheck size={24} weight="duotone"/>, label:'Riesgo permanencia', val:risk, color:rColors[risk] },
        ].map(m=>(
          <div className="metric-card" key={m.label}>
            <span className="metric-icon">{m.icon}</span>
            <p className="metric-label">{m.label}</p>
            <p className="metric-value" style={{color:m.color}}>{m.val}</p>
          </div>
        ))}
      </div>

      {/* RADAR */}
      <div className="chart-section fade-in d3">
        <h3 className="chart-title"><ChartBar size={18} weight="duotone"/> Mapa de afinidad vocacional</h3>
        <div className="chart-wrapper"><Radar data={radarData} options={radarOpts}/></div>
      </div>

      {/* BARRAS */}
      <div className="chart-section fade-in d3">
        <h3 className="chart-title"><TrendUp size={18} weight="duotone"/> Puntuación por área</h3>
        {entries.map(([k,v],i)=>{
          const pct = Math.round(v*20);
          const Icon = PROFILE_ICONS[k] || Star;
          return <div key={k} style={{marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:3}}>
              <span style={{fontSize:12,fontWeight:i===0?700:500,color:i===0?'#1A5DAB':'#3A3A3A',display:'flex',alignItems:'center',gap:5}}>
                <Icon size={13}/> {PROFILE_LABELS[k]}
              </span>
              <span style={{fontSize:12,fontWeight:700,color:i===0?'#1A5DAB':'#8A99AA'}}>{pct}%</span>
            </div>
            <div style={{height:7,background:'#E8EDF3',borderRadius:4,overflow:'hidden'}}>
              <div style={{height:'100%',borderRadius:4,width:`${pct}%`,
                background:i===0?'linear-gradient(90deg,#1A5DAB,#4DACE8)':'linear-gradient(90deg,#B8C4D0,#D8E0E8)',
                transition:'width 1.2s ease-out'}}/>
            </div>
          </div>;
        })}
      </div>

      {/* PROGRAMAS */}
      <div className="programs-section fade-in d4">
        <h3 className="programs-title"><ListChecks size={18}/> Programas recomendados</h3>
        <p className="programs-subtitle">
          Basados en tu perfil <strong>{PROFILE_LABELS[dominant]}</strong> · Región <strong>{userData.region}</strong> · <strong>{result.tipo === 'posgrado' ? 'Posgrado' : 'Pregrado'}</strong>
        </p>
        {programs.map((p,i)=>(
          <div className={`program-item${i===0?' program-top':''}`} key={i}>
            <div className={`program-number${i===0?' program-number-top':''}`}>{i===0?'★':i+1}</div>
            <span className="program-name">{p}</span>
            <span className={`program-badge ${result.tipo}`}>
              {result.tipo === 'posgrado' ? 'Posgrado' : 'Pregrado'}
            </span>
          </div>
        ))}
      </div>

      {/* SUGERENCIA PERSONALIZADA */}
      <div className="suggestion-card fade-in d5">
        <p className="suggestion-title"><Lightbulb size={16}/> Orientación según tu perfil</p>
        <p className="suggestion-text">{ORIENTACION_PERFIL[dominant]}</p>
        <div className="suggestion-nota">
          <p className="suggestion-nota-text">{NOTA_NIVEL[userData.nivel]}</p>
        </div>
      </div>

      {/* REGION BADGE */}
      <div className="region-badge-card fade-in d5">
        <MapPin size={16} weight="fill"/> Sede más cercana: <strong>{userData.region}</strong>
        <span className="region-sub"> · {userData.ciudad}, {userData.departamento}</span>
      </div>

      <button className="btn-restart fade-in d6" onClick={onRestart}>
        <ArrowCounterClockwise size={16} weight="bold"/> Volver a empezar
      </button>
    </div>
  </div>;
}

/* ── MAIN APP ─────────────────────────────────────────────── */
export default function App() {
  const [stage, setStage] = useState('welcome');
  const [userData, setUserData] = useState(null);
  const [sections, setSections] = useState([]);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const setAnswer = useCallback((id, val) => setAnswers(p=>({...p,[id]:val})), []);

  const handleFormSubmit = useCallback((data) => {
    setUserData(data);
    setSections(buildSections(data.region, data.nivel));
    setSectionIdx(0);
    setAnswers({});
    setStage('test');
  }, []);

  const handleNext = useCallback(() => {
    if (sectionIdx < sections.length - 1) {
      setSectionIdx(s => s+1);
      window.scrollTo({top:0, behavior:'smooth'});
    } else {
      const profile = getLikertProfile(answers);
      const viability = getVirtualViability(answers);
      const academia = getAcademiaScore(answers);
      const proyectoSum = ['p01','p02','p03','p04','p05'].reduce((s,k)=>s+(answers[k]||3),0);
      const risk = getRisk(viability, academia, proyectoSum);
      const { dominant, secondary } = getDominantProfile(profile);
      const tipo = getTipoBusqueda(userData.busqueda);
      const programs = getProgramas(dominant, tipo, userData.region);
      setResult({ profile, viability, academia, risk, dominant, secondary, programs, tipo });
      setStage('result');
      window.scrollTo({top:0, behavior:'smooth'});
    }
  }, [sectionIdx, sections, answers, userData]);

  const handleBack = useCallback(() => {
    if (sectionIdx > 0) { setSectionIdx(s=>s-1); window.scrollTo({top:0,behavior:'smooth'}); }
  }, [sectionIdx]);

  const handleRestart = useCallback(() => {
    setStage('welcome'); setUserData(null); setSections([]);
    setSectionIdx(0); setAnswers({}); setResult(null);
    window.scrollTo({top:0, behavior:'smooth'});
  }, []);

  return <div>
    <Header/>
    <AnimatedBg/>
    {stage==='welcome' && <WelcomeScreen onStart={()=>setStage('form')}/>}
    {stage==='form'    && <FormScreen onSubmit={handleFormSubmit} onBack={()=>setStage('welcome')}/>}
    {stage==='test'    && <TestScreen sections={sections} sectionIdx={sectionIdx} answers={answers}
        setAnswer={setAnswer} onNext={handleNext} onBack={handleBack}/>}
    {stage==='result'  && result && <ResultsScreen result={result} userData={userData} onRestart={handleRestart}/>}
  </div>;
}
