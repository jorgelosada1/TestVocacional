
export const PREGRADOS = [
  "Trabajo Social", "Derecho", "Licenciatura en Matemáticas", "Licenciatura en Educación Infantil",
  "Licenciatura en Educación Especial", "Mercadeo y Publicidad", "Negocios Internacionales",
  "Administración Financiera", "Administración de Empresas", "Administración en Salud",
  "Seguridad y Salud en el Trabajo", "Contaduría Pública", "Economía", "Ingeniería Industrial",
  "Ingeniería de Sistemas", "Ingeniería de Software", "Psicología", "Comunicación Social",
  "Tecnología Gestión Talento Humano", "Tecnología Logística", "Tecnología Producción Ganadería Sostenible",
  "Marketing de Negocios", "Administración Pública", "Licenciatura en Ciencias Sociales", "Sociología"
];

export const POSGRADOS = [
  "Maestría en Educación", "Maestría en Ambientes Digitales para la Educación",
  "Maestría en Administración de Empresas MBA", "Especialización en Inteligencia de Negocios",
  "Especialización en Gestión de Procesos Logísticos y Redes de Valor",
  "Especialización en Inteligencia Artificial", "Especialización en Gestión de la Salud Pública",
  "Especialización en Gerencia Financiera", "Especialización en Gerencia de la Seguridad y Salud en el Trabajo",
  "Especialización en Desarrollo Integral de la Infancia y la Adolescencia",
  "Especialización en Neuropsicología de la Educación", "Especialización en Ciberseguridad",
  "Especialización en Gerencia de Proyectos", "Especialización en Alta Gerencia",
  "Especialización en Marketing Digital", "Especialización en Analítica y Big Data",
  "Especialización en Auditoría en Salud", "Especialización en Revisoría Fiscal",
  "Especialización en Talento Humano", "Esp. Derechos de Autor y Propiedad Industrial",
  "Esp. Dirección y Producción de Contenido Audiovisual", "Esp. Infancia, Adolescencia y Desarrollo Familiar",
  "Esp. Gestión Ambiental", "Esp. Informática e Innovación Educativa", "Esp. Pedagogía y Docencia",
  "Esp. Revisoría Fiscal y Auditoría Forense", "Maestría en Epidemiología",
  "Maestría en Educación para Innovación Pedagógica", "Maestría en Innovación",
  "Maestría Gerencia de Mercadeo Digital", "Maestría en Analítica de Datos",
  "Maestría en Inteligencia de Negocios", "Maestría en Gestión del Talento Humano"
];

export const SECTIONS = [
  {
    id: "intereses", title: "Intereses vocacionales",
    description: "Indica qué tan de acuerdo estás (1 = muy en desacuerdo, 5 = muy de acuerdo)",
    questions: [
      { id: "i1", text: "Me interesa estudiar algo que me permita conseguir empleo pronto" },
      { id: "i2", text: "Me atraen los programas tecnológicos, de sistemas o digitales" },
      { id: "i3", text: "Me gustaría ayudar a otras personas o comunidades" },
      { id: "i4", text: "Me interesa crear, administrar o fortalecer un negocio propio" },
      { id: "i5", text: "Me llaman la atención los temas ambientales, de territorio o sostenibilidad" },
      { id: "i6", text: "Disfruto organizar información, procesos o actividades de manera estructurada" },
      { id: "i7", text: "Me interesan actividades de servicio, turismo o atención al usuario" },
      { id: "i8", text: "Me atraen las actividades comerciales, logísticas o administrativas" },
    ]
  },
  {
    id: "virtualidad", title: "Condiciones para estudio virtual",
    description: "¿Qué tan bien describes tu situación actual?",
    questions: [
      { id: "v1", text: "Tengo acceso frecuente a internet para estudiar" },
      { id: "v2", text: "Cuento con un dispositivo adecuado (celular, computador o tableta)" },
      { id: "v3", text: "Puedo estudiar de manera autónoma sin apoyo constante" },
      { id: "v4", text: "Tengo tiempo disponible semanal para dedicar al estudio" },
      { id: "v5", text: "Manejo plataformas digitales (correo, aulas virtuales, etc.)" },
      { id: "v6", text: "Prefiero aprendizaje práctico, claro y aplicado" },
    ]
  },
  {
    id: "autoeficacia", title: "Autoeficacia académica",
    description: "¿Cómo te describes a ti mismo/a?",
    questions: [
      { id: "a1", text: "Comprendo textos académicos o instructivos con relativa facilidad" },
      { id: "a2", text: "Puedo expresar mis ideas por escrito de manera clara" },
      { id: "a3", text: "Me organizo bien para cumplir fechas, entregas y compromisos" },
      { id: "a4", text: "Suelo terminar los procesos que empiezo, aunque haya dificultades" },
    ]
  },
  {
    id: "territorio", title: "Pertinencia territorial",
    description: "¿Qué tanto se relaciona esto con tus metas?",
    questions: [
      { id: "t1", text: "Quiero estudiar algo que tenga oportunidades laborales en mi región" },
      { id: "t2", text: "Me gustaría aportar al desarrollo de mi territorio o comunidad" },
      { id: "t3", text: "Prefiero un programa que pueda aplicar en mi contexto actual" },
      { id: "t4", text: "Me interesa que mi formación se relacione con sectores productivos de mi región" },
    ]
  },
  {
    id: "proyecto", title: "Proyecto de vida",
    description: "¿Por qué quieres estudiar?",
    questions: [
      { id: "p1", text: "Estudiar es clave para mejorar mis ingresos" },
      { id: "p2", text: "Quiero cambiar de ocupación o ascender laboralmente" },
      { id: "p3", text: "Quiero apoyar mejor a mi familia, comunidad o territorio" },
      { id: "p4", text: "Estoy dispuesto/a a sostener un proceso de formación si veo utilidad real" },
    ]
  }
];

