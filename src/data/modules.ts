import type { StudyModule } from '../lib/types';

export const modules: StudyModule[] = [
  {
    id: 'mod-1',
    slug: 'disposiciones-generales',
    title: 'Disposiciones Generales',
    shortTitle: 'Generales',
    description: 'Objeto, alcance y definiciones fundamentales de la Ley 109 del Código de Seguridad Vial.',
    icon: 'rotonda',
    color: 'primary',
    sections: [
      {
        id: 's1-1',
        title: 'Objeto y Alcance de la Ley',
        content: `<p>La <strong>Ley No. 109</strong>, conocida como el <em>Código de Seguridad Vial</em>, fue aprobada el <strong>1 de agosto de 2010</strong> por la Asamblea Nacional del Poder Popular de Cuba. Su objetivo fundamental es:</p>
<ul>
<li>Establecer las normas que regulan el <strong>tránsito de vehículos, peatones y animales</strong> por las vías públicas.</li>
<li>Garantizar la <strong>seguridad vial</strong> y el orden en las vías de comunicación terrestre.</li>
<li>Proteger la <strong>vida e integridad física</strong> de las personas que participan en el tránsito.</li>
<li>Establecer <strong>derechos y deberes</strong> de conductores, peatones y pasajeros.</li>
</ul>
<p>La ley aplica a <strong>todo el territorio nacional</strong> y a todas las personas (nacionales y extranjeras) que transiten por las vías públicas de Cuba.</p>`,
        keyPoints: [
          'Ley 109 = Código de Seguridad Vial (2010)',
          'Aplica en todo el territorio nacional',
          'Regula vehículos, peatones y animales',
          'Protege la vida e integridad física',
        ],
      },
      {
        id: 's1-2',
        title: 'Definiciones Fundamentales',
        content: `<p>Para entender la ley, es esencial conocer los términos clave:</p>
<dl>
<dt><strong>Vía pública</strong></dt>
<dd>Toda carretera, calle, avenida, camino u otro espacio destinado al tránsito de vehículos, peatones o animales.</dd>
<dt><strong>Vehículo</strong></dt>
<dd>Todo medio de transporte terrestre que circula por las vías. Incluye automóviles, motocicletas, bicicletas, y vehículos de tracción animal.</dd>
<dt><strong>Conductor</strong></dt>
<dd>Persona que maneja o dirige un vehículo por las vías públicas. Requiere licencia de conducción vigente.</dd>
<dt><strong>Peatón</strong></dt>
<dd>Persona que transita a pie por las vías públicas. También se consideran peatones quienes usan sillas de ruedas o coches de bebé.</dd>
<dt><strong>Intersección</strong></dt>
<dd>Área donde dos o más vías se cruzan al mismo nivel.</dd>
<dt><strong>Calzada</strong></dt>
<dd>Parte de la vía destinada a la circulación de vehículos.</dd>
<dt><strong>Acera</strong></dt>
<dd>Parte de la vía elevada o delimitada, destinada al tránsito de peatones.</dd>
<dt><strong>Carril</strong></dt>
<dd>Franja longitudinal de la calzada con ancho suficiente para la circulación de una fila de vehículos.</dd>
</dl>`,
        keyPoints: [
          'Vía pública: calles, carreteras, avenidas',
          'Vehículo: todo medio de transporte terrestre',
          'Conductor: quien dirige un vehículo (necesita licencia)',
          'Peatón: incluye sillas de ruedas y coches de bebé',
        ],
        tips: ['Las definiciones son pregunta frecuente en el examen. Memorízalas bien.'],
      },
      {
        id: 's1-3',
        title: 'Autoridades de Tránsito',
        content: `<p>Las autoridades competentes en materia de seguridad vial en Cuba son:</p>
<ul>
<li><strong>Ministerio del Interior (MININT)</strong>: A través de la Dirección de Tránsito, es el órgano rector en materia de seguridad vial.</li>
<li><strong>Policía Nacional Revolucionaria (PNR)</strong>: Encargada de la vigilancia, control y regulación del tránsito en las vías.</li>
<li><strong>Agentes de Tránsito</strong>: Funcionarios autorizados para regular y dirigir el tránsito, imponer multas y realizar controles.</li>
<li><strong>Ministerio de Transporte</strong>: Responsable de la planificación y organización del transporte público.</li>
</ul>
<p>Los agentes de tránsito tienen <strong>autoridad plena</strong> en las vías y sus indicaciones prevalecen sobre las señales de tránsito, semáforos y marcas viales.</p>`,
        keyPoints: [
          'MININT es el órgano rector de seguridad vial',
          'La PNR controla el tránsito',
          'Las señales del agente prevalecen sobre semáforos y señales',
        ],
        tips: ['Recuerda: si un agente te indica algo diferente al semáforo, obedece al agente.'],
      },
    ],
  },
  {
    id: 'mod-2',
    slug: 'licencia-de-conduccion',
    title: 'Licencia de Conducción',
    shortTitle: 'Licencia',
    description: 'Categorías, requisitos, vigencia y proceso de obtención de la licencia de conducción.',
    icon: 'fin_limitaciones',
    color: 'success',
    sections: [
      {
        id: 's2-1',
        title: 'Categorías de Licencia',
        content: `<p>La licencia de conducción en Cuba se clasifica en las siguientes categorías:</p>
<table>
<thead><tr><th>Categoría</th><th>Vehículos</th><th>Edad Mínima</th></tr></thead>
<tbody>
<tr><td><strong>A</strong></td><td>Motocicletas y ciclomotores</td><td>16 años</td></tr>
<tr><td><strong>B</strong></td><td>Automóviles y camionetas hasta 3,500 kg</td><td>18 años</td></tr>
<tr><td><strong>C</strong></td><td>Camiones y vehículos de carga mayor de 3,500 kg</td><td>21 años</td></tr>
<tr><td><strong>D</strong></td><td>Ómnibus y vehículos de transporte de pasajeros</td><td>21 años</td></tr>
<tr><td><strong>E</strong></td><td>Vehículos articulados y con remolque</td><td>21 años</td></tr>
<tr><td><strong>F</strong></td><td>Maquinaria agrícola y equipos especiales</td><td>18 años</td></tr>
</tbody>
</table>`,
        keyPoints: [
          'Cat. A: Motos — desde 16 años',
          'Cat. B: Autos hasta 3,500 kg — desde 18 años',
          'Cat. C: Camiones — desde 21 años',
          'Cat. D: Ómnibus — desde 21 años',
          'Cat. E: Articulados/remolque — desde 21 años',
          'Cat. F: Maquinaria agrícola — desde 18 años',
        ],
      },
      {
        id: 's2-2',
        title: 'Requisitos para Obtener la Licencia',
        content: `<p>Para obtener la licencia de conducción se requiere:</p>
<ol>
<li><strong>Tener la edad mínima</strong> correspondiente a la categoría solicitada.</li>
<li><strong>Certificado médico</strong> que acredite aptitud física y mental para conducir.</li>
<li>Aprobar el <strong>examen teórico</strong> sobre conocimientos de seguridad vial.</li>
<li>Aprobar el <strong>examen práctico</strong> de conducción.</li>
<li><strong>No estar inhabilitado</strong> por resolución judicial o administrativa.</li>
<li>Presentar el <strong>documento de identidad</strong> vigente.</li>
</ol>
<p>El examen teórico consta de <strong>20 preguntas</strong> de selección múltiple y se requiere un mínimo de <strong>14 respuestas correctas (70%)</strong> para aprobar.</p>`,
        keyPoints: [
          'Examen teórico: 20 preguntas, 70% para aprobar (14/20)',
          'Se necesita certificado médico',
          'Examen teórico + examen práctico',
          'Documento de identidad vigente',
        ],
        tips: ['¡Este es EL examen que estás preparando! 20 preguntas, necesitas 14 bien.'],
      },
      {
        id: 's2-3',
        title: 'Vigencia y Renovación',
        content: `<p>La licencia de conducción tiene una <strong>vigencia determinada</strong> y debe ser renovada periódicamente:</p>
<ul>
<li>La licencia tiene vigencia de <strong>10 años</strong> para conductores menores de 60 años.</li>
<li>Para mayores de <strong>60 años</strong>, la vigencia se reduce a <strong>5 años</strong>.</li>
<li>La renovación requiere un nuevo <strong>examen médico</strong>.</li>
<li>Conducir con licencia vencida constituye una <strong>infracción grave</strong>.</li>
</ul>
<h4>Causas de Suspensión o Cancelación</h4>
<ul>
<li>Acumular un número determinado de infracciones.</li>
<li>Conducir bajo los efectos del alcohol o drogas.</li>
<li>Provocar un accidente grave por imprudencia.</li>
<li>Resolución judicial que lo establezca.</li>
</ul>`,
        keyPoints: [
          'Vigencia: 10 años (menores de 60), 5 años (mayores de 60)',
          'Renovación requiere examen médico',
          'Licencia vencida = infracción grave',
          'Se puede suspender por alcohol, drogas o accidentes graves',
        ],
      },
    ],
  },
  {
    id: 'mod-3',
    slug: 'normas-de-circulacion',
    title: 'Normas de Circulación',
    shortTitle: 'Circulación',
    description: 'Reglas generales, velocidad, adelantamiento, uso de carriles y distancia de seguimiento.',
    icon: 'prohibido_adelantar',
    color: 'accent',
    sections: [
      {
        id: 's3-1',
        title: 'Reglas Generales de Circulación',
        content: `<p>Las reglas fundamentales que todo conductor debe cumplir:</p>
<ul>
<li>Circular siempre por el <strong>lado derecho</strong> de la calzada.</li>
<li>Mantener el control del vehículo en <strong>todo momento</strong>.</li>
<li>Respetar todas las <strong>señales de tránsito</strong>, marcas viales y semáforos.</li>
<li>Llevar siempre la <strong>licencia de conducción</strong> y el documento del vehículo.</li>
<li>Utilizar el <strong>cinturón de seguridad</strong> (conductor y pasajeros).</li>
<li>No conducir bajo la influencia del <strong>alcohol o sustancias</strong> que afecten la capacidad.</li>
<li>Mantener una <strong>distancia prudente</strong> con el vehículo precedente.</li>
</ul>`,
        keyPoints: [
          'Circular por la derecha siempre',
          'Cinturón obligatorio para todos',
          'Llevar licencia y documentos del vehículo',
          'Prohibido alcohol al volante',
        ],
      },
      {
        id: 's3-2',
        title: 'Límites de Velocidad (Ley 109)',
        content: `<p>Los límites máximos de velocidad en zonas urbanas son:</p>
<ul>
<li><strong>20 km/h:</strong> Equipos agrícolas, industriales, marcha atrás, salidas de garajes.</li>
<li><strong>30 km/h:</strong> Vehículos con arrastre (remolques).</li>
<li><strong>40 km/h:</strong> Zonas escolares y transporte masivo de personal.</li>
<li><strong>50 km/h:</strong> Límite general para vehículos de motor urbanos.</li>
<li><strong>60 km/h:</strong> Velocidad mínima en túneles.</li>
</ul>
<p>Límites en vías rurales y autopistas:</p>
<table>
<thead><tr><th>Tipo de Vehículo</th><th>Carreteras</th><th>Autopistas</th></tr></thead>
<tbody>
<tr><td>Motos, ómnibus y ligeros</td><td>90 km/h</td><td>100 km/h</td></tr>
<tr><td>Carga rígidos y articulados</td><td>80 km/h</td><td>90 km/h</td></tr>
<tr><td>Grúas y remolques</td><td>70 km/h</td><td>80 km/h</td></tr>
</tbody>
</table>`,
        keyPoints: [
          'Urbana Motor: 50 km/h | Urbana Escolar: 40 km/h',
          'Autopista Ligeros: 100 km/h | Carretera Ligeros: 90 km/h',
          'Marcha atrás o salidas: 20 km/h',
        ],
        tips: ['Los límites específicos, como 20 km/h para marcha atrás o 40 km/h en zonas escolares, son vitales.'],
      },
      {
        id: 's3-3',
        title: 'Adelantamiento',
        content: `<p>Las reglas para adelantar correctamente:</p>
<h4>¿Cuándo se puede adelantar?</h4>
<ul>
<li>Por el <strong>lado izquierdo</strong> del vehículo que se adelanta.</li>
<li>Cuando hay <strong>visibilidad suficiente</strong> en la vía contraria.</li>
<li>Cuando la <strong>línea central es discontinua</strong> (permite adelantar).</li>
<li>Con anticipación avisar mediante las <strong>luces direccionales</strong>.</li>
</ul>
<h4>¿Cuándo está PROHIBIDO adelantar?</h4>
<ul>
<li>En <strong>curvas y pendientes</strong> con poca visibilidad.</li>
<li>En <strong>intersecciones</strong> y pasos peatonales.</li>
<li>En <strong>puentes, túneles</strong> y pasos a nivel.</li>
<li>Cuando la <strong>línea central es continua</strong>.</li>
<li>Cuando otro vehículo ya está adelantando.</li>
<li>En zonas con <strong>señal de prohibido adelantar</strong>.</li>
</ul>`,
        keyPoints: [
          'Adelantar SIEMPRE por la izquierda',
          'Línea discontinua = puede adelantar',
          'Línea continua = prohibido adelantar',
          'Prohibido: curvas, intersecciones, puentes, túneles',
          'Usar luces direccionales antes de adelantar',
        ],
      },
      {
        id: 's3-4',
        title: 'Distancia de Seguimiento',
        content: `<p>Mantener una distancia adecuada con el vehículo de delante es fundamental para la seguridad:</p>
<ul>
<li><strong>Regla de los 2 segundos</strong>: En condiciones normales, mantener al menos 2 segundos de distancia con el vehículo precedente.</li>
<li><strong>Duplicar la distancia</strong> en condiciones adversas: lluvia, niebla, pavimento mojado.</li>
<li>A mayor velocidad, <strong>mayor distancia</strong> de seguimiento.</li>
</ul>
<p><strong>¿Cómo calcular los 2 segundos?</strong></p>
<p>Identifica un punto fijo (poste, señal). Cuando el vehículo de delante lo pase, cuenta "mil uno, mil dos". Si llegas al punto antes de terminar de contar, estás demasiado cerca.</p>`,
        keyPoints: [
          'Regla de los 2 segundos en condiciones normales',
          'Duplicar en lluvia o mala visibilidad',
          'Mayor velocidad = mayor distancia',
        ],
      },
      {
        id: 's3-5',
        title: 'Estacionamiento, Parqueo y Prohibiciones (Art 103, 137, 138)',
        content: `<p>Reglas estrictas al estacionar un vehículo (<strong>Art 137 y 138</strong>):</p>
<ul>
<li>Hacerlo <strong>paralelo</strong> a la acera a no más de <strong>10 cm</strong> y a <strong>50 cm</strong> de otro vehículo.</li>
<li>Obligaciones: apagar motor, retirar llave y aplicar freno de mano.</li>
<li>En pendientes: aplicar <strong>1ra velocidad</strong> (ascendente) o <strong>reversa</strong> (descendente) y girar el timón hacia el contén.</li>
</ul>
<h4>Prohibiciones Destacadas en la Vía (Art 103-125)</h4>
<ul>
<li>Prohibido circular por aceras, paseos o separador central (Art 106).</li>
<li>Prohibido reparar vehículos en la vía pública (excepto fuerza mayor) (Art 125).</li>
<li>Vehículos grandes no pueden exceder: 15m rígidos, 18m articulados, 2.60m de ancho y 4m de alto.</li>
</ul>`,
        keyPoints: [
          'Estacionar: Máx 10 cm acera, 50 cm otro vehículo',
          'Pendiente subiendo: 1ra vel | bajando: reversa',
          'Prohibido reparar autos en la calle (salvo emergencia)',
        ],
      },
    ],
  },
  {
    id: 'mod-4',
    slug: 'senalizacion-vial',
    title: 'Señalización Vial',
    shortTitle: 'Señales',
    description: 'Tipos de señales, marcas viales, semáforos y señales del agente de tránsito.',
    icon: 'semaforo_adelante',
    color: 'danger',
    sections: [
      {
        id: 's4-1',
        title: 'Señales Reglamentarias',
        content: `<p>Las señales reglamentarias <strong>indican obligaciones y prohibiciones</strong> que deben ser acatadas. Se dividen en:</p>
<h4>Señales Prohibitivas</h4>
<p>Forma circular, fondo blanco con <strong>borde rojo</strong> y símbolo negro. Indican acciones que están prohibidas.</p>
<ul>
<li><strong>No Estacionar</strong>: Prohibido detenerse o aparcar.</li>
<li><strong>No Adelantar</strong>: Prohibido rebasar al vehículo precedente.</li>
<li><strong>No Girar a la Izquierda/Derecha</strong>: Prohibido cambiar de dirección.</li>
<li><strong>No Entrar</strong>: Vía de un solo sentido en dirección contraria.</li>
<li><strong>Velocidad Máxima</strong>: Número dentro del círculo rojo.</li>
</ul>
<h4>Señales Obligatorias</h4>
<p>Forma circular, fondo <strong>azul</strong> con símbolo blanco. Indican acciones obligatorias.</p>
<ul>
<li><strong>Giro Obligatorio</strong>: Debe girar en la dirección indicada.</li>
<li><strong>Circulación Obligatoria</strong>: Solo se puede circular en el sentido indicado.</li>
<li><strong>Rotonda</strong>: Circulación obligatoria en la rotonda.</li>
</ul>`,
        keyPoints: [
          'Prohibitivas: circular, borde rojo, fondo blanco',
          'Obligatorias: circular, fondo azul, símbolo blanco',
          'Son de OBLIGATORIO cumplimiento',
          'Velocidad máxima: número en círculo rojo',
        ],
      },
      {
        id: 's4-2',
        title: 'Señales Preventivas',
        content: `<p>Las señales preventivas <strong>advierten de un peligro</strong> o situación especial en la vía. Permiten al conductor tomar precauciones.</p>
<p>Forma de <strong>diamante (rombo)</strong>, fondo <strong>amarillo</strong> con símbolo negro.</p>
<ul>
<li><strong>Curva Peligrosa</strong>: Curva cerrada adelante.</li>
<li><strong>Intersección</strong>: Cruce de vías próximo.</li>
<li><strong>Paso Peatonal</strong>: Zona de cruce de peatones.</li>
<li><strong>Zona Escolar</strong>: Proximidad de escuela.</li>
<li><strong>Animales en la Vía</strong>: Posible cruce de animales.</li>
<li><strong>Pendiente Peligrosa</strong>: Descenso pronunciado.</li>
<li><strong>Pavimento Resbaladizo</strong>: Superficie con riesgo de deslizamiento.</li>
<li><strong>Obras en la Vía</strong>: Trabajos de construcción adelante.</li>
</ul>
<p><strong>Nota:</strong> Las señales preventivas NO prohíben, solo <strong>advierten</strong>. Pero debes reducir la velocidad y aumentar la precaución.</p>`,
        keyPoints: [
          'Forma de diamante (rombo), amarillo con negro',
          'ADVIERTEN, no prohíben',
          'Reducir velocidad al verlas',
          'Ejemplos: curva, escuela, animales, obras',
        ],
      },
      {
        id: 's4-3',
        title: 'Señales Informativas',
        content: `<p>Las señales informativas proporcionan <strong>información útil</strong> al conductor sobre la ruta, destinos y servicios.</p>
<p>Generalmente de forma <strong>rectangular</strong>, fondo <strong>verde con texto blanco</strong> (para direcciones) o <strong>azul con símbolo blanco</strong> (para servicios).</p>
<h4>Señales de Dirección</h4>
<ul>
<li>Nombre de ciudades y distancias en kilómetros.</li>
<li>Número de ruta o carretera.</li>
<li>Indicación de salidas en autopistas.</li>
</ul>
<h4>Señales de Servicio</h4>
<ul>
<li><strong>Hospital</strong>: Indica centro de salud cercano.</li>
<li><strong>Gasolinera</strong>: Estación de servicio próxima.</li>
<li><strong>Estacionamiento</strong>: Zona permitida para aparcar.</li>
<li><strong>Teléfono</strong>: Teléfono público disponible.</li>
<li><strong>Restaurante</strong>: Servicio de alimentación cercano.</li>
</ul>`,
        keyPoints: [
          'Rectangulares, verde (direcciones) o azul (servicios)',
          'Informan, no obligan ni prohíben',
          'Incluyen distancias, rutas y servicios',
        ],
      },
      {
        id: 's4-4',
        title: 'Semáforos y Señales Luminosas',
        content: `<p>Los semáforos controlan el tránsito mediante luces de colores:</p>
<ul>
<li><strong>🟢 Verde</strong>: Paso permitido. Puede avanzar, girar (respetando paso peatonal).</li>
<li><strong>🟡 Amarillo</strong>: Precaución. Pare si puede hacerlo con seguridad. Si ya entró en la intersección, continúe.</li>
<li><strong>🔴 Rojo</strong>: Pare. Deténgase antes de la línea de pare. NO avance bajo ninguna circunstancia.</li>
<li><strong>🔴 Rojo intermitente</strong>: Equivale a una señal de PARE. Deténgase y ceda el paso.</li>
<li><strong>🟡 Amarillo intermitente</strong>: Precaución. Reduzca velocidad y cruce con cuidado.</li>
</ul>
<h4>Semáforos con Flechas</h4>
<p>Las flechas verdes indican permiso para circular <strong>solo en la dirección indicada</strong>.</p>
<h4>Semáforos Peatonales</h4>
<ul>
<li><strong>Persona caminando (verde)</strong>: El peatón puede cruzar.</li>
<li><strong>Mano o persona detenida (rojo)</strong>: El peatón debe esperar.</li>
</ul>`,
        keyPoints: [
          'Verde = pase, Amarillo = precaución, Rojo = pare',
          'Rojo intermitente = señal de PARE',
          'Amarillo intermitente = precaución',
          'Flechas verdes = solo esa dirección',
        ],
        tips: ['El semáforo en amarillo NO significa "acelere". Si puede detenerse con seguridad, pare.'],
      },
      {
        id: 's4-5',
        title: 'Marcas Viales y Señales del Agente (Art 62, 63, 178)',
        content: `<p>El <strong>Artículo 62</strong> define el Orden de Prioridad inflexible en la vía:</p>
<ol>
<li>Señales de los agentes de la PNR (Tienen la máxima autoridad).</li>
<li>Señales de circulación provisionales.</li>
<li>Semáforos.</li>
<li>Señales verticales.</li>
<li>Señales horizontales (marcas en el piso).</li>
</ol>
<h4>Señales de Autoridad (Art 63)</h4>
<ul>
<li><strong>Alto vertical</strong>: Brazo levantado. Significa detenerse de inmediato.</li>
<li><strong>Alto horizontal</strong>: Brazos extendidos. Detenerse si viene de frente o espalda; pueden pasar flancos laterales.</li>
<li><strong>Balanceo de luz roja o uso de silbato</strong>: Orden inminente de detención total.</li>
</ul>
<h4>Marcas Paralelas y Transversales (Art 178-179)</h4>
<ul>
<li><strong>Línea continua</strong>: Estrictamente prohibido cruzar. (Doble continua es riesgo mayor).</li>
<li><strong>Línea discontinua</strong>: Se puede cruzar o adelantar con seguridad.</li>
<li><strong>Transversales</strong>: Línea de Pare, Ceda el Paso y Franjas de peatón (cebra).</li>
</ul>`,
        keyPoints: [
          'Jerarquía: Agente > Provisional > Semáforo > Vertical > Horizontal',
          'Brazo levantado: Alto inminente',
          'Brazos extendidos: Detienen frente y espalda, avanzan laterales',
          'Doble línea continua = prohibido cruzar en ambos sentidos',
        ],
      },
    ],
  },
  {
    id: 'mod-5',
    slug: 'intersecciones-y-prioridad',
    title: 'Intersecciones y Prioridad',
    shortTitle: 'Prioridad',
    description: 'Reglas de prioridad de paso, rotondas, cruces y vehículos de emergencia.',
    icon: 'ceda',
    color: 'primary',
    sections: [
      {
        id: 's5-1',
        title: 'Reglas de Prioridad de Paso',
        content: `<p>En una intersección sin semáforo ni señal de pare:</p>
<ul>
<li><strong>Prioridad por la derecha</strong>: El vehículo que viene por la derecha tiene prioridad de paso.</li>
<li>Los <strong>vehículos de emergencia</strong> (ambulancias, bomberos, policía) con sirena y luces activas tienen <strong>prioridad absoluta</strong>.</li>
<li>En una intersección con <strong>señal de PARE</strong>, debe detenerse completamente y ceder el paso.</li>
<li>En una intersección con <strong>señal de CEDA EL PASO</strong>, debe reducir la velocidad y ceder si hay tránsito.</li>
</ul>
<h4>Jerarquía de Prioridad</h4>
<ol>
<li>Señales del agente de tránsito</li>
<li>Semáforos</li>
<li>Señales verticales (PARE, CEDA)</li>
<li>Prioridad por la derecha</li>
</ol>`,
        keyPoints: [
          'Sin señal: prioridad al que viene por la DERECHA',
          'Jerarquía: Agente > Semáforo > Señal > Derecha',
          'PARE = detenerse completamente',
          'CEDA = reducir velocidad y ceder si hay tráfico',
          'Emergencias = prioridad absoluta',
        ],
        tips: ['La prioridad por la derecha es la regla de "último recurso" cuando no hay otra señalización.'],
      },
      {
        id: 's5-2',
        title: 'Rotondas y Glorietas',
        content: `<p>Las reglas para circular en una rotonda:</p>
<ul>
<li>Los vehículos <strong>dentro de la rotonda</strong> tienen prioridad sobre los que entran.</li>
<li>Se circula en sentido <strong>contrario a las manecillas del reloj</strong> (por la derecha).</li>
<li>Al entrar, <strong>ceda el paso</strong> a los vehículos que ya circulan.</li>
<li>Use las <strong>luces direccionales</strong> para indicar la salida que tomará.</li>
<li>Si va a tomar la primera salida, manténgase en el <strong>carril exterior</strong>.</li>
<li>Si va a tomar una salida posterior, use el <strong>carril interior</strong> y cambie al exterior antes de salir.</li>
</ul>`,
        keyPoints: [
          'Dentro de rotonda = prioridad',
          'Circulación: contrario a manecillas del reloj',
          'Ceder al entrar',
          'Usar direccionales para indicar salida',
        ],
      },
      {
        id: 's5-3',
        title: 'Vehículos de Emergencia',
        content: `<p>Ante un vehículo de emergencia con sirena y luces:</p>
<ul>
<li><strong>Apartarse a la derecha</strong> y detenerse si es necesario.</li>
<li>Dejarle <strong>espacio libre</strong> para que pase.</li>
<li><strong>No seguirlo</strong> ni intentar adelantarlo.</li>
<li>En una intersección, <strong>no entrar</strong> hasta que haya pasado.</li>
</ul>
<p>Se consideran vehículos de emergencia:</p>
<ul>
<li>Ambulancias 🚑</li>
<li>Vehículos de bomberos 🚒</li>
<li>Patrullas de policía 🚓</li>
<li>Otros vehículos autorizados con sirena y luces</li>
</ul>`,
        keyPoints: [
          'Apartarse a la derecha siempre',
          'No seguirlos ni adelantarlos',
          'Prioridad absoluta con sirena y luces',
        ],
      },
    ],
  },
  {
    id: 'mod-6',
    slug: 'peatones-y-ciclistas',
    title: 'Peatones y Ciclistas',
    shortTitle: 'Peatones',
    description: 'Derechos y deberes de peatones, normas para ciclistas y zonas escolares.',
    icon: 'peatones',
    color: 'success',
    sections: [
      {
        id: 's6-1',
        title: 'Derechos y Deberes de los Peatones',
        content: `<p>Los peatones son los <strong>usuarios más vulnerables</strong> de la vía y tienen derechos y deberes específicos:</p>
<h4>Derechos</h4>
<ul>
<li><strong>Prioridad en pasos peatonales</strong> (cebras) y cuando el semáforo peatonal esté en verde.</li>
<li>Usar las <strong>aceras</strong> para caminar con seguridad.</li>
<li>Ser respetados por todos los conductores.</li>
</ul>
<h4>Deberes</h4>
<ul>
<li>Cruzar por los <strong>pasos peatonales</strong> o intersecciones señalizadas.</li>
<li>Respetar los <strong>semáforos peatonales</strong>.</li>
<li>Caminar por la <strong>acera</strong>, y si no hay, por el lado <strong>izquierdo</strong> de la vía (de frente al tránsito).</li>
<li><strong>No cruzar</strong> de forma sorpresiva o entre vehículos estacionados.</li>
<li>Usar ropa visible o <strong>elementos reflectantes</strong> de noche.</li>
</ul>`,
        keyPoints: [
          'Peatón tiene prioridad en paso de cebra',
          'Deben cruzar por pasos señalizados',
          'Sin acera: caminar por la IZQUIERDA (de frente al tránsito)',
          'Usar reflectantes de noche',
        ],
        tips: ['Pregunta típica: ¿Por qué lado camina un peatón sin acera? → IZQUIERDO (de frente al tránsito).'],
      },
      {
        id: 's6-2',
        title: 'Normas para Ciclistas',
        content: `<p>Los ciclistas deben cumplir las mismas normas generales de tránsito, además de las siguientes:</p>
<ul>
<li>Circular por el <strong>carril derecho</strong> o por la ciclovía si existe.</li>
<li>Usar <strong>casco de protección</strong> (recomendado/obligatorio según zona).</li>
<li><strong>No circular por aceras</strong> ni por vías donde esté prohibido.</li>
<li>Señalizar los cambios de dirección con el <strong>brazo</strong>:
  <ul>
  <li>Brazo izquierdo extendido = giro a la izquierda.</li>
  <li>Brazo derecho extendido = giro a la derecha.</li>
  <li>Brazo levantado = parada.</li>
  </ul>
</li>
<li>Llevar <strong>luces y reflectores</strong> de noche (luz blanca al frente, roja atrás).</li>
<li><strong>No llevar pasajeros</strong> excepto en bicicletas diseñadas para ello.</li>
<li><strong>Prohibido agarrarse</strong> de otros vehículos en movimiento.</li>
</ul>`,
        keyPoints: [
          'Circular por la derecha o ciclovía',
          'Señalizar giros con el brazo',
          'Luces obligatorias de noche: blanca delante, roja atrás',
          'Prohibido circular por aceras',
          'No agarrarse de otros vehículos',
        ],
      },
      {
        id: 's6-3',
        title: 'Zonas Escolares',
        content: `<p>Las zonas escolares requieren <strong>precaución especial</strong>:</p>
<ul>
<li>Velocidad máxima de <strong>30 km/h</strong> en horario escolar.</li>
<li>Estar <strong>atento a la presencia de niños</strong> que pueden cruzar inesperadamente.</li>
<li>Detenerse completamente si hay un <strong>guardia escolar</strong> con señal de pare.</li>
<li>No estacionar en las zonas marcadas como <strong>área escolar</strong>.</li>
<li>No sonar la <strong>bocina</strong> innecesariamente cerca de escuelas.</li>
</ul>`,
        keyPoints: [
          'Velocidad máxima 30 km/h',
          'Extremar precaución con niños',
          'Obedecer al guardia escolar',
          'No estacionar en zona escolar',
        ],
      },
    ],
  },
  {
    id: 'mod-7',
    slug: 'infracciones-y-sanciones',
    title: 'Infracciones y Sanciones',
    shortTitle: 'Infracciones',
    description: 'Clasificación de infracciones, multas y penalidades por violaciones de tránsito.',
    icon: 'pare',
    color: 'danger',
    sections: [
      {
        id: 's7-1',
        title: 'Clasificación de Infracciones',
        content: `<p>Las infracciones de tránsito se clasifican según su gravedad:</p>
<h4>Infracciones Leves</h4>
<ul>
<li>No utilizar las luces direccionales al girar.</li>
<li>Estacionar de forma incorrecta (fuera de lugares permitidos).</li>
<li>No portar el certificado de propiedad del vehículo.</li>
<li>Circular sin el espejo retrovisor en buen estado.</li>
</ul>
<h4>Infracciones Graves</h4>
<ul>
<li>Exceder los <strong>límites de velocidad</strong>.</li>
<li><strong>No respetar</strong> un semáforo en rojo.</li>
<li>Conducir con la <strong>licencia vencida</strong>.</li>
<li>Adelantar donde está <strong>prohibido</strong>.</li>
<li>No ceder el paso en paso peatonal.</li>
<li>Usar el <strong>teléfono celular</strong> mientras conduce.</li>
</ul>
<h4>Infracciones Muy Graves</h4>
<ul>
<li>Conducir bajo los efectos del <strong>alcohol o drogas</strong>.</li>
<li>Conducir <strong>sin licencia</strong>.</li>
<li><strong>Huir</strong> del lugar de un accidente (darse a la fuga).</li>
<li>Conducción <strong>temeraria</strong> o imprudente poniendo en peligro la vida.</li>
<li>Circular en sentido <strong>contrario</strong>.</li>
</ul>`,
        keyPoints: [
          'Leves: direccionales, estacionamiento, documentos',
          'Graves: velocidad, semáforo rojo, licencia vencida, celular',
          'Muy graves: alcohol, sin licencia, huir de accidente, sentido contrario',
        ],
      },
      {
        id: 's7-2',
        title: 'Sanciones, Multas y Puntos (Decreto 287)',
        content: `<p>El sistema de puntos y multas clasifica las penalidades según gravedad:</p>
<ul>
<li><strong>Infracciones Muy Peligrosas:</strong> 12 puntos | Multa de 60 pesos.</li>
<li><strong>Infracciones Peligrosas:</strong> 8 puntos | Multa de 40 pesos.</li>
<li><strong>Infracciones Menos Peligrosas:</strong> 6 puntos | Multa de 20 pesos.</li>
</ul>
<p>Otras sanciones incluyen:</p>
<ul>
<li><strong>Retención temporal del vehículo</strong>: En infracciones graves o si el vehículo no cumple condiciones técnicas.</li>
<li><strong>Suspensión temporal de la licencia</strong>: Por acumulación de infracciones.</li>
<li><strong>Cancelación definitiva de la licencia</strong>: En casos muy graves o reincidencia.</li>
<li><strong>Responsabilidad penal</strong>: En accidentes con lesiones graves o muerte, puede haber proceso judicial.</li>
</ul>`,
        keyPoints: [
          'Muy Peligrosas: 12 puntos / 60 pesos',
          'Peligrosas: 8 puntos / 40 pesos',
          'Menos Peligrosas: 6 puntos / 20 pesos',
          'Responsabilidad penal en accidentes graves',
        ],
      },
    ],
  },
  {
    id: 'mod-8',
    slug: 'seguridad-y-prevencion',
    title: 'Seguridad y Prevención',
    shortTitle: 'Seguridad',
    description: 'Cinturón de seguridad, alcohol, condiciones del vehículo, conducción nocturna y primeros auxilios.',
    icon: 'velocidad_50',
    color: 'accent',
    sections: [
      {
        id: 's8-1',
        title: 'Cinturón y Elementos de Seguridad',
        content: `<p>El uso de elementos de seguridad es <strong>obligatorio</strong>:</p>
<ul>
<li><strong>Cinturón de seguridad</strong>: Obligatorio para el conductor y todos los pasajeros en asientos delanteros y traseros.</li>
<li><strong>Casco</strong>: Obligatorio para motociclistas y pasajeros de motos.</li>
<li><strong>Sillas infantiles</strong>: Los niños menores de cierta edad deben viajar en sistemas de retención infantil.</li>
<li><strong>Elementos reflectantes</strong>: Obligatorio llevar chaleco reflectante y triángulos de emergencia.</li>
</ul>
<p><strong>Datos importantes:</strong></p>
<ul>
<li>El cinturón reduce un <strong>50% el riesgo de muerte</strong> en caso de accidente.</li>
<li>El casco reduce un <strong>70%</strong> el riesgo de lesiones graves en la cabeza.</li>
</ul>`,
        keyPoints: [
          'Cinturón obligatorio para TODOS (delante y atrás)',
          'Casco obligatorio en motos',
          'Sillas infantiles para niños',
          'Llevar chaleco reflectante y triángulos',
          'Cinturón reduce 50% riesgo de muerte',
        ],
      },
      {
        id: 's8-2',
        title: 'Alcohol al Volante y Sanciones',
        content: `<p>Conducir bajo los efectos del alcohol es una de las infracciones <strong>más graves</strong> y está estrictamente categorizada:</p>
<table>
<thead><tr><th>Mg/l en Sangre</th><th>Resultado de Prueba</th></tr></thead>
<tbody>
<tr><td>0 a 24 mg/l</td><td>Negativo</td></tr>
<tr><td>25 a 99 mg/l</td><td>Positivo con riesgo / afectación</td></tr>
<tr><td>100 a 199 mg/l</td><td>Estado de embriaguez</td></tr>
<tr><td>200 mg/l y más</td><td>Embriaguez manifiesta</td></tr>
</tbody>
</table>
<h4>Consecuencias y Penalidades</h4>
<ul>
<li><strong>Choferes No Profesionales:</strong> Multa alta (100-300 cuotas) con afectación. Si hay embriaguez: privación de libertad 6 meses a 2 años o multas superiores.</li>
<li><strong>Choferes Profesionales:</strong> Privación de libertad 6 meses a 1 año solo por afectación. De 1 a 3 años por embriaguez.</li>
</ul>`,
        keyPoints: [
          '0-24 mg/l: Negativo',
          '25-99 mg/l: Afectación / Riesgo',
          '100+ mg/l: Estado de embriaguez',
          'Chofer profesional penalizado con mayor severidad (cárcel)',
        ],
        tips: ['Los límites en sangre son pregunta clave de embriaguez manifiesta.'],
      },
      {
        id: 's8-3',
        title: 'Condiciones del Vehículo (Art 102, 182)',
        content: `<p>Antes de circular, el vehículo debe cumplir condiciones técnicas mínimas:</p>
<ul>
<li><strong>Distancias de frenado (Art 182) a 30 km/h:</strong> Vehículos ligeros (Máx 7.2m). Motocicletas (Máx 7.5m).</li>
<li><strong>Luces:</strong> Todas funcionando y reguladas.</li>
<li><strong>Neumáticos:</strong> Presión adecuada y dibujo correcto.</li>
</ul>
<h4>Distracciones Prohibidas (Art 102)</h4>
<p>Incluso con el auto en buen estado, las siguientes acciones rompen la seguridad y están explícitamente penadas:</p>
<ul>
<li>Uso de teléfonos o dispositivos de comunicación en marcha.</li>
<li>Equipos de audio a <strong>alto volumen</strong> que impiden oír alertas exteriores.</li>
<li>Conducir con <strong>una sola mano</strong> (salvo necesidad operativa como cambios de marcha).</li>
</ul>`,
        keyPoints: [
          'Frenado a 30 km/h: Ligeros 7.2m, Motos 7.5m',
          'Prohibido usar celular en marcha',
          'Prohibido usar ambas manos o equipos a alto volumen',
        ],
      },
      {
        id: 's8-4',
        title: 'Luces, Visibilidad y Conducción Nocturna (Art 184-186)',
        content: `<p>Especificaciones exactas del alumbrado exterior y conducción nocturna:</p>
<ul>
<li><strong>Luces cortas:</strong> Deben alumbrar la vía hasta <strong>40 metros</strong>. Son obligatorias en zona urbana iluminada y dentro de túneles.</li>
<li><strong>Luces largas:</strong> Deben alumbrar hasta <strong>100 metros</strong>. Se prohíben al acercarse a <strong>150 metros</strong> de otro vehículo (para no encandilar).</li>
<li>La <strong>chapa o matrícula</strong> debe estar iluminada para ser visible a <strong>20 metros</strong>.</li>
</ul>
<h4>Conducción en Condiciones Adversas</h4>
<ul>
<li><strong>Lluvia:</strong> Encender luces cortas, reducir velocidad por aquaplaning, duplicar distancia.</li>
<li><strong>Niebla:</strong> Usar luces antiniebla o cortas (NUNCA altas), no adelantar.</li>
</ul>`,
        keyPoints: [
          'Luces cortas alumbran 40m (Obligatorias en ciudad y túnel)',
          'Luces largas alumbran 100m (Bajar a cortas a 150m de un vehículo)',
          'Matrícula visible a 20m de noche',
        ],
      },
      {
        id: 's8-5',
        title: 'Primeros Auxilios Básicos',
        content: `<p>En caso de accidente de tránsito, los pasos a seguir son:</p>
<ol>
<li><strong>Proteger</strong>: Señalizar el lugar del accidente con triángulos. Encender luces de emergencia.</li>
<li><strong>Avisar</strong>: Llamar a emergencias inmediatamente.</li>
<li><strong>Socorrer</strong>: Si tiene conocimientos, prestar primeros auxilios.</li>
</ol>
<h4>⚠️ Reglas Importantes</h4>
<ul>
<li><strong>No mover</strong> a un herido a menos que esté en peligro inmediato (fuego, etc.).</li>
<li><strong>No retirar el casco</strong> a un motociclista herido.</li>
<li>Si hay hemorragia, aplicar <strong>presión directa</strong> sobre la herida.</li>
<li>Mantener a la víctima <strong>abrigada y tranquila</strong> hasta que llegue la ayuda.</li>
<li>Nunca dar agua ni alimentos a un herido.</li>
</ul>
<p><strong>Secuencia PAS</strong>: <strong>P</strong>roteger → <strong>A</strong>visar → <strong>S</strong>ocorrer</p>`,
        keyPoints: [
          'Secuencia PAS: Proteger, Avisar, Socorrer',
          'No mover al herido (excepto peligro inmediato)',
          'No quitar el casco a un motociclista',
          'Presión directa en hemorragias',
          'No dar agua ni alimentos',
        ],
        tips: ['PAS = Proteger, Avisar, Socorrer. Fácil de recordar y pregunta frecuente.'],
      },
    ],
  },
];

/** Get module by slug */
export function getModuleBySlug(slug: string): StudyModule | undefined {
  return modules.find((m) => m.slug === slug);
}

/** Get module by ID */
export function getModuleById(id: string): StudyModule | undefined {
  return modules.find((m) => m.id === id);
}

/** Get section counts per module */
export function getModuleSectionCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  modules.forEach((m) => {
    counts[m.id] = m.sections.length;
  });
  return counts;
}
