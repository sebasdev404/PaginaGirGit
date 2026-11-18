import { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Code2, Globe2, GraduationCap, Plus } from 'lucide-react';
import { ADDONS, PRODUCTS_STORE } from '../data/softwareData';
import { money, productPricing } from '../data/commerce';

const categories = [
  ['saas-educativo', 'SaaS educativo', GraduationCap],
  ['web-30-dias', 'Desarrollo web', Globe2],
  ['software-medida', 'Software a medida', Code2],
];

export default function StoreSection({ category, onSelectCategory, onOpenProduct }) {
  const [cycle, setCycle] = useState('anual');
  const isEducation = category === 'saas-educativo';
  const products = PRODUCTS_STORE.filter((product) => product.category === category);

  return (
    <section id="tienda" className="section-wrap section-block">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">Catálogo</p><h2>Planes y paquetes</h2></div>
        <p>Compara qué incluye cada opción y solicita una propuesta para tu colegio o empresa.</p>
      </div>
      <div className="catalog-toolbar">
        <div className="segmented catalog-categories" role="group" aria-label="Categorías del catálogo">
          {categories.map(([id, label, Icon]) => <button type="button" key={id} aria-pressed={category === id} onClick={() => onSelectCategory(id)}><Icon /> {label}</button>)}
        </div>
        {isEducation && <div className="segmented billing-toggle" role="group" aria-label="Ciclo de facturación">
          <button type="button" aria-pressed={cycle === 'mensual'} onClick={() => setCycle('mensual')}>Mensual</button>
          <button type="button" aria-pressed={cycle === 'anual'} onClick={() => setCycle('anual')}>Anual</button>
        </div>}
      </div>
      <div className="catalog-grid">
        {products.map((product) => {
          const { id, name, capacity, shortDesc, oneTime, highlight, features } = product;
          const { annual, monthlyAmount, total } = productPricing(product, cycle);
          const custom = category === 'software-medida';

          return (
            <article className={`price-card${highlight ? ' price-card-featured' : ''}`} key={id}>
              <p className="price-capacity">{capacity}</p>
              <h3>{name}</h3>
              <p className="price-description">{shortDesc}</p>
              <div className="price-amount">{custom && <span>Desde</span>} <strong>{money(monthlyAmount)}</strong>{!oneTime && <span>/ mes</span>}</div>
              <p className="billing-note">{annual ? `${money(total)} facturados al año` : custom ? 'Valor de referencia según alcance' : oneTime ? 'Pago único' : 'Facturación mensual'}</p>
              <ul className="price-features">{features.slice(0, 3).map((feature) => <li key={feature}><Check /> {feature}</li>)}</ul>
              <details className="price-details"><summary>Ver todo lo incluido <ChevronDown /></summary><ul>{features.slice(3).map((feature) => <li key={feature}>{feature}</li>)}</ul></details>
              <button className={`button ${highlight ? 'button-primary' : 'button-outline'} price-action`} type="button" onClick={() => onOpenProduct(product, cycle)}>{custom ? 'Solicitar cotización' : oneTime ? 'Consultar este paquete' : 'Consultar este plan'} <ArrowUpRight /></button>
            </article>
          );
        })}
      </div>
      {isEducation && <details className="addons-catalog">
        <summary>Complementos para tu plan educativo <Plus /></summary>
        <div className="addon-list">
          {ADDONS.map((addon) => (
            <article key={addon.id}>
              <h3>{addon.name}</h3><p>{addon.desc}</p>
              <button className="text-link" type="button" onClick={() => onOpenProduct(campusPlan, cycle, addon)}>{money(addon.price)} / mes <ArrowUpRight /></button>
            </article>
          ))}
        </div>
      </details>}
    </section>
  );
}

const campusPlan = PRODUCTS_STORE.find(({ id }) => id === 'saas-campus-pro');
