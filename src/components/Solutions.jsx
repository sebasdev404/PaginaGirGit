import { ArrowUpRight, Code2, Globe2, GraduationCap } from 'lucide-react';
import { CampusPreview, OperationsPreview, WebPreview } from './ProductPreviews';
import { WEB_30_DAYS_STEPS } from '../data/softwareData';

const solutions = [
  {
    id: 'plataforma-escolar', label: 'SaaS educativo', Icon: GraduationCap, Preview: CampusPreview,
    title: 'GirGit EduSaaS 360', description: 'Centraliza calificaciones, asistencia, matrículas y recaudos en una plataforma para toda la comunidad escolar.',
    tags: ['Gestión académica', 'Portal familiar'], href: '#saas-educativo', action: 'Conocer la plataforma', theme: 'campus',
  },
  {
    id: 'web-30-dias', label: 'Desarrollo web', Icon: Globe2, Preview: WebPreview,
    title: 'Tu sitio web en 30 días', description: 'Diseñamos y desarrollamos sitios corporativos, landing pages y tiendas en línea, con un alcance y un calendario definidos desde el inicio.',
    tags: ['Diseño a medida', 'Comercio electrónico'], href: '#tienda', category: 'web-30-dias', action: 'Ver paquetes web', theme: 'web',
  },
  {
    id: 'software-medida', label: 'Software a medida', Icon: Code2, Preview: OperationsPreview,
    title: 'Sistemas para tu empresa', description: 'Automatiza procesos y conecta tus herramientas con un CRM, un ERP o una aplicación diseñada alrededor de tu operación.',
    tags: ['Automatización', 'Integraciones'], href: '#tienda', category: 'software-medida', action: 'Ver opciones de desarrollo', theme: 'operations',
  },
];

export default function Solutions({ onSelectCategory }) {
  return (
    <section id="soluciones" className="section-wrap section-block">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">Portafolio de soluciones</p><h2>Qué podemos construir contigo</h2></div>
        <p>Desde una plataforma lista para tu colegio hasta un sistema diseñado para tu empresa.</p>
      </div>
      <div className="solution-grid">
        {solutions.map(({ id, label, Icon, Preview, title, description, tags, href, category, action, theme }) => (
          <article key={id} id={id} className="solution-card">
            <div className={`solution-art solution-art-${theme}`} role="img" aria-label={`Vista ilustrativa de ${title}`}><Preview /></div>
            <div className="solution-content">
              <p className="solution-label"><Icon /> {label}</p>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="solution-tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <a href={href} className="text-link" onClick={category ? () => onSelectCategory(category) : undefined}>{action} <ArrowUpRight /></a>
            </div>
          </article>
        ))}
      </div>
      <details className="web-timeline">
        <summary>Cómo desarrollamos tu web en 30 días</summary>
        <ol>{WEB_30_DAYS_STEPS.map(({ days, deliverable }) => <li key={days}><span>{days}</span> {deliverable}</li>)}</ol>
      </details>
    </section>
  );
}
