// ============================================================
// DATA – Test Vocacional Territorial · Innovación E-Learning
// ============================================================

export const REGIONES = ['Bogotá', 'Boyacá', 'Buenaventura', 'San Gil', 'Leticia', 'Aguachica'];
export const NIVELES_EDUCATIVOS = ['Colegio', 'Técnico/Tecnólogo', 'Profesional'];
export const SITUACIONES = ['Estudio', 'Trabajo', 'Estudio y trabajo', 'Ninguno'];
export const BUSQUEDAS = ['Carrera técnica', 'Tecnología', 'Pregrado profesional', 'Posgrado', 'Cursos/certificaciones'];

// ─── BLOQUE DE INTERESES ─────────────────────────────────────
export const BLOQUE_INTERESES = {
  title: 'Intereses vocacionales',
  questions: [
    { id: 'i01', text: 'Me interesa estudiar algo que me permita conseguir empleo rápidamente.' },
    { id: 'i02', text: 'Me atraen los programas relacionados con tecnología y herramientas digitales.' },
    { id: 'i03', text: 'Me gustaría ayudar a otras personas o comunidades.' },
    { id: 'i04', text: 'Me interesa crear o fortalecer un negocio propio.' },
    { id: 'i05', text: 'Me llaman la atención temas relacionados con sostenibilidad y medio ambiente.' },
    { id: 'i06', text: 'Disfruto organizar procesos, actividades o información.' },
    { id: 'i07', text: 'Me interesan actividades relacionadas con turismo, servicio o experiencia al cliente.' },
    { id: 'i08', text: 'Me atraen actividades comerciales, administrativas o logísticas.' },
    { id: 'i09', text: 'Disfruto resolver problemas complejos.' },
    { id: 'i10', text: 'Me gusta aprender cómo funcionan las cosas.' },
    { id: 'i11', text: 'Me interesa crear contenido, diseñar o expresar ideas creativas.' },
    { id: 'i12', text: 'Me gustaría liderar proyectos o equipos.' },
  ],
};

// ─── BLOQUE DE VIRTUALIDAD ───────────────────────────────────
export const BLOQUE_VIRTUALIDAD = {
  title: 'Condiciones para la virtualidad',
  questions: [
    { id: 'v01', text: 'Tengo acceso frecuente a internet.' },
    { id: 'v02', text: 'Tengo un dispositivo adecuado para estudiar (celular, tablet o computador).' },
    { id: 'v03', text: 'Puedo estudiar de manera autónoma sin apoyo constante.' },
    { id: 'v04', text: 'Tengo tiempo disponible semanalmente para dedicar al estudio.' },
    { id: 'v05', text: 'Me siento cómodo/a usando plataformas virtuales (correo, aulas, etc.).' },
    { id: 'v06', text: 'Prefiero contenidos prácticos y aplicables a mi vida.' },
  ],
};

// ─── BLOQUE DE AUTOEFICACIA ──────────────────────────────────
export const BLOQUE_AUTOEFICACIA = {
  title: 'Autoeficacia académica',
  questions: [
    { id: 'a01', text: 'Comprendo fácilmente textos o instrucciones.' },
    { id: 'a02', text: 'Puedo expresar mis ideas por escrito claramente.' },
    { id: 'a03', text: 'Me organizo bien con fechas, entregas y actividades.' },
    { id: 'a04', text: 'Suelo terminar lo que empiezo.' },
    { id: 'a05', text: 'Aprendo rápido cuando algo realmente me interesa.' },
  ],
};

// ─── BLOQUE DE PROYECTO DE VIDA ──────────────────────────────
export const BLOQUE_PROYECTO = {
  title: 'Proyecto de vida',
  questions: [
    { id: 'p01', text: 'Estudiar es importante para mejorar mis ingresos.' },
    { id: 'p02', text: 'Quiero crecer profesionalmente.' },
    { id: 'p03', text: 'Quiero apoyar mejor a mi familia.' },
    { id: 'p04', text: 'Me interesa generar impacto en mi comunidad.' },
    { id: 'p05', text: 'Estoy dispuesto/a a estudiar si veo resultados reales.' },
  ],
};

