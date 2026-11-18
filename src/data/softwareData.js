export const SAAS_FEATURES = [
  {
    id: 'academico',
    title: 'Gestión Académica & Boletines',
    shortDesc: 'Calificaciones, cálculo ponderado automático y generación de boletines oficiales en 1 clic.',
    icon: 'GraduationCap',
    metrics: '90% menos tiempo elaborando boletines',
    details: [
      'Configuración de periodos, escalas valorativas y porcentajes por materia',
      'Boletines oficiales en PDF personalizables con escudo y firmas digitales',
      'Registro de logros, observaciones y planes de mejoramiento escolar',
      'Cierre de periodos seguro con auditoría por docente'
    ]
  },
  {
    id: 'asistencia',
    title: 'Asistencia & Notificaciones WhatsApp',
    shortDesc: 'Control de faltas y retardos con alertas instantáneas enviadas a los teléfonos de los acudientes.',
    icon: 'BellRing',
    metrics: '100% comunicación inmediata con padres',
    details: [
      'Pase de lista digital desde cualquier dispositivo móvil o tablet',
      'Disparo automático de alerta por WhatsApp/SMS al detectar inasistencia',
      'Historial de excusas médicas y justificaciones aprobadas por coordinación',
      'Estadísticas de ausentismo por grupo y jornada'
    ]
  },
  {
    id: 'finanzas',
    title: 'Pensiones & Recaudo Digital',
    shortDesc: 'Automatiza el cobro de mensualidades, pasarela PSE y liquidación automática de intereses.',
    icon: 'CreditCard',
    metrics: 'Hasta 65% de reducción en cartera vencida',
    details: [
      'Botón de pago en línea (PSE, tarjetas crédito/débito, transferencias)',
      'Generación automática de recibos de caja y paz y salvos digitales',
      'Recordatorios amigables de pago programados por WhatsApp y correo',
      'Reportes de cartera vencida y conciliación bancaria instantánea'
    ]
  },
  {
    id: 'matriculas',
    title: 'Admisiones & Matrícula Digital',
    shortDesc: 'Inscripción de nuevos aspirantes y renovación de matrícula 100% online sin papeleos.',
    icon: 'UserCheck',
    metrics: '0 filas y trámites en secretaría',
    details: [
      'Formulario web público para postulantes y subida digital de documentos',
      'Flujo de aprobación paso a paso: entrevista, examen y matrícula final',
      'Firma de contrato de matrícula digital con validez legal',
      'Carnetización digital de estudiantes y docentes'
    ]
  },
  {
    id: 'aulavirtual',
    title: 'Aula Virtual & Tareas',
    shortDesc: 'Espacio interactivo para entrega de actividades, material pedagógico y foros de clase.',
    icon: 'Laptop',
    metrics: '+85% participación activa del alumno',
    details: [
      'Publicación de tareas con fecha y hora límite de entrega',
      'Recepción de archivos y retroalimentación docente con rúbrica',
      'Biblioteca digital de recursos, guías y enlaces de video',
      'Integración con Google Meet y Zoom para clases en vivo'
    ]
  },
  {
    id: 'ia_analytics',
    title: 'IA Directiva & Analítica Predictiva',
    shortDesc: 'Predicción de riesgo de deserción y reportes estratégicos para rectores y coordinadores.',
    icon: 'BrainCircuit',
    metrics: 'Toma de decisiones basada en datos reales',
    details: [
      'Detección temprana de alumnos en riesgo académico o deserción',
      'Rendimiento comparativo entre docentes, asignaturas y sedes',
      'Métricas de satisfacción familiar y retención escolar',
      'Exportación rápida a Excel de requerimientos ministeriales'
    ]
  }
];

