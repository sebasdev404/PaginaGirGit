import { useState } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import Navbar, { Brand } from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import SaaSEducativo from './components/SaaSEducativo';
import StoreSection from './components/StoreSection';
import FAQ from './components/FAQ';
import InquiryDialog from './components/InquiryDialog';
import { contactEmail, whatsappLink } from './data/commerce';

export default function App() {
  const [inquiry, setInquiry] = useState(null);
  const [category, setCategory] = useState('saas-educativo');
  const openDemo = () => setInquiry({ type: 'demo' });
  const openContact = () => setInquiry({ type: 'contact' });
  const openProduct = (product, cycle = 'anual', addon) => {
    setInquiry({ type: 'product', product, cycle, addon });
  };
  const whatsapp = whatsappLink('Hola, GirGit Software. Quisiera hablar sobre un proyecto.');

  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero onOpenDemo={openDemo} />
        <Solutions onSelectCategory={setCategory} />
        <SaaSEducativo onOpenDemo={openDemo} onSelectPlan={openProduct} />
        <StoreSection category={category} onSelectCategory={setCategory} onOpenProduct={openProduct} />
        <FAQ />
        <section id="contacto" className="contact-section section-wrap">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2>Construyamos tu próximo proyecto.</h2>
              <p>Cuéntanos qué quieres mejorar. Te ayudamos a definir el alcance y los próximos pasos.</p>
            </div>
            <div className="contact-actions">
              <button className="button button-primary" type="button" onClick={openContact}>Cuéntanos tu idea <ArrowRight /></button>
              <a className="text-link" href={`mailto:${contactEmail}`}><Mail /> {contactEmail}</a>
              {whatsapp && <a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Escribir por WhatsApp</a>}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="section-wrap footer-content">
          <Brand />
          <nav aria-label="Pie de página">
            <a href="#soluciones">Soluciones</a><a href="#tienda">Planes</a><a href="#faq">Preguntas frecuentes</a><a href="#contacto">Contacto</a>
          </nav>
          <small>© {year} GirGit Software</small>
        </div>
      </footer>
      {inquiry && <InquiryDialog {...inquiry} onClose={() => setInquiry(null)} />}
    </>
  );
}

const year = new Date().getFullYear();