// ─── BLOQUES TERRITORIALES ───────────────────────────────────
export const BLOQUES_TERRITORIALES = {
  Bogotá: {
    title: 'Contexto territorial – Bogotá',
    questions: [
      { id: 't01', text: 'Me interesan programas con alta demanda laboral en el mercado bogotano.' },
      { id: 't02', text: 'Quiero acceder a formación con reconocimiento nacional e internacional.' },
      { id: 't03', text: 'Me interesa un programa que me permita crecer en sectores como tecnología, finanzas o gerencia.' },
    ],
  },
  Boyacá: {
    title: 'Contexto territorial – Boyacá',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con agro, turismo o tecnología aplicada al territorio boyacense.' },
      { id: 't02', text: 'Quiero estudiar sin tener que irme de mi municipio.' },
      { id: 't03', text: 'Me gustaría aplicar lo aprendido al desarrollo de mi territorio.' },
    ],
  },
  Buenaventura: {
    title: 'Contexto territorial – Buenaventura',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con logística, comercio o servicios portuarios.' },
      { id: 't02', text: 'Las dificultades de conectividad podrían afectar mis estudios virtuales.' },
      { id: 't03', text: 'Prefiero programas cortos o por etapas que pueda ir completando.' },
    ],
  },
  'San Gil': {
    title: 'Contexto territorial – San Gil',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con turismo, hospitalidad o emprendimiento.' },
      { id: 't02', text: 'Me gustaría usar herramientas digitales para promocionar negocios.' },
      { id: 't03', text: 'Me interesa combinar estudio y trabajo independiente.' },
    ],
  },
  Leticia: {
    title: 'Contexto territorial – Leticia',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con sostenibilidad, cultura o trabajo comunitario.' },
      { id: 't02', text: 'Necesito contenidos que funcionen incluso con conectividad limitada.' },
      { id: 't03', text: 'Quiero aportar al desarrollo del territorio amazónico.' },
    ],
  },
  Aguachica: {
    title: 'Contexto territorial – Aguachica',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con comercio, agro o servicios.' },
      { id: 't02', text: 'Necesito horarios flexibles porque trabajo o tengo responsabilidades.' },
      { id: 't03', text: 'Prefiero programas con aplicación práctica inmediata.' },
    ],
  },
};

// ─── BLOQUES DE PERFIL ───────────────────────────────────────
export const BLOQUES_PERFIL = {
  Colegio: {
    title: 'Perfil – Colegio',
    questions: [
      { id: 'pe1', text: 'Me gusta participar en actividades creativas o culturales.' },
      { id: 'pe2', text: 'Disfruto trabajar en equipo hacia un objetivo común.' },
      { id: 'pe3', text: 'Me gusta aprender cosas nuevas constantemente.' },
      { id: 'pe4', text: 'Me imagino liderando proyectos en el futuro.' },
      { id: 'pe5', text: 'Me interesa estudiar algo que tenga impacto social.' },
    ],
  },
  'Técnico/Tecnólogo': {
    title: 'Perfil – Técnico/Tecnólogo',
    questions: [
      { id: 'pe1', text: 'Quiero continuar mi formación para acceder a mejores oportunidades laborales.' },
      { id: 'pe2', text: 'Me interesa homologar mis estudios previos en un programa profesional.' },
      { id: 'pe3', text: 'Necesito una carrera compatible con mi trabajo actual.' },
      { id: 'pe4', text: 'Me interesa fortalecer habilidades de liderazgo y gestión.' },
      { id: 'pe5', text: 'Busco una formación con rápida aplicación laboral.' },
    ],
  },
  Profesional: {
    title: 'Perfil – Profesional',
    questions: [
      { id: 'pe1', text: 'Quiero especializarme en un área específica de mi campo.' },
      { id: 'pe2', text: 'Me interesa crecer hacia cargos directivos o de alta gerencia.' },
      { id: 'pe3', text: 'Quiero fortalecer competencias digitales y estratégicas.' },
      { id: 'pe4', text: 'Me interesa emprender o liderar proyectos propios.' },
      { id: 'pe5', text: 'Busco mejorar mi perfil profesional y salarial.' },
    ],
  },
};

// ─── ETIQUETAS Y FORTALEZAS DE PERFIL ────────────────────────
export const PROFILE_LABELS = {
  tecnologico:    'Tecnológico-digital',
  social:         'Social-comunitario',
  emprendedor:    'Emprendedor',
  administrativo: 'Administrativo-comercial',
  servicios:      'Servicios y salud',
  creativo:       'Creativo-comunicación',
};

