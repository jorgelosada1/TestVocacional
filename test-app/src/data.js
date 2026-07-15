// ============================================================
// DATA – Brújula Vocacional · Innovación E-Learning
// BV-001 Especificación Funcional v0.1
// ============================================================

// ─── DEPARTAMENTOS DE COLOMBIA ──────────────────────────────
export const DEPARTAMENTOS = [
  'Amazonas','Antioquia','Arauca','Atlántico','Bogotá D.C.','Bolívar',
  'Boyacá','Caldas','Caquetá','Casanare','Cauca','Cesar','Chocó',
  'Córdoba','Cundinamarca','Guainía','Guaviare','Huila','La Guajira',
  'Magdalena','Meta','Nariño','Norte de Santander','Putumayo',
  'Quindío','Risaralda','San Andrés y Providencia','Santander',
  'Sucre','Tolima','Valle del Cauca','Vaupés','Vichada',
];

// ─── REGIONES ESTRATÉGICAS ──────────────────────────────────
// Mapea departamento → clave de región para el bloque 9A
export const REGIONES_ESTRATEGICAS = {
  'Valle del Cauca': 'valle_del_cauca',
  'Amazonas':        'amazonas',
  'Santander':       'santander',
  'Cesar':           'cesar',
  'Boyacá':          'boyaca',
  'Bogotá D.C.':     'bogota',
};

// ─── FAMILIAS VOCACIONALES (8) ──────────────────────────────
export const FAMILIAS = {
  TEC: { code: 'TEC', name: 'Tecnología e Innovación',      color: '#4361ee' },
  NEG: { code: 'NEG', name: 'Negocios y Administración',    color: '#f59e0b' },
  SOC: { code: 'SOC', name: 'Educación y Desarrollo Social', color: '#10b981' },
  CRE: { code: 'CRE', name: 'Creatividad y Comunicación',   color: '#ec4899' },
  AMB: { code: 'AMB', name: 'Ambiente y Sostenibilidad',     color: '#22c55e' },
  COM: { code: 'COM', name: 'Comercial y Mercadeo',          color: '#f97316' },
  PRO: { code: 'PRO', name: 'Logística y Procesos',          color: '#6366f1' },
  EMP: { code: 'EMP', name: 'Emprendimiento y Liderazgo',    color: '#8b5cf6' },
};

// ─── ESCALAS LIKERT ─────────────────────────────────────────
export const ESCALA_INTERESES = [
  { value: 1, label: 'Totalmente en desacuerdo' },
  { value: 2, label: 'En desacuerdo' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'De acuerdo' },
  { value: 5, label: 'Totalmente de acuerdo' },
];

export const ESCALA_ACTIVIDADES = [
  { value: 1, label: 'No me gusta nada' },
  { value: 2, label: 'Me gusta poco' },
  { value: 3, label: 'Me gusta de vez en cuando' },
  { value: 4, label: 'Me gusta bastante' },
  { value: 5, label: 'Me encanta hacerlo' },
];

export const ESCALA_FORTALEZAS = [
  { value: 1, label: 'Nunca' },
  { value: 2, label: 'Casi nunca' },
  { value: 3, label: 'Algunas veces' },
  { value: 4, label: 'Casi siempre' },
  { value: 5, label: 'Siempre' },
];

export const ESCALA_VIRTUAL = [
  { value: 1, label: 'Nunca' },
  { value: 2, label: 'Casi nunca' },
  { value: 3, label: 'Algunas veces' },
  { value: 4, label: 'Casi siempre' },
  { value: 5, label: 'Siempre' },
];

// ─── PANTALLA 3: CARACTERIZACIÓN ────────────────────────────
export const PREGUNTAS_CARACTERIZACION = [
  {
    id: 'car_1',
    question: '¿Cuál es tu nivel educativo actual?',
    options: [
      { text: 'Estudiante de colegio', value: 'estudiante_colegio' },
      { text: 'Bachiller', value: 'bachiller' },
      { text: 'Técnico', value: 'tecnico' },
      { text: 'Tecnólogo', value: 'tecnologo' },
      { text: 'Profesional', value: 'profesional' },
    ],
  },
  {
    id: 'car_2',
    question: 'Actualmente...',
    options: [
      { text: 'Solo estudio', value: 'solo_estudio' },
      { text: 'Solo trabajo', value: 'solo_trabajo' },
      { text: 'Estudio y trabajo', value: 'estudio_trabajo' },
      { text: 'Ninguna de las anteriores', value: 'ninguna' },
    ],
  },
  {
    id: 'car_3',
    question: '¿Cuántas horas puedes dedicar semanalmente a estudiar?',
    options: [
      { text: 'Menos de 5', value: 'menos_5' },
      { text: 'Entre 5 y 10', value: '5_10' },
      { text: 'Entre 10 y 15', value: '10_15' },
      { text: 'Más de 15', value: 'mas_15' },
    ],
  },
  {
    id: 'car_4',
    question: '¿Cuál es tu principal dispositivo para estudiar?',
    options: [
      { text: 'Computador', value: 'computador' },
      { text: 'Tablet', value: 'tablet' },
      { text: 'Celular', value: 'celular' },
    ],
  },
  {
    id: 'car_5',
    question: '¿Cómo es normalmente tu acceso a Internet?',
    options: [
      { text: 'Siempre estable', value: 'siempre_estable' },
      { text: 'Generalmente estable', value: 'generalmente_estable' },
      { text: 'Algunas veces presenta fallas', value: 'con_fallas' },
      { text: 'Muy limitado', value: 'muy_limitado' },
    ],
  },
];

// ─── PANTALLA 4: INTERESES VOCACIONALES ─────────────────────
export const PREGUNTAS_INTERESES = [
  { id: 'int_1',  text: 'Me interesan los avances tecnológicos y las herramientas digitales.' },
  { id: 'int_2',  text: 'Me llaman la atención los negocios, las empresas y el emprendimiento.' },
  { id: 'int_3',  text: 'Me interesa comprender el comportamiento y las necesidades de las personas.' },
  { id: 'int_4',  text: 'Me atraen los temas relacionados con el diseño, la comunicación y la creatividad.' },
  { id: 'int_5',  text: 'Me interesa conocer cómo funcionan los procesos dentro de una organización.' },
  { id: 'int_6',  text: 'Me llaman la atención las ventas, la negociación y el mercadeo.' },
  { id: 'int_7',  text: 'Me interesa crear proyectos o ideas que generen impacto.' },
  { id: 'int_8',  text: 'Me interesa el cuidado del medio ambiente y el desarrollo sostenible.' },
  { id: 'int_9',  text: 'Me llaman la atención los temas relacionados con la salud y el bienestar.' },
  { id: 'int_10', text: 'Me interesa analizar información para comprender mejor una situación.' },
  { id: 'int_11', text: 'Disfruto aprender sobre temas nuevos por iniciativa propia.' },
  { id: 'int_12', text: 'Me interesa conocer cómo funcionan las ciudades, las comunidades y la sociedad.' },
];

