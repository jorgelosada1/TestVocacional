// ============================================================
// DATA – Test Vocacional Territorial · Innovación E-Learning
// ============================================================

// ─── REGIONES ───────────────────────────────────────────────
export const REGIONES = ['Bogotá', 'Boyacá', 'Buenaventura', 'San Gil', 'Leticia', 'Aguachica'];

export const NIVELES_EDUCATIVOS = ['Colegio', 'Técnico/Tecnólogo', 'Profesional'];

export const SITUACIONES = ['Estudio', 'Trabajo', 'Estudio y trabajo', 'Ninguno'];

export const BUSQUEDAS = ['Carrera técnica', 'Tecnología', 'Pregrado profesional', 'Posgrado', 'Cursos/certificaciones'];

// ─── BLOQUE A – INTERESES VOCACIONALES (12) ─────────────────
export const BLOQUE_INTERESES = {
  id: 'intereses',
  title: 'Intereses vocacionales',
  description: 'Indica qué tan de acuerdo estás con cada afirmación (1 = muy en desacuerdo, 5 = muy de acuerdo)',
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

// ─── BLOQUE B – VIRTUALIDAD (6) ─────────────────────────────
export const BLOQUE_VIRTUALIDAD = {
  id: 'virtualidad',
  title: 'Condiciones para estudiar virtualmente',
  description: '¿Qué tan bien describe tu situación actual?',
  questions: [
    { id: 'v01', text: 'Tengo acceso frecuente a internet.' },
    { id: 'v02', text: 'Tengo un dispositivo adecuado para estudiar (celular, tablet o computador).' },
    { id: 'v03', text: 'Puedo estudiar de manera autónoma sin apoyo constante.' },
    { id: 'v04', text: 'Tengo tiempo disponible semanalmente para dedicar al estudio.' },
    { id: 'v05', text: 'Me siento cómodo/a usando plataformas virtuales (correo, aulas, etc.).' },
    { id: 'v06', text: 'Prefiero contenidos prácticos y aplicables a mi vida.' },
  ],
};

// ─── BLOQUE C – AUTOEFICACIA (5) ────────────────────────────
export const BLOQUE_AUTOEFICACIA = {
  id: 'autoeficacia',
  title: 'Autoeficacia académica',
  description: '¿Cómo te describes a ti mismo/a?',
  questions: [
    { id: 'a01', text: 'Comprendo fácilmente textos o instrucciones.' },
    { id: 'a02', text: 'Puedo expresar mis ideas por escrito claramente.' },
    { id: 'a03', text: 'Me organizo bien con fechas, entregas y actividades.' },
    { id: 'a04', text: 'Suelo terminar lo que empiezo.' },
    { id: 'a05', text: 'Aprendo rápido cuando algo realmente me interesa.' },
  ],
};

// ─── BLOQUE D – PROYECTO DE VIDA (5) ────────────────────────
export const BLOQUE_PROYECTO = {
  id: 'proyecto',
  title: 'Proyecto de vida',
  description: '¿Qué motiva tu decisión de estudiar?',
  questions: [
    { id: 'p01', text: 'Estudiar es importante para mejorar mis ingresos.' },
    { id: 'p02', text: 'Quiero crecer profesionalmente.' },
    { id: 'p03', text: 'Quiero apoyar mejor a mi familia.' },
    { id: 'p04', text: 'Me interesa generar impacto en mi comunidad.' },
    { id: 'p05', text: 'Estoy dispuesto/a a estudiar si veo resultados reales.' },
  ],
};

// ─── BLOQUES TERRITORIALES (3 preguntas c/u) ────────────────
export const BLOQUES_TERRITORIALES = {
  Bogotá: {
    id: 'territorial',
    title: 'Pertinencia territorial – Bogotá',
    description: 'Preguntas relacionadas con tu región',
    questions: [
      { id: 't01', text: 'Me interesan programas con alta demanda laboral en el mercado bogotano.' },
      { id: 't02', text: 'Quiero acceder a formación con reconocimiento nacional e internacional.' },
      { id: 't03', text: 'Me interesa un programa que me permita crecer en sectores como tecnología, finanzas o gerencia.' },
    ],
  },
  Boyacá: {
    id: 'territorial',
    title: 'Pertinencia territorial – Boyacá',
    description: 'Preguntas relacionadas con tu región',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con agro, turismo o tecnología aplicada al territorio boyacense.' },
      { id: 't02', text: 'Quiero estudiar sin tener que irme de mi municipio.' },
      { id: 't03', text: 'Me gustaría aplicar lo aprendido al desarrollo de mi territorio.' },
    ],
  },
  Buenaventura: {
    id: 'territorial',
    title: 'Pertinencia territorial – Buenaventura',
    description: 'Preguntas relacionadas con tu región',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con logística, comercio o servicios portuarios.' },
      { id: 't02', text: 'Las dificultades de conectividad podrían afectar mis estudios virtuales.' },
      { id: 't03', text: 'Prefiero programas cortos o por etapas que pueda ir completando.' },
    ],
  },
  'San Gil': {
    id: 'territorial',
    title: 'Pertinencia territorial – San Gil',
    description: 'Preguntas relacionadas con tu región',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con turismo, hospitalidad o emprendimiento.' },
      { id: 't02', text: 'Me gustaría usar herramientas digitales para promocionar negocios.' },
      { id: 't03', text: 'Me interesa combinar estudio y trabajo independiente.' },
    ],
  },
  Leticia: {
    id: 'territorial',
    title: 'Pertinencia territorial – Leticia',
    description: 'Preguntas relacionadas con tu región',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con sostenibilidad, cultura o trabajo comunitario.' },
      { id: 't02', text: 'Necesito contenidos que funcionen incluso con conectividad limitada.' },
      { id: 't03', text: 'Quiero aportar al desarrollo del territorio amazónico.' },
    ],
  },
  Aguachica: {
    id: 'territorial',
    title: 'Pertinencia territorial – Aguachica',
    description: 'Preguntas relacionadas con tu región',
    questions: [
      { id: 't01', text: 'Me interesan programas relacionados con comercio, agro o servicios.' },
      { id: 't02', text: 'Necesito horarios flexibles porque trabajo o tengo responsabilidades.' },
      { id: 't03', text: 'Prefiero programas con aplicación práctica inmediata.' },
    ],
  },
};

