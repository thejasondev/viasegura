// ============================================
// VíaSegura — Traffic Signals Data
// ============================================
import type { TrafficSignal } from '../lib/types';

export const signals: TrafficSignal[] = [
  // Prohibitivas
  { id: 'sp-01', name: 'PARE', category: 'prohibitiva', description: 'Detenerse completamente antes de la línea', meaning: 'El conductor debe detener completamente el vehículo antes de la línea de pare y ceder el paso.', shape: 'octagon', colors: ['red', 'white'], svgIcon: '🛑' },
  { id: 'sp-02', name: 'No Estacionar', category: 'prohibitiva', description: 'Prohibido detenerse o aparcar', meaning: 'No se permite estacionar ni detenerse en esta zona.', shape: 'circle', colors: ['red', 'white', 'blue'], svgIcon: '🚫' },
  { id: 'sp-03', name: 'No Adelantar', category: 'prohibitiva', description: 'Prohibido rebasar al vehículo precedente', meaning: 'Está prohibido adelantar en esta zona. Mantenga su carril.', shape: 'circle', colors: ['red', 'white'], svgIcon: '⛔' },
  { id: 'sp-04', name: 'No Girar a la Izquierda', category: 'prohibitiva', description: 'Prohibido girar a la izquierda', meaning: 'El giro a la izquierda está prohibido en esta intersección.', shape: 'circle', colors: ['red', 'white'], svgIcon: '🚫' },
  { id: 'sp-05', name: 'No Girar a la Derecha', category: 'prohibitiva', description: 'Prohibido girar a la derecha', meaning: 'El giro a la derecha está prohibido en esta intersección.', shape: 'circle', colors: ['red', 'white'], svgIcon: '🚫' },
  { id: 'sp-06', name: 'No Entrar', category: 'prohibitiva', description: 'Prohibido circular en esa dirección', meaning: 'Vía de un sentido. No puede entrar por esta dirección.', shape: 'circle', colors: ['red', 'white'], svgIcon: '⛔' },
  { id: 'sp-07', name: 'Velocidad Máxima 50', category: 'prohibitiva', description: 'No exceder 50 km/h', meaning: 'La velocidad máxima permitida en esta zona es de 50 km/h.', shape: 'circle', colors: ['red', 'white'], svgIcon: '5️⃣0️⃣' },
  { id: 'sp-08', name: 'Velocidad Máxima 30', category: 'prohibitiva', description: 'No exceder 30 km/h', meaning: 'Zona de velocidad reducida. Máximo 30 km/h (zona escolar u hospital).', shape: 'circle', colors: ['red', 'white'], svgIcon: '3️⃣0️⃣' },
  { id: 'sp-09', name: 'No Sonar Bocina', category: 'prohibitiva', description: 'Prohibido usar la bocina', meaning: 'El uso de la bocina está prohibido en esta zona (hospital, residencial).', shape: 'circle', colors: ['red', 'white'], svgIcon: '🔇' },
  { id: 'sp-10', name: 'No Peatones', category: 'prohibitiva', description: 'Prohibido tránsito de peatones', meaning: 'Los peatones no pueden transitar por esta vía (autopista).', shape: 'circle', colors: ['red', 'white'], svgIcon: '🚷' },
  { id: 'sp-11', name: 'No Bicicletas', category: 'prohibitiva', description: 'Prohibido tránsito de bicicletas', meaning: 'Las bicicletas no pueden circular por esta vía.', shape: 'circle', colors: ['red', 'white'], svgIcon: '🚳' },
  { id: 'sp-12', name: 'No Dar Vuelta en U', category: 'prohibitiva', description: 'Prohibido dar vuelta en U', meaning: 'No se permite invertir el sentido de la marcha en este punto.', shape: 'circle', colors: ['red', 'white'], svgIcon: '🚫' },

  // Obligatorias
  { id: 'so-01', name: 'Giro Obligatorio Derecha', category: 'obligatoria', description: 'Debe girar a la derecha', meaning: 'Es obligatorio girar a la derecha en esta intersección.', shape: 'circle', colors: ['blue', 'white'], svgIcon: '➡️' },
  { id: 'so-02', name: 'Giro Obligatorio Izquierda', category: 'obligatoria', description: 'Debe girar a la izquierda', meaning: 'Es obligatorio girar a la izquierda en esta intersección.', shape: 'circle', colors: ['blue', 'white'], svgIcon: '⬅️' },
  { id: 'so-03', name: 'Circulación Derecha', category: 'obligatoria', description: 'Circular solo por la derecha', meaning: 'Obligatorio mantener la circulación por la derecha (contorno de isleta).', shape: 'circle', colors: ['blue', 'white'], svgIcon: '↩️' },
  { id: 'so-04', name: 'Rotonda', category: 'obligatoria', description: 'Circulación obligatoria en rotonda', meaning: 'Indica entrada a rotonda. Ceda el paso y circule en sentido contrario a las manecillas del reloj.', shape: 'circle', colors: ['blue', 'white'], svgIcon: '🔄' },
  { id: 'so-05', name: 'Vía Obligatoria Bicicletas', category: 'obligatoria', description: 'Carril exclusivo para bicicletas', meaning: 'Las bicicletas deben circular obligatoriamente por esta vía.', shape: 'circle', colors: ['blue', 'white'], svgIcon: '🚲' },
  { id: 'so-06', name: 'Vía Peatonal', category: 'obligatoria', description: 'Vía exclusiva para peatones', meaning: 'Esta vía es exclusiva para el tránsito de peatones.', shape: 'circle', colors: ['blue', 'white'], svgIcon: '🚶' },

  // Preventivas
  { id: 'sv-01', name: 'Curva Peligrosa Derecha', category: 'preventiva', description: 'Curva cerrada a la derecha', meaning: 'Precaución, curva peligrosa a la derecha. Reduzca velocidad.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '↪️' },
  { id: 'sv-02', name: 'Curva Peligrosa Izquierda', category: 'preventiva', description: 'Curva cerrada a la izquierda', meaning: 'Precaución, curva peligrosa a la izquierda. Reduzca velocidad.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '↩️' },
  { id: 'sv-03', name: 'Intersección', category: 'preventiva', description: 'Cruce de vías próximo', meaning: 'Se aproxima un cruce de vías. Extreme precaución y ceda el paso si corresponde.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '✚' },
  { id: 'sv-04', name: 'Paso Peatonal', category: 'preventiva', description: 'Zona de cruce de peatones', meaning: 'Paso de peatones adelante. Reduzca velocidad y ceda el paso.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '🚶' },
  { id: 'sv-05', name: 'Zona Escolar', category: 'preventiva', description: 'Proximidad de escuela', meaning: 'Zona escolar adelante. Velocidad máxima 30 km/h. Extreme precaución.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '🏫' },
  { id: 'sv-06', name: 'Animales en la Vía', category: 'preventiva', description: 'Posible cruce de animales', meaning: 'Posible presencia de animales en la vía. Esté atento.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '🐄' },
  { id: 'sv-07', name: 'Pendiente Peligrosa', category: 'preventiva', description: 'Descenso pronunciado adelante', meaning: 'Pendiente peligrosa adelante. Use freno motor y reduzca velocidad.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '⬇️' },
  { id: 'sv-08', name: 'Pavimento Resbaladizo', category: 'preventiva', description: 'Superficie con riesgo de deslizamiento', meaning: 'Pavimento puede estar resbaladizo. Extreme precaución, especialmente con lluvia.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '💧' },
  { id: 'sv-09', name: 'Obras en la Vía', category: 'preventiva', description: 'Trabajos de construcción adelante', meaning: 'Obras en la vía adelante. Reduzca velocidad y siga indicaciones.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '🚧' },
  { id: 'sv-10', name: 'Doble Circulación', category: 'preventiva', description: 'Vía de doble sentido adelante', meaning: 'La vía se convierte en doble sentido. Circule por la derecha.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '↕️' },
  { id: 'sv-11', name: 'Paso a Nivel', category: 'preventiva', description: 'Cruce de ferrocarril adelante', meaning: 'Cruce de ferrocarril adelante. Extreme precaución y deténgase si es necesario.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '🚂' },
  { id: 'sv-12', name: 'Estrechamiento', category: 'preventiva', description: 'La vía se estrecha', meaning: 'La calzada se estrecha adelante. Circule con precaución.', shape: 'diamond', colors: ['yellow', 'black'], svgIcon: '↔️' },

  // Informativas
  { id: 'si-01', name: 'Hospital', category: 'informativa', description: 'Centro de salud cercano', meaning: 'Indica la proximidad de un hospital o centro de salud.', shape: 'rectangle', colors: ['blue', 'white'], svgIcon: '🏥' },
  { id: 'si-02', name: 'Gasolinera', category: 'informativa', description: 'Estación de servicio', meaning: 'Estación de servicio (gasolinera) próxima.', shape: 'rectangle', colors: ['blue', 'white'], svgIcon: '⛽' },
  { id: 'si-03', name: 'Estacionamiento', category: 'informativa', description: 'Zona de aparcamiento', meaning: 'Estacionamiento permitido en la zona indicada.', shape: 'rectangle', colors: ['blue', 'white'], svgIcon: '🅿️' },
  { id: 'si-04', name: 'Restaurante', category: 'informativa', description: 'Servicio de alimentación', meaning: 'Servicio de restaurante o alimentación cercano.', shape: 'rectangle', colors: ['blue', 'white'], svgIcon: '🍽️' },
  { id: 'si-05', name: 'Información Turística', category: 'informativa', description: 'Punto de información', meaning: 'Punto de información turística disponible.', shape: 'rectangle', colors: ['blue', 'white'], svgIcon: 'ℹ️' },
  { id: 'si-06', name: 'Teléfono', category: 'informativa', description: 'Teléfono público', meaning: 'Teléfono público disponible cerca.', shape: 'rectangle', colors: ['blue', 'white'], svgIcon: '📞' },
  { id: 'si-07', name: 'Dirección a Ciudad', category: 'informativa', description: 'Indica dirección y distancia', meaning: 'Señal de dirección que indica el camino a una ciudad con distancia en km.', shape: 'rectangle', colors: ['green', 'white'], svgIcon: '🏙️' },
  { id: 'si-08', name: 'Número de Ruta', category: 'informativa', description: 'Identifica la carretera', meaning: 'Indica el número de ruta o carretera por la que circula.', shape: 'rectangle', colors: ['green', 'white'], svgIcon: '🛣️' },

  // Transitorias
  { id: 'st-01', name: 'Desvío', category: 'transitoria', description: 'Desvío por obras', meaning: 'Desvío temporal por obras. Siga las indicaciones.', shape: 'diamond', colors: ['orange', 'black'], svgIcon: '🔶' },
  { id: 'st-02', name: 'Hombres Trabajando', category: 'transitoria', description: 'Trabajadores en la vía', meaning: 'Precaución, personal trabajando en la vía. Reduzca velocidad.', shape: 'diamond', colors: ['orange', 'black'], svgIcon: '👷' },
  { id: 'st-03', name: 'Carril Cerrado', category: 'transitoria', description: 'Un carril está cerrado', meaning: 'Uno de los carriles está cerrado temporalmente. Cambie de carril con anticipación.', shape: 'diamond', colors: ['orange', 'black'], svgIcon: '🚧' },
];

export const signalCategories = [
  { id: 'all', label: 'Todas', icon: '📋', count: signals.length },
  { id: 'prohibitiva', label: 'Prohibitivas', icon: '🔴', count: signals.filter(s => s.category === 'prohibitiva').length },
  { id: 'obligatoria', label: 'Obligatorias', icon: '🔵', count: signals.filter(s => s.category === 'obligatoria').length },
  { id: 'preventiva', label: 'Preventivas', icon: '🟡', count: signals.filter(s => s.category === 'preventiva').length },
  { id: 'informativa', label: 'Informativas', icon: '🟢', count: signals.filter(s => s.category === 'informativa').length },
  { id: 'transitoria', label: 'Transitorias', icon: '🟠', count: signals.filter(s => s.category === 'transitoria').length },
];