export const PROFILE_FORTALEZAS = {
  tecnologico:    ['Pensamiento analítico', 'Resolución de problemas', 'Aprendizaje técnico'],
  social:         ['Empatía y vocación de servicio', 'Impacto comunitario', 'Escucha activa'],
  emprendedor:    ['Iniciativa', 'Liderazgo de proyectos', 'Visión estratégica'],
  administrativo: ['Organización', 'Gestión de recursos', 'Toma de decisiones'],
  servicios:      ['Atención al cliente', 'Comunicación asertiva', 'Adaptabilidad'],
  creativo:       ['Creatividad', 'Comunicación visual', 'Pensamiento innovador'],
};

// ─── ORIENTACIÓN POR PERFIL ──────────────────────────────────
export const ORIENTACION_PERFIL = {
  tecnologico:
    'Tu perfil muestra una fuerte afinidad hacia la tecnología, el análisis y la solución de problemas complejos. Los programas de ingeniería de sistemas y software, junto con especializaciones en inteligencia artificial y analítica de datos, son los que mejor se alinean con tus habilidades. En la era digital, este perfil tiene alta demanda laboral y oportunidades de crecimiento acelerado.',
  social:
    'Tienes una vocación clara hacia el bienestar de las personas, la educación y el desarrollo comunitario. Los programas de trabajo social, psicología y licenciaturas te dan herramientas concretas para generar impacto real en tu entorno. Este perfil es esencial para las regiones que más lo necesitan.',
  emprendedor:
    'Tu espíritu emprendedor y capacidad de liderazgo son tus grandes diferenciadores. Los programas de administración, mercadeo y negocios internacionales, combinados con especializaciones en gerencia y marketing digital, te prepararán para crear, escalar o liderar organizaciones con visión estratégica.',
  administrativo:
    'Tienes habilidades naturales para organizar, gestionar y optimizar procesos. Los programas administrativos, contables y financieros te posicionan para roles de liderazgo y toma de decisiones. La formación en gestión de talento humano o gerencia financiera puede ser tu próximo paso clave.',
  servicios:
    'Tu orientación hacia el servicio, la logística y la salud es un activo diferencial de alta empleabilidad. Los programas en salud, logística y seguridad laboral te preparan para entornos dinámicos con demanda creciente a nivel nacional.',
  creativo:
    'Tu creatividad y capacidad comunicativa son activos valiosos en el mercado actual. Los programas de comunicación, mercadeo y producción de contenido te permiten combinar expresión con impacto profesional. El marketing digital y la dirección de contenidos son áreas con crecimiento exponencial.',
};

// ─── NOTA POR NIVEL EDUCATIVO ────────────────────────────────
export const NOTA_NIVEL = {
  Colegio:
    'Estás en un momento clave de exploración. No necesitas decidir todo ahora; el proceso formativo incluye orientación y acompañamiento tutorial.',
  'Técnico/Tecnólogo':
    'Ya tienes una base sólida. Busca programas con homologación de créditos para avanzar más rápido sin empezar desde cero.',
  Profesional:
    'Tu trayectoria te posiciona para dar el salto a la especialización o maestría. Prioriza programas con aplicación estratégica inmediata en tu sector.',
};

// ─── CATÁLOGO DE PROGRAMAS CON AFINIDAD VOCACIONAL ───────────
// Cada programa tiene un vector de afinidad (0-5) para los 6 perfiles.
// El score se calcula como producto punto: Σ(perfil_usuario[k] × afinidad[k])
// Catálogo: Universidad Areandina y Universidad Iberoamericana de Colombia.