export const SAAS_ROLES_PREVIEWS = {
  rector: {
    role: 'Rector / Coordinador',
    title: 'Panel Estratégico de Control Integral',
    description: 'Monitorea en tiempo real la salud financiera, índice de asistencia global y cumplimiento docente desde una sola pantalla.',
    stats: [
      { label: 'Matrícula total', value: '1.240', change: '+12% vs año anterior' },
      { label: 'Recaudo del mes', value: 'USD 48.500', change: '94% cobrado' },
      { label: 'Asistencia hoy', value: '98,2 %', change: 'Normal' },
      { label: 'Docentes al Día', value: '38/40', change: 'Notas al 95%' }
    ],
    mockupImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'
  },
  docente: {
    role: 'Docente',
    title: 'Gestor Ágil de Notas y Asistencia',
    description: 'Digita notas con facilidad, calcula promedios al instante y califica actividades sin hojas de cálculo complicadas.',
    stats: [
      { label: 'Grupos a Cargo', value: '6 Cursos', change: 'Matemáticas & Física' },
      { label: 'Notas Calificadas', value: '185/190', change: '97% al día' },
      { label: 'Planillas Cerradas', value: 'Periodo 2', change: 'Listo para boletín' },
      { label: 'Tareas Activas', value: '4 Tareas', change: '32 entregas hoy' }
    ],
    mockupImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80'
  },
  padres: {
    role: 'Padres & Acudientes',
    title: 'Portal Familiar Transparente',
    description: 'Acceso móvil para revisar notas al momento, pagar mensualidades con 1 clic y justificar inasistencias sin desplazamientos.',
    stats: [
      { label: 'Hijos Vinculados', value: '2 Alumnos', change: 'Grados 5° y 9°' },
      { label: 'Estado de Cuenta', value: 'Al Día', change: 'Paz y Salvo descargable' },
      { label: 'Promedio general', value: '4,7 / 5,0', change: 'Cuadro de honor' },
      { label: 'Mensajes Nuevos', value: '1 Aviso', change: 'Reunión de padres' }
    ],
    mockupImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
  },
  estudiante: {
    role: 'Estudiantes',
    title: 'Aula Digital & Horarios Interactivos',
    description: 'Consulta tareas pendientes, calificaciones en tiempo real, calendario de exámenes y material descargable.',
    stats: [
      { label: 'Tareas Pendientes', value: '2 Tareas', change: 'Próxima entrega: Viernes' },
      { label: 'Puesto en Grupo', value: '#3 de 34', change: 'Excelente desempeño' },
      { label: 'Asistencia Total', value: '99%', change: 'Sin faltas' },
      { label: 'Biblioteca', value: '18 Recursos', change: 'Guías de estudio' }
    ],
    mockupImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
  }
};

export const WEB_30_DAYS_STEPS = [
  {
    week: 'Semana 1',
    days: 'Días 1 - 7',
    phase: 'Estrategia, Arquitectura & UX/UI',
    desc: 'Definición de objetivos, estructura de navegación, redacción persuasiva de copies y diseño interactivo en Figma de alta fidelidad.',
    deliverable: 'Prototipo navegable aprobado por ti'
  },
  {
    week: 'Semana 2',
    days: 'Días 8 - 16',
    phase: 'Desarrollo Frontend & Interactividad',
    desc: 'Codificación con React y Tailwind CSS, animaciones fluidas, diseño 100% adaptado a móviles, tablets y computadores de alta resolución.',
    deliverable: 'Sitio web maquetado y funcional'
  },
  {
    week: 'Semana 3',
    days: 'Días 17 - 24',
    phase: 'Integraciones, Pasarelas & CMS',
    desc: 'Conexión de WhatsApp directo, formularios seguros, pasarela de pagos (si aplica), optimización de carga ultrarrápida y SEO técnico.',
    deliverable: 'Integraciones activas y panel de control'
  },
  {
    week: 'Semana 4',
    days: 'Días 25 - 30',
    phase: 'Pruebas Finales, Despliegue & Lanzamiento',
    desc: 'Auditoría de rendimiento Lighthouse 95+, configuración de dominio propio, certificado SSL y entrega formal con sesión de capacitación grabada.',
    deliverable: '¡Tu web publicada y lista para vender!'
  }
];