// ─── PANTALLA 5: ACTIVIDADES QUE DISFRUTO ───────────────────
export const PREGUNTAS_ACTIVIDADES = [
  { id: 'act_1',  text: 'Resolver problemas complejos.' },
  { id: 'act_2',  text: 'Organizar eventos, actividades o proyectos.' },
  { id: 'act_3',  text: 'Explicar ideas o enseñar a otras personas.' },
  { id: 'act_4',  text: 'Crear designs, ilustraciones o contenido creativo.' },
  { id: 'act_5',  text: 'Investigar información para encontrar respuestas.' },
  { id: 'act_6',  text: 'Escuchar y orientar a otras personas cuando lo necesitan.' },
  { id: 'act_7',  text: 'Negociar o convencer a otras personas sobre una idea.' },
  { id: 'act_8',  text: 'Construir o desarrollar soluciones nuevas.' },
  { id: 'act_9',  text: 'Trabajar con números, indicadores o datos.' },
  { id: 'act_10', text: 'Mejorar procesos para hacerlos más eficientes.' },
  { id: 'act_11', text: 'Trabajar en espacios al aire libre o relacionados con la naturaleza.' },
  { id: 'act_12', text: 'Hablar en público o presentar ideas frente a un grupo.' },
];

// ─── PANTALLA 6: FORTALEZAS PERSONALES ──────────────────────
export const PREGUNTAS_FORTALEZAS = [
  { id: 'for_1',  text: 'Soy una persona disciplinada.', competencia: 'Disciplina' },
  { id: 'for_2',  text: 'Aprendo con facilidad cuando algo me interesa.', competencia: 'Aprendizaje autónomo' },
  { id: 'for_3',  text: 'Me adapto bien a los cambios.', competencia: 'Adaptabilidad' },
  { id: 'for_4',  text: 'Trabajo bien en equipo.', competencia: 'Trabajo colaborativo' },
  { id: 'for_5',  text: 'Las personas suelen confiar en mí para asumir responsabilidades.', competencia: 'Responsabilidad' },
  { id: 'for_6',  text: 'Mantengo la calma cuando debo resolver problemas.', competencia: 'Resolución de problemas' },
  { id: 'for_7',  text: 'Suelo aportar ideas originales.', competencia: 'Creatividad' },
  { id: 'for_8',  text: 'Me comunico con claridad y respeto.', competencia: 'Comunicación' },
  { id: 'for_9',  text: 'Soy perseverante cuando tengo un objetivo.', competencia: 'Perseverancia' },
  { id: 'for_10', text: 'Presto atención a los detalles.', competencia: 'Atención a los detalles' },
  { id: 'for_11', text: 'Me siento cómodo utilizando herramientas tecnológicas.', competencia: 'Competencia digital' },
  { id: 'for_12', text: 'Tengo curiosidad por aprender constantemente.', competencia: 'Curiosidad intelectual' },
];

// ─── PANTALLA 7: PREPARACIÓN EDUCACIÓN VIRTUAL ──────────────
export const PREGUNTAS_VIRTUAL = [
  { id: 'vir_1',  text: 'Dispongo de un lugar adecuado para estudiar.', variable: 'Condiciones de estudio' },
  { id: 'vir_2',  text: 'Tengo acceso estable a internet.', variable: 'Acceso a internet' },
  { id: 'vir_3',  text: 'Cuento con un computador o dispositivo para estudiar.', variable: 'Equipamiento' },
  { id: 'vir_4',  text: 'Me siento cómodo utilizando plataformas digitales.', variable: 'Competencia digital' },
  { id: 'vir_5',  text: 'Puedo dedicar tiempo semanal a mis estudios.', variable: 'Disponibilidad de tiempo' },
  { id: 'vir_6',  text: 'Cuando tengo dudas, busco soluciones antes de rendirme.', variable: 'Autonomía/Persistencia' },
  { id: 'vir_7',  text: 'Me mantengo motivado aunque estudie de forma independiente.', variable: 'Motivación autónoma' },
  { id: 'vir_8',  text: 'Cumplo con los compromisos sin necesidad de que alguien me lo recuerde.', variable: 'Autorregulación' },
];

// ─── PANTALLA 8: MOTIVACIONES ───────────────────────────────
export const PREGUNTAS_MOTIVACIONES = [
  {
    id: 'mot_1',
    question: '¿Cuál es tu principal motivación para estudiar actualmente?',
    type: 'single',
    options: [
      'Conseguir un mejor empleo.',
      'Obtener un mejor salario.',
      'Crecer profesionalmente.',
      'Cumplir una meta personal.',
      'Emprender mi propio negocio.',
      'Actualizar mis conocimientos.',
      'Cambiar de área profesional.',
      'Generar un impacto positivo en mi comunidad.',
    ],
  },
  {
    id: 'mot_2',
    question: '¿Qué aspecto es más importante para ti al elegir un programa académico?',
    type: 'multi',
    maxSelect: 2,
    options: [
      'Que tenga buena proyección laboral.',
      'Que me guste lo que voy a estudiar.',
      'Que pueda estudiar de manera virtual.',
      'Que tenga un costo accesible.',
      'Que tenga reconocimiento y calidad.',
      'Que me permita emprender.',
      'Que tenga horarios flexibles.',
      'Que me permita seguir estudiando en el futuro.',
    ],
  },
  {
    id: 'mot_3',
    question: 'Cuando piensas en tu futuro, ¿qué te gustaría lograr principalmente?',
    type: 'single',
    options: [
      'Ser un profesional reconocido.',
      'Tener estabilidad económica.',
      'Crear mi propia empresa.',
      'Liderar equipos o proyectos.',
      'Ayudar a transformar mi comunidad.',
      'Trabajar en una empresa nacional o internacional.',
      'Desarrollar soluciones innovadoras.',
    ],
  },
  {
    id: 'mot_4',
    question: '¿En cuál de estas situaciones te encuentras hoy?',
    type: 'single',
    options: [
      'Estoy explorando opciones y aún no sé qué estudiar.',
      'Ya tengo algunas opciones, pero quiero compararlas.',
      'Ya sé qué quiero estudiar y estoy buscando dónde hacerlo.',
      'Estoy listo(a) para iniciar mi proceso de inscripción.',
    ],
  },
  {
    id: 'mot_5',
    question: '¿Qué consideras que puede dificultar el inicio de tus estudios?',
    type: 'multi',
    maxSelect: 2,
    options: [
      'Recursos económicos.',
      'Tiempo disponible.',
      'Organización personal.',
      'Acceso a internet o equipos.',
      'No saber qué estudiar.',
      'Ninguna, estoy listo(a).',
      'Otra.',
    ],
  },
];