export const CATALOGO_PREGRADO = [
  { nombre: 'Ingeniería de Software',                   afinidad: { tec:5, soc:0, emp:1, adm:0, srv:0, cre:2 } },
  { nombre: 'Ingeniería de Sistemas',                   afinidad: { tec:5, soc:0, emp:1, adm:1, srv:0, cre:0 } },
  { nombre: 'Ingeniería Industrial',                    afinidad: { tec:3, soc:0, emp:2, adm:4, srv:1, cre:0 } },
  { nombre: 'Economía',                                 afinidad: { tec:2, soc:1, emp:3, adm:3, srv:0, cre:0 } },
  { nombre: 'Administración Financiera',                afinidad: { tec:1, soc:0, emp:3, adm:5, srv:0, cre:0 } },
  { nombre: 'Trabajo Social',                           afinidad: { tec:0, soc:5, emp:0, adm:1, srv:2, cre:0 } },
  { nombre: 'Psicología',                               afinidad: { tec:0, soc:4, emp:0, adm:0, srv:2, cre:3 } },
  { nombre: 'Licenciatura en Educación Infantil',       afinidad: { tec:0, soc:5, emp:0, adm:1, srv:1, cre:2 } },
  { nombre: 'Licenciatura en Educación Especial',       afinidad: { tec:0, soc:5, emp:0, adm:1, srv:2, cre:1 } },
  { nombre: 'Licenciatura en Ciencias Sociales',        afinidad: { tec:0, soc:4, emp:0, adm:1, srv:1, cre:2 } },
  { nombre: 'Administración de Empresas',               afinidad: { tec:0, soc:0, emp:5, adm:4, srv:1, cre:0 } },
  { nombre: 'Mercadeo y Publicidad',                    afinidad: { tec:1, soc:0, emp:3, adm:1, srv:1, cre:5 } },
  { nombre: 'Marketing de Negocios',                    afinidad: { tec:1, soc:0, emp:4, adm:2, srv:1, cre:3 } },
  { nombre: 'Negocios Internacionales',                 afinidad: { tec:1, soc:1, emp:5, adm:3, srv:1, cre:0 } },
  { nombre: 'Contaduría Pública',                       afinidad: { tec:1, soc:0, emp:1, adm:5, srv:0, cre:0 } },
  { nombre: 'Tecnología en Gestión del Talento Humano', afinidad: { tec:0, soc:2, emp:1, adm:4, srv:2, cre:0 } },
  { nombre: 'Administración Pública',                   afinidad: { tec:0, soc:3, emp:1, adm:4, srv:2, cre:0 } },
  { nombre: 'Administración en Salud',                  afinidad: { tec:0, soc:2, emp:1, adm:3, srv:5, cre:0 } },
  { nombre: 'Seguridad y Salud en el Trabajo',          afinidad: { tec:1, soc:1, emp:0, adm:3, srv:5, cre:0 } },
  { nombre: 'Tecnología en Logística',                  afinidad: { tec:2, soc:0, emp:2, adm:4, srv:3, cre:0 } },
  { nombre: 'Comunicación Social',                      afinidad: { tec:1, soc:2, emp:1, adm:0, srv:1, cre:5 } },
  { nombre: 'Sociología',                               afinidad: { tec:0, soc:4, emp:0, adm:1, srv:1, cre:3 } },
  { nombre: 'Tecnología en Producción Ganadera Sostenible', afinidad: { tec:1, soc:2, emp:2, adm:1, srv:2, cre:0 } },
  { nombre: 'Licenciatura en Educación Bilingüe',       afinidad: { tec:0, soc:3, emp:0, adm:0, srv:2, cre:3 } },
];

