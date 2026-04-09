// ============================================
// VíaSegura — Daily Tips & Fun Facts
// ============================================

export interface DailyTip {
  text: string;
  category: 'señales' | 'velocidad' | 'examen' | 'ley' | 'seguridad' | 'curioso';
  icon: string;
}

export const dailyTips: DailyTip[] = [
  // Señales
  { text: 'Las señales con borde rojo circular son siempre prohibitivas o restrictivas.', category: 'señales', icon: '🔴' },
  { text: 'El triángulo invertido con borde rojo es la señal de "Ceda el Paso", la única señal triangular apuntando hacia abajo.', category: 'señales', icon: '🔻' },
  { text: 'La señal de PARE es la única con forma octogonal. Si la ves borrosa o de espaldas, la reconocerás por su forma.', category: 'señales', icon: '🛑' },
  { text: 'Las señales azules con fondo circular son obligatorias: indican lo que DEBES hacer.', category: 'señales', icon: '🔵' },
  { text: 'Las señales amarillas con forma de diamante son preventivas: te advierten de un peligro adelante.', category: 'señales', icon: '⚠️' },
  { text: 'Las señales verdes rectangulares son informativas: te indican direcciones, distancias y servicios.', category: 'señales', icon: '🟢' },

  // Velocidad
  { text: 'El límite de velocidad en zonas escolares y hospitales es de 30 km/h. La multa por excederlo es severa.', category: 'velocidad', icon: '🏫' },
  { text: 'En zonas urbanas, la velocidad máxima general es de 50 km/h salvo señalización contraria.', category: 'velocidad', icon: '🏙️' },
  { text: 'En autopistas cubanas el límite es de 100 km/h para automóviles y 80 km/h para autobuses.', category: 'velocidad', icon: '🛣️' },
  { text: 'Circular demasiado lento también es infracción si obstaculiza el flujo del tránsito.', category: 'velocidad', icon: '🐢' },

  // Examen
  { text: 'En el examen real necesitas 14 de 20 correctas (70%) para aprobar. ¡Practica hasta lograrlo con margen!', category: 'examen', icon: '📝' },
  { text: 'Las preguntas sobre señales de tránsito aparecen en TODOS los exámenes. Domina las prohibitivas.', category: 'examen', icon: '🎯' },
  { text: 'Lee bien cada pregunta completa antes de elegir. Muchos errores son por lectura rápida.', category: 'examen', icon: '👀' },
  { text: 'Si dudas entre dos opciones, descarta las que tienen palabras absolutas como "siempre" o "nunca".', category: 'examen', icon: '🤔' },

  // Ley 109
  { text: 'La Ley 109, Código de Seguridad Vial, fue aprobada el 1 de agosto de 2010.', category: 'ley', icon: '📜' },
  { text: 'Un peatón usando silla de ruedas se considera legalmente peatón, no vehículo.', category: 'ley', icon: '♿' },
  { text: 'El sistema de puntos permite acumular hasta 36 puntos por infracciones. Al llegar a 36, se revoca la licencia.', category: 'ley', icon: '📊' },
  { text: 'Conducir con nivel de alcohol superior a 0.5 g/L en sangre es infracción grave con posible detención.', category: 'ley', icon: '🚫' },

  // Seguridad
  { text: 'La distancia de frenado a 60 km/h en pavimento seco es de aproximadamente 20-25 metros.', category: 'seguridad', icon: '🛞' },
  { text: 'Las luces altas alumbran hasta 200 metros. Debes cambiar a bajas cuando haya vehículo en sentido contrario.', category: 'seguridad', icon: '💡' },
  { text: 'El cinturón de seguridad es obligatorio para el conductor y todos los pasajeros del vehículo.', category: 'seguridad', icon: '🔒' },
  { text: 'Ante un semáforo en amarillo fijo, no debe ingresar a la intersección. Prepárese para detenerse.', category: 'seguridad', icon: '🟡' },
  { text: 'En caso de accidente, primero asegure la zona, luego asista a los heridos y después reporte a las autoridades.', category: 'seguridad', icon: '🚑' },
  { text: 'La distancia mínima de seguimiento recomendada es de 2 segundos respecto al vehículo delante.', category: 'seguridad', icon: '📏' },

  // Curiosos
  { text: 'En una rotonda, siempre se circula en sentido contrario a las manecillas del reloj.', category: 'curioso', icon: '🔄' },
  { text: 'En Cuba, los vehículos de tracción animal también deben respetar las señales de tránsito.', category: 'curioso', icon: '🐴' },
  { text: 'El agente de tránsito tiene autoridad superior a cualquier señal, semáforo o marca vial.', category: 'curioso', icon: '👮' },
  { text: 'El adelantamiento siempre se realiza por la izquierda, salvo que el vehículo de adelante esté girando a la izquierda.', category: 'curioso', icon: '🚗' },
];

/** Get the tip for today (deterministic based on date) */
export function getTodayTip(): DailyTip {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dailyTips[dayOfYear % dailyTips.length];
}
