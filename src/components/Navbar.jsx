import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['#soluciones', 'Soluciones'],
  ['#saas-educativo', 'SaaS educativo'],
  ['#tienda', 'Planes'],
];

export function Brand({ onClick }) {
  return (
    <a className="brand" href="#inicio" onClick={onClick}>
      <img src="/logo-girgit.jpg" alt="" width="41" height="41" />
      <span>GirGit <span>Software</span></span>
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  function closeOnEscape(event) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
      document.getElementById('menu-toggle').focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <div className="section-wrap nav-shell">
        <Brand onClick={closeMenu} />
        <button id="menu-toggle" className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav id="primary-nav" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Principal">
          {links.map(([target, label]) => <a key={target} href={target} onClick={closeMenu}>{label}</a>)}
          <a className="button button-outline mobile-contact" href="#contacto" onClick={closeMenu}>Hablemos <ArrowUpRight /></a>
        </nav>
        <a className="button button-outline nav-contact" href="#contacto">Hablemos <ArrowUpRight /></a>
      </div>
    </header>
  );
}
