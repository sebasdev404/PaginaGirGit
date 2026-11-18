import { ArrowRight, ArrowDown, CirclePlay, Code2, Globe2, GraduationCap } from 'lucide-react';
import { CampusPreview } from './ProductPreviews';

const shortcuts = [
  ['#saas-educativo', 'SaaS educativo', GraduationCap],
  ['#web-30-dias', 'Web en 30 días', Globe2],
  ['#software-medida', 'Software a medida', Code2],
];

export default function Hero({ onOpenDemo }) {
  return (
    <section className="hero" id="inicio">
      <div className="section-wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="brand-dot" /> Estudio de desarrollo de software</p>
          <h1>Software que<br /> impulsa tu <em>operación.</em></h1>
          <p className="hero-description">Creamos plataformas educativas, sitios web y software a medida para colegios y empresas que quieren trabajar mejor.</p>
          <div className="hero-actions">
            <a href="#soluciones" className="button button-primary">Explorar soluciones <ArrowRight /></a>
            <button type="button" className="button button-outline" onClick={onOpenDemo}><CirclePlay /> Solicitar demo</button>
          </div>
        </div>
        <figure className="hero-figure">
          <CampusPreview />
          <figcaption><span className="brand-dot" /> GIRGIT EDUSAAS 360 <span>Vista previa · Datos de ejemplo</span></figcaption>
        </figure>
      </div>
      <nav className="section-wrap hero-links" aria-label="Soluciones de GirGit">
        {shortcuts.map(([target, label, Icon]) => <a href={target} key={target}><Icon /><span>{label}</span><ArrowDown className="shortcut-arrow" /></a>)}
      </nav>
    </section>
  );
}