// ─── PANTALLA 9: CONTEXTO TERRITORIAL ───────────────────────
export const PREGUNTAS_CONTEXTO = [
  {
    id: 'ctx_2',
    question: '¿Cuál de estas situaciones describe mejor tu lugar de residencia?',
    type: 'single',
    options: [
      'Capital de departamento.',
      'Municipio intermedio.',
      'Municipio pequeño.',
      'Zona rural.',
    ],
  },
  {
    id: 'ctx_3',
    question: '¿Cuál consideras que es el principal reto para acceder a la educación superior en tu región?',
    type: 'multi',
    maxSelect: 2,
    options: [
      'Costos de estudio.',
      'Falta de tiempo.',
      'Distancia a las instituciones.',
      'Pocas oportunidades laborales.',
      'Acceso limitado a internet.',
      'Falta de información sobre programas.',
      'Ninguna de las anteriores.',
      'Otro.',
    ],
  },
  {
    id: 'ctx_4',
    question: '¿Qué te motivaría más a continuar estudiando?',
    type: 'single',
    options: [
      'Obtener mejores oportunidades laborales.',
      'Crecer profesionalmente.',
      'Aportar al desarrollo de mi región.',
      'Emprender.',
      'Mejorar mi calidad de vida.',
      'Cumplir una meta personal.',
    ],
  },
  {
    id: 'ctx_5',
    question: '¿Te gustaría que durante tu formación académica existieran proyectos relacionados con tu región?',
    type: 'single',
    options: ['Sí.', 'No.', 'Me es indiferente.'],
  },
];

// ─── PANTALLA 9A: PREGUNTAS REGIONALES ──────────────────────
export const PREGUNTAS_REGIONALES = {
  valle_del_cauca: {
    title: 'Tu entorno – Valle del Cauca',
    intro: 'Queremos conocer un poco más sobre tu entorno para ofrecerte una orientación más cercana a tu realidad.',
    questions: [
      {
        id: 'reg_1', type: 'single',
        question: '¿Qué tipo de proyectos te gustaría desarrollar para aportar al crecimiento de tu región?',
        options: ['Desarrollo empresarial.', 'Innovación.', 'Educación.', 'Medio ambiente.', 'Tecnología.', 'Aún no lo tengo claro.'],
      },
      {
        id: 'reg_2', type: 'single',
        question: '¿Qué aspecto consideras que tiene mayor potencial de crecimiento en tu región?',
        options: ['Emprendimiento.', 'Comercio.', 'Turismo.', 'Industria.', 'Tecnología.', 'Otro.'],
      },
      {
        id: 'reg_3', type: 'single',
        question: '¿Te gustaría que tu formación te permitiera generar un impacto positivo en tu región?',
        options: ['Sí.', 'Tal vez.', 'No.'],
      },
    ],
  },
  amazonas: {
    title: 'Tu entorno – Amazonas',
    intro: 'Queremos conocer un poco más sobre tu entorno para ofrecerte una orientación más cercana a tu realidad.',
    questions: [
      {
        id: 'reg_1', type: 'single',
        question: '¿Te gustaría participar en proyectos que contribuyan al desarrollo sostenible de tu región?',
        options: ['Sí.', 'Tal vez.', 'No.'],
      },
      {
        id: 'reg_2', type: 'single',
        question: '¿Qué tema consideras más importante para el desarrollo de tu territorio?',
        options: ['Educación.', 'Medio ambiente.', 'Emprendimiento.', 'Tecnología.', 'Turismo.', 'Otro.'],
      },
      {
        id: 'reg_3', type: 'single',
        question: '¿Te gustaría que tu formación te permitiera generar oportunidades para tu comunidad?',
        options: ['Sí.', 'Tal vez.', 'No.'],
      },
    ],
  },
  santander: {
    title: 'Tu entorno – Santander',
    intro: 'Queremos conocer un poco más sobre tu entorno para ofrecerte una orientación más cercana a tu realidad.',
    questions: [
      {
        id: 'reg_1', type: 'single',
        question: '¿Qué tipo de iniciativas te gustaría liderar en tu región?',
        options: ['Empresariales.', 'Sociales.', 'Tecnológicas.', 'Ambientales.', 'Educativas.'],
      },
      {
        id: 'reg_2', type: 'single',
        question: '¿Cuál crees que es el mayor reto para el crecimiento de tu región?',
        options: ['Empleo.', 'Educación.', 'Emprendimiento.', 'Innovación.', 'Otro.'],
      },
      {
        id: 'reg_3', type: 'single',
        question: '¿Te gustaría aplicar lo aprendido para fortalecer empresas o comunidades de tu región?',
        options: ['Sí.', 'Tal vez.', 'No.'],
      },
    ],
  },
  cesar: {
    title: 'Tu entorno – Cesar',
    intro: 'Queremos conocer un poco más sobre tu entorno para ofrecerte una orientación más cercana a tu realidad.',
    questions: [
      {
        id: 'reg_1', type: 'single',
        question: '¿Te gustaría que tu formación te permitiera contribuir al desarrollo económico y social de tu región?',
        options: ['Sí.', 'Tal vez.', 'No.'],
      },
      {
        id: 'reg_2', type: 'single',
        question: '¿Qué tipo de proyectos te gustaría desarrollar en tu comunidad?',
        options: ['Empresariales.', 'Sociales.', 'Ambientales.', 'Tecnológicos.', 'Educativos.'],
      },
      {
        id: 'reg_3', type: 'single',
        question: '¿Cuál consideras que es la mayor oportunidad de crecimiento para tu región?',
        options: ['Educación.', 'Emprendimiento.', 'Tecnología.', 'Desarrollo empresarial.', 'Otro.'],
      },
    ],
  },
  boyaca: {
    title: 'Tu entorno – Boyacá',
    intro: 'Queremos conocer un poco más sobre tu entorno para ofrecerte una orientación más cercana a tu realidad.',
    questions: [
      {
        id: 'reg_1', type: 'single',
        question: '¿Qué te gustaría aportar al desarrollo de Boyacá a través de tu formación?',
        options: ['Fortalecimiento empresarial.', 'Innovación.', 'Educación.', 'Desarrollo rural.', 'Tecnología.'],
      },
      {
        id: 'reg_2', type: 'single',
        question: '¿Qué sector consideras con mayor potencial para el futuro de Boyacá?',
        options: ['Agroindustria.', 'Turismo.', 'Tecnología.', 'Educación.', 'Emprendimiento.'],
      },
      {
        id: 'reg_3', type: 'single',
        question: '¿Te gustaría desarrollar proyectos que beneficien a tu departamento?',
        options: ['Sí.', 'Tal vez.', 'No.'],
      },
    ],
  },
  bogota: {
    title: 'Tu entorno – Bogotá D.C.',
    intro: 'Queremos conocer un poco más sobre tu entorno para ofrecerte una orientación más cercana a tu realidad.',
    questions: [
      {
        id: 'reg_1', type: 'single',
        question: '¿Qué tipo de retos profesionales te gustaría asumir en una ciudad como Bogotá?',
        options: ['Liderar equipos.', 'Emprender.', 'Innovar.', 'Trabajar en grandes organizaciones.', 'Generar impacto social.'],
      },
      {
        id: 'reg_2', type: 'single',
        question: '¿Qué aspecto valoras más de estudiar en una ciudad con amplia oferta académica y laboral?',
        options: ['Oportunidades de empleo.', 'Redes de contacto.', 'Innovación.', 'Crecimiento profesional.', 'Diversidad de opciones.'],
      },
      {
        id: 'reg_3', type: 'single',
        question: '¿Te gustaría que tu formación te preparara para afrontar los cambios del mercado laboral y los avances tecnológicos?',
        options: ['Sí.', 'Tal vez.', 'No.'],
      },
    ],
  },
};