export const PRODUCTS_STORE = [
  // Categoria 1: SaaS Educativo (El Fuerte)
  {
    id: 'saas-basic',
    category: 'saas-educativo',
    categoryName: 'SaaS Educativo',
    name: 'Plan Colegio Básico',
    badge: 'Colegios Pequeños',
    highlight: false,
    monthlyPrice: 149,
    annualPrice: 119, // por mes facturado anualmente
    currency: 'USD',
    capacity: 'Hasta 250 estudiantes',
    shortDesc: 'Ideal para escuelas de educación inicial, colegios campestres o instituciones en crecimiento.',
    features: [
      'Hasta 250 alumnos matriculados',
      'Gestión académica y boletines oficiales en PDF',
      'Control de asistencias por docente',
      'Notificaciones básicas por correo electrónico',
      'Portal web para padres y docentes',
      'Almacenamiento de archivos hasta 20GB',
      'Capacitación inicial del personal (4 horas)',
      'Soporte técnico por tickets en días hábiles'
    ],
    popular: false,
    actionText: 'Contratar Plan Básico'
  },
  {
    id: 'saas-campus-pro',
    category: 'saas-educativo',
    categoryName: 'SaaS Educativo',
    name: 'Plan Campus Pro',
    badge: 'MÁS ELEGIDO POR COLEGIOS 🔥',
    highlight: true,
    monthlyPrice: 289,
    annualPrice: 229,
    currency: 'USD',
    capacity: 'Hasta 800 estudiantes',
    shortDesc: 'La solución definitiva para colegios que buscan automatización total, recaudo digital y comunicación WhatsApp.',
    features: [
      'Hasta 800 alumnos matriculados',
      'TODO lo del Plan Básico incluido',
      'Integración con WhatsApp Oficial para faltas y notas',
      'Módulo de Recaudo en Línea (PSE, Tarjetas, Bancos)',
      'Matrícula y Admisiones 100% digitales con firma',
      'Aula Virtual interactiva para tareas y foros',
      'Predicción analítica de deserción con Inteligencia Artificial',
      'Almacenamiento ilimitado en nube segura',
      'Soporte prioritario por WhatsApp y videollamada 6 días a la semana'
    ],
    popular: true,
    actionText: 'Contratar Campus Pro'
  },
  {
    id: 'saas-elite',
    category: 'saas-educativo',
    categoryName: 'SaaS Educativo',
    name: 'Plan Red Institucional Élite',
    badge: 'Multicampus & Grandes Colegios',
    highlight: false,
    monthlyPrice: 499,
    annualPrice: 399,
    currency: 'USD',
    capacity: 'Estudiantes ilimitados o múltiples sedes',
    shortDesc: 'Para instituciones de gran escala, redes de colegios o universidades con requerimientos avanzados.',
    features: [
      'Capacidad para más de 2,500 estudiantes o múltiples sedes',
      'TODO lo del Plan Campus Pro incluido',
      'Servidor privado dedicado exclusivo (Cloud AWS/GCP)',
      'Facturación electrónica oficial homologada integrada',
      'App Móvil con el nombre y logo del colegio en Play Store / App Store',
      'API abierta para integración con sistemas contables y ERPs',
      'Gerente de cuenta técnico asignado 24/7',
      'Auditoría y respaldo de base de datos cada 6 horas'
    ],
    popular: false,
    actionText: 'Contratar Plan Élite'
  },

  // Categoria 2: Páginas Web en 30 Días
  {
    id: 'web-landing-30',
    category: 'web-30-dias',
    categoryName: 'Web en 30 Días',
    name: 'Landing Page de Alta Conversión',
    badge: 'Garantía 30 Días',
    highlight: false,
    monthlyPrice: 390,
    annualPrice: 390,
    oneTime: true,
    currency: 'USD',
    capacity: 'Entrega contractual en 30 días',
    shortDesc: 'Diseñada específicamente para vender un producto, servicio o captar leads calificados.',
    features: [
      'Diseño exclusivo a la medida (no plantillas genéricas)',
      'Estructura persuasiva de ventas y llamado a la acción',
      'Integración directa con WhatsApp y correo corporativo',
      'Dominio .com y hosting SSD ultrarrápido incluido x 1 año',
      'Certificado de seguridad SSL de por vida',
      'Optimización SEO On-Page para aparecer en Google',
      'Plazo y condiciones de entrega definidos en el contrato'
    ],
    popular: false,
    actionText: 'Comprar Landing 30D'
  },
  {
    id: 'web-corporativa-30',
    category: 'web-30-dias',
    categoryName: 'Web en 30 Días',
    name: 'Sitio Web Corporativo Pro',
    badge: 'EL MÁS VENDIDO 🚀',
    highlight: true,
    monthlyPrice: 750,
    annualPrice: 750,
    oneTime: true,
    currency: 'USD',
    capacity: 'Entrega contractual en 30 días',
    shortDesc: 'La presencia digital de máximo nivel que tu empresa o colegio necesita para posicionarse como líder.',
    features: [
      'Hasta 6 páginas internas (Inicio, Quiénes Somos, Servicios, Blog, Portafolio, Contacto)',
      'Panel autoadministrable (para que cambies textos y fotos tú mismo)',
      'Diseño móvil impecable y animaciones profesionales',
      'Correos corporativos ilimitados con tu dominio',
      'Integración de blog con optimización SEO para artículos',
      'Google Analytics 4 y pixel de Facebook/Instagram configurados',
      'Sesión de capacitación personalizada de uso del panel'
    ],
    popular: true,
    actionText: 'Comprar Web Corporativa'
  },
  {
    id: 'web-ecommerce-30',
    category: 'web-30-dias',
    categoryName: 'Web en 30 Días',
    name: 'Tienda Online E-commerce 30D',
    badge: 'Vende 24/7',
    highlight: false,
    monthlyPrice: 1290,
    annualPrice: 1290,
    oneTime: true,
    currency: 'USD',
    capacity: 'Entrega contractual en 30 días',
    shortDesc: 'Plataforma de comercio electrónico completa con cobro automático con tarjeta, PSE y envíos.',
    features: [
      'Catálogo de productos con categorías, variantes (tallas, colores) y stock',
      'Pasarela de pago integrada (MercadoPago, Stripe, PayU, Wompi)',
      'Panel de control de pedidos, clientes y facturas',
      'Cálculo automático de costos de envío',
      'Carrito de compras optimizado para evitar carritos abandonados',
      'Carga inicial de hasta 40 productos guiada por nuestro equipo',
      'Soporte técnico preferencial post-lanzamiento por 60 días'
    ],
    popular: false,
    actionText: 'Comprar Tienda 30D'
  },

  // Categoria 3: Software a la Medida
  {
    id: 'software-custom-mvp',
    category: 'software-medida',
    categoryName: 'A la Medida',
    name: 'Desarrollo MVP / Sistema Inicial',
    badge: 'Proyectos Ágiles',
    highlight: false,
    monthlyPrice: 1800,
    annualPrice: 1800,
    oneTime: true,
    currency: 'USD',
    capacity: 'Entrega estimada 6-8 semanas',
    shortDesc: 'Desarrollo de un prototipo funcional para validar un modelo de negocio con clientes reales.',
    features: [
      'Levantamiento detallado de requerimientos técnicos y alcance',
      'Diseño de arquitectura escalable en Node.js / Python / React',
      'Base de datos relacional (PostgreSQL) o NoSQL optimizada',
      'Autenticación de usuarios segura con roles y permisos (RBAC)',
      'Despliegue inicial en servidores cloud (AWS / GCP / DigitalOcean)',
      'Código fuente 100% de propiedad del cliente'
    ],
    popular: false,
    actionText: 'Cotizar MVP a Medida'
  },
  {
    id: 'software-custom-enterprise',
    category: 'software-medida',
    categoryName: 'A la Medida',
    name: 'Software Empresarial & ERP / CRM',
    badge: 'Empresas & Corporaciones',
    highlight: true,
    monthlyPrice: 3500,
    annualPrice: 3500,
    oneTime: true,
    currency: 'USD',
    capacity: 'Desarrollo a medida completo',
    shortDesc: 'Sistemas a gran escala para digitalizar la operación completa de empresas e industrias.',
    features: [
      'Módulos a medida: facturación, inventario, logística, RRHH y clientes',
      'Integraciones con APIs de terceros, bancos, WhatsApp Business API',
      'Desarrollo de App Móvil nativa o híbrida (iOS y Android)',
      'Metodología Scrum con entregas quincenales funcionales',
      'SLA de disponibilidad del 99.9% y pruebas de ciberseguridad',
      'Garantía técnica de 6 meses y soporte post-entrega'
    ],
    popular: true,
    actionText: 'Solicitar Cotización Enterprise'
  }
];