export const CATALOGO_POSGRADO = [
  { nombre: 'Especialización en Inteligencia Artificial',                        afinidad: { tec:5, soc:0, emp:2, adm:0, srv:0, cre:1 } },
  { nombre: 'Especialización en Ciberseguridad',                                 afinidad: { tec:5, soc:0, emp:1, adm:2, srv:0, cre:0 } },
  { nombre: 'Maestría en Analítica de Datos',                                    afinidad: { tec:5, soc:0, emp:2, adm:2, srv:0, cre:0 } },
  { nombre: 'Especialización en Analítica y Big Data',                           afinidad: { tec:5, soc:0, emp:1, adm:2, srv:0, cre:0 } },
  { nombre: 'Maestría en Inteligencia de Negocios',                              afinidad: { tec:4, soc:0, emp:3, adm:3, srv:0, cre:0 } },
  { nombre: 'Maestría en Educación',                                             afinidad: { tec:0, soc:5, emp:0, adm:1, srv:1, cre:2 } },
  { nombre: 'Especialización en Desarrollo Integral de la Infancia y la Adolescencia', afinidad: { tec:0, soc:5, emp:0, adm:1, srv:2, cre:1 } },
  { nombre: 'Especialización en Neuropsicología de la Educación',                afinidad: { tec:1, soc:4, emp:0, adm:0, srv:2, cre:1 } },
  { nombre: 'Especialización en Pedagogía y Docencia',                           afinidad: { tec:0, soc:4, emp:0, adm:1, srv:2, cre:2 } },
  { nombre: 'Maestría en Epidemiología',                                         afinidad: { tec:2, soc:3, emp:0, adm:1, srv:4, cre:0 } },
  { nombre: 'Maestría en Administración de Empresas MBA',                        afinidad: { tec:1, soc:0, emp:5, adm:4, srv:0, cre:0 } },
  { nombre: 'Especialización en Gerencia de Proyectos',                          afinidad: { tec:2, soc:0, emp:4, adm:3, srv:1, cre:0 } },
  { nombre: 'Especialización en Marketing Digital',                              afinidad: { tec:2, soc:0, emp:3, adm:1, srv:0, cre:5 } },
  { nombre: 'Maestría en Gerencia de Mercadeo Digital',                          afinidad: { tec:2, soc:0, emp:4, adm:2, srv:0, cre:4 } },
  { nombre: 'Especialización en Alta Gerencia',                                  afinidad: { tec:0, soc:0, emp:4, adm:5, srv:0, cre:0 } },
  { nombre: 'Especialización en Gerencia Financiera',                            afinidad: { tec:1, soc:0, emp:2, adm:5, srv:0, cre:0 } },
  { nombre: 'Especialización en Talento Humano',                                 afinidad: { tec:0, soc:3, emp:1, adm:4, srv:1, cre:0 } },
  { nombre: 'Especialización en Revisoría Fiscal y Auditoría Forense',           afinidad: { tec:1, soc:0, emp:0, adm:5, srv:0, cre:0 } },
  { nombre: 'Maestría en Gestión del Talento Humano',                            afinidad: { tec:0, soc:3, emp:2, adm:4, srv:1, cre:0 } },
  { nombre: 'Especialización en Gestión de la Salud Pública',                    afinidad: { tec:0, soc:3, emp:1, adm:2, srv:5, cre:0 } },
  { nombre: 'Especialización en Gestión de Procesos Logísticos y Redes de Valor', afinidad: { tec:2, soc:0, emp:2, adm:4, srv:3, cre:0 } },
  { nombre: 'Especialización en Auditoría en Salud',                             afinidad: { tec:0, soc:1, emp:0, adm:3, srv:5, cre:0 } },
  { nombre: 'Especialización en Gerencia de la Seguridad y Salud en el Trabajo', afinidad: { tec:1, soc:1, emp:1, adm:3, srv:5, cre:0 } },
  { nombre: 'Especialización en Inteligencia de Negocios',                       afinidad: { tec:4, soc:0, emp:3, adm:3, srv:0, cre:0 } },
  { nombre: 'Especialización en Dirección y Producción de Contenido Audiovisual', afinidad: { tec:2, soc:0, emp:2, adm:0, srv:0, cre:5 } },
  { nombre: 'Especialización en Derechos de Autor y Propiedad Industrial',       afinidad: { tec:0, soc:1, emp:2, adm:3, srv:0, cre:4 } },
  { nombre: 'Especialización en Informática e Innovación Educativa',             afinidad: { tec:3, soc:3, emp:1, adm:0, srv:1, cre:3 } },
  { nombre: 'Especialización en Gestión Ambiental',                              afinidad: { tec:1, soc:3, emp:1, adm:2, srv:2, cre:0 } },
  { nombre: 'Maestría en Innovación',                                            afinidad: { tec:3, soc:0, emp:4, adm:2, srv:0, cre:3 } },
];

// Bonus regional: programas con relevancia especial para la región (+0.5 al score)
export const BONUS_REGIONAL = {
  Bogotá:       ['Ingeniería de Software', 'Ingeniería Industrial', 'Administración de Empresas', 'Maestría en Administración de Empresas MBA', 'Maestría en Analítica de Datos', 'Especialización en Inteligencia Artificial'],
  Boyacá:       ['Tecnología en Producción Ganadera Sostenible', 'Licenciatura en Ciencias Sociales', 'Trabajo Social', 'Maestría en Educación', 'Especialización en Gestión Ambiental', 'Administración Pública'],
  Buenaventura: ['Negocios Internacionales', 'Tecnología en Logística', 'Administración en Salud', 'Especialización en Gestión de Procesos Logísticos y Redes de Valor', 'Especialización en Inteligencia de Negocios', 'Seguridad y Salud en el Trabajo'],
  'San Gil':    ['Marketing de Negocios', 'Mercadeo y Publicidad', 'Administración de Empresas', 'Especialización en Marketing Digital', 'Especialización en Gerencia de Proyectos', 'Maestría en Gerencia de Mercadeo Digital'],
  Leticia:      ['Trabajo Social', 'Licenciatura en Educación Infantil', 'Tecnología en Producción Ganadera Sostenible', 'Maestría en Educación', 'Especialización en Gestión Ambiental', 'Especialización en Desarrollo Integral de la Infancia y la Adolescencia'],
  Aguachica:    ['Administración de Empresas', 'Contaduría Pública', 'Tecnología en Logística', 'Especialización en Gerencia Financiera', 'Especialización en Revisoría Fiscal y Auditoría Forense', 'Especialización en Alta Gerencia'],
};