// ─── PANTALLA 10: NIVEL EDUCATIVO ───────────────────────────
export const PREGUNTAS_NIVEL_EDUCATIVO = [
  {
    id: 'niv_1',
    question: '¿Cuál es el nivel más alto de formación que has finalizado?',
    type: 'single',
    options: [
      { text: 'Bachiller', value: 'bachiller' },
      { text: 'Técnico', value: 'tecnico' },
      { text: 'Tecnólogo', value: 'tecnologo' },
      { text: 'Profesional universitario', value: 'profesional' },
    ],
  },
  {
    id: 'niv_2',
    question: 'Si ya eres técnico o tecnólogo, ¿qué deseas hacer ahora?',
    type: 'single',
    showIf: (answers) => ['tecnico', 'tecnologo'].includes(answers.niv_1),
    options: [
      { text: 'Continuar con un pregrado profesional.', value: 'pregrado' },
      { text: 'Complementar mi formación con cursos o diplomados.', value: 'complementar' },
      { text: 'Aún no lo tengo claro.', value: 'no_claro' },
    ],
  },
  {
    id: 'niv_3',
    question: 'Si ya eres profesional universitario, ¿qué buscas en este momento?',
    type: 'single',
    showIf: (answers) => answers.niv_1 === 'profesional',
    options: [
      { text: 'Especialización.', value: 'especializacion' },
      { text: 'Actualización profesional.', value: 'actualizacion' },
      { text: 'Fortalecer mis competencias para ascender laboralmente.', value: 'ascenso' },
      { text: 'Explorar nuevas oportunidades profesionales.', value: 'explorar' },
    ],
  },
  {
    id: 'niv_4',
    question: '¿Qué modalidad prefieres para estudiar?',
    type: 'single',
    options: [
      { text: '100 % virtual.', value: 'virtual' },
      { text: 'Presencial.', value: 'presencial' },
      { text: 'Me adapto a cualquiera de las dos.', value: 'ambas' },
    ],
  },
];

// ============================================================
// BV-003 — MATRIZ DE PONDERACIÓN
// ============================================================
// Estructura: tbl_matriz_ponderacion
// Cada fila: { pregunta, familia, peso }
// El día de mañana se cambia un peso sin tocar programación.

