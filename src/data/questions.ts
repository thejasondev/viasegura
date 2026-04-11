import type { Question } from "../lib/types";

export const questions: Question[] = [
  // ============================================
  // MÓDULO 1: Disposiciones Generales
  // ============================================
  {
    id: "q1-01",
    moduleId: "mod-1",
    difficulty: "easy",
    tags: ["ley", "general"],
    text: "¿Cómo se conoce la Ley No. 109 de Cuba?",
    options: [
      "Código Penal",
      "Código de Seguridad Vial",
      "Ley de Tránsito Vehicular",
      "Código de Circulación",
    ],
    correctIndex: 1,
    explanation:
      "La Ley No. 109 es oficialmente conocida como el Código de Seguridad Vial, aprobada en 2010.",
    relatedArticle: "Art. 1",
  },
  {
    id: "q1-02",
    moduleId: "mod-1",
    difficulty: "easy",
    tags: ["ley", "general"],
    text: "¿En qué año fue aprobada la Ley 109?",
    options: ["2005", "2008", "2010", "2015"],
    correctIndex: 2,
    explanation:
      "La Ley 109 fue aprobada el 1 de agosto de 2010 por la Asamblea Nacional del Poder Popular.",
  },
  {
    id: "q1-03",
    moduleId: "mod-1",
    difficulty: "easy",
    tags: ["definiciones"],
    text: "¿Qué es una vía pública según la Ley 109?",
    options: [
      "Solo las autopistas",
      "Toda carretera, calle o espacio destinado al tránsito",
      "Solo las calles de la ciudad",
      "Las carreteras entre provincias",
    ],
    correctIndex: 1,
    explanation:
      "Vía pública es toda carretera, calle, avenida, camino u otro espacio destinado al tránsito de vehículos, peatones o animales.",
  },
  {
    id: "q1-04",
    moduleId: "mod-1",
    difficulty: "medium",
    tags: ["definiciones"],
    text: "¿Quiénes se consideran peatones según la ley?",
    options: [
      "Solo las personas que caminan",
      "Personas a pie, en sillas de ruedas y con coches de bebé",
      "Solo adultos que caminan",
      "Personas que no tienen vehículo",
    ],
    correctIndex: 1,
    explanation:
      "Peatón es la persona que transita a pie, incluyendo quienes usan sillas de ruedas o coches de bebé.",
  },
  {
    id: "q1-05",
    moduleId: "mod-1",
    difficulty: "medium",
    tags: ["autoridades"],
    text: "¿Qué autoridad es el órgano rector en materia de seguridad vial en Cuba?",
    options: [
      "Ministerio de Transporte",
      "Policía Nacional Revolucionaria",
      "Ministerio del Interior (MININT)",
      "Ministerio de Salud",
    ],
    correctIndex: 2,
    explanation:
      "El Ministerio del Interior, a través de la Dirección de Tránsito, es el órgano rector en seguridad vial.",
  },
  {
    id: "q1-06",
    moduleId: "mod-1",
    difficulty: "hard",
    tags: ["autoridades", "prioridad"],
    text: "Las indicaciones de un agente de tránsito prevalecen sobre:",
    options: [
      "Nada, las señales siempre tienen prioridad",
      "Solo sobre los semáforos",
      "Los semáforos, señales verticales y marcas viales",
      "Solo sobre las marcas viales",
    ],
    correctIndex: 2,
    explanation:
      "Las indicaciones del agente de tránsito prevalecen sobre cualquier otra señalización: semáforos, señales verticales y marcas viales.",
  },
  {
    id: "q1-07",
    moduleId: "mod-1",
    difficulty: "easy",
    tags: ["definiciones"],
    text: "¿Qué es la calzada?",
    options: [
      "La acera",
      "La parte de la vía destinada a la circulación de vehículos",
      "El carril de bicicletas",
      "La zona de estacionamiento",
    ],
    correctIndex: 1,
    explanation:
      "La calzada es la parte de la vía destinada a la circulación de vehículos.",
  },
  {
    id: "q1-08",
    moduleId: "mod-1",
    difficulty: "easy",
    tags: ["definiciones"],
    text: "¿Qué es un carril?",
    options: [
      "Una vía rápida",
      "Una franja longitudinal con ancho suficiente para una fila de vehículos",
      "Una acera ancha",
      "Una zona de estacionamiento",
    ],
    correctIndex: 1,
    explanation:
      "Carril es la franja longitudinal de la calzada con ancho suficiente para la circulación de una fila de vehículos.",
  },
  {
    id: "q1-09",
    moduleId: "mod-1",
    difficulty: "medium",
    tags: ["general"],
    text: "¿A quiénes aplica la Ley 109?",
    options: [
      "Solo a conductores cubanos",
      "Solo a vehículos de motor",
      "A todas las personas nacionales y extranjeras que transiten por las vías",
      "Solo a los vehículos comerciales",
    ],
    correctIndex: 2,
    explanation:
      "La ley aplica a todas las personas, nacionales y extranjeras, que transiten por las vías públicas de Cuba.",
  },
  {
    id: "q1-10",
    moduleId: "mod-1",
    difficulty: "easy",
    tags: ["definiciones"],
    text: "¿Qué es una intersección?",
    options: [
      "Una curva peligrosa",
      "El área donde dos o más vías se cruzan al mismo nivel",
      "Un puente",
      "Un túnel",
    ],
    correctIndex: 1,
    explanation:
      "Una intersección es el área donde dos o más vías se cruzan al mismo nivel.",
  },
  // -- Nuevas Añadidas --
  {
    id: "q1-11",
    moduleId: "mod-1",
    difficulty: "medium",
    tags: ["ley", "conceptos"],
    text: 'Legalmente y según la Ley 109, ¿a qué tipo de conductor se le define como "Conductor Novel"?',
    options: [
      "A los conductores menores de 20 años de edad.",
      "A los que nunca han tenido multas de tránsito.",
      "A los que poseen una experiencia menor a 2 años desde la expedición de su licencia.",
      "A los conductores de rastras.",
    ],
    correctIndex: 2,
    explanation:
      "El conductor novel es aquel con hasta dos años de experiencia en la categoría, sujeto a regulaciones más estrictas, como alcohol 0.0.",
  },

  // ============================================
  // MÓDULO 2: Licencia de Conducción
  // ============================================
  {
    id: "q2-01",
    moduleId: "mod-2",
    difficulty: "easy",
    tags: ["categorias"],
    text: "¿Qué categoría de licencia se necesita para conducir una motocicleta?",
    options: ["Categoría B", "Categoría A", "Categoría C", "Categoría F"],
    correctIndex: 1,
    explanation: "La categoría A corresponde a motocicletas y ciclomotores.",
  },
  {
    id: "q2-02",
    moduleId: "mod-2",
    difficulty: "easy",
    tags: ["categorias"],
    text: "¿Cuál es la edad mínima para obtener la licencia categoría B?",
    options: ["16 años", "17 años", "18 años", "21 años"],
    correctIndex: 2,
    explanation:
      "La edad mínima para la categoría B (automóviles) es de 18 años.",
  },
  {
    id: "q2-03",
    moduleId: "mod-2",
    difficulty: "medium",
    tags: ["categorias"],
    text: "¿Qué tipo de vehículos permite conducir la categoría C?",
    options: [
      "Automóviles",
      "Motocicletas",
      "Camiones y vehículos de carga mayor de 3,500 kg",
      "Ómnibus",
    ],
    correctIndex: 2,
    explanation:
      "La categoría C permite conducir camiones y vehículos de carga mayores de 3,500 kg.",
  },
  {
    id: "q2-04",
    moduleId: "mod-2",
    difficulty: "easy",
    tags: ["examen"],
    text: "¿Cuántas preguntas tiene el examen teórico de conducción?",
    options: ["10 preguntas", "15 preguntas", "20 preguntas", "25 preguntas"],
    correctIndex: 2,
    explanation:
      "El examen teórico consta de 20 preguntas de selección múltiple.",
  },
  {
    id: "q2-05",
    moduleId: "mod-2",
    difficulty: "easy",
    tags: ["examen"],
    text: "¿Cuántas respuestas correctas se necesitan para aprobar el examen teórico?",
    options: ["10", "12", "14", "16"],
    correctIndex: 2,
    explanation:
      "Se necesitan 14 respuestas correctas (70%) para aprobar el examen teórico.",
  },
  {
    id: "q2-06",
    moduleId: "mod-2",
    difficulty: "medium",
    tags: ["vigencia"],
    text: "¿Cuál es la vigencia de la licencia para conductores menores de 60 años?",
    options: ["5 años", "8 años", "10 años", "15 años"],
    correctIndex: 2,
    explanation:
      "La licencia tiene vigencia de 10 años para conductores menores de 60 años.",
  },
  {
    id: "q2-07",
    moduleId: "mod-2",
    difficulty: "medium",
    tags: ["vigencia"],
    text: "¿Cuál es la vigencia de la licencia para conductores mayores de 60 años?",
    options: ["3 años", "5 años", "7 años", "10 años"],
    correctIndex: 1,
    explanation:
      "Para mayores de 60 años, la vigencia de la licencia se reduce a 5 años.",
  },
  {
    id: "q2-08",
    moduleId: "mod-2",
    difficulty: "easy",
    tags: ["requisitos"],
    text: "Para renovar la licencia se requiere:",
    options: [
      "Solo pagar la tarifa",
      "Un nuevo examen teórico y práctico",
      "Un nuevo examen médico",
      "Nada, se renueva automáticamente",
    ],
    correctIndex: 2,
    explanation:
      "La renovación de la licencia requiere un nuevo examen médico que certifique aptitud para conducir.",
  },
  {
    id: "q2-09",
    moduleId: "mod-2",
    difficulty: "medium",
    tags: ["categorias"],
    text: "¿A qué edad mínima se puede obtener la categoría A (motocicletas)?",
    options: ["14 años", "16 años", "18 años", "21 años"],
    correctIndex: 1,
    explanation:
      "La edad mínima para la categoría A (motocicletas y ciclomotores) es de 16 años.",
  },
  {
    id: "q2-10",
    moduleId: "mod-2",
    difficulty: "hard",
    tags: ["categorias"],
    text: "¿Qué categoría de licencia permite conducir vehículos articulados con remolque?",
    options: ["Categoría C", "Categoría D", "Categoría E", "Categoría F"],
    correctIndex: 2,
    explanation:
      "La categoría E permite conducir vehículos articulados y con remolque.",
  },
  {
    id: "q2-11",
    moduleId: "mod-2",
    difficulty: "medium",
    tags: ["categorias"],
    text: "¿Qué categoría corresponde a ómnibus y transporte de pasajeros?",
    options: ["Categoría B", "Categoría C", "Categoría D", "Categoría E"],
    correctIndex: 2,
    explanation:
      "La categoría D corresponde a ómnibus y vehículos de transporte de pasajeros.",
  },
  {
    id: "q2-12",
    moduleId: "mod-2",
    difficulty: "hard",
    tags: ["infracciones"],
    text: "Conducir con la licencia vencida se considera:",
    options: [
      "No es infracción",
      "Infracción leve",
      "Infracción grave",
      "Infracción muy grave",
    ],
    correctIndex: 2,
    explanation:
      "Conducir con licencia vencida constituye una infracción grave según la Ley 109.",
  },
  {
    id: "q2-13",
    moduleId: "mod-2",
    difficulty: "medium",
    tags: ["categorias"],
    text: "¿Qué incluye la categoría F de licencia?",
    options: [
      "Vehículos deportivos",
      "Taxis y transporte público",
      "Maquinaria agrícola y equipos especiales",
      "Vehículos blindados",
    ],
    correctIndex: 2,
    explanation:
      "La categoría F corresponde a maquinaria agrícola y equipos especiales, con edad mínima de 18 años.",
  },
  // -- Nuevas Añadidas --
  {
    id: "q2-14",
    moduleId: "mod-2",
    difficulty: "medium",
    tags: ["licencia", "vehiculos", "motorina"],
    text: 'En la actualidad, ¿qué categoría de licencia es indispensable poseer para circular legalmente por la vía pública con una "motorina" (ciclomotor eléctrico o de combustión)?',
    options: [
      "Categoría A",
      "Categoría A-1",
      "Categoría B",
      "No requieren licencia",
    ],
    correctIndex: 1,
    explanation:
      "La actual regulación exige portar la subcategoría A-1 para ciclomotores (motorinas).",
  },

  // ============================================
  // MÓDULO 3: Normas de Circulación
  // ============================================
  {
    id: "q3-01",
    moduleId: "mod-3",
    difficulty: "easy",
    tags: ["circulacion"],
    text: "¿Por qué lado de la calzada se debe circular?",
    options: [
      "Por la izquierda",
      "Por el centro",
      "Por la derecha",
      "Por cualquier lado",
    ],
    correctIndex: 2,
    explanation:
      "En Cuba se circula siempre por el lado derecho de la calzada.",
  },
  {
    id: "q3-02",
    moduleId: "mod-3",
    difficulty: "easy",
    tags: ["velocidad"],
    text: "¿Cuál es la velocidad máxima en zona urbana?",
    options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    correctIndex: 2,
    explanation: "La velocidad máxima en zona urbana es de 50 km/h.",
  },
  {
    id: "q3-03",
    moduleId: "mod-3",
    difficulty: "easy",
    tags: ["velocidad"],
    text: "¿Cuál es la velocidad máxima en autopista?",
    options: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"],
    correctIndex: 2,
    explanation:
      "La velocidad máxima en autopista para ligeros es de 100 km/h.",
  },
  {
    id: "q3-04",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["velocidad"],
    text: "¿Cuál es la velocidad máxima en zonas escolares?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correctIndex: 2,
    explanation:
      "La velocidad máxima en zonas escolares y hospitalarias, y transportes masivos de personal, es de 40 km/h (y 30 km/h de cruce estricto en horario escolar).",
  },
  {
    id: "q3-05",
    moduleId: "mod-3",
    difficulty: "easy",
    tags: ["velocidad"],
    text: "¿Cuál es la velocidad máxima en carreteras rurales?",
    options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
    correctIndex: 3,
    explanation:
      "La velocidad máxima para vehículos ligeros en carreteras rurales (fuera de ciudad, no autopista) es de 90 km/h.",
  },
  {
    id: "q3-06",
    moduleId: "mod-3",
    difficulty: "easy",
    tags: ["adelantamiento"],
    text: "¿Por qué lado se debe adelantar?",
    options: [
      "Por la derecha",
      "Por la izquierda",
      "Por cualquier lado",
      "Depende de la vía",
    ],
    correctIndex: 1,
    explanation:
      "El adelantamiento se realiza siempre por el lado izquierdo del vehículo que se adelanta.",
  },
  {
    id: "q3-07",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["adelantamiento"],
    text: "¿Qué indica una línea central continua?",
    options: [
      "Puede adelantar",
      "Prohibido adelantar o cruzar",
      "Zona de estacionamiento",
      "Cambio de carril permitido",
    ],
    correctIndex: 1,
    explanation:
      "La línea central continua indica que está prohibido cruzar o adelantar.",
  },
  {
    id: "q3-08",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["adelantamiento"],
    text: "¿En cuál de estos lugares está prohibido adelantar?",
    options: [
      "En una recta con buena visibilidad",
      "En una curva con poca visibilidad",
      "En una autopista de varios carriles",
      "En una vía con línea discontinua",
    ],
    correctIndex: 1,
    explanation:
      "Está prohibido adelantar en curvas y pendientes con poca visibilidad.",
  },
  {
    id: "q3-09",
    moduleId: "mod-3",
    difficulty: "easy",
    tags: ["seguridad"],
    text: "¿Es obligatorio el uso del cinturón de seguridad?",
    options: [
      "Solo para el conductor",
      "Solo en autopistas",
      "Para el conductor y todos los pasajeros",
      "Solo en viajes largos",
    ],
    correctIndex: 2,
    explanation:
      "El cinturón de seguridad es obligatorio para el conductor y todos los pasajeros.",
  },
  {
    id: "q3-10",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["distancia"],
    text: "¿Cuál es la regla de distancia de seguimiento en condiciones normales?",
    options: [
      "Regla de 1 segundo",
      "Regla de los 2 segundos",
      "Regla de los 3 segundos",
      "Regla de los 5 segundos",
    ],
    correctIndex: 1,
    explanation:
      "La regla de los 2 segundos indica la distancia mínima de seguimiento en condiciones normales.",
  },
  {
    id: "q3-11",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["distancia"],
    text: "En lluvia o pavimento mojado, la distancia de seguimiento debe ser:",
    options: [
      "Igual a condiciones normales",
      "El doble de lo normal",
      "La mitad de lo normal",
      "Triple de lo normal",
    ],
    correctIndex: 1,
    explanation:
      "En condiciones adversas se debe duplicar la distancia de seguimiento.",
  },
  {
    id: "q3-12",
    moduleId: "mod-3",
    difficulty: "hard",
    tags: ["velocidad"],
    text: "Si una señal de velocidad indica 40 km/h en una zona donde el límite general es 50 km/h, ¿cuál prevalece?",
    options: [
      "El límite general de 50 km/h",
      "La señal de 40 km/h",
      "El que sea mayor",
      "Ninguno, use su criterio",
    ],
    correctIndex: 1,
    explanation:
      "Las señales de velocidad en el tramo (verticales) tienen prioridad sobre los límites generales estipulados en la ley.",
  },
  {
    id: "q3-13",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["adelantamiento"],
    text: "¿Qué debe hacer antes de iniciar un adelantamiento?",
    options: [
      "Sonar la bocina",
      "Activar las luces direccionales",
      "Acelerar bruscamente",
      "Nada especial",
    ],
    correctIndex: 1,
    explanation:
      "Antes de adelantar se deben activar las luces direccionales izquierdas para avisar a los demás conductores.",
  },
  {
    id: "q3-14",
    moduleId: "mod-3",
    difficulty: "hard",
    tags: ["adelantamiento"],
    text: "¿En cuál situación está permitido adelantar?",
    options: [
      "En un puente",
      "En una intersección",
      "En una recta con línea discontinua y buena visibilidad",
      "En un túnel",
    ],
    correctIndex: 2,
    explanation:
      "Se puede adelantar cuando la línea central es discontinua y hay visibilidad.",
  },
  {
    id: "q3-15",
    moduleId: "mod-3",
    difficulty: "easy",
    tags: ["documentos"],
    text: "¿Qué documentos debe llevar siempre el conductor?",
    options: [
      "Solo la licencia",
      "Licencia y documento del vehículo (circulación)",
      "Solo el documento del vehículo",
      "No es necesario llevar ninguno",
    ],
    correctIndex: 1,
    explanation:
      "El conductor debe portar siempre la licencia de conducción y la licencia de circulación del vehículo.",
  },
  {
    id: "q3-16",
    moduleId: "mod-3",
    difficulty: "hard",
    tags: ["velocidad"],
    text: "¿Cuál es la velocidad máxima permitida al dar marcha atrás o salir de un garaje?",
    options: ["10 km/h", "20 km/h", "30 km/h", "40 km/h"],
    correctIndex: 1,
    explanation:
      "La velocidad máxima para dar marcha atrás, salir de garajes o conducir equipos agrícolas en zona urbana es de 20 km/h.",
  },
  {
    id: "q3-17",
    moduleId: "mod-3",
    difficulty: "hard",
    tags: ["estacionamiento"],
    text: "Al estacionar paralelo a la acera, el vehículo no debe separarse a más de:",
    options: ["5 cm", "10 cm", "20 cm", "30 cm"],
    correctIndex: 1,
    explanation:
      "El Artículo 137 establece que los vehículos deben estacionarse paralelos a no más de 10 cm de la acera y a 50 cm de otro vehículo.",
  },
  {
    id: "q3-18",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["estacionamiento"],
    text: "Al estacionar en una pendiente ascendente (subida), ¿qué velocidad debe aplicar luego de apagar el motor?",
    options: ["Reversa", "Neutro", "1ra velocidad", "3ra velocidad"],
    correctIndex: 2,
    explanation:
      "En pendientes ascendentes, debe aplicar 1ra velocidad y girar el timón al contén. En descendentes, debe aplicar reversa.",
  },
  // -- Nuevas Añadidas --
  {
    id: "q3-19",
    moduleId: "mod-3",
    difficulty: "hard",
    tags: ["velocidad", "terraplen"],
    text: "Según la ley vigente, ¿cuál es la velocidad máxima permitida para conducir cualquier vehículo de motor en un camino de tierra o terraplén?",
    options: ["40 km/h", "50 km/h", "60 km/h", "90 km/h"],
    correctIndex: 2,
    explanation:
      "Está prohibido conducir un automóvil a una velocidad mayor de 60 km/h cuando se circula sobre tierra o terraplén por riesgo de deslizamiento y polvo.",
  },
  {
    id: "q3-20",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["velocidad", "tuneles"],
    text: "¿Cuál es la regulación referente a la velocidad para transitar por el interior de un túnel (Ej: Túnel de La Habana)?",
    options: [
      "Velocidad máxima de 40 km/h.",
      "Es libre, dependiendo del tráfico.",
      "Se exige una velocidad mínima obligatoria de 60 km/h.",
      "No se puede sobrepasar los 50 km/h.",
    ],
    correctIndex: 2,
    explanation:
      "Para evitar embotellamientos y gases, en los túneles la velocidad mínima obligatoria es de 60 km/h.",
  },
  {
    id: "q3-21",
    moduleId: "mod-3",
    difficulty: "easy",
    tags: ["reglas", "menores"],
    text: "¿Bajo qué condiciones permite la ley llevar a un menor de 12 años en el asiento del copiloto (delantero)?",
    options: [
      "Solo si usa cinturón de seguridad.",
      "Si viaja en brazos de un adulto.",
      "Bajo ninguna condición, está totalmente prohibido.",
      "Solo en trayectos cortos.",
    ],
    correctIndex: 2,
    explanation:
      "El Artículo 102 prohíbe taxativamente transportar menores de 12 años en los asientos delanteros de los vehículos.",
  },
  {
    id: "q3-22",
    moduleId: "mod-3",
    difficulty: "medium",
    tags: ["reglas", "volante"],
    text: "Mientras el vehículo está en marcha, ¿se permite conducir manteniendo una sola mano apoyada sobre el volante?",
    options: [
      "Sí, si se domina el vehículo.",
      "Sí, a discreción del chofer.",
      "No, excepto para hacer señales de giro, dar marcha atrás o cambios de velocidad.",
      "Sí, solo en rectas.",
    ],
    correctIndex: 2,
    explanation:
      "El conductor está obligado a mantener control con ambas manos, prohibiéndose soltar una mano salvo para acciones mecánicas imprescindibles.",
  },

  // ============================================
  // MÓDULO 4: Señalización Vial y PNR
  // ============================================
  {
    id: "q4-01",
    moduleId: "mod-4",
    difficulty: "easy",
    tags: ["señales", "prohibitivas"],
    text: "¿De qué color es el borde de las señales prohibitivas?",
    options: ["Azul", "Verde", "Rojo", "Amarillo"],
    correctIndex: 2,
    explanation:
      "Las señales prohibitivas son circulares con fondo blanco y borde rojo.",
  },
  {
    id: "q4-02",
    moduleId: "mod-4",
    difficulty: "easy",
    tags: ["señales", "obligatorias"],
    text: "¿De qué color es el fondo de las señales obligatorias?",
    options: ["Rojo", "Blanco", "Azul", "Verde"],
    correctIndex: 2,
    explanation:
      "Las señales obligatorias tienen fondo azul con símbolo blanco.",
  },
  {
    id: "q4-03",
    moduleId: "mod-4",
    difficulty: "easy",
    tags: ["señales", "preventivas"],
    text: "¿Qué forma tienen las señales preventivas o de peligro?",
    options: ["Circular", "Triangular", "Rectangular", "Diamante (rombo)"],
    correctIndex: 3,
    explanation:
      "Las señales preventivas tienen forma de diamante (rombo) con fondo amarillo y símbolo negro.",
  },
  {
    id: "q4-04",
    moduleId: "mod-4",
    difficulty: "easy",
    tags: ["semaforo"],
    text: "¿Qué debe hacer ante un semáforo en rojo?",
    options: [
      "Reducir velocidad y continuar",
      "Detenerse completamente antes de la línea",
      "Pasar si no hay tráfico",
      "Acelerar para pasar rápido",
    ],
    correctIndex: 1,
    explanation:
      "Ante un semáforo en rojo debe detenerse completamente antes de la línea de pare y no avanzar.",
  },
  {
    id: "q4-05",
    moduleId: "mod-4",
    difficulty: "medium",
    tags: ["semaforo"],
    text: "¿Qué significa un semáforo en amarillo fijo?",
    options: [
      "Puede pasar",
      "Precaución: pare si puede hacerlo con seguridad",
      "Equivale a verde",
      "Debe acelerar para pasar",
    ],
    correctIndex: 1,
    explanation:
      "El amarillo fijo indica precaución: debe detenerse si puede hacerlo con seguridad antes de entrar a la intersección.",
  },
  {
    id: "q4-06",
    moduleId: "mod-4",
    difficulty: "medium",
    tags: ["semaforo"],
    text: "¿Qué significa un semáforo rojo intermitente?",
    options: [
      "Precaución y siga",
      "Equivale a una señal de PARE",
      "El semáforo está descompuesto",
      "Velocidad libre",
    ],
    correctIndex: 1,
    explanation:
      "El rojo intermitente equivale a una señal de PARE: deténgase absolutamente y luego ceda el paso.",
  },
  {
    id: "q4-07",
    moduleId: "mod-4",
    difficulty: "medium",
    tags: ["semaforo"],
    text: "¿Qué significa un semáforo amarillo intermitente?",
    options: [
      "Pare completamente",
      "Precaución: reduzca velocidad y cruce con cuidado",
      "Puede pasar sin reducir velocidad",
      "El semáforo no funciona",
    ],
    correctIndex: 1,
    explanation:
      "El amarillo intermitente indica precaución: reduzca la velocidad y cruce con mucho cuidado.",
  },
  {
    id: "q4-08",
    moduleId: "mod-4",
    difficulty: "easy",
    tags: ["marcas"],
    text: "¿Qué indica una línea central discontinua?",
    options: [
      "Prohibido cruzar",
      "Permitido cruzar y adelantar si hay seguridad",
      "Zona de estacionamiento",
      "Carril exclusivo de buses",
    ],
    correctIndex: 1,
    explanation:
      "La línea discontinua indica que está permitido cruzar al carril contrario y adelantar si hay suficiente seguridad.",
  },
  {
    id: "q4-09",
    moduleId: "mod-4",
    difficulty: "medium",
    tags: ["señales", "informativas"],
    text: "¿De qué color son las señales informativas de dirección o servicios?",
    options: [
      "Rojas",
      "Amarillas",
      "Azules",
      "Verdes con texto blanco (o Azules)",
    ],
    correctIndex: 3,
    explanation:
      "Las señales informativas son rectangulares con fondo verde (destinos/autopistas) o azul (servicios).",
  },
  {
    id: "q4-10",
    moduleId: "mod-4",
    difficulty: "medium",
    tags: ["señales"],
    text: "Las señales preventivas (rombos amarillos) sirven para:",
    options: [
      "Prohibir acciones",
      "Obligar al conductor",
      "Advertir de un peligro adelante",
      "Indicar servicios cercanos",
    ],
    correctIndex: 2,
    explanation:
      "Advierten de un peligro o situación especial en la vía para que el conductor tome precauciones.",
  },
  {
    id: "q4-11",
    moduleId: "mod-4",
    difficulty: "hard",
    tags: ["prioridad"],
    text: "¿Cuál es la jerarquía legal correcta de señalización? (de mayor a menor prioridad)",
    options: [
      "Semáforo > Señal > Agente > Marca",
      "Agente PNR > Semáforo > Señal vertical > Marca vial",
      "Señal > Semáforo > Agente > Marca",
      "Marca > Señal > Semáforo > Agente",
    ],
    correctIndex: 1,
    explanation:
      "El Art 62 dicta la jerarquía: Agente de tránsito (1) > Señales Provisionales > Semáforo > Señal vertical > Marcas horizontales (piso).",
  },
  {
    id: "q4-12",
    moduleId: "mod-4",
    difficulty: "easy",
    tags: ["marcas"],
    text: "¿Qué representan las franjas blancas gruesas pintadas transversalmente en la calzada?",
    options: [
      "Zona de estacionamiento",
      "Paso peatonal (cebra)",
      "Carril de bicicletas",
      "Zona de carga",
    ],
    correctIndex: 1,
    explanation:
      "Las franjas blancas tipo cebra representan un paso peatonal, donde los peatones tienen prioridad absoluta.",
  },
  {
    id: "q4-13",
    moduleId: "mod-4",
    difficulty: "medium",
    tags: ["señales", "prohibitivas"],
    text: "¿Qué forma general tienen las señales reglamentarias (prohibitivas y obligatorias)?",
    options: ["Rectangular", "Triangular", "Circular", "Octagonal"],
    correctIndex: 2,
    explanation:
      "Las señales reglamentarias principales tienen forma circular.",
  },
  {
    id: "q4-14",
    moduleId: "mod-4",
    difficulty: "hard",
    tags: ["señales"],
    text: "¿Qué significa una señal circular con fondo blanco, borde rojo y un número (ej. 80) en negro dentro?",
    options: [
      "Distancia al próximo pueblo",
      "Velocidad mínima",
      "Velocidad máxima permitida",
      "Número de la carretera",
    ],
    correctIndex: 2,
    explanation:
      "Indica la prohibición de circular a una velocidad superior al número expresado (Velocidad máxima permitida).",
  },
  {
    id: "q4-15",
    moduleId: "mod-4",
    difficulty: "medium",
    tags: ["semaforo"],
    text: "Las flechas verdes en un semáforo indican:",
    options: [
      "Puede circular en cualquier dirección",
      "Puede avanzar solo en la dirección que apunta la flecha",
      "El semáforo está averiado",
      "Precaución al girar",
    ],
    correctIndex: 1,
    explanation:
      'Las flechas verdes son "semáforos adicionales" que indican permiso para circular exclusivamente hacia donde señalan.',
  },
  // -- Nuevas Añadidas --
  {
    id: "q4-16",
    moduleId: "mod-4",
    difficulty: "easy",
    tags: ["agentes", "prioridad"],
    text: "Si un agente de la PNR está en el centro de una intersección y tiene un brazo levantado verticalmente, ¿qué indica a los conductores?",
    options: [
      "Que pueden avanzar los vehículos de frente.",
      "Señal de Atención/Alto: Obliga a detenerse a todos los usuarios de la vía.",
      "Que deben girar obligatoriamente a la derecha.",
      "Que aumenten la velocidad.",
    ],
    correctIndex: 1,
    explanation:
      "El brazo levantado verticalmente (Art 63) es una orden que obliga a todos los vehículos y peatones a detener su marcha inminentemente.",
  },
  {
    id: "q4-17",
    moduleId: "mod-4",
    difficulty: "medium",
    tags: ["agentes", "jerarquia"],
    text: "Usted llega a un cruce donde el semáforo está iluminado en VERDE, pero un agente de tránsito mediante el silbato (toques cortos) le ordena que se detenga. ¿Qué debe hacer?",
    options: [
      "Cruzar la intersección rápido porque el semáforo lo ampara.",
      "Detenerse inmediatamente, porque la orden del agente prevalece sobre el semáforo.",
      "Tocar el claxon para advertir al agente.",
      "Desviarse hacia la acera.",
    ],
    correctIndex: 1,
    explanation:
      "En la jerarquía del tránsito de la Ley 109, las órdenes corporales o acústicas de los agentes (PNR) anulan y prevalecen sobre el semáforo.",
  },
  {
    id: "q4-18",
    moduleId: "mod-4",
    difficulty: "hard",
    tags: ["agentes"],
    text: "Un agente de tránsito en el medio de la vía extiende ambos brazos horizontalmente. ¿Quiénes deben detenerse?",
    options: [
      "Absolutamente todos los vehículos.",
      "Los vehículos que circulan por los flancos laterales del agente.",
      "Los vehículos que se encuentran de frente y a espalda del agente.",
      "Nadie, es señal de vía libre.",
    ],
    correctIndex: 2,
    explanation:
      'Los brazos extendidos obligan a detenerse a quienes "cortan" la línea de los brazos (los de frente y los que vienen a su espalda).',
  },

  // ============================================
  // MÓDULO 5: Intersecciones y Prioridad
  // ============================================
  {
    id: "q5-01",
    moduleId: "mod-5",
    difficulty: "easy",
    tags: ["prioridad"],
    text: "En una intersección de 4 vías sin semáforo, sin agente y sin ninguna señal, ¿quién tiene el derecho de vía?",
    options: [
      "El que va más rápido",
      "El vehículo de carga pesada",
      "El vehículo que se aproxima por su lado derecho",
      "El vehículo que se aproxima por su lado izquierdo",
    ],
    correctIndex: 2,
    explanation:
      "En una intersección sin señalización, se aplica la norma universal de prioridad: ceder el paso al vehículo que se aproxima por su lado DERECHO.",
  },
  {
    id: "q5-02",
    moduleId: "mod-5",
    difficulty: "easy",
    tags: ["prioridad", "emergencia"],
    text: "¿Qué vehículos tienen prioridad absoluta de paso, incluso saltándose semáforos con precaución?",
    options: [
      "Los taxis",
      "Los ómnibus",
      "Los vehículos de emergencia (Bomberos, SIUM, PNR) con sirena y balizas encendidas",
      "Los vehículos de turismo",
    ],
    correctIndex: 2,
    explanation:
      "Los vehículos de emergencia en servicio urgente (sirena y luces activas) tienen prioridad absoluta sobre el resto del tráfico.",
  },
  {
    id: "q5-03",
    moduleId: "mod-5",
    difficulty: "easy",
    tags: ["pare"],
    text: "¿Qué debe hacer obligatoriamente ante una señal vertical de PARE (octágono rojo)?",
    options: [
      "Reducir velocidad y si no viene nadie, continuar sin detenerse",
      "Detenerse completamente siempre, y ceder el paso",
      "Tocar bocina y pasar",
      "Ceder el paso solo a la derecha",
    ],
    correctIndex: 1,
    explanation:
      "Ante una señal de PARE es obligatorio detener la marcha del vehículo por completo (las 4 ruedas detenidas), revisar y luego continuar.",
  },
  {
    id: "q5-04",
    moduleId: "mod-5",
    difficulty: "medium",
    tags: ["ceda"],
    text: "¿Qué indica la señal de CEDA EL PASO (triángulo invertido)?",
    options: [
      "Detenerse completamente siempre",
      "Reducir velocidad, observar y ceder el paso si hay tránsito; detenerse solo si es necesario",
      "Acelerar para ganar el cruce",
      "Vía exclusiva",
    ],
    correctIndex: 1,
    explanation:
      "A diferencia del PARE, el CEDA EL PASO permite continuar sin detenerse a cero si la vía transversal está completamente libre, previa reducción de velocidad.",
  },
  {
    id: "q5-05",
    moduleId: "mod-5",
    difficulty: "medium",
    tags: ["rotonda"],
    text: "Al llegar a una rotonda o glorieta, ¿quién tiene la prioridad de paso?",
    options: [
      "El que entra a la rotonda",
      "Los vehículos que ya circulan DENTRO de ella",
      "El vehículo de mayor tonelaje",
      "El que viene por la derecha siempre",
    ],
    correctIndex: 1,
    explanation:
      "En las rotondas, la preferencia de paso la tienen los vehículos que ya se encuentran circulando dentro de la intersección giratoria.",
  },
  {
    id: "q5-06",
    moduleId: "mod-5",
    difficulty: "medium",
    tags: ["rotonda"],
    text: "¿En qué sentido se circula dentro de una rotonda en Cuba?",
    options: [
      "En sentido de las manecillas del reloj",
      "En sentido contrario a las manecillas del reloj (hacia la derecha)",
      "En cualquier sentido",
      "Hacia la izquierda",
    ],
    correctIndex: 1,
    explanation:
      "Se debe entrar girando hacia la derecha, transitando en sentido contrario a las manecillas del reloj.",
  },
  {
    id: "q5-07",
    moduleId: "mod-5",
    difficulty: "easy",
    tags: ["emergencia"],
    text: "Al escuchar la sirena de una ambulancia acercándose detrás de usted, ¿cuál es su obligación legal?",
    options: [
      "Acelerar para no estorbar",
      "Arrimarse al borde derecho de la vía y detenerse si es necesario",
      "Seguirlo para aprovechar que abre el tráfico",
      "Frenar bruscamente en el centro",
    ],
    correctIndex: 1,
    explanation:
      "El Art 67 dicta que al escuchar sirenas de emergencia, se debe arrimar el vehículo al borde derecho de la calzada y detener la marcha.",
  },
  {
    id: "q5-08",
    moduleId: "mod-5",
    difficulty: "hard",
    tags: ["emergencia"],
    text: '¿Se le permite a un auto particular circular "a la cola" de una ambulancia en emergencia para avanzar más rápido?',
    options: [
      "Sí, si mantiene distancia",
      "No, está estrictamente prohibido seguir a un vehículo de emergencia",
      "Solo si lleva las luces intermitentes puestas",
      "Sí, en zonas rurales",
    ],
    correctIndex: 1,
    explanation:
      "Seguir o aprovechar el despeje de un vehículo de emergencia constituye una infracción muy peligrosa.",
  },
  // -- Nuevas Añadidas --
  {
    id: "q5-09",
    moduleId: "mod-5",
    difficulty: "hard",
    tags: ["prioridad", "tierra"],
    text: "Usted transita por un camino de tierra (terraplén) y llega a un cruce con una carretera asfaltada (pavimentada). Ninguna vía tiene señal de Pare. ¿Quién tiene la preferencia?",
    options: [
      "El que circula por el camino de tierra.",
      "El que circula por la carretera pavimentada.",
      "El que vaya a mayor velocidad.",
      "Rige la prioridad por la derecha, sin importar el pavimento.",
    ],
    correctIndex: 1,
    explanation:
      "El Artículo 79 establece claramente que quien transita por una vía no pavimentada (tierra) debe ceder el paso a los vehículos que se aproximan por la vía pavimentada.",
  },

  // ============================================
  // MÓDULO 6: Peatones y Ciclistas
  // ============================================
  {
    id: "q6-01",
    moduleId: "mod-6",
    difficulty: "easy",
    tags: ["peatones"],
    text: "¿Dónde tienen la prioridad absoluta los peatones frente a los vehículos?",
    options: [
      "En toda la calzada",
      "En los pasos peatonales demarcados (cebras)",
      "En las esquinas sin señalizar",
      "En las autopistas",
    ],
    correctIndex: 1,
    explanation:
      "Los peatones tienen prioridad total y los conductores deben detenerse cuando un peatón pone un pie en un paso de cebra.",
  },
  {
    id: "q6-02",
    moduleId: "mod-6",
    difficulty: "medium",
    tags: ["peatones"],
    text: "En una carretera rural donde NO existen aceras ni paseos, ¿por dónde están obligados a caminar los peatones?",
    options: [
      "Por la extrema derecha",
      "Por el centro",
      "Por la extrema izquierda (de frente al tránsito vehicular)",
      "En zigzag",
    ],
    correctIndex: 2,
    explanation:
      "El Art 144 obliga a caminar por la izquierda en vías sin aceras para que el peatón pueda ver de frente a los vehículos que se le acercan.",
  },
  {
    id: "q6-03",
    moduleId: "mod-6",
    difficulty: "easy",
    tags: ["ciclistas"],
    text: "¿Por qué franja de la vía deben circular obligatoriamente los ciclistas?",
    options: [
      "Por la acera",
      "Por el centro de la vía",
      "A no más de 1 metro del contén o borde derecho (o por ciclovías)",
      "Por el carril izquierdo",
    ],
    correctIndex: 2,
    explanation:
      "Los ciclistas deben transitar por la extrema derecha de la calzada o por las vías exclusivas (ciclocarriles).",
  },
  {
    id: "q6-04",
    moduleId: "mod-6",
    difficulty: "medium",
    tags: ["ciclistas"],
    text: "¿Es obligatorio que las bicicletas lleven luces al circular de noche?",
    options: [
      "No es obligatorio si hay alumbrado público",
      "Solo si van por carreteras oscuras",
      "Sí, luz blanca en la parte delantera y roja en la trasera",
      "Solo un reflector basta",
    ],
    correctIndex: 2,
    explanation:
      "Todo ciclo (bicicleta) circulando del anochecer al amanecer debe poseer luz frontal blanca y trasera roja.",
  },
  {
    id: "q6-05",
    moduleId: "mod-6",
    difficulty: "medium",
    tags: ["ciclistas"],
    text: "¿Cómo debe señalizar manualmente un ciclista si desea girar hacia su izquierda?",
    options: [
      "Extendiendo el brazo derecho",
      "Extendiendo el brazo izquierdo horizontalmente",
      "Levantando ambos brazos",
      "Con movimientos de cabeza",
    ],
    correctIndex: 1,
    explanation:
      "Al carecer de luces direccionales, el giro a la izquierda se indica extendiendo el brazo izquierdo.",
  },
  {
    id: "q6-06",
    moduleId: "mod-6",
    difficulty: "easy",
    tags: ["escolar"],
    text: "¿A qué se exponen los conductores en Zonas Escolares?",
    options: [
      "A límites máximos de 60 km/h",
      "A límites máximos de 30 km/h o 40 km/h y a la presencia sorpresiva de niños",
      "A semáforos que siempre están en rojo",
      "A vías de un solo sentido",
    ],
    correctIndex: 1,
    explanation:
      "En las zonas escolares impera la reducción de velocidad (40 km/h y hasta 30 km/h) para proteger a los menores.",
  },
  {
    id: "q6-07",
    moduleId: "mod-6",
    difficulty: "medium",
    tags: ["peatones"],
    text: "Según la ley (Art 146), se le prohíbe terminantemente a los peatones:",
    options: [
      "Caminar acompañados",
      "Cruzar la vía entre dos vehículos estacionados",
      "Usar ropas llamativas",
      "Cruzar por las esquinas",
    ],
    correctIndex: 1,
    explanation:
      "Cruzar irrumpiendo entre vehículos estacionados impide que el conductor en marcha vea al peatón a tiempo, causando atropellos.",
  },
  {
    id: "q6-08",
    moduleId: "mod-6",
    difficulty: "hard",
    tags: ["ciclistas"],
    text: "¿Puede un ciclista circular remolcado o agarrado de un automóvil en movimiento para cansarse menos?",
    options: [
      "Sí, si el auto va despacio",
      "Solo en pendientes muy pronunciadas",
      "No, está prohibido bajo cualquier circunstancia",
      "Sí, si es un auto de un familiar",
    ],
    correctIndex: 2,
    explanation:
      "El Art 112 prohíbe severamente agarrarse a otros vehículos en movimiento por el riesgo mortal de caída o arrastre.",
  },
  // -- Nuevas Añadidas --
  {
    id: "q6-09",
    moduleId: "mod-6",
    difficulty: "hard",
    tags: ["animales", "carretera"],
    text: "Cuando sea indispensable trasladar un rebaño de ganado por una carretera, ¿cuántos conductores se exigen como mínimo y a qué distancia?",
    options: [
      "Un conductor en el medio del rebaño.",
      "Un conductor a 10 metros adelante.",
      "Dos conductores: uno a 100 metros por delante y otro a 100 metros por detrás.",
      "No se exige acompañamiento humano.",
    ],
    correctIndex: 2,
    explanation:
      "Para evitar choques, la Ley 109 exige alertar con 100 metros de anticipación al frente y al fondo del rebaño, usando banderas o luces.",
  },

  // ============================================
  // MÓDULO 7: Infracciones y Sanciones
  // ============================================
  {
    id: "q7-01",
    moduleId: "mod-7",
    difficulty: "easy",
    tags: ["infracciones"],
    text: "Conducir bajo los efectos del alcohol o drogas es catalogado como una infracción:",
    options: [
      "Menos peligrosa (Leve)",
      "Peligrosa (Grave)",
      "Muy peligrosa (Muy Grave) y con posible sanción penal",
      "No es infracción si no causa accidente",
    ],
    correctIndex: 2,
    explanation:
      "Conducir bajo efectos del alcohol atenta contra la vida, siendo de las infracciones más graves y penadas del sistema.",
  },
  {
    id: "q7-02",
    moduleId: "mod-7",
    difficulty: "easy",
    tags: ["infracciones"],
    text: "Violar la luz roja del semáforo, omitiendo la orden de detenerse, se considera:",
    options: [
      "Una infracción de cortesía",
      "Una Infracción Peligrosa",
      "Permitido en madrugadas",
      "Infracción solo para camiones",
    ],
    correctIndex: 1,
    explanation:
      "Saltarse un semáforo rojo es una infracción Peligrosa (gravedad media-alta) penalizada con 8 puntos y 40 pesos.",
  },
  {
    id: "q7-03",
    moduleId: "mod-7",
    difficulty: "medium",
    tags: ["infracciones"],
    text: "El uso del teléfono celular, envío de mensajes o llamadas (sin manos libres) mientras se conduce, es penalizado porque:",
    options: [
      "Gasta mucha batería",
      "Se clasifica como Infracción Peligrosa por alta distracción",
      "Interfiere las radios policiales",
      "Solo molesta a los pasajeros",
    ],
    correctIndex: 1,
    explanation:
      "Las distracciones visuales/manuales son causa directa de accidentes; usar el celular en marcha está tajantemente prohibido.",
  },
  {
    id: "q7-04",
    moduleId: "mod-7",
    difficulty: "medium",
    tags: ["infracciones"],
    text: "Manejar un vehículo sin haber obtenido nunca la licencia de conducción, o estando esta cancelada, es:",
    options: [
      "Permitido si alguien lo acompaña",
      "Infracción Menos Peligrosa",
      "Infracción Muy Peligrosa",
      "Un problema puramente administrativo",
    ],
    correctIndex: 2,
    explanation:
      "Operar equipo automotor sin licencia es una falta Muy Peligrosa (12 puntos) e inmovilización del vehículo.",
  },
  {
    id: "q7-05",
    moduleId: "mod-7",
    difficulty: "hard",
    tags: ["infracciones"],
    text: "Atropellar a alguien y huir del lugar del accidente (darse a la fuga) constituye:",
    options: [
      "Infracción leve",
      "Una estrategia legal",
      "Infracción Muy Peligrosa y un delito de denegación de auxilio",
      "Una falta de cortesía",
    ],
    correctIndex: 2,
    explanation:
      "Huir del lugar agrava el accidente de tránsito convirtiéndolo en un delito contemplado en el Código Penal con privación de libertad.",
  },
  {
    id: "q7-06",
    moduleId: "mod-7",
    difficulty: "easy",
    tags: ["sanciones"],
    text: 'Según el Decreto 287, ¿cuántos puntos resta a la licencia una infracción catalogada como "Muy Peligrosa"?',
    options: ["6 puntos", "8 puntos", "10 puntos", "12 puntos"],
    correctIndex: 3,
    explanation:
      "Las infracciones Muy Peligrosas restan 12 puntos al expediente y conllevan una multa de 60 CUP (o superior actualmente).",
  },
  {
    id: "q7-07",
    moduleId: "mod-7",
    difficulty: "medium",
    tags: ["sanciones"],
    text: "¿Cuál es el tope MÁXIMO de puntos que un Conductor Titular puede acumular en un año antes de que se le suspenda la licencia?",
    options: ["12 puntos", "24 puntos", "36 puntos", "48 puntos"],
    correctIndex: 2,
    explanation:
      "Un conductor titular pierde la licencia administrativamente si acumula más de 36 puntos en un año natural.",
  },
  // -- Nuevas Añadidas --
  {
    id: "q7-08",
    moduleId: "mod-7",
    difficulty: "hard",
    tags: ["alcohol", "penalidades"],
    text: 'Si usted es un chofer profesional (ej. guagüero, taxista estatal) o un "conductor novel", ¿cuál es su límite legal de alcohol permitido en sangre?',
    options: [
      "0.0 (Cero tolerancia absoluta)",
      "0.5 gramos por litro",
      "0.8 gramos por litro",
      "1.0 gramos si no causa accidentes",
    ],
    correctIndex: 0,
    explanation:
      "Conductores profesionales, noveles y de cargas peligrosas tienen tolerancia cero y son penalizados incluso con niveles mínimos de alcohol.",
  },
  {
    id: "q7-09",
    moduleId: "mod-7",
    difficulty: "medium",
    tags: ["sanciones", "alcohol"],
    text: "¿Qué le sucede a un conductor que se NIEGA a realizarse la prueba de alcoholemia solicitada por la PNR?",
    options: [
      "Solo recibe una multa de parqueo.",
      "Tendrá que dejar que el copiloto maneje.",
      "Se le suspende administrativamente la licencia de conducción (y se presume embriaguez).",
      "No pasa nada, es opcional.",
    ],
    correctIndex: 2,
    explanation:
      "La negativa al alcoholímetro es un agravante que conlleva la suspensión automática de la licencia.",
  },
  {
    id: "q7-10",
    moduleId: "mod-7",
    difficulty: "easy",
    tags: ["sanciones", "limites"],
    text: "¿Cuántos puntos máximos se le permiten acumular a un Conductor Novel antes de ser sancionado?",
    options: ["12 puntos", "24 puntos", "36 puntos", "No acumulan puntos"],
    correctIndex: 1,
    explanation:
      "Al ser conductores inexpertos, el límite de tolerancia (Decreto 287) es más bajo: solo 24 puntos anuales.",
  },

  // ============================================
  // MÓDULO 8: Seguridad Técnica y Auxilio (P.A.S)
  // ============================================
  {
    id: "q8-01",
    moduleId: "mod-8",
    difficulty: "easy",
    tags: ["cinturon"],
    text: "¿Para quiénes es obligatorio el uso del cinturón de seguridad en un automóvil?",
    options: [
      "Solo para el chofer",
      "Para el chofer y el copiloto",
      "Para el conductor y absolutamente todos los pasajeros (delanteros y traseros)",
      "Solo para viajes en autopista",
    ],
    correctIndex: 2,
    explanation:
      "El Art 194 exige que todos los ocupantes de un vehículo en marcha hagan uso de los cinturones instalados de fábrica.",
  },
  {
    id: "q8-02",
    moduleId: "mod-8",
    difficulty: "easy",
    tags: ["casco"],
    text: "¿El pasajero que viaja en el asiento trasero de una motocicleta está exento de usar el casco de protección?",
    options: [
      "Sí, solo lo exige para el chofer",
      "No, el casco es obligatorio e indispensable tanto para el conductor como para su pasajero",
      "Sí, si viajan a menos de 40 km/h",
      "Depende del tamaño de la moto",
    ],
    correctIndex: 1,
    explanation:
      "El casco salvavidas es de uso obligatorio para todo el que circule en motocicletas y ciclomotores, sin excepción.",
  },
  {
    id: "q8-03",
    moduleId: "mod-8",
    difficulty: "medium",
    tags: ["primeros_auxilios"],
    text: '¿Qué significa la regla vital "P.A.S" en caso de accidentes de tránsito?',
    options: [
      "Pasar, Acelerar, Seguir",
      "Parar, Atender, Señalizar",
      "Proteger (el lugar), Avisar (a emergencias), Socorrer (a las víctimas)",
      "Proteger, Actuar, Salvar",
    ],
    correctIndex: 2,
    explanation:
      "La secuencia PAS organiza el rescate: Proteger (poner triángulos), Avisar (Llamar ambulancia) y Socorrer en la medida de los conocimientos.",
  },
  {
    id: "q8-04",
    moduleId: "mod-8",
    difficulty: "medium",
    tags: ["primeros_auxilios"],
    text: "Si hay heridos graves tras un choque, ¿se recomienda extraerlos rápidamente del interior de los autos?",
    options: [
      "Sí, siempre, para que respiren mejor",
      "No, no se deben mover los heridos traumáticos a menos que exista peligro inminente de explosión o incendio",
      "Solo si no hay sangre",
      "Sí, para limpiar el asiento",
    ],
    correctIndex: 1,
    explanation:
      "Mover a un accidentado con lesiones espinales puede agravar sus fracturas. Solo se extrae si la vida corre riesgo inminente por fuego u otro vehículo.",
  },
  {
    id: "q8-05",
    moduleId: "mod-8",
    difficulty: "easy",
    tags: ["luces"],
    text: "¿Qué tipo de iluminación es obligatoria encender en el vehículo entre el anochecer y el amanecer?",
    options: [
      "Luces largas siempre",
      "Luces de cruce (bajas) o de carretera (largas) dependiendo de la vía, junto con las traseras de posición rojas",
      "Las luces de niebla amarillas",
      "Las luces intermitentes",
    ],
    correctIndex: 1,
    explanation:
      "De noche es imperativo utilizar el sistema de iluminación principal: luces delanteras que iluminen la calzada y luces rojas que adviertan tu presencia trasera.",
  },
  {
    id: "q8-06",
    moduleId: "mod-8",
    difficulty: "medium",
    tags: ["lluvia", "distancia"],
    text: "Si comienza a llover copiosamente mojando el pavimento, su distancia de seguimiento respecto al auto delantero debe:",
    options: [
      "Mantenerse igual a la regla de los 2 segundos",
      "Acortarse para ver las luces de freno mejor",
      "Duplicarse (aumentar al doble) por el riesgo de derrape y falta de frenado",
      "Reducirse a la mitad",
    ],
    correctIndex: 2,
    explanation:
      "El agua reduce drásticamente el coeficiente de fricción de los neumáticos. Por ende, la distancia de frenado se duplica, debiendo usted separarse más.",
  },
  {
    id: "q8-07",
    moduleId: "mod-8",
    difficulty: "medium",
    tags: ["cinturon", "estadisticas"],
    text: "Según los manuales viales, el uso del cinturón de seguridad reduce el riesgo de muerte en un accidente en aproximadamente un:",
    options: ["10%", "30%", "50%", "90%"],
    correctIndex: 2,
    explanation:
      "El cinturón reduce en un 50% las fatalidades al evitar impactos contra el parabrisas o salir despedido del vehículo.",
  },
  {
    id: "q8-08",
    moduleId: "mod-8",
    difficulty: "medium",
    tags: ["primeros_auxilios", "hemorragia"],
    text: "Al socorrer a una víctima que presenta una fuerte hemorragia (sangrado abundante) en un brazo, su primera acción debe ser:",
    options: [
      "Darle agua fría para evitar desmayos",
      "Aplicar presión directa manual y constante sobre la herida",
      "Realizar un torniquete con una soga",
      "Hacer que mueva el brazo rápidamente",
    ],
    correctIndex: 1,
    explanation:
      "La contención de hemorragias en primeros auxilios se realiza principalmente ejerciendo presión directa con paños limpios sobre el punto sangrante.",
  },
  {
    id: "q8-09",
    moduleId: "mod-8",
    difficulty: "easy",
    tags: ["seguridad", "accesorios"],
    text: "Si sufre una avería técnica en plena calzada (goma ponchada, motor fundido), además de orillarse, usted debe colocar obligatoriamente:",
    options: [
      "Piedras y ramas grandes en la vía",
      "Un cartel de cartón",
      "El triángulo reflectante de advertencia de peligro (señal lumínica o bandera roja)",
      "Una linterna blanca apuntando al cielo",
    ],
    correctIndex: 2,
    explanation:
      "El Art 201 dicta la obligación de portar y utilizar señales triangulares o banderas rojas a 30 metros para evitar ser impactado por otro vehículo.",
  },
  // -- Nuevas Añadidas --
  {
    id: "q8-10",
    moduleId: "mod-8",
    difficulty: "medium",
    tags: ["primeros-auxilios", "accidentes"],
    text: "Usted llega al escenario de un accidente y ve a un motociclista tirado en el suelo adolorido. ¿Qué es lo primero que NO debe hacer bajo ningún concepto?",
    options: [
      "Poner las luces intermitentes de su auto.",
      "Llamar al número de la PNR y al 104.",
      'Quitarle el casco al accidentado "para que entre más aire".',
      "Hablarle para saber si está consciente.",
    ],
    correctIndex: 2,
    explanation:
      "Extraer el casco a un herido sin técnicas médicas en inmovilización de columna puede causar sección de la médula espinal (parálisis o muerte).",
  },
  {
    id: "q8-11",
    moduleId: "mod-8",
    difficulty: "hard",
    tags: ["luces", "distancias"],
    text: "Por ley (Art 184), ¿hasta cuántos metros por delante del vehículo deben proyectar e iluminar correctamente las luces de cruce (cortas) y las luces de carretera (largas) respectivamente?",
    options: [
      "30 metros las cortas y 80 las largas.",
      "40 metros las cortas y 100 las largas.",
      "50 metros las cortas y 150 las largas.",
      "60 metros las cortas y 120 las largas.",
    ],
    correctIndex: 1,
    explanation:
      "El auto pasará la inspección técnica o SOMATON si su luz corta alumbra 40m y su luz larga alcanza los 100m.",
  },
  {
    id: "q8-12",
    moduleId: "mod-8",
    difficulty: "hard",
    tags: ["luces", "deslumbramiento"],
    text: "Al circular de noche con luces altas (largas) y percatarse que otro vehículo viene de frente en sentido opuesto, ¿a qué distancia mínima en metros debe bajar a luz corta para evitar encandilarlo?",
    options: [
      "A 50 metros.",
      "A 100 metros.",
      "A 150 metros.",
      "A 200 metros.",
    ],
    correctIndex: 2,
    explanation:
      "El cambio a luz corta de cruce se estipula a 150 metros de distancia para proteger la retina del conductor que se aproxima.",
  },
  {
    id: "q8-13",
    moduleId: "mod-8",
    difficulty: "medium",
    tags: ["frenado", "seguridad"],
    text: "Según el Art 182 de condiciones técnicas, a una velocidad de 30 km/h en pavimento seco, ¿en qué distancia máxima deben poder detenerse un auto ligero y una moto respectivamente?",
    options: [
      "Autos 5.0m y Motos 4.0m",
      "Autos 7.2m y Motos 7.5m",
      "Autos 10.5m y Motos 11m",
      "Ambos en 15m",
    ],
    correctIndex: 1,
    explanation:
      "La norma establece un límite de 7.2 metros para ligeros y 7.5 metros para motocicletas al frenar a 30 km/h.",
  },
  {
    id: "q8-14",
    moduleId: "mod-8",
    difficulty: "easy",
    tags: ["conductor", "distracciones"],
    text: "En Cuba, ¿está permitido usar equipos de audio y reproductores musicales a alto volumen dentro del vehículo?",
    options: [
      "Sí, el interior del auto es propiedad privada.",
      "Sí, solo los fines de semana.",
      "No, está prohibido usar audio a volúmenes que impidan escuchar el tránsito (sirenas, bocinas) o molesten exteriormente.",
      "Solo fuera de las ciudades.",
    ],
    correctIndex: 2,
    explanation:
      "El Artículo 102 penaliza fuertemente el aislamiento acústico que provocan los equipos de sonido exagerados, ya que suprimen la capacidad de alerta del conductor.",
  },
  {
    id: "q8-15",
    moduleId: "mod-8",
    difficulty: "medium",
    tags: ["alcohol", "medico"],
    text: "Si a un conductor se le realiza la prueba de aliento etílico o alcoholímetro y da un resultado de 150 mg/l (entre 100 y 199), ¿cuál es su diagnóstico?",
    options: [
      "Negativo.",
      "Positivo con riesgo.",
      "Estado de embriaguez.",
      "Embriaguez manifiesta.",
    ],
    correctIndex: 2,
    explanation:
      "El rango de 100 a 199 mg/l en sangre o su equivalente espiratorio se categoriza legal y médicamente como Estado de Embriaguez.",
  },
];

/** Get questions by module */
export function getQuestionsByModule(moduleId: string): Question[] {
  return questions.filter((q) => q.moduleId === moduleId);
}

/** Get all questions */
export function getAllQuestions(): Question[] {
  return questions;
}