// ─── BLOQUES POR PERFIL EDUCATIVO (5 preguntas c/u) ─────────
export const BLOQUES_PERFIL = {
  Colegio: {
    id: 'perfil_educativo',
    title: 'Descubrimiento personal',
    description: 'Cuéntanos un poco más sobre ti y tus intereses',
    questions: [
      { id: 'pe1', text: 'Me gusta participar en actividades creativas o culturales.' },
      { id: 'pe2', text: 'Disfruto trabajar en equipo hacia un objetivo común.' },
      { id: 'pe3', text: 'Me gusta aprender cosas nuevas constantemente.' },
      { id: 'pe4', text: 'Me imagino liderando proyectos en el futuro.' },
      { id: 'pe5', text: 'Me interesa estudiar algo que tenga impacto social.' },
    ],
  },
  'Técnico/Tecnólogo': {
    id: 'perfil_educativo',
    title: 'Continuidad profesional',
    description: 'Sobre tu trayectoria y lo que buscas ahora',
    questions: [
      { id: 'pe1', text: 'Quiero continuar mi formación para acceder a mejores oportunidades laborales.' },
      { id: 'pe2', text: 'Me interesa homologar mis estudios previos en un programa profesional.' },
      { id: 'pe3', text: 'Necesito una carrera compatible con mi trabajo actual.' },
      { id: 'pe4', text: 'Me interesa fortalecer habilidades de liderazgo y gestión.' },
      { id: 'pe5', text: 'Busco una formación con rápida aplicación laboral.' },
    ],
  },
  Profesional: {
    id: 'perfil_educativo',
    title: 'Proyección y especialización',
    description: 'Sobre tu crecimiento y metas profesionales',
    questions: [
      { id: 'pe1', text: 'Quiero especializarme en un área específica de mi campo.' },
      { id: 'pe2', text: 'Me interesa crecer hacia cargos directivos o de alta gerencia.' },
      { id: 'pe3', text: 'Quiero fortalecer competencias digitales y estratégicas.' },
      { id: 'pe4', text: 'Me interesa emprender o liderar proyectos propios.' },
      { id: 'pe5', text: 'Busco mejorar mi perfil profesional y salarial.' },
    ],
  },
};

// ─── PERFIL LABELS ───────────────────────────────────────────
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

// ─── ORIENTACIÓN POR PERFIL VOCACIONAL ───────────────────────
// Mensaje principal basado en el perfil dominante. Reemplaza el anterior
// "MENSAJES_PERFIL" que era solo por nivel educativo, no por vocación.
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

// ─── NOTA COMPLEMENTARIA POR NIVEL EDUCATIVO ─────────────────
export const NOTA_NIVEL = {
  Colegio:
    'Estás en un momento clave de exploración. No necesitas decidir todo ahora; el proceso formativo incluye orientación y acompañamiento tutorial.',
  'Técnico/Tecnólogo':
    'Ya tienes una base sólida. Busca programas con homologación de créditos para avanzar más rápido sin empezar desde cero.',
  Profesional:
    'Tu trayectoria te posiciona para dar el salto a la especialización o maestría. Prioriza programas con aplicación estratégica inmediata en tu sector.',
};