export const MATRIZ_PONDERACION = {
  // ── BLOQUE 1: Intereses Vocacionales (peso del bloque: 40%) ──
  intereses: [
    // P1: Me interesan los avances tecnológicos y las herramientas digitales.
    { pregunta: 'int_1',  familia: 'TEC', peso: 1.0 },
    { pregunta: 'int_1',  familia: 'PRO', peso: 0.4 },
    // P2: Me llaman la atención los negocios, las empresas y el emprendimiento.
    { pregunta: 'int_2',  familia: 'NEG', peso: 0.8 },
    { pregunta: 'int_2',  familia: 'EMP', peso: 1.0 },
    { pregunta: 'int_2',  familia: 'COM', peso: 0.3 },
    // P3: Me interesa comprender el comportamiento y las necesidades de las personas.
    { pregunta: 'int_3',  familia: 'SOC', peso: 1.0 },
    { pregunta: 'int_3',  familia: 'COM', peso: 0.2 },
    // P4: Me atraen los temas relacionados con el diseño, la comunicación y la creatividad.
    { pregunta: 'int_4',  familia: 'CRE', peso: 1.0 },
    { pregunta: 'int_4',  familia: 'COM', peso: 0.4 },
    // P5: Me interesa conocer cómo funcionan los procesos dentro de una organización.
    { pregunta: 'int_5',  familia: 'PRO', peso: 1.0 },
    { pregunta: 'int_5',  familia: 'NEG', peso: 0.6 },
    // P6: Me llaman la atención las ventas, la negociación y el mercadeo.
    { pregunta: 'int_6',  familia: 'COM', peso: 1.0 },
    { pregunta: 'int_6',  familia: 'NEG', peso: 0.5 },
    { pregunta: 'int_6',  familia: 'EMP', peso: 0.5 },
    // P7: Me interesa crear proyectos o ideas que generen impacto.
    { pregunta: 'int_7',  familia: 'EMP', peso: 0.8 },
    { pregunta: 'int_7',  familia: 'SOC', peso: 0.4 },
    { pregunta: 'int_7',  familia: 'NEG', peso: 0.4 },
    // P8: Me interesa el cuidado del medio ambiente y el desarrollo sostenible.
    { pregunta: 'int_8',  familia: 'AMB', peso: 1.0 },
    { pregunta: 'int_8',  familia: 'SOC', peso: 0.2 },
    { pregunta: 'int_8',  familia: 'PRO', peso: 0.3 },
    // P9: Me llaman la atención los temas relacionados con la salud y el bienestar.
    { pregunta: 'int_9',  familia: 'SOC', peso: 1.0 },
    { pregunta: 'int_9',  familia: 'AMB', peso: 0.2 },
    // P10: Me interesa analizar información para comprender mejor una situación.
    { pregunta: 'int_10', familia: 'TEC', peso: 0.7 },
    { pregunta: 'int_10', familia: 'NEG', peso: 0.3 },
    { pregunta: 'int_10', familia: 'PRO', peso: 0.8 },
    // P11: Disfruto aprender sobre temas nuevos por iniciativa propia.
    { pregunta: 'int_11', familia: 'TEC', peso: 0.6 },
    { pregunta: 'int_11', familia: 'NEG', peso: 0.2 },
    { pregunta: 'int_11', familia: 'SOC', peso: 0.3 },
    { pregunta: 'int_11', familia: 'AMB', peso: 0.3 },
    { pregunta: 'int_11', familia: 'PRO', peso: 0.4 },
    // P12: Me interesa conocer cómo funcionan las ciudades, las comunidades y la sociedad.
    { pregunta: 'int_12', familia: 'SOC', peso: 0.8 },
    { pregunta: 'int_12', familia: 'AMB', peso: 0.4 },
    { pregunta: 'int_12', familia: 'NEG', peso: 0.2 },
  ],

  // ── BLOQUE 2: Actividades que disfruto (peso del bloque: 40%) ──
  actividades: [
    // P1: Resolver problemas complejos.
    { pregunta: 'act_1',  familia: 'TEC', peso: 1.0 },
    { pregunta: 'act_1',  familia: 'NEG', peso: 0.2 },
    { pregunta: 'act_1',  familia: 'PRO', peso: 0.8 },
    // P2: Organizar eventos, actividades o proyectos.
    { pregunta: 'act_2',  familia: 'NEG', peso: 0.9 },
    { pregunta: 'act_2',  familia: 'SOC', peso: 0.2 },
    { pregunta: 'act_2',  familia: 'PRO', peso: 0.8 },
    { pregunta: 'act_2',  familia: 'EMP', peso: 0.4 },
    // P3: Explicar ideas o enseñar a otras personas.
    { pregunta: 'act_3',  familia: 'SOC', peso: 1.0 },
    // P4: Crear diseños, ilustraciones o contenido creativo.
    { pregunta: 'act_4',  familia: 'CRE', peso: 1.0 },
    { pregunta: 'act_4',  familia: 'COM', peso: 0.4 },
    // P5: Investigar información para encontrar respuestas.
    { pregunta: 'act_5',  familia: 'TEC', peso: 0.8 },
    { pregunta: 'act_5',  familia: 'NEG', peso: 0.2 },
    { pregunta: 'act_5',  familia: 'SOC', peso: 0.3 },
    { pregunta: 'act_5',  familia: 'AMB', peso: 0.2 },
    { pregunta: 'act_5',  familia: 'PRO', peso: 0.4 },
    // P6: Escuchar y orientar a otras personas cuando lo necesitan.
    { pregunta: 'act_6',  familia: 'SOC', peso: 1.0 },
    { pregunta: 'act_6',  familia: 'COM', peso: 0.4 },
    // P7: Negociar o convencer a otras personas sobre una idea.
    { pregunta: 'act_7',  familia: 'NEG', peso: 0.5 },
    { pregunta: 'act_7',  familia: 'COM', peso: 1.0 },
    { pregunta: 'act_7',  familia: 'EMP', peso: 0.5 },
    // P8: Construir o desarrollar soluciones nuevas.
    { pregunta: 'act_8',  familia: 'TEC', peso: 0.6 },
    { pregunta: 'act_8',  familia: 'CRE', peso: 0.4 },
    { pregunta: 'act_8',  familia: 'EMP', peso: 1.0 },
    // P9: Trabajar con números, indicadores o datos.
    { pregunta: 'act_9',  familia: 'TEC', peso: 0.8 },
    { pregunta: 'act_9',  familia: 'NEG', peso: 0.4 },
    { pregunta: 'act_9',  familia: 'PRO', peso: 1.0 },
    // P10: Mejorar procesos para hacerlos más eficientes.
    { pregunta: 'act_10', familia: 'PRO', peso: 1.0 },
    { pregunta: 'act_10', familia: 'NEG', peso: 0.5 },
    { pregunta: 'act_10', familia: 'TEC', peso: 0.3 },
    // P11: Trabajar en espacios al aire libre o relacionados con la naturaleza.
    { pregunta: 'act_11', familia: 'SOC', peso: 0.2 },
    { pregunta: 'act_11', familia: 'AMB', peso: 1.0 },
    { pregunta: 'act_11', familia: 'PRO', peso: 0.3 },
    // P12: Hablar en público o presentar ideas frente a un grupo.
    { pregunta: 'act_12', familia: 'COM', peso: 1.0 },
    { pregunta: 'act_12', familia: 'CRE', peso: 0.5 },
    { pregunta: 'act_12', familia: 'EMP', peso: 0.5 },
  ],

  // ── BLOQUE 3: Fortalezas Personales (peso del bloque: 20%) ──
  fortalezas: [
    // P1: Soy una persona disciplinada. (Disciplina)
    { pregunta: 'for_1',  familia: 'TEC', peso: 0.3 },
    { pregunta: 'for_1',  familia: 'NEG', peso: 0.5 },
    { pregunta: 'for_1',  familia: 'PRO', peso: 0.8 },
    { pregunta: 'for_1',  familia: 'EMP', peso: 0.3 },
    // P2: Aprendo con facilidad cuando algo me interesa. (Aprendizaje autónomo)
    { pregunta: 'for_2',  familia: 'TEC', peso: 0.4 },
    { pregunta: 'for_2',  familia: 'NEG', peso: 0.2 },
    { pregunta: 'for_2',  familia: 'SOC', peso: 0.2 },
    { pregunta: 'for_2',  familia: 'PRO', peso: 0.4 },
    // P3: Me adapto bien a los cambios. (Adaptabilidad)
    { pregunta: 'for_3',  familia: 'TEC', peso: 0.2 },
    { pregunta: 'for_3',  familia: 'NEG', peso: 0.3 },
    { pregunta: 'for_3',  familia: 'SOC', peso: 0.3 },
    { pregunta: 'for_3',  familia: 'CRE', peso: 0.2 },
    { pregunta: 'for_3',  familia: 'AMB', peso: 0.2 },
    { pregunta: 'for_3',  familia: 'COM', peso: 0.2 },
    { pregunta: 'for_3',  familia: 'PRO', peso: 0.2 },
    { pregunta: 'for_3',  familia: 'EMP', peso: 0.3 },
    // P4: Trabajo bien en equipo. (Trabajo colaborativo)
    { pregunta: 'for_4',  familia: 'NEG', peso: 0.4 },
    { pregunta: 'for_4',  familia: 'SOC', peso: 0.5 },
    { pregunta: 'for_4',  familia: 'COM', peso: 0.3 },
    { pregunta: 'for_4',  familia: 'PRO', peso: 0.3 },
    { pregunta: 'for_4',  familia: 'EMP', peso: 0.2 },
    // P5: Las personas suelen confiar en mí para asumir responsabilidades. (Responsabilidad)
    { pregunta: 'for_5',  familia: 'NEG', peso: 0.6 },
    { pregunta: 'for_5',  familia: 'SOC', peso: 0.4 },
    { pregunta: 'for_5',  familia: 'PRO', peso: 0.4 },
    { pregunta: 'for_5',  familia: 'EMP', peso: 0.6 },
    // P6: Mantengo la calma cuando debo resolver problemas. (Resolución de problemas)
    { pregunta: 'for_6',  familia: 'TEC', peso: 0.8 },
    { pregunta: 'for_6',  familia: 'NEG', peso: 0.2 },
    { pregunta: 'for_6',  familia: 'PRO', peso: 0.8 },
    { pregunta: 'for_6',  familia: 'EMP', peso: 0.2 },
    // P7: Suelo aportar ideas originales. (Creatividad)
    { pregunta: 'for_7',  familia: 'TEC', peso: 0.2 },
    { pregunta: 'for_7',  familia: 'CRE', peso: 1.0 },
    { pregunta: 'for_7',  familia: 'EMP', peso: 0.5 },
    // P8: Me comunico con claridad y respeto. (Comunicación)
    { pregunta: 'for_8',  familia: 'NEG', peso: 0.2 },
    { pregunta: 'for_8',  familia: 'SOC', peso: 0.6 },
    { pregunta: 'for_8',  familia: 'CRE', peso: 0.3 },
    { pregunta: 'for_8',  familia: 'COM', peso: 0.8 },
    { pregunta: 'for_8',  familia: 'EMP', peso: 0.2 },
    // P9: Soy perseverante cuando tengo un objetivo. (Perseverancia)
    { pregunta: 'for_9',  familia: 'TEC', peso: 0.3 },
    { pregunta: 'for_9',  familia: 'NEG', peso: 0.3 },
    { pregunta: 'for_9',  familia: 'SOC', peso: 0.2 },
    { pregunta: 'for_9',  familia: 'PRO', peso: 0.4 },
    { pregunta: 'for_9',  familia: 'EMP', peso: 0.6 },
    // P10: Presto atención a los detalles. (Atención a los detalles)
    { pregunta: 'for_10', familia: 'PRO', peso: 0.8 },
    { pregunta: 'for_10', familia: 'TEC', peso: 0.5 },
    { pregunta: 'for_10', familia: 'NEG', peso: 0.4 },
    // P11: Me siento cómodo utilizando herramientas tecnológicas. (Competencia digital)
    { pregunta: 'for_11', familia: 'TEC', peso: 0.8 },
    { pregunta: 'for_11', familia: 'NEG', peso: 0.2 },
    { pregunta: 'for_11', familia: 'CRE', peso: 0.2 },
    { pregunta: 'for_11', familia: 'PRO', peso: 0.4 },
    // P12: Tengo curiosidad por aprender constantemente. (Curiosidad intelectual)
    { pregunta: 'for_12', familia: 'TEC', peso: 0.6 },
    { pregunta: 'for_12', familia: 'NEG', peso: 0.2 },
    { pregunta: 'for_12', familia: 'SOC', peso: 0.2 },
    { pregunta: 'for_12', familia: 'CRE', peso: 0.2 },
    { pregunta: 'for_12', familia: 'AMB', peso: 0.2 },
    { pregunta: 'for_12', familia: 'PRO', peso: 0.2 },
    { pregunta: 'for_12', familia: 'EMP', peso: 0.2 },
  ],
};