// ─── FUNCIONES DE RANKING ────────────────────────────────────
export function getTipoBusqueda(busqueda) {
  return busqueda === 'Posgrado' ? 'posgrado' : 'pregrado';
}

// Rankea todos los programas del catálogo según afinidad con el perfil del usuario.
// Retorna top 5 con nombre, score y porcentaje de match.
export function rankProgramas(profile, tipo, region) {
  const catalogo = tipo === 'posgrado' ? CATALOGO_POSGRADO : CATALOGO_PREGRADO;
  const bonusList = BONUS_REGIONAL[region] || [];
  const keys = ['tec', 'soc', 'emp', 'adm', 'srv', 'cre'];
  const profileKeys = ['tecnologico', 'social', 'emprendedor', 'administrativo', 'servicios', 'creativo'];

  const scored = catalogo.map(prog => {
    // Producto punto: perfil_usuario × afinidad_programa
    let score = 0;
    let maxScore = 0;
    keys.forEach((k, i) => {
      score += (profile[profileKeys[i]] || 0) * (prog.afinidad[k] || 0);
      maxScore += 5 * (prog.afinidad[k] || 0); // max si perfil fuera 5 en todo
    });
    // Bonus regional
    if (bonusList.includes(prog.nombre)) score += 0.5;
    const matchPct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
    return { nombre: prog.nombre, score, matchPct };
  });

  // Ordenar por porcentaje descendente (y usar score como desempate)
  scored.sort((a, b) => {
    if (b.matchPct !== a.matchPct) {
      return b.matchPct - a.matchPct;
    }
    return b.score - a.score;
  });
  return scored.slice(0, 5);
}

// ─── FUNCIONES DE SCORING ────────────────────────────────────
export function getLikertProfile(ans) {
  const v = (id) => ans[id] || 3;
  return {
    tecnologico:    (v('i02') + v('i09') + v('i10')) / 3,
    social:         (v('i03') + v('i05')) / 2,
    emprendedor:    (v('i04') + v('i12')) / 2,
    administrativo: (v('i06') + v('i08')) / 2,
    servicios:      (v('i07') + v('i01')) / 2,
    creativo:       v('i11'),
  };
}

export function getVirtualViability(ans) {
  const sum = ['v01','v02','v03','v04','v05','v06'].reduce((s,k) => s + (ans[k] || 3), 0);
  return sum >= 24 ? 'alta' : sum >= 15 ? 'media' : 'condicionada';
}

export function getAcademiaScore(ans) {
  const sum = ['a01','a02','a03','a04','a05'].reduce((s,k) => s + (ans[k] || 3), 0);
  return sum >= 20 ? 'alta' : sum >= 12 ? 'media' : 'baja';
}

export function getRisk(viability, academia, proyectoSum) {
  const sc = { alta: 2, media: 1, condicionada: 0, baja: 0 };
  const total = (sc[viability] || 0) + (sc[academia] || 0) + (proyectoSum >= 18 ? 2 : proyectoSum >= 12 ? 1 : 0);
  return total >= 5 ? 'bajo' : total >= 3 ? 'medio' : 'alto';
}

export function getDominantProfile(profile) {
  const entries = Object.entries(profile).sort((a, b) => b[1] - a[1]);
  return { dominant: entries[0][0], secondary: entries[1][0] };
}

export function buildSections(region, nivelEducativo) {
  return [
    BLOQUE_INTERESES,
    BLOQUE_VIRTUALIDAD,
    BLOQUE_AUTOEFICACIA,
    BLOQUE_PROYECTO,
    BLOQUES_TERRITORIALES[region] || BLOQUES_TERRITORIALES['Boyacá'],
    BLOQUES_PERFIL[nivelEducativo] || BLOQUES_PERFIL['Colegio'],
  ];
}

