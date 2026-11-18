import { ChevronDown } from 'lucide-react';

const questions = [
  ['¿Puedo probar la plataforma educativa?', 'Puedes solicitar una demo guiada y consultar por el acceso de prueba de 15 días con datos de ejemplo para tu equipo directivo y docente.'],
  ['¿Cuándo comienzan los 30 días del sitio web?', 'Definimos el alcance, los materiales necesarios y la fecha de inicio contigo antes de desarrollar. El calendario y las condiciones de entrega se detallan en la propuesta.'],
  ['¿Pueden migrar los datos de mi colegio?', 'Los planes Campus Pro y Red Institucional Élite incluyen migración de datos. Revisamos contigo el formato y el alcance de la información antes de comenzar.'],
  ['¿Cómo se contrata un plan o un paquete?', 'Elige la opción de tu interés y prepara una solicitud. Un asesor puede confirmar el alcance, la disponibilidad y los medios de pago por el canal de contacto.'],
  ['¿Cómo cotizo software a medida?', 'Cuéntanos qué proceso quieres resolver y qué herramientas usas. Con esa información podemos discutir las integraciones, el alcance y un calendario de entrega.'],
];

export default function FAQ() {
  return (
    <section className="section-band" id="faq">
      <div className="section-wrap section-block faq-grid">
        <div className="section-heading"><p className="eyebrow">Antes de empezar</p><h2>Preguntas frecuentes</h2></div>
        <div className="faq-list">
          {questions.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}