export const ADDONS = [
  {
    id: 'addon-app-movil',
    name: 'App Móvil Institucional en Play Store & App Store',
    desc: 'Tu propia app con el logo y nombre de tu colegio para padres y profesores.',
    price: 49,
    priceType: 'mes'
  },
  {
    id: 'addon-facturacion-electronica',
    name: 'Facturación Electrónica Homologada DIAN / Fiscal',
    desc: 'Emisión automática de comprobantes electrónicos autorizados con cada pago recibido.',
    price: 35,
    priceType: 'mes'
  },
  {
    id: 'addon-servidor-dedicado',
    name: 'Servidor Privado Dedicado & Backup Diario Cloud',
    desc: 'Máxima velocidad de carga y copias de seguridad automáticas en la nube.',
    price: 60,
    priceType: 'mes'
  },
  {
    id: 'addon-soporte-vip',
    name: 'Mesa de Soporte VIP 24/7 con Asesor Dedicado',
    desc: 'Línea directa telefónica y respuesta en menos de 15 minutos para cualquier duda.',
    price: 40,
    priceType: 'mes'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Implementar GirGit EduSaaS transformó por completo nuestro colegio. Pasamos de gastar semanas enteras imprimiendo boletines a enviarlos de forma digital en menos de diez minutos. Los padres están fascinados con el módulo de notas y pagos en línea.',
    author: 'Lic. Martha Gómez',
    role: 'Rectora',
    institution: 'Colegio Campestre Los Robles (+650 estudiantes)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    tag: 'SaaS Educativo'
  },
  {
    quote: 'Necesitábamos nuestra web corporativa urgente para una ronda de inversión. GirGit Software cumplió exactamente el cronograma de 30 días con una calidad visual y velocidad que superó cualquier expectativa. 100% recomendados.',
    author: 'Ing. Carlos Mendoza',
    role: 'Co-Founder & CTO',
    institution: 'NexTech Logistics',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    tag: 'Web en 30 Días'
  },
  {
    quote: 'La reducción de la cartera vencida en el colegio fue del 70% en el primer trimestre gracias al módulo de recaudos automáticos de GirGit. Además el soporte técnico responde en minutos.',
    author: 'Dr. Fernando Salazar',
    role: 'Director Administrativo',
    institution: 'Liceo Bilingüe San Jerónimo (+1,100 estudiantes)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    tag: 'SaaS Educativo'
  }
];