// Pesos por bloque
export const PESOS_BLOQUES = {
  intereses:   0.40,
  actividades: 0.40,
  fortalezas:  0.20,
};

// ============================================================
// BV-004 — MATRIZ DE PERFILES
// ============================================================
export const PERFILES = {
  TEC: { emoji: '🚀', nombre: 'Explorador Tecnológico',     descripcion: 'Tu perfil muestra una fuerte afinidad hacia la tecnología, la innovación y la resolución de problemas complejos. Los programas de ingeniería y tecnología se alinean con tus intereses y fortalezas.' },
  NEG: { emoji: '📈', nombre: 'Estratega de Negocios',      descripcion: 'Tienes habilidades naturales para organizar, gestionar y tomar decisiones estratégicas. Los programas de administración y negocios potenciarán tu perfil profesional.' },
  SOC: { emoji: '🌍', nombre: 'Agente de Cambio',            descripcion: 'Tu vocación está orientada hacia el bienestar de las personas, la educación y el desarrollo social. Los programas de ciencias sociales y educación te permitirán generar un impacto real.' },
  CRE: { emoji: '🎨', nombre: 'Innovador Creativo',          descripcion: 'Tu creatividad y capacidad comunicativa son activos valiosos. Los programas de diseño, comunicación y marketing te permitirán combinar expresión con impacto profesional.' },
  AMB: { emoji: '🌱', nombre: 'Gestor del Territorio',       descripcion: 'Tu interés por el medio ambiente y la sostenibilidad te posiciona en un campo con creciente demanda. Los programas ambientales y de desarrollo sostenible se ajustan a tu perfil.' },
  COM: { emoji: '🤝', nombre: 'Conector Comercial',          descripcion: 'Tu orientación hacia las ventas, el servicio y la negociación te posiciona para roles de alto impacto comercial. Los programas de mercadeo y negocios potenciarán tus habilidades.' },
  PRO: { emoji: '⚙️', nombre: 'Optimizador de Procesos',    descripcion: 'Tu capacidad para analizar, organizar y mejorar procesos es una fortaleza diferenciadora. Los programas de ingeniería industrial y logística se alinean con tu perfil.' },
  EMP: { emoji: '💡', nombre: 'Emprendedor Visionario',     descripcion: 'Tu espíritu emprendedor y capacidad de liderazgo son tus grandes diferenciadores. Los programas de administración y emprendimiento te prepararán para crear y liderar organizaciones.' },
};

