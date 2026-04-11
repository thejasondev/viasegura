import type { StudyModule } from "../lib/types";

export const modules: StudyModule[] = [
  {
    id: "mod-1",
    slug: "disposiciones-generales",
    title: "Disposiciones Generales",
    shortTitle: "Generales",
    description:
      "Objeto, alcance y definiciones fundamentales de la Ley 109 del Código de Seguridad Vial.",
    icon: "rotonda",
    color: "primary",
    sections: [
      {
        id: "s1-1",
        title: "Objeto y Alcance de la Ley",
        content: `<p>La <strong>Ley No. 109</strong>, conocida como el <em>Código de Seguridad Vial</em>, fue aprobada el <strong>1 de agosto de 2010</strong> por la Asamblea Nacional del Poder Popular de Cuba. Su objetivo fundamental es:</p>
<ul>
<li>Establecer las normas que regulan el <strong>tránsito de vehículos, peatones y animales</strong> por las vías públicas.</li>
<li>Garantizar la <strong>seguridad vial</strong> y el orden en las vías de comunicación terrestre.</li>
<li>Proteger la <strong>vida e integridad física</strong> de las personas que participan en el tránsito.</li>
<li>Establecer <strong>derechos y deberes</strong> de conductores, peatones y pasajeros.</li>
</ul>
<p>La ley aplica a <strong>todo el territorio nacional</strong> y a todas las personas (nacionales y extranjeras) que transiten por las vías públicas de Cuba.</p>`,
        keyPoints: [
          "Ley 109 = Código de Seguridad Vial (2010)",
          "Aplica en todo el territorio nacional",
          "Regula vehículos, peatones y animales",
          "Protege la vida e integridad física",
        ],
      },
      {
        id: "s1-2",
        title: "Definiciones Fundamentales",
        content: `<p>Para entender la ley, es esencial conocer los términos clave:</p>
<dl>
<dt><strong>Vía pública</strong></dt>
<dd>Toda carretera, calle, avenida, camino u otro espacio destinado al tránsito de vehículos, peatones o animales.</dd>
<dt><strong>Vehículo</strong></dt>
<dd>Todo medio de transporte terrestre que circula por las vías. Incluye automóviles, motocicletas, bicicletas, y vehículos de tracción animal.</dd>
<dt><strong>Conductor y Conductor Novel</strong></dt>
<dd>Persona que maneja un vehículo. <strong>Novel:</strong> Aquel que posee una experiencia menor a 2 años desde la expedición de su licencia (sujeto a normas más estrictas de alcohol).</dd>
<dt><strong>Peatón</strong></dt>
<dd>Persona que transita a pie por las vías. También se consideran peatones quienes usan sillas de ruedas o coches de bebé.</dd>
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
          "Vía pública: calles, carreteras, avenidas",
          "Conductor novel: Menos de 2 años de experiencia",
          "Conductor: quien dirige un vehículo (necesita licencia)",
          "Peatón: incluye sillas de ruedas y coches de bebé",
        ],
        tips: [
          'Las definiciones son pregunta frecuente en el examen. Memoriza bien qué es un "Conductor Novel".',
        ],
      },
      {
        id: "s1-3",
        title: "Autoridades de Tránsito",
        content: `<p>Las autoridades competentes en materia de seguridad vial en Cuba son:</p>
<ul>
<li><strong>Ministerio del Interior (MININT)</strong>: A través de la Dirección de Tránsito, es el órgano rector en materia de seguridad vial.</li>
<li><strong>Policía Nacional Revolucionaria (PNR)</strong>: Encargada de la vigilancia, control y regulación del tránsito en las vías.</li>
<li><strong>Agentes de Tránsito</strong>: Funcionarios autorizados para regular y dirigir el tránsito, imponer multas y realizar controles.</li>
</ul>
<p>Los agentes de tránsito tienen <strong>autoridad plena</strong> en las vías y sus indicaciones prevalecen sobre las señales de tránsito, semáforos y marcas viales.</p>`,
        keyPoints: [
          "MININT es el órgano rector de seguridad vial",
          "La PNR controla el tránsito",
          "Las señales del agente prevalecen sobre semáforos y señales",
        ],
        tips: [
          "Recuerda: si un agente te indica algo diferente al semáforo, obedece al agente sin dudarlo.",
        ],
      },
    ],
  },
  {
    id: "mod-2",
    slug: "licencia-de-conduccion",
    title: "Licencia de Conducción",
    shortTitle: "Licencia",
    description:
      "Categorías, requisitos, vigencia y proceso de obtención de la licencia de conducción.",
    icon: "fin_limitaciones",
    color: "success",
    sections: [
      {
        id: "s2-1",
        title: "Categorías de Licencia",
        content: `<p>La licencia de conducción en Cuba se clasifica en las siguientes categorías (Art. 264):</p>
<table>
<thead><tr><th>Categoría</th><th>Vehículos</th><th>Edad Mínima</th></tr></thead>
<tbody>
<tr><td><strong>A-1</strong></td><td>Ciclomotores (motorinas eléctricas o combustión)</td><td>16 años</td></tr>
<tr><td><strong>A</strong></td><td>Motocicletas y otros vehículos similares</td><td>16 años</td></tr>
<tr><td><strong>B</strong></td><td>Automóviles y camionetas hasta 3,500 kg</td><td>18 años</td></tr>
<tr><td><strong>C</strong></td><td>Camiones y vehículos de carga mayor de 3,500 kg</td><td>21 años</td></tr>
<tr><td><strong>D</strong></td><td>Ómnibus y vehículos de transporte de pasajeros</td><td>21 años</td></tr>
<tr><td><strong>E</strong></td><td>Vehículos articulados y con remolque</td><td>21 años</td></tr>
<tr><td><strong>F</strong></td><td>Maquinaria agrícola y equipos especiales</td><td>18 años</td></tr>
</tbody>
</table>`,
        keyPoints: [
          "Cat. A-1: Ciclomotores (Motorinas) — desde 16 años. (Obligatorio hoy en día)",
          "Cat. A: Motos — desde 16 años",
          "Cat. B: Autos hasta 3,500 kg — desde 18 años",
          "Cat. C: Camiones — desde 21 años (Requiere 2 años en B)",
          "Cat. D: Ómnibus — desde 21 años (Requiere 2 años en B)",
        ],
      },
      {
        id: "s2-2",
        title: "Requisitos para Obtener la Licencia",
        content: `<p>Para obtener la licencia de conducción se requiere:</p>
<ol>
<li><strong>Tener la edad mínima</strong> correspondiente a la categoría solicitada.</li>
<li><strong>Certificado médico</strong> que acredite aptitud física y mental para conducir.</li>
<li>Aprobar el <strong>examen teórico</strong> sobre conocimientos de seguridad vial.</li>
<li>Aprobar el <strong>examen práctico</strong> de conducción.</li>
<li><strong>No estar inhabilitado</strong> por resolución judicial o administrativa.</li>
</ol>
<p>El examen teórico consta de <strong>20 preguntas</strong> de selección múltiple y se requiere un mínimo de <strong>14 respuestas correctas (70%)</strong> para aprobar.</p>`,
        keyPoints: [
          "Examen teórico: 20 preguntas, 70% para aprobar (14/20)",
          "Se necesita certificado médico",
          "Examen teórico + examen práctico",
        ],
      },
      {
        id: "s2-3",
        title: "Vigencia y Renovación",
        content: `<p>La licencia de conducción tiene una <strong>vigencia determinada</strong> y debe ser renovada periódicamente:</p>
<ul>
<li>La licencia tiene vigencia de <strong>10 años</strong> para conductores menores de 60 años.</li>
<li>Para mayores de <strong>60 años</strong>, la vigencia se reduce a <strong>5 años</strong>. A partir de los 70 años, el examen médico es cada 2 años.</li>
<li>Conducir con licencia vencida constituye una <strong>infracción grave</strong>.</li>
</ul>`,
        keyPoints: [
          "Vigencia: 10 años (menores de 60), 5 años (mayores de 60)",
          "A partir de 70 años, examen médico cada 2 años",
          "Licencia vencida = infracción grave",
        ],
      },
    ],
  },
  {
    id: "mod-3",
    slug: "normas-de-circulacion",
    title: "Normas de Circulación",
    shortTitle: "Circulación",
    description:
      "Reglas generales, velocidad, adelantamiento, uso de carriles y distancia de seguimiento.",
    icon: "prohibido_adelantar",
    color: "accent",
    sections: [
      {
        id: "s3-1",
        title: "Reglas Generales de Circulación",
        content: `<p>Las reglas fundamentales que todo conductor debe cumplir:</p>
<ul>
<li>Circular siempre por la <strong>mitad derecha</strong> de la calzada.</li>
<li>Mantener el control del vehículo en <strong>todo momento</strong>. Prohibido usar una sola mano (salvo para cambios de marcha).</li>
<li>Utilizar el <strong>cinturón de seguridad</strong> (conductor y pasajeros).</li>
<li><strong>Prohibido conducir con menores de 12 años</strong> en los asientos delanteros (Art. 102).</li>
</ul>`,
        keyPoints: [
          "Circular por la derecha siempre",
          "Cinturón obligatorio para todos",
          "Menores de 12 años NUNCA en el asiento delantero",
          "Prohibido manejar con una sola mano injustificadamente",
        ],
      },
      {
        id: "s3-2",
        title: "Límites de Velocidad (Ley 109)",
        content: `<p>Los límites máximos de velocidad en zonas urbanas y situaciones especiales son (Art. 115-127):</p>
<ul>
<li><strong>20 km/h:</strong> Equipos agrícolas, marcha atrás, salidas de garajes.</li>
<li><strong>30 km/h:</strong> Vehículos con arrastre (remolques).</li>
<li><strong>40 km/h:</strong> Zonas escolares y transporte masivo de personal.</li>
<li><strong>50 km/h:</strong> Límite general para vehículos urbanos.</li>
<li><strong>60 km/h:</strong> Límite máximo en <strong>caminos de tierra o terraplén</strong>. Además, es la velocidad <strong>mínima</strong> obligatoria en túneles.</li>
</ul>
<p>Límites en vías rurales y autopistas:</p>
<table>
<thead><tr><th>Tipo de Vehículo</th><th>Carreteras</th><th>Autopistas</th></tr></thead>
<tbody>
<tr><td>Motos, ómnibus y ligeros</td><td>90 km/h</td><td>100 km/h</td></tr>
<tr><td>Carga rígidos y articulados</td><td>80 km/h</td><td>90 km/h</td></tr>
</tbody>
</table>`,
        keyPoints: [
          "Urbana Motor: 50 km/h | Escolar: 40 km/h",
          "Terraplén o tierra: Máximo 60 km/h",
          "Túneles: Mínimo obligatorio 60 km/h",
          "Autopista Ligeros: 100 km/h",
        ],
        tips: [
          "Los 60 km/h como límite en terraplén y como velocidad mínima en túneles salen muchísimo en el examen.",
        ],
      },
      {
        id: "s3-3",
        title: "Adelantamiento",
        content: `<p>Las reglas para adelantar correctamente:</p>
<h4>¿Cuándo se puede adelantar?</h4>
<ul>
<li>Por el <strong>lado izquierdo</strong> del vehículo que se adelanta.</li>
<li>Cuando la <strong>línea central es discontinua</strong>.</li>
<li>Avisando previamente con las <strong>luces direccionales</strong>.</li>
</ul>
<h4>¿Cuándo está PROHIBIDO adelantar? (Art 104)</h4>
<ul>
<li>En <strong>curvas y pendientes</strong> de poca visibilidad.</li>
<li>En <strong>intersecciones</strong> y pasos peatonales (cebras).</li>
<li>En <strong>puentes, túneles</strong> y pasos a nivel férreo.</li>
<li>Cuando la <strong>línea central es continua</strong>.</li>
</ul>`,
        keyPoints: [
          "Adelantar SIEMPRE por la izquierda",
          "Prohibido: curvas, intersecciones, puentes, túneles, pasos a nivel",
        ],
      },
      {
        id: "s3-4",
        title: "Estacionamiento, Parqueo y Prohibiciones (Art 103, 137, 138)",
        content: `<p>Reglas estrictas al estacionar un vehículo:</p>
<ul>
<li>Hacerlo <strong>paralelo</strong> a la acera a no más de <strong>10 cm</strong> y a <strong>50 cm</strong> de otro vehículo.</li>
<li>Obligaciones: apagar motor, retirar llave y aplicar freno de mano.</li>
<li>En pendientes: aplicar <strong>1ra velocidad</strong> (ascendente/subiendo) o <strong>reversa</strong> (descendente/bajando) y girar el timón hacia el contén.</li>
</ul>
<h4>Prohibiciones Destacadas</h4>
<ul>
<li>Prohibido circular por aceras, paseos o separador central (Art 106).</li>
<li>Prohibido reparar vehículos en la vía pública (excepto fuerza mayor por el tiempo mínimo) (Art 125).</li>
</ul>`,
        keyPoints: [
          "Estacionar: Máx 10 cm acera, 50 cm otro vehículo",
          "Pendiente subiendo: 1ra vel | bajando: reversa",
          "Prohibido reparar autos en la calle (salvo emergencia)",
        ],
      },
    ],
  },
  {
    id: "mod-4",
    slug: "senalizacion-vial",
    title: "Señalización Vial y PNR",
    shortTitle: "Señales",
    description:
      "Señales de los agentes de la PNR, semáforos y clasificación vertical.",
    icon: "semaforo_adelante",
    color: "danger",
    sections: [
      {
        id: "s4-1",
        title: "Señales de Autoridad (PNR) - Art 63",
        content: `<p>En Cuba, las señales corporales o acústicas de los <strong>agentes de la PNR</strong> prevalecen sobre cualquier semáforo o señal.</p>
<ul>
<li><strong>Brazo levantado verticalmente:</strong> Señal de "Atención, Alto". Obliga a detenerse de inmediato a TODOS los usuarios de la vía.</li>
<li><strong>Brazos extendidos horizontalmente:</strong> Obliga a detenerse a los vehículos que se encuentren de frente o a espalda del agente. Los flancos laterales pueden avanzar.</li>
<li><strong>Silbato:</strong> Toques cortos y continuos indican detenerse. Un toque largo indica continuar la marcha.</li>
<li><strong>Balanceo de luz roja:</strong> Orden de detención total para quienes va dirigida.</li>
</ul>`,
        keyPoints: [
          "Agente PNR tiene prioridad absoluta (Art. 62)",
          "Brazo vertical = Alto para todos",
          "Brazos horizontales = Pasan los laterales, detiene frente y espalda",
          "Silbato: Cortos (Pare), Largo (Siga)",
        ],
        tips: [
          "Nunca falles la jerarquía: Agente > Señal Provisional > Semáforo > Señales Verticales > Marcas en el piso.",
        ],
      },
      {
        id: "s4-2",
        title: "Señales Reglamentarias (Prohibitivas y Obligatorias)",
        content: `<p><strong>Señales Prohibitivas:</strong> Forma circular, fondo blanco con <strong>borde rojo</strong> y símbolo negro. Indican acciones prohibidas (Ej: No Estacionar, Límite de velocidad).</p>
<p><strong>Señales Obligatorias:</strong> Forma circular, fondo <strong>azul</strong> con símbolo blanco. Indican acciones que debes hacer sí o sí (Ej: Giro obligatorio).</p>`,
        keyPoints: [
          "Prohibitivas: círculo, borde rojo, fondo blanco",
          "Obligatorias: círculo, fondo azul",
        ],
      },
      {
        id: "s4-3",
        title: "Señales Preventivas e Informativas",
        content: `<p><strong>Preventivas:</strong> Forma de <strong>diamante (rombo)</strong>, fondo <strong>amarillo</strong> con símbolo negro. Advierten peligros (Curvas, zonas escolares, cruce de animales).</p>
<p><strong>Informativas:</strong> Forma <strong>rectangular</strong>, fondo <strong>verde o azul</strong>. Guían al usuario sobre destinos o servicios (Hospitales, distancias).</p>`,
        keyPoints: [
          "Preventivas/Peligro: Rombo amarillo",
          "Informativas: Rectángulos verdes o azules",
        ],
      },
      {
        id: "s4-4",
        title: "Semáforos y Marcas Viales",
        content: `<p>El significado exacto de los semáforos:</p>
<ul>
<li><strong>🟢 Verde</strong>: Paso permitido. Puede avanzar o girar.</li>
<li><strong>🟡 Amarillo fijo</strong>: Precaución. Pare si puede hacerlo con seguridad.</li>
<li><strong>🔴 Rojo fijo</strong>: Pare. Deténgase antes de la línea.</li>
<li><strong>🔴 Rojo intermitente</strong>: Equivale a una señal de PARE. Deténgase por completo y luego ceda el paso.</li>
<li><strong>🟡 Amarillo intermitente</strong>: Precaución. Reduzca velocidad y cruce con cuidado.</li>
</ul>
<p>Marcas viales principales (Art 178-179):</p>
<ul>
<li><strong>Línea continua</strong>: Estrictamente prohibido cruzar. (Doble continua es riesgo mayor).</li>
<li><strong>Línea discontinua</strong>: Se puede cruzar o adelantar con seguridad.</li>
</ul>`,
        keyPoints: [
          "Rojo intermitente = Actúa como señal de PARE",
          "Línea continua = Muro invisible, no cruzar",
        ],
      },
    ],
  },
  {
    id: "mod-5",
    slug: "intersecciones-y-prioridad",
    title: "Intersecciones y Prioridad",
    shortTitle: "Prioridad",
    description:
      "Reglas de prioridad de paso, rotondas, cruces y vehículos de emergencia.",
    icon: "ceda",
    color: "primary",
    sections: [
      {
        id: "s5-1",
        title: "Reglas de Prioridad de Paso",
        content: `<p>En una intersección sin semáforo, ni agente, ni señal de pare (Art 79):</p>
<ul>
<li><strong>Prioridad por la derecha</strong>: El vehículo que se aproxima por su lado derecho tiene prioridad de paso en vías de igual categoría.</li>
<li><strong>Vía pavimentada vs. Tierra</strong>: Se debe ceder el paso a los vehículos que circulan por vía pavimentada si usted sale de una de tierra.</li>
<li>Los <strong>vehículos de emergencia</strong> (ambulancias, bomberos, SIUM, PNR) con sirena y luces activas tienen <strong>prioridad absoluta</strong>. Hay que arrimarse a la derecha y detenerse (Art 67).</li>
</ul>`,
        keyPoints: [
          "Sin señal: ceder al que viene por la DERECHA",
          "Pavimento le gana a camino de tierra",
          "Emergencias con sirena = arrimarse a la derecha y parar",
        ],
      },
      {
        id: "s5-2",
        title: "Rotondas y Glorietas",
        content: `<p>Regla de oro en rotondas:</p>
<ul>
<li>Los vehículos <strong>dentro de la rotonda</strong> tienen prioridad sobre los que pretenden entrar. Al llegar, debes ceder el paso.</li>
<li>Se circula en sentido <strong>contrario a las manecillas del reloj</strong> (por la derecha).</li>
</ul>`,
        keyPoints: [
          "Dentro de rotonda = preferencia",
          "Circulación: contrario a manecillas del reloj",
        ],
      },
    ],
  },
  {
    id: "mod-6",
    slug: "peatones-y-ciclistas",
    title: "Peatones, Ciclistas y Animales",
    shortTitle: "Peatones/Ciclos",
    description:
      "Derechos y deberes de peatones, normas para ciclistas, zonas escolares y cruce de animales.",
    icon: "peatones",
    color: "success",
    sections: [
      {
        id: "s6-1",
        title: "Deberes de los Peatones (Art 144-147)",
        content: `<p>Los peatones son muy vulnerables, pero tienen estrictas obligaciones en la Ley 109:</p>
<ul>
<li>Caminar por la acera. Si no hay acera o están en vía rural, deben caminar por la <strong>izquierda</strong> de la vía (de frente a la circulación vehicular).</li>
<li><strong>No cruzar</strong> por delante o por detrás de vehículos estacionados (Art 146).</li>
<li>Tienen prioridad absoluta en pasos de cebra y cuando son discapacitados que han iniciado el cruce.</li>
</ul>`,
        keyPoints: [
          "Sin acera: caminar por la IZQUIERDA (de frente al tránsito)",
          "Prohibido cruzar entre autos estacionados",
        ],
      },
      {
        id: "s6-2",
        title: "Normas para Ciclistas",
        content: `<p>Los ciclistas deben cumplir (Art 112):</p>
<ul>
<li>Circular por la derecha o ciclovía (A no más de 1 metro del contén).</li>
<li><strong>Prohibido circular por aceras</strong> ni remolcarse de otros vehículos.</li>
<li>Señalizar giros con el brazo: Izquierdo extendido (Giro izquierda), Derecho extendido (Giro derecha), Brazo levantado (Parada).</li>
<li>Llevar <strong>luces obligatorias de noche</strong> (blanca al frente, roja atrás).</li>
</ul>`,
        keyPoints: [
          "Prohibido rodar por la acera o soltar el timón",
          "Luces nocturnas: Blanca delante / Roja detrás",
        ],
      },
      {
        id: "s6-3",
        title: "Cruce de Animales (Art 118-119)",
        content: `<p>Regulaciones sobre el ganado en la vía pública:</p>
<ul>
<li>En vías pavimentadas, solo pueden cruzar del amanecer al anochecer.</li>
<li>Un rebaño requiere un conductor a <strong>100 metros por delante</strong> y otro a <strong>100 metros por detrás</strong> con banderas rojas de día o luces de noche.</li>
<li>El ganado suelto en la vía o aledaños puede ser decomisado.</li>
</ul>`,
        keyPoints: [
          "Rebaños: Conductores a 100m delante y detrás",
          "Uso de banderas rojas (día) o lumínicas (noche)",
        ],
      },
    ],
  },
  {
    id: "mod-7",
    slug: "infracciones-y-sanciones",
    title: "Infracciones, Sanciones y Puntos",
    shortTitle: "Infracciones",
    description:
      "Clasificación de multas, sistema de puntos (Decreto 287) y penalidades por alcohol.",
    icon: "pare",
    color: "danger",
    sections: [
      {
        id: "s7-1",
        title: "Sistema de Multas y Puntos (Decreto 287)",
        content: `<p>El sistema de puntos y multas clasifica las penalidades según gravedad (Art. 2):</p>
<ul>
<li><strong>Infracciones Muy Peligrosas:</strong> Restan 12 puntos | Multa de 60 pesos. (Ej: Huir de accidente, manejar contra el tránsito).</li>
<li><strong>Infracciones Peligrosas:</strong> Restan 8 puntos | Multa de 40 pesos. (Ej: Semáforo rojo, exceso de velocidad).</li>
<li><strong>Infracciones Menos Peligrosas:</strong> Restan 6 puntos | Multa de 20 pesos. (Ej: Mal estacionamiento, no usar direccionales).</li>
</ul>
<p>Límites de puntos: Un titular de licencia puede acumular máximo <strong>36 puntos</strong> en un año. Un conductor novel máximo <strong>24 puntos</strong>.</p>`,
        keyPoints: [
          "Muy Peligrosas: 12 puntos / 60 pesos",
          "Peligrosas: 8 puntos / 40 pesos",
          "Menos Peligrosas: 6 puntos / 20 pesos",
          "Límite de puntos: 36 (Titular) / 24 (Novel)",
        ],
      },
      {
        id: "s7-2",
        title: "Sanciones por Alcohol (Ley 151)",
        content: `<p>Conducir bajo efectos del alcohol conlleva sanciones severas y duales (Código Penal):</p>
<ul>
<li><strong>Choferes No Profesionales:</strong> Multa alta (100-300 cuotas). Si hay embriaguez manifiesta: privación de libertad 6 meses a 2 años.</li>
<li><strong>Choferes Profesionales y Noveles:</strong> Tienen tolerancia cero (0.0). Se les penaliza con privación de libertad (cárcel) de 6 meses a 1 año solo por afectación, y de 1 a 3 años por embriaguez, además de la <strong>suspensión de la licencia</strong>.</li>
</ul>
<p>Negarse a realizar la prueba de alcoholemia solicitada por el agente, resulta en la suspensión de la licencia de conducción.</p>`,
        keyPoints: [
          "Profesionales y Noveles: 0.0 de tolerancia (cárcel y suspensión garantizada)",
          "No profesionales: Embriaguez = 6 meses a 2 años de privación de libertad",
          "Negarse a la prueba = Suspensión de la licencia",
        ],
      },
    ],
  },
  {
    id: "mod-8",
    slug: "seguridad-y-prevencion",
    title: "Seguridad Técnica y Auxilio (P.A.S)",
    shortTitle: "Seguridad",
    description:
      "Condiciones técnicas, uso de luces nocturnas y primeros auxilios.",
    icon: "velocidad_50",
    color: "accent",
    sections: [
      {
        id: "s8-1",
        title: "Luces, Visibilidad y Conducción Nocturna (Art 184-186)",
        content: `<p>Especificaciones exactas del alumbrado exterior y conducción nocturna exigidas para pasar el examen técnico:</p>
<ul>
<li><strong>Luces de cruce (cortas):</strong> Deben alumbrar la vía con eficacia hasta <strong>40 metros</strong>. Son obligatorias en zona urbana iluminada y dentro de túneles.</li>
<li><strong>Luces de carretera (largas):</strong> Deben alumbrar hasta <strong>100 metros</strong>. Se prohíbe su uso continuado si hay otro vehículo a <strong>menos de 150 metros</strong> de frente (para no encandilar).</li>
<li>La <strong>chapa o matrícula</strong> debe estar iluminada para ser legible a <strong>20 metros</strong>.</li>
</ul>`,
        keyPoints: [
          "Luces cortas: Alumbran 40m",
          "Luces largas: Alumbran 100m",
          "Cambio de luz (Bajar luz al cruzarse): A los 150m",
          "Matrícula legible a 20m de noche",
        ],
        tips: [
          "Los números 40, 100 y 150 son fijos en el cuestionario de examen sobre iluminación.",
        ],
      },
      {
        id: "s8-2",
        title: "Condiciones Técnicas del Vehículo (Art 182, 193-195)",
        content: `<p>El auto debe estar apto para circular:</p>
<ul>
<li><strong>Frenado:</strong> A 30 km/h, un auto ligero debe frenar en máximo 7.2 metros, y una moto en 7.5 metros.</li>
<li><strong>Espejos:</strong> Deben permitir ver a una distancia mínima de 50 metros hacia atrás.</li>
<li><strong>Parabrisas:</strong> Prohibido usar papeles oscuros en todo el cristal (solo en el tercio superior).</li>
</ul>`,
        keyPoints: [
          "Distancia de frenado (30km/h): Ligeros 7.2m | Motos 7.5m",
          "Espejos deben cubrir 50m hacia atrás",
        ],
      },
      {
        id: "s8-3",
        title: "Distracciones Prohibidas (Art 102)",
        content: `<p>Incluso con el auto en buen estado, las siguientes acciones rompen la seguridad y están explícitamente penadas:</p>
<ul>
<li>Uso de teléfonos móviles u otros medios audiovisuales en marcha.</li>
<li>Equipos de audio a <strong>alto volumen</strong> que impidan oír sirenas o claxon (¡Muy sancionado en Cuba!).</li>
<li>Llevar audífonos conectados a las dos orejas.</li>
</ul>`,
        keyPoints: [
          "Prohibido celular al volante",
          "Prohibido música a un volumen que aisle acústicamente el vehículo",
        ],
      },
      {
        id: "s8-4",
        title: "Primeros Auxilios (La Regla P.A.S)",
        content: `<p>En caso de presenciar o verse involucrado en un accidente, la ley penaliza severamente el no prestar auxilio (Delito de denegación de auxilio). Los pasos son:</p>
<ol>
<li><strong>P - Proteger</strong>: Señalizar el lugar con triángulos (a 30m para ser visto a 150m).</li>
<li><strong>A - Avisar</strong>: Llamar a la PNR o emergencias médicas.</li>
<li><strong>S - Socorrer</strong>: Brindar asistencia vital básica.</li>
</ol>
<h4>⚠️ Reglas Médicas Claves en el Examen</h4>
<ul>
<li><strong>NUNCA retirar el casco</strong> a un motociclista herido (causa lesiones medulares graves).</li>
<li>No mover a un herido traumático salvo que exista riesgo de incendio/explosión.</li>
<li>Si hay hemorragia, aplicar <strong>presión directa</strong> sobre la herida.</li>
</ul>`,
        keyPoints: [
          "Acrónimo PAS: Proteger, Avisar, Socorrer",
          "Triángulos de emergencia: Colocar a 30m de distancia",
          "Prohibición total de quitar cascos a motoristas",
          "Hemorragias = Presión directa",
        ],
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
