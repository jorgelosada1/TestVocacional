import { useState, useEffect, useCallback } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import {
  SECTIONS, PROFILE_LABELS,
  getLikertProfile, getVirtualViability, getAcademiaScore, getRisk,
  getDominantProfile, getRecommendedPrograms
} from './data';
import {
  Target, Monitor, BookOpen, Globe, Rocket, Trophy, Medal, GraduationCap,
  Cpu, Users, ChartBar, Star, Leaf, WifiHigh, Brain, ShieldCheck,
  Lightbulb, ArrowCounterClockwise, Sparkle, Warning,
  CaretRight, CaretLeft, TrendUp, ListChecks
} from '@phosphor-icons/react';
import './App.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const PROFILE_ICONS = { tecnologico: Cpu, social: Users, emprendedor: Rocket, administrativo: ChartBar, servicios: Star, ambiental: Leaf };
const SECTION_ICONS = [Target, Monitor, BookOpen, Globe, Rocket];

function AnimatedBg() {
  return <>
    <div className="animated-bg"><div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" /></div>
    <div className="particles-container">
      {Array.from({ length: 15 }, (_, i) => <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 8}s`, width: `${4 + Math.random() * 6}px`,
        height: `${4 + Math.random() * 6}px`, opacity: 0.12 + Math.random() * 0.15,
        background: ['#1A5DAB', '#4DACE8', '#F5A623'][i % 3],
      }} />)}
    </div>
  </>;
}

function Header() {
  return <header className="app-header">
    <img src="/logo.png" alt="Logo" />
    <h1>Innovación <span className="header-accent">e-Learning</span> S.A.S.</h1>
  </header>;
}

function WelcomeScreen({ onSelect }) {
  return <div className="welcome-screen">
    <div className="welcome-glass fade-in">
      <div className="welcome-logo-wrap"><img src="/logo.png" alt="Logo" /></div>
      <h2 className="welcome-title">Test Vocacional</h2>
      <p className="welcome-tagline"><Sparkle size={18} weight="fill" /> Descubre tu camino formativo <Sparkle size={18} weight="fill" /></p>
      <p className="welcome-desc">
        Identifica qué programas académicos se alinean con tus intereses, capacidades y contexto.
        Selecciona el nivel que deseas explorar para comenzar.
      </p>
      <div className="level-cards">
        <button className="level-card" onClick={() => onSelect("pregrado")}>
          <div className="level-card-icon pregrado"><GraduationCap size={28} /></div>
          <div className="level-card-title">Pregrado</div>
          <div className="level-card-sub">Tecnologías, licenciaturas e ingenierías</div>
        </button>
        <button className="level-card" onClick={() => onSelect("posgrado")}>
          <div className="level-card-icon posgrado"><Medal size={28} weight="duotone" /></div>
          <div className="level-card-title">Posgrado</div>
          <div className="level-card-sub">Especializaciones y maestrías</div>
        </button>
      </div>
    </div>
  </div>;
}

function FormScreen({ nivel, onSubmit, onBack }) {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', cc: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = 'Requerido';
    if (!/\S+@\S+\.\S+/.test(form.correo)) e.correo = 'Correo inválido';
    if (!/^\d{7,15}$/.test(form.telefono.replace(/\s/g, ''))) e.telefono = 'Teléfono inválido';
    if (!/^\d{6,12}$/.test(form.cc.replace(/\s/g, ''))) e.cc = 'Documento inválido';
    return e;
  };

  const handleChange = (field, val) => {
    setForm(p => ({ ...p, [field]: val }));
    setTouched(p => ({ ...p, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setTouched({ nombre: true, correo: true, telefono: true, cc: true });
    if (Object.keys(errs).length === 0) onSubmit(form);
  };

  const liveErrors = touched ? validate() : {};
  const nivelLabel = nivel === 'pregrado' ? <><GraduationCap size={16} /> Pregrado</> : <><Medal size={16} weight="duotone" /> Posgrado</>;

  return <div className="form-screen">
    <form className="form-glass fade-in" onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="form-badge">{nivelLabel}</div>
        <h2>Datos del aspirante</h2>
        <p>Completa tus datos para iniciar el test</p>
      </div>

      {[
        { key: 'nombre', label: 'Nombre completo', type: 'text', ph: 'Ej: Juan Pérez López' },
        { key: 'correo', label: 'Correo electrónico', type: 'email', ph: 'Ej: correo@ejemplo.com' },
        { key: 'telefono', label: 'Teléfono', type: 'tel', ph: 'Ej: 3001234567' },
        { key: 'cc', label: 'Cédula / Documento de identidad', type: 'text', ph: 'Ej: 1234567890' },
      ].map((f, i) => (
        <div className={`form-group fade-in d${i + 2}`} key={f.key}>
          <label className="form-label">{f.label}</label>
          <input className="form-input" type={f.type} placeholder={f.ph}
            value={form[f.key]} onChange={e => handleChange(f.key, e.target.value)} />
          {touched[f.key] && liveErrors[f.key] && <p className="form-error">{liveErrors[f.key]}</p>}
        </div>
      ))}

      <button type="submit" className="btn-form fade-in d6">Comenzar test →</button>
      <button type="button" className="btn-back" onClick={onBack} style={{ marginTop: 10 }}><CaretLeft size={14} weight="bold" /> Cambiar nivel</button>
    </form>
  </div>;
}

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return <div className="progress-container">
    <div className="progress-info">
      <span className="progress-section-label">Sección {current + 1} de {total}</span>
      <span className="progress-percent">{pct}%</span>
    </div>
    <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: pct + '%' }} /></div>
    <div className="progress-steps">
      {Array.from({ length: total }, (_, i) => <div key={i} className={`progress-dot ${i < current ? 'done' : i === current ? 'active' : ''}`} />)}
    </div>
  </div>;
}

function QuestionCard({ question, value, onChange, index }) {
  return <div className={`question-card fade-in ${value ? 'answered' : ''}`} style={{ animationDelay: `${index * 0.06}s` }}>
    <div className="question-row">
      <p className="question-text">{question.text}</p>
    </div>
    <div className="likert-buttons">
      {[1, 2, 3, 4, 5].map(v => (
        <button key={v} className={`likert-btn ${value === v ? 'selected' : ''}`}
          onClick={() => onChange(question.id, v)}>
          {v}
        </button>
      ))}
    </div>
    <div className="likert-labels">
      <span className="likert-label">En desacuerdo</span>
      <span className="likert-label">Muy de acuerdo</span>
    </div>
    {value && <div className="answer-progress-line" style={{ background: 'var(--color-primary)', width: `${value * 20}%` }} />}
  </div>;
}

function TestScreen({ section, sectionIdx, totalSections, answers, setAnswer, onNext, onBack }) {
  const allAnswered = section.questions.every(q => answers[q.id]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [sectionIdx]);

  return <div>
    <ProgressBar current={sectionIdx} total={totalSections} />
    <div className="test-container" key={sectionIdx}>
      <div className="section-header fade-in">
        <div className="section-badge">{(() => { const Icon = SECTION_ICONS[sectionIdx]; return <Icon size={16} />; })()} Sección {sectionIdx + 1}</div>
        <h3 className="section-title">{section.title}</h3>
        <p className="section-desc">{section.description}</p>
      </div>
      {section.questions.map((q, i) =>
        <QuestionCard key={q.id} question={q} value={answers[q.id]} onChange={setAnswer} index={i} />
      )}
      <button className={`btn-next ${allAnswered ? 'active' : 'disabled'}`}
        onClick={allAnswered ? onNext : undefined} disabled={!allAnswered}>
        {sectionIdx < totalSections - 1 ? <>Siguiente sección <CaretRight size={16} weight="bold" /></> : <><Sparkle size={16} weight="fill" /> Ver mi resultado <CaretRight size={16} weight="bold" /></>}
      </button>
      {sectionIdx > 0 && <button className="btn-back" onClick={onBack}><CaretLeft size={14} weight="bold" /> Sección anterior</button>}
      {!allAnswered && <p className="unanswered-msg"><Warning size={14} weight="fill" /> Responde todas para continuar</p>}
    </div>
  </div>;
}

function ResultsScreen({ result, nivel, userData, onRestart }) {
  const { profile, viability, academia, risk, dominant, programs } = result;
  const entries = Object.entries(profile).sort((a, b) => b[1] - a[1]);
  const vColors = { alta: '#1D9E75', media: '#BA7517', condicionada: '#D85A30' };
  const rColors = { bajo: '#1D9E75', medio: '#BA7517', alto: '#D85A30' };

  const radarData = {
    labels: Object.keys(profile).map(k => PROFILE_LABELS[k]),
    datasets: [{
      data: Object.values(profile),
      backgroundColor: 'rgba(26,93,171,0.12)', borderColor: '#1A5DAB', borderWidth: 2.5,
      pointBackgroundColor: '#1A5DAB', pointBorderColor: '#fff', pointBorderWidth: 2,
      pointRadius: 5, pointHoverRadius: 7,
    }]
  };
  const radarOpts = {
    responsive: true, maintainAspectRatio: true,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        beginAtZero: true, max: 5,
        ticks: { stepSize: 1, font: { family: 'Montserrat', size: 10 }, backdropColor: 'transparent', color: '#B0B9C6' },
        grid: { color: 'rgba(26,93,171,0.06)' }, angleLines: { color: 'rgba(26,93,171,0.06)' },
        pointLabels: { font: { family: 'Montserrat', size: 10, weight: '600' }, color: '#3A3A3A' }
      }
    },
    animation: { duration: 1200, easing: 'easeOutQuart' }
  };

  const suggestion = viability === "condicionada"
    ? "Te recomendamos explorar programas con contenidos descargables y tutoría frecuente."
    : risk === "alto"
      ? "Considera iniciar con un programa corto para ganar confianza académica."
      : "Tienes buenas condiciones para comenzar un programa virtual. Prioriza acompañamiento tutorial.";

  return <div>
    <AnimatedBg />
    <div className="confetti-burst">{Array.from({ length: 30 }, (_, i) => <div key={i} className="confetti-piece" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s`, background: ['#1A5DAB', '#4DACE8', '#F5A623', '#1D9E75', '#FFD17A'][i % 5] }} />)}</div>
    <div className="results-container">
      <div className="results-hero fade-in">
        <span className="results-hero-icon"><Trophy size={48} /></span>
        <h2>Tu perfil vocacional</h2>
        <p>Resultados para {userData.nombre}</p>
      </div>

      <div className="results-dominant fade-in d1">
        <p className="dominant-label">Perfil dominante</p>
        <div className="dominant-badge">{(() => { const Icon = PROFILE_ICONS[dominant]; return <Icon size={20} />; })()} {PROFILE_LABELS[dominant]}</div>
      </div>

      <div className="metrics-grid fade-in d2">
        {[
          { icon: <WifiHigh size={24} weight="duotone" />, label: 'Viabilidad virtual', val: viability, color: vColors[viability] },
          { icon: <Brain size={24} weight="duotone" />, label: 'Autonomía académica', val: academia, color: vColors[academia] },
          { icon: <ShieldCheck size={24} weight="duotone" />, label: 'Riesgo permanencia', val: risk, color: rColors[risk] },
        ].map(m => <div className="metric-card" key={m.label}>
          <span className="metric-icon">{m.icon}</span>
          <p className="metric-label">{m.label}</p>
          <p className="metric-value" style={{ color: m.color }}>{m.val}</p>
        </div>)}
      </div>

      <div className="chart-section fade-in d3">
        <h3 className="chart-title"><ChartBar size={18} weight="duotone" /> Mapa de afinidad vocacional</h3>
        <div className="chart-wrapper"><Radar data={radarData} options={radarOpts} /></div>
      </div>

      <div className="chart-section fade-in d3">
        <h3 className="chart-title"><TrendUp size={18} weight="duotone" /> Puntuación por área</h3>
        {entries.map(([k, v], i) => {
          const pct = Math.round(v * 20), top = i === 0;
          return <div key={k} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: 12, fontWeight: top ? 700 : 500, color: top ? '#1A5DAB' : '#3A3A3A', display: 'flex', alignItems: 'center', gap: 5 }}>
                {(() => { const Icon = PROFILE_ICONS[k]; return <Icon size={14} />; })()} {PROFILE_LABELS[k]}
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: top ? '#1A5DAB' : '#8A99AA' }}>{pct}%</span>
            </div>
            <div style={{ height: 7, background: '#E8EDF3', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 4, width: `${pct}%`,
                background: top ? 'linear-gradient(90deg,#1A5DAB,#4DACE8)' : 'linear-gradient(90deg,#B8C4D0,#D8E0E8)',
                transition: 'width 1s ease-out'
              }} />
            </div>
          </div>;
        })}
      </div>

      <div className="programs-section fade-in d4">
        <h3 className="programs-title"><ListChecks size={18} /> Programas recomendados</h3>
        <p className="programs-subtitle">Basados en tu perfil {PROFILE_LABELS[dominant].toLowerCase()}</p>
        {programs.map((p, i) => <div className="program-item" key={i}>
          <div className="program-number">{i + 1}</div>
          <span className="program-name">{p}</span>
          <span className={`program-badge ${nivel}`}>{nivel === 'pregrado' ? 'Pregrado' : 'Posgrado'}</span>
        </div>)}
      </div>

      <div className="suggestion-card fade-in d5">
        <p className="suggestion-title"><Lightbulb size={16} /> Sugerencia personalizada</p>
        <p className="suggestion-text">{suggestion}</p>
      </div>

      <button className="btn-restart fade-in d6" onClick={onRestart}><ArrowCounterClockwise size={16} weight="bold" /> Volver a empezar</button>
    </div>
  </div>;
}