// ─── PROGRAMAS POR PERFIL VOCACIONAL ─────────────────────────
// Catálogo: Universidad Areandina y Universidad Iberoamericana de Colombia.
// Recomendación PRIMARIA: según perfil dominante, no por región.
export const PROGRAMAS_POR_PERFIL = {
  tecnologico: {
    pregrado: [
      'Ingeniería de Software',
      'Ingeniería de Sistemas',
      'Ingeniería Industrial',
      'Economía',
      'Administración Financiera',
    ],
    posgrado: [
      'Especialización en Inteligencia Artificial',
      'Especialización en Ciberseguridad',
      'Maestría en Analítica de Datos',
      'Especialización en Analítica y Big Data',
      'Maestría en Inteligencia de Negocios',
    ],
  },
  social: {
    pregrado: [
      'Trabajo Social',
      'Psicología',
      'Licenciatura en Educación Infantil',
      'Licenciatura en Educación Especial',
      'Licenciatura en Ciencias Sociales',
    ],
    posgrado: [
      'Maestría en Educación',
      'Especialización en Desarrollo Integral de la Infancia y la Adolescencia',
      'Especialización en Neuropsicología de la Educación',
      'Especialización en Pedagogía y Docencia',
      'Maestría en Epidemiología',
    ],
  },
  emprendedor: {
    pregrado: [
      'Administración de Empresas',
      'Mercadeo y Publicidad',
      'Marketing de Negocios',
      'Negocios Internacionales',
      'Administración Financiera',
    ],
    posgrado: [
      'Maestría en Administración de Empresas MBA',
      'Especialización en Gerencia de Proyectos',
      'Especialización en Marketing Digital',
      'Maestría en Gerencia de Mercadeo Digital',
      'Especialización en Alta Gerencia',
    ],
  },
  administrativo: {
    pregrado: [
      'Administración de Empresas',
      'Contaduría Pública',
      'Administración Financiera',
      'Tecnología Gestión Talento Humano',
      'Administración Pública',
    ],
    posgrado: [
      'Especialización en Gerencia Financiera',
      'Especialización en Talento Humano',
      'Especialización en Revisoría Fiscal y Auditoría Forense',
      'Maestría en Gestión del Talento Humano',
      'Especialización en Alta Gerencia',
    ],
  },
  servicios: {
    pregrado: [
      'Administración en Salud',
      'Seguridad y Salud en el Trabajo',
      'Tecnología Logística',
      'Comunicación Social',
      'Negocios Internacionales',
    ],
    posgrado: [
      'Especialización en Gestión de la Salud Pública',
      'Especialización en Gestión de Procesos Logísticos y Redes de Valor',
      'Especialización en Auditoría en Salud',
      'Especialización en Gerencia de la Seguridad y Salud en el Trabajo',
      'Especialización en Inteligencia de Negocios',
    ],
  },
  creativo: {
    pregrado: [
      'Comunicación Social',
      'Mercadeo y Publicidad',
      'Marketing de Negocios',
      'Psicología',
      'Sociología',
    ],
    posgrado: [
      'Especialización en Dirección y Producción de Contenido Audiovisual',
      'Especialización en Marketing Digital',
      'Maestría en Gerencia de Mercadeo Digital',
      'Especialización en Derechos de Autor y Propiedad Industrial',
      'Especialización en Informática e Innovación Educativa',
    ],
  },
};

// ─── AJUSTE REGIONAL ─────────────────────────────────────────
// Reemplaza el 5° programa con uno relevante para la región.
export const AJUSTE_REGIONAL = {
  Bogotá:       { pregrado: 'Ingeniería Industrial',                                      posgrado: 'Maestría en Innovación' },
  Boyacá:       { pregrado: 'Tecnología Producción Ganadería Sostenible',                 posgrado: 'Especialización en Gestión Ambiental' },
  Buenaventura: { pregrado: 'Negocios Internacionales',                                   posgrado: 'Especialización en Gestión de Procesos Logísticos y Redes de Valor' },
  'San Gil':    { pregrado: 'Marketing de Negocios',                                      posgrado: 'Especialización en Gerencia de Proyectos' },
  Leticia:      { pregrado: 'Trabajo Social',                                             posgrado: 'Especialización en Gestión Ambiental' },
  Aguachica:    { pregrado: 'Tecnología Logística',                                       posgrado: 'Especialización en Revisoría Fiscal' },
};

// Determina tipo según lo que el usuario busca
export function getTipoBusqueda(busqueda) {
  return busqueda === 'Posgrado' ? 'posgrado' : 'pregrado';
}

// Obtiene programas cruzando perfil dominante + tipo + ajuste regional
export function getProgramas(dominant, tipo, region) {
  const base = [...((PROGRAMAS_POR_PERFIL[dominant]?.[tipo]) || [])];
  const extra = AJUSTE_REGIONAL[region]?.[tipo];
  if (extra && !base.includes(extra)) {
    base[4] = extra; // reemplaza el 5° por el relevante de la región
  }
  return base.slice(0, 5);
}

// ─── LÓGICA DE SCORING ───────────────────────────────────────
export function getLikertProfile(ans) {
  const v = (id) => ans[id] || 3;
  return {
    tecnologico:    (v('i02') + v('i09') + v('i10')) / 3,
    social:         (v('i03') + v('i05')) / 2,
    emprendedor:    (v('i04') + v('i12')) / 2,
    administrativo: (v('i06') + v('i08')) / 2,
    servicios:      (v('i07') + v('i01')) / 2,
    creativo:       (v('i11') + v('i12')) / 2,
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