export const PROFILE_LABELS = {
  tecnologico: "Tecnológico-digital", social: "Social-comunitario",
  emprendedor: "Emprendedor", administrativo: "Administrativo-comercial",
  servicios: "Servicios y turismo", ambiental: "Ambiental-territorial",
};

export const SECTION_ICONS = ["🎯", "💻", "📚", "🌎", "🚀"];



export function getLikertProfile(ans) {
  const i = (id) => ans[id] || 3;
  return {
    tecnologico: (i("i2") + i("i8")) / 2, social: (i("i3") + i("i5")) / 2,
    emprendedor: (i("i4") + i("i7")) / 2, administrativo: (i("i6") + i("i8")) / 2,
    servicios: (i("i7") + i("i1")) / 2, ambiental: (i("i5") + i("i3")) / 2,
  };
}

export function getVirtualViability(ans) {
  const sum = ["v1", "v2", "v3", "v4", "v5", "v6"].reduce((s, k) => s + (ans[k] || 3), 0);
  return sum >= 23 ? "alta" : sum >= 15 ? "media" : "condicionada";
}

export function getAcademiaScore(ans) {
  const sum = ["a1", "a2", "a3", "a4"].reduce((s, k) => s + (ans[k] || 3), 0);
  return sum >= 16 ? "alta" : sum >= 10 ? "media" : "baja";
}

export function getRisk(v, a, p) {
  const sc = { alta: 2, media: 1, condicionada: 0, baja: 0 };
  const total = (sc[v] || 0) + (sc[a] || 0) + (p >= 14 ? 2 : p >= 9 ? 1 : 0);
  return total >= 5 ? "bajo" : total >= 3 ? "medio" : "alto";
}

export function getDominantProfile(profile) {
  return Object.entries(profile).sort((a, b) => b[1] - a[1])[0][0];
}

export function getRecommendedPrograms(profile, nivel) {
  const pool = nivel === "pregrado" ? PREGRADOS : POSGRADOS;
  const top = getDominantProfile(profile);
  const maps = {
    tecnologico: nivel === "pregrado"
      ? ["Ingeniería de Sistemas", "Ingeniería de Software", "Ingeniería Industrial", "Contaduría Pública", "Economía"]
      : ["Especialización en Inteligencia Artificial", "Especialización en Ciberseguridad", "Maestría en Analítica de Datos", "Especialización en Analítica y Big Data", "Maestría en Inteligencia de Negocios"],
    social: nivel === "pregrado"
      ? ["Trabajo Social", "Psicología", "Licenciatura en Educación Infantil", "Licenciatura en Educación Especial", "Sociología"]
      : ["Maestría en Educación", "Especialización en Desarrollo Integral de la Infancia y la Adolescencia", "Esp. Infancia, Adolescencia y Desarrollo Familiar", "Especialización en Neuropsicología de la Educación", "Esp. Pedagogía y Docencia"],
    emprendedor: nivel === "pregrado"
      ? ["Administración de Empresas", "Mercadeo y Publicidad", "Marketing de Negocios", "Negocios Internacionales", "Administración Financiera"]
      : ["Maestría en Administración de Empresas MBA", "Especialización en Gerencia de Proyectos", "Maestría Gerencia de Mercadeo Digital", "Especialización en Marketing Digital", "Especialización en Alta Gerencia"],
    administrativo: nivel === "pregrado"
      ? ["Administración de Empresas", "Contaduría Pública", "Administración Financiera", "Tecnología Gestión Talento Humano", "Administración Pública"]
      : ["Especialización en Gerencia Financiera", "Especialización en Talento Humano", "Especialización en Revisoría Fiscal", "Esp. Revisoría Fiscal y Auditoría Forense", "Maestría en Gestión del Talento Humano"],
    servicios: nivel === "pregrado"
      ? ["Administración en Salud", "Mercadeo y Publicidad", "Comunicación Social", "Tecnología Logística", "Negocios Internacionales"]
      : ["Especialización en Gestión de la Salud Pública", "Especialización en Gestión de Procesos Logísticos y Redes de Valor", "Especialización en Auditoría en Salud", "Especialización en Inteligencia de Negocios", "Maestría en Epidemiología"],
    ambiental: nivel === "pregrado"
      ? ["Trabajo Social", "Licenciatura en Ciencias Sociales", "Tecnología Producción Ganadería Sostenible", "Sociología", "Licenciatura en Educación Especial"]
      : ["Esp. Gestión Ambiental", "Maestría en Educación para Innovación Pedagógica", "Maestría en Innovación", "Maestría en Epidemiología", "Especialización en Desarrollo Integral de la Infancia y la Adolescencia"],
  };
  const preferred = maps[top] || [];
  const matched = preferred.filter(p => pool.some(pp => pp.toLowerCase().includes(p.toLowerCase().split(" ")[0])));
  return matched.length >= 3 ? matched.slice(0, 5) : preferred.slice(0, 5);
}
