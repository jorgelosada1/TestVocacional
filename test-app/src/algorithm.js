// ============================================================
// ALGORITHM – Motor de cálculo · Brújula Vocacional
// ============================================================
import {
  MATRIZ_PONDERACION, PESOS_BLOQUES, PERFILES,
  PROGRAMAS_POR_UNIVERSIDAD, MENSAJES_IPMV, FAMILIAS,
  PREGUNTAS_FORTALEZAS,
} from './data';

// ─── 1. Calcular puntajes brutos por familia para UN bloque ─
function calcularPuntajeBloque(respuestas, matrizBloque) {
  const scores = { TEC: 0, NEG: 0, SOC: 0, CRE: 0, AMB: 0, COM: 0, PRO: 0, EMP: 0 };
  for (const fila of matrizBloque) {
    const valor = respuestas[fila.pregunta] || 0;
    scores[fila.familia] += valor * fila.peso;
  }
  return scores;
}

// ─── 2. Calcular puntajes finales con pesos por bloque ──────
export function calcularPuntajesFinales(intereses, actividades, fortalezas) {
  const scoresInt = calcularPuntajeBloque(intereses, MATRIZ_PONDERACION.intereses);
  const scoresAct = calcularPuntajeBloque(actividades, MATRIZ_PONDERACION.actividades);
  const scoresFor = calcularPuntajeBloque(fortalezas, MATRIZ_PONDERACION.fortalezas);

  const familias = Object.keys(FAMILIAS);
  const finales = {};

  for (const f of familias) {
    finales[f] =
      (scoresInt[f] * PESOS_BLOQUES.intereses) +
      (scoresAct[f] * PESOS_BLOQUES.actividades) +
      (scoresFor[f] * PESOS_BLOQUES.fortalezas);
  }

  return finales;
}

// ─── 3. Normalizar puntajes a porcentajes ───────────────────
export function normalizarPuntajes(scores) {
  // Calcular máximo teórico por familia
  // Cada bloque: suma de pesos máximos * 5 (valor máximo Likert)
  const maxPorBloque = {};
  for (const bloque of ['intereses', 'actividades', 'fortalezas']) {
    const maxB = { TEC: 0, NEG: 0, SOC: 0, CRE: 0, AMB: 0, COM: 0, PRO: 0, EMP: 0 };
    for (const fila of MATRIZ_PONDERACION[bloque]) {
      maxB[fila.familia] += 5 * fila.peso;
    }
    maxPorBloque[bloque] = maxB;
  }

  const familias = Object.keys(FAMILIAS);
  const porcentajes = {};

  for (const f of familias) {
    const maxTotal =
      (maxPorBloque.intereses[f] * PESOS_BLOQUES.intereses) +
      (maxPorBloque.actividades[f] * PESOS_BLOQUES.actividades) +
      (maxPorBloque.fortalezas[f] * PESOS_BLOQUES.fortalezas);

    porcentajes[f] = maxTotal > 0
      ? Math.round((scores[f] / maxTotal) * 100)
      : 0;
  }

  return porcentajes;
}

// ─── 4. Determinar perfiles (principal, complementario, secundario) ─
export function determinarPerfiles(porcentajes) {
  const sorted = Object.entries(porcentajes)
    .sort(([, a], [, b]) => b - a);

  const principal = sorted[0];
  const complementario = sorted[1];
  const secundario = sorted[2];

  // Regla de empate: si diferencia < 5% entre 1° y 2°, mostrar ambos
  const hayEmpate = (principal[1] - complementario[1]) < 5;

  return {
    principal: { familia: principal[0], porcentaje: principal[1] },
    complementario: { familia: complementario[0], porcentaje: complementario[1] },
    secundario: { familia: secundario[0], porcentaje: secundario[1] },
    hayEmpate,
    todosOrdenados: sorted.map(([familia, porcentaje]) => ({
      familia,
      porcentaje,
      ...PERFILES[familia],
      ...FAMILIAS[familia],
    })),
  };
}

// ─── 5. Clasificar por niveles de afinidad ──────────────────
export function clasificarAfinidad(todosOrdenados) {
  const alta = [];       // 90–100%
  const buena = [];      // 75–89%
  const interes = [];    // 60–74%

  for (const perfil of todosOrdenados) {
    if (perfil.porcentaje >= 90) alta.push(perfil);
    else if (perfil.porcentaje >= 75) buena.push(perfil);
    else if (perfil.porcentaje >= 60) interes.push(perfil);
  }

  return { alta, buena, interes };
}

// ─── 6. Calcular IPMV (Índice Preparación Modalidad Virtual) ─
export function calcularIPMV(respuestasVirtual) {
  const ids = ['vir_1','vir_2','vir_3','vir_4','vir_5','vir_6'];
  const suma = ids.reduce((s, id) => s + (respuestasVirtual[id] || 3), 0);
  const maxPosible = 30; // 6 preguntas × 5
  const porcentaje = Math.round((suma / maxPosible) * 100);

  let nivel;
  if (porcentaje >= 76) nivel = 'alto';
  else if (porcentaje >= 50) nivel = 'medio';
  else nivel = 'bajo';

  return {
    ...MENSAJES_IPMV[nivel],
    nivel,
    porcentaje,
  };
}