// ============================================================
// BV-005 — MATRIZ DE RECOMENDACIÓN ACADÉMICA (MATRIZ OFICIAL BV-004)
// ============================================================
// Estructura: programa, nivel, familiaPrincipal, familiaSecundaria, prioridad, nivelRequerido, estado
export const PROGRAMAS_RECOMENDADOS = [
  // ── PREGRADOS (BV-004 MATRIZ OFICIAL) ──
  { programa: 'ADMINISTRACIÓN DE EMPRESAS',                       nivel: 'Pregrado', familiaPrincipal: 'NEG', familiaSecundaria: 'EMP', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'ADMINISTRACIÓN EN SALUD',                          nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'NEG', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'ADMINISTRACIÓN PÚBLICA',                           nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'NEG', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'COMUNICACIÓN SOCIAL',                              nivel: 'Pregrado', familiaPrincipal: 'CRE', familiaSecundaria: 'COM', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'DERECHO',                                          nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'NEG', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'ECONOMÍA',                                         nivel: 'Pregrado', familiaPrincipal: 'NEG', familiaSecundaria: 'PRO', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'FINANZAS Y NEGOCIOS INTERNACIONALES',              nivel: 'Pregrado', familiaPrincipal: 'COM', familiaSecundaria: 'NEG', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INGENIERÍA DE SISTEMAS',                           nivel: 'Pregrado', familiaPrincipal: 'TEC', familiaSecundaria: 'PRO', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INGENIERÍA DE SOFTWARE',                           nivel: 'Pregrado', familiaPrincipal: 'TEC', familiaSecundaria: 'PRO', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INGENIERÍA INDUSTRIAL',                            nivel: 'Pregrado', familiaPrincipal: 'PRO', familiaSecundaria: 'TEC', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'LICENCIATURA EN CIENCIAS SOCIALES',                nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'LICENCIATURA EN EDUCACIÓN INFANTIL',               nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'MARKETING DE NEGOCIOS',                            nivel: 'Pregrado', familiaPrincipal: 'COM', familiaSecundaria: 'NEG', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'PSICOLOGÍA',                                       nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'COM', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'SEGURIDAD Y SALUD EN EL TRABAJO',                  nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'PRO', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'SOCIOLOGÍA',                                       nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'TECNOLOGÍA EN GESTIÓN DE TALENTO HUMANO',          nivel: 'Pregrado', familiaPrincipal: 'NEG', familiaSecundaria: 'SOC', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'TECNOLOGÍA EN LOGÍSTICA',                          nivel: 'Pregrado', familiaPrincipal: 'PRO', familiaSecundaria: 'COM', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'TÉCNICO/TECNOLOGÍA EN PRODUCCIÓN DE GANADERÍA SOSTENIBLE', nivel: 'Pregrado', familiaPrincipal: 'AMB', familiaSecundaria: 'EMP', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'ARQUITECTURA',                                     nivel: 'Pregrado', familiaPrincipal: 'CRE', familiaSecundaria: 'AMB', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'COMUNICACIÓN AUDIOVISUAL Y DIGITAL',               nivel: 'Pregrado', familiaPrincipal: 'CRE', familiaSecundaria: 'COM', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'CONTADURÍA PÚBLICA',                               nivel: 'Pregrado', familiaPrincipal: 'NEG', familiaSecundaria: 'PRO', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'DISEÑO DE MODAS',                                  nivel: 'Pregrado', familiaPrincipal: 'CRE', familiaSecundaria: 'EMP', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'DISEÑO GRÁFICO',                                   nivel: 'Pregrado', familiaPrincipal: 'CRE', familiaSecundaria: 'COM', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'ENFERMERÍA',                                       nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'ENTRENAMIENTO DEPORTIVO',                          nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'EMP', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'FISIOTERAPIA',                                     nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INGENIERÍA AMBIENTAL',                             nivel: 'Pregrado', familiaPrincipal: 'AMB', familiaSecundaria: 'TEC', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INGENIERÍA BIOMÉDICA',                             nivel: 'Pregrado', familiaPrincipal: 'TEC', familiaSecundaria: 'SOC', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INGENIERÍA CIVIL',                                 nivel: 'Pregrado', familiaPrincipal: 'PRO', familiaSecundaria: 'AMB', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INGENIERÍA DE MINAS',                              nivel: 'Pregrado', familiaPrincipal: 'AMB', familiaSecundaria: 'PRO', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INGENIERÍA GEOLÓGICA',                             nivel: 'Pregrado', familiaPrincipal: 'AMB', familiaSecundaria: 'PRO', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'INSTRUMENTACIÓN QUIRÚRGICA',                       nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'MEDICINA',                                         nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'TEC', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'MERCADEO Y PUBLICIDAD',                            nivel: 'Pregrado', familiaPrincipal: 'COM', familiaSecundaria: 'CRE', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'NEGOCIOS INTERNACIONALES',                         nivel: 'Pregrado', familiaPrincipal: 'COM', familiaSecundaria: 'NEG', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'ODONTOLOGÍA',                                      nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'OPTOMETRÍA',                                       nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'GASTRONOMÍA Y CULINARIA',                          nivel: 'Pregrado', familiaPrincipal: 'CRE', familiaSecundaria: 'EMP', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'TECNOLOGÍA EN ANIMACIÓN Y POSPRODUCCIÓN AUDIOVISUAL', nivel: 'Pregrado', familiaPrincipal: 'CRE', familiaSecundaria: 'TEC', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'TECNOLOGÍA EN GESTIÓN GASTRONÓMICA',               nivel: 'Pregrado', familiaPrincipal: 'CRE', familiaSecundaria: 'NEG', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'TECNOLOGÍA EN RADIOLOGÍA E IMÁGENES DIAGNÓSTICAS',  nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'TEC', prioridad: 2, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'TERAPIA RESPIRATORIA',                             nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },
  { programa: 'TRABAJO SOCIAL',                                   nivel: 'Pregrado', familiaPrincipal: 'SOC', familiaSecundaria: 'COM', prioridad: 1, nivelRequerido: ['bachiller', 'tecnico', 'tecnologo'], estado: 'Activo' },

  // ── POSGRADOS (CRITERIO GENERAL BV-004) ──
  // Alta Gerencia, Gerencia Financiera, MBA, Inteligencia de Negocios → NEG
  { programa: 'Especialización en Alta Gerencia',                  nivel: 'Posgrado', familiaPrincipal: 'NEG', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Gerencia Financiera',            nivel: 'Posgrado', familiaPrincipal: 'NEG', familiaSecundaria: null,  prioridad: 2, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Maestría en Administración de Empresas MBA',        nivel: 'Posgrado', familiaPrincipal: 'NEG', familiaSecundaria: null,  prioridad: 3, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Inteligencia de Negocios',       nivel: 'Posgrado', familiaPrincipal: 'NEG', familiaSecundaria: null,  prioridad: 4, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Maestría en Inteligencia de Negocios',              nivel: 'Posgrado', familiaPrincipal: 'NEG', familiaSecundaria: null,  prioridad: 5, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Gerencia de Proyectos',          nivel: 'Posgrado', familiaPrincipal: 'NEG', familiaSecundaria: null,  prioridad: 6, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Gerencia de Mercadeo Digital → COM (secundaria: CRE)
  { programa: 'Maestría en Gerencia de Mercadeo Digital',          nivel: 'Posgrado', familiaPrincipal: 'COM', familiaSecundaria: 'CRE', prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Marketing Digital',              nivel: 'Posgrado', familiaPrincipal: 'COM', familiaSecundaria: 'CRE', prioridad: 2, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Analítica de Datos → TEC (secundaria: PRO)
  { programa: 'Maestría en Analítica de Datos',                    nivel: 'Posgrado', familiaPrincipal: 'TEC', familiaSecundaria: 'PRO', prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Analítica y Big Data',           nivel: 'Posgrado', familiaPrincipal: 'TEC', familiaSecundaria: 'PRO', prioridad: 2, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Inteligencia Artificial',        nivel: 'Posgrado', familiaPrincipal: 'TEC', familiaSecundaria: 'PRO', prioridad: 3, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Ciberseguridad',                 nivel: 'Posgrado', familiaPrincipal: 'TEC', familiaSecundaria: 'PRO', prioridad: 4, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Transformación Digital',          nivel: 'Posgrado', familiaPrincipal: 'TEC', familiaSecundaria: 'PRO', prioridad: 5, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Innovación → EMP (secundaria: NEG)
  { programa: 'Maestría en Innovación',                            nivel: 'Posgrado', familiaPrincipal: 'EMP', familiaSecundaria: 'NEG', prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Gestión Ambiental → AMB
  { programa: 'Especialización en Gestión Ambiental',              nivel: 'Posgrado', familiaPrincipal: 'AMB', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Pedagogía, Informática para la Innovación Educativa, Educación para la Innovación Pedagógica → SOC
  { programa: 'Especialización en Pedagogía y Docencia',           nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Informática e Innovación Educativa', nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: null, prioridad: 2, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Maestría en Educación',                             nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 3, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Auditoría en Salud, Epidemiología, Salud Pública, Economía y Gestión de la Salud → SOC
  { programa: 'Especialización en Auditoría en Salud',             nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Maestría en Epidemiología',                         nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 2, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Gestión de la Salud Pública',     nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: null,  prioridad: 3, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Derechos de Autor, Derecho Administrativo, Contratación Pública → SOC (secundaria: NEG)
  { programa: 'Especialización en Derechos de Autor y Propiedad Industrial', nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: 'NEG', prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Derecho Administrativo',         nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: 'NEG', prioridad: 2, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Contratación Pública',           nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: 'NEG', prioridad: 3, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Gestión del Talento Humano → NEG (secundaria: SOC)
  { programa: 'Especialización en Talento Humano',                 nivel: 'Posgrado', familiaPrincipal: 'NEG', familiaSecundaria: 'SOC', prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Maestría en Gestión del Talento Humano',            nivel: 'Posgrado', familiaPrincipal: 'NEG', familiaSecundaria: 'SOC', prioridad: 2, nivelRequerido: ['profesional'], estado: 'Activo' },

  // Otros Posgrados
  { programa: 'Especialización en Gestión de Procesos Logísticos y Redes de Valor', nivel: 'Posgrado', familiaPrincipal: 'PRO', familiaSecundaria: 'NEG', prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Gerencia de la Seguridad y Salud en el Trabajo', nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: 'PRO', prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Dirección y Producción de Contenido Audiovisual', nivel: 'Posgrado', familiaPrincipal: 'CRE', familiaSecundaria: 'COM', prioridad: 1, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Desarrollo Integral de la Infancia y la Adolescencia', nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: null, prioridad: 4, nivelRequerido: ['profesional'], estado: 'Activo' },
  { programa: 'Especialización en Neuropsicología de la Educación',                nivel: 'Posgrado', familiaPrincipal: 'SOC', familiaSecundaria: null, prioridad: 5, nivelRequerido: ['profesional'], estado: 'Activo' }
];

// ─── MENSAJES IPMV (Índice Preparación Modalidad Virtual) ───
export const MENSAJES_IPMV = {
  alto: {
    nivel: 'Alta',
    mensaje: 'Tus respuestas muestran que cuentas con hábitos y habilidades que favorecen el aprendizaje virtual. Continúa fortaleciendo tu organización y aprovechando las herramientas digitales para alcanzar tus metas.',
  },
  medio: {
    nivel: 'Media',
    mensaje: 'Tus respuestas indican que tienes buenas bases para estudiar en modalidad virtual. Con una adecuada planificación y acompañamiento podrás aprovechar al máximo esta modalidad.',
  },
  bajo: {
    nivel: 'Requiere mayor acompañamiento',
    mensaje: 'Tus respuestas muestran algunos aspectos que puedes fortalecer para aprovechar mejor la modalidad virtual, como la organización del tiempo y la constancia. Recuerda que durante tu proceso contarás con acompañamiento para ayudarte a alcanzar tus objetivos.',
  },
};