export const FAQS = [
  {
    question: '¿Por qué el SaaS Educativo es el producto estrella de GirGit Software?',
    answer: 'Porque fue diseñado desde cero junto con rectores y coordinadores escolares para resolver los verdaderos dolores de cabeza de las instituciones: la pérdida de tiempo en boletines, el ausentismo no detectado a tiempo y la alta morosidad en el pago de pensiones. Es una plataforma todo-en-uno que moderniza la institución y enamora a los padres de familia.'
  },
  {
    question: '¿Cómo funciona la garantía de entrega de Páginas Web en 30 Días?',
    answer: 'Firmamos un contrato formal de desarrollo con un cronograma semanal establecido. Si cumplimos con los insumos acordados y nosotros no te entregamos tu sitio web funcional y desplegado en el día 30, te reembolsamos el 50% del valor del proyecto y te entregamos la web terminada sin costo adicional.'
  },
  {
    question: '¿Puedo probar el SaaS Educativo antes de comprarlo para mi colegio?',
    answer: '¡Por supuesto! Ofrecemos una demostración interactiva guiada y acceso a un entorno de prueba (Sandbox) con datos simulados por 15 días totalmente gratis para el equipo directivo y docente de tu institución.'
  },
  {
    question: '¿Qué formas de pago aceptan en la tienda de compras de software?',
    answer: 'Aceptamos transferencias bancarias, pagos en línea por PSE, tarjetas de crédito (Visa, Mastercard, American Express), pagos en efectivo homologados y facturación electrónica para instituciones y personas jurídicas. También puedes tramitar tu orden directamente por WhatsApp con un asesor corporativo.'
  },
  {
    question: '¿La migración de datos de mi sistema escolar anterior está incluida?',
    answer: 'Sí. En nuestros planes Campus Pro y Élite, nuestro equipo técnico se encarga de importar la base de datos de tus estudiantes, docentes y materias desde archivos Excel o bases de datos anteriores sin costo extra.'
  },
  {
    question: '¿Cómo cotizo un Software a la Medida si tengo una idea específica?',
    answer: 'Puedes seleccionar la opción en nuestra tienda o escribirnos directamente. Agendamos una videollamada de 30 minutos de levantamiento técnico donde evaluamos el alcance y en 24 a 48 horas te entregamos una propuesta económica y cronograma detallado.'
  }
];