export default function App() {
  const [stage, setStage] = useState("welcome");
  const [nivel, setNivel] = useState(null);
  const [userData, setUserData] = useState(null);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const setAnswer = useCallback((id, val) => setAnswers(p => ({ ...p, [id]: val })), []);

  const handleSelectLevel = useCallback(lvl => { setNivel(lvl); setStage("form"); }, []);

  const handleFormSubmit = useCallback(data => { setUserData(data); setStage("test"); }, []);

  const handleNext = useCallback(() => {
    if (sectionIdx < SECTIONS.length - 1) { setSectionIdx(s => s + 1); }
    else {
      const profile = getLikertProfile(answers);
      const viability = getVirtualViability(answers);
      const academia = getAcademiaScore(answers);
      const projectSum = ["p1", "p2", "p3", "p4"].reduce((s, k) => s + (answers[k] || 3), 0);
      const risk = getRisk(viability, academia, projectSum);
      const dominant = getDominantProfile(profile);
      const programs = getRecommendedPrograms(profile, nivel);
      setResult({ profile, viability, academia, risk, dominant, programs });
      setStage("result");
    }
  }, [sectionIdx, answers, nivel]);

  const handleBack = useCallback(() => { if (sectionIdx > 0) setSectionIdx(s => s - 1); }, [sectionIdx]);

  const handleRestart = useCallback(() => {
    setStage("welcome"); setNivel(null); setUserData(null);
    setSectionIdx(0); setAnswers({}); setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <div>
    <Header />
    <AnimatedBg />
    {stage === "welcome" && <WelcomeScreen onSelect={handleSelectLevel} />}
    {stage === "form" && <FormScreen nivel={nivel} onSubmit={handleFormSubmit} onBack={() => setStage("welcome")} />}
    {stage === "test" && <TestScreen section={SECTIONS[sectionIdx]} sectionIdx={sectionIdx}
      totalSections={SECTIONS.length} answers={answers} setAnswer={setAnswer}
      onNext={handleNext} onBack={handleBack} />}
    {stage === "result" && result && <ResultsScreen result={result} nivel={nivel}
      userData={userData} onRestart={handleRestart} />}
  </div>;
}