// ─── 7. Obtener fortalezas destacadas ───────────────────────
export function obtenerFortalezasDestacadas(respuestasFortalezas) {
  const destacadas = [];
  for (const preg of PREGUNTAS_FORTALEZAS) {
    const valor = respuestasFortalezas[preg.id] || 0;
    if (valor >= 4) {
      destacadas.push(preg.competencia);
    }
  }
  return destacadas;
}

// ─── 8. Filtrar programas según universidad, perfil y nivel educativo ─
const MIN_PROGRAMAS = 3;

export function filtrarProgramas(universidad, familiasOrdenadas, nivelEducativo, hayEmpate) {
  const catalogo = (PROGRAMAS_POR_UNIVERSIDAD[universidad] || [])
    .filter(p => p.estado === 'Activo' && p.nivelRequerido.includes(nivelEducativo));

  const coincide = (p, perfiles) =>
    perfiles.includes(p.familiaPrincipal) ||
    (p.familiaSecundaria && perfiles.includes(p.familiaSecundaria));

  // Perfiles a considerar: principal (+ complementario si hay empate).
  // Si la universidad no ofrece suficientes programas para esos perfiles,
  // se amplía con las siguientes familias de mayor afinidad.
  let cuantos = hayEmpate ? 2 : 1;
  let perfiles = familiasOrdenadas.slice(0, cuantos);
  while (
    cuantos < familiasOrdenadas.length &&
    catalogo.filter(p => coincide(p, perfiles)).length < MIN_PROGRAMAS
  ) {
    cuantos++;
    perfiles = familiasOrdenadas.slice(0, cuantos);
  }

  return catalogo
    .filter(p => coincide(p, perfiles))
    .map(p => {
      // Prioridad interna: la familia principal de la carrera pesa más que la
      // secundaria, y un perfil más afín pesa más que uno menos afín.
      const rankPrincipal = perfiles.indexOf(p.familiaPrincipal);
      const rankSecundaria = p.familiaSecundaria ? perfiles.indexOf(p.familiaSecundaria) : -1;
      const matchScore = Math.min(
        rankPrincipal >= 0 ? rankPrincipal * 2 + 1 : 99,
        rankSecundaria >= 0 ? rankSecundaria * 2 + 2 : 99,
      );
      return { ...p, matchScore };
    })
    .sort((a, b) => {
      // Primero por mejor coincidencia de perfil (matchScore menor es mejor)
      if (a.matchScore !== b.matchScore) {
        return a.matchScore - b.matchScore;
      }
      // Luego por la prioridad oficial del programa
      return a.prioridad - b.prioridad;
    });
}

// ─── 9. Agrupar programas por nivel de afinidad ─────────────
export function agruparProgramasPorAfinidad(programas, percentages) {
  const resultado = {
    alta: [],    // 🟢 90–100%
    buena: [],   // 🟡 75–89%
    interes: [], // 🔵 60–74%
  };

  for (const prog of programas) {
    const pctPrincipal = percentages[prog.familiaPrincipal] || 0;
    const pctSecundaria = prog.familiaSecundaria ? (percentages[prog.familiaSecundaria] || 0) : 0;
    const afinidadPct = Math.max(pctPrincipal, pctSecundaria);

    const progExtended = { ...prog, afinidadPct };

    if (afinidadPct >= 90) resultado.alta.push(progExtended);
    else if (afinidadPct >= 75) resultado.buena.push(progExtended);
    else if (afinidadPct >= 60) resultado.interes.push(progExtended);
    else resultado.interes.push(progExtended); // mostrar de todas formas
  }

  return {
    alta: resultado.alta,
    buena: resultado.buena,
    interes: resultado.interes,
    totalProgramas: programas.length,
  };
}

// ─── 10. Función principal: calcular TODO ───────────────────
export function calcularResultadoCompleto({
  intereses,
  actividades,
  fortalezas,
  virtual,
  nivelEducativo,
  universidad,
}) {
  // 1. Puntajes ponderados
  const puntajes = calcularPuntajesFinales(intereses, actividades, fortalezas);

  // 2. Normalizar a porcentajes
  const porcentajes = normalizarPuntajes(puntajes);

  // 3. Determinar perfiles
  const perfiles = determinarPerfiles(porcentajes);

  // 4. Clasificar afinidad
  const afinidades = clasificarAfinidad(perfiles.todosOrdenados);

  // 5. IPMV
  const ipmv = calcularIPMV(virtual);

  // 6. Fortalezas destacadas
  const fortalezasDestacadas = obtenerFortalezasDestacadas(fortalezas);

  // 7. Programas
  const programasFiltrados = filtrarProgramas(
    universidad,
    perfiles.todosOrdenados.map(p => p.familia),
    nivelEducativo,
    perfiles.hayEmpate,
  );

  // 8. Agrupar por afinidad
  const programasAgrupados = agruparProgramasPorAfinidad(programasFiltrados, porcentajes);

  return {
    puntajes,
    porcentajes,
    perfiles,
    afinidades,
    ipmv,
    fortalezasDestacadas,
    programasFiltrados,
    programasAgrupados,
  };
}
