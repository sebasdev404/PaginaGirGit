import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Copy, Mail, MessageCircle, X } from 'lucide-react';
import { ADDONS } from '../data/softwareData';
import { emailLink, money, productPricing, whatsappLink } from '../data/commerce';

export default function InquiryDialog({ type, product, cycle, addon, onClose }) {
  const dialogRef = useRef(null);
  const draftHeading = useRef(null);
  const [addons, setAddons] = useState(addon ? [addon.id] : []);
  const [draft, setDraft] = useState(null);
  const [copyStatus, setCopyStatus] = useState('');
  const isDemo = type === 'demo';
  const title = product ? 'Consultar plan o paquete' : isDemo ? 'Solicitar demo educativa' : 'Cuéntanos tu idea';
  const pricing = product && productPricing(product, cycle);
  const selectedAddons = ADDONS.filter(({ id }) => addons.includes(id));
  const addonTotal = selectedAddons.reduce((total, item) => total + item.price, 0);
  const quote = product?.category === 'software-medida';
  const priceLabel = pricing && formatPrice(pricing, product, quote);

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    dialog.showModal();
    return () => {
      dialog.close();
      trigger?.focus();
    };
  }, []);

  useEffect(() => {
    if (draft?.brief) draftHeading.current?.focus();
  }, [draft]);

  function prepareDraft(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const subject = product ? `Consulta · ${product.name}` : isDemo ? 'Solicitud de demo · GirGit EduSaaS 360' : 'Nuevo proyecto · GirGit Software';
    const brief = [
      subject,
      product && `Precio de referencia: ${priceLabel}`,
      addonTotal > 0 && `Complementos: ${selectedAddons.map(({ name }) => name).join(', ')} (${money(addonTotal)} adicionales por mes)`,
      '',
      `Nombre: ${fields.get('name').trim()}`,
      `Correo: ${fields.get('email').trim()}`,
      fields.get('organization').trim() && `Colegio o empresa: ${fields.get('organization').trim()}`,
      fields.get('details').trim() && `Detalles: ${fields.get('details').trim()}`,
    ].filter((line) => line !== false && line != null).join('\n').trim();
    setDraft({ subject, brief, fields });
    setCopyStatus('');
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft.brief);
      setCopyStatus('Mensaje copiado.');
    } catch {
      setCopyStatus('Selecciona el texto del borrador para copiarlo.');
    }
  }

  function editDraft() {
    setDraft({ ...draft, brief: '' });
    requestAnimationFrame(() => dialogRef.current?.querySelector('input[name="name"]')?.focus());
  }

  const whatsapp = draft?.brief && whatsappLink(draft.brief);

  return (
    <dialog ref={dialogRef} className="inquiry-dialog" aria-labelledby="inquiry-title" onCancel={(event) => { event.preventDefault(); onClose(); }}>
      <div className="dialog-content">
        <div className="dialog-header">
          <div><p className="eyebrow">GirGit Software</p><h2 id="inquiry-title">{title}</h2></div>
          <button className="icon-button" type="button" aria-label="Cerrar solicitud" onClick={onClose}><X /></button>
        </div>
        {draft?.brief ? (
          <div className="draft-view">
            <h3 ref={draftHeading} tabIndex={-1}>Tu borrador está listo</h3>
            <p>Revísalo y abre tu aplicación de correo para enviarlo.{whatsapp && ' También puedes enviarlo por WhatsApp.'}</p>
            <pre>{draft.brief}</pre>
            <div className="dialog-actions">
              <a className="button button-primary" href={emailLink(draft.subject, draft.brief)}><Mail /> Abrir correo</a>
              {whatsapp && <a className="button button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>}
              <button type="button" className="button button-outline" onClick={copyDraft}><Copy /> Copiar</button>
              <button type="button" className="text-link" onClick={editDraft}><ArrowLeft /> Editar datos</button>
            </div>
            <p className="form-status" role="status">{copyStatus}</p>
          </div>
        ) : (
          <form onSubmit={prepareDraft} className="inquiry-form">
            {isDemo && <p>Cuéntanos sobre tu colegio para coordinar una demostración y consultar por el acceso de prueba de 15 días.</p>}
            {product && <div className="order-summary"><strong>{product.name}</strong><span>{priceLabel}</span>{addonTotal > 0 && <span>{money(addonTotal)} adicionales por mes en complementos</span>}</div>}
            {product && !product.oneTime && <details className="dialog-addons" open={addon ? true : undefined}>
              <summary>Complementos mensuales</summary>
              {ADDONS.map(({ id, name, price }) => <label key={id}><input type="checkbox" checked={addons.includes(id)} onChange={(event) => setAddons(event.target.checked ? [...addons, id] : addons.filter((value) => value !== id))} /><span>{name} <small>{money(price)} / mes</small></span></label>)}
            </details>}
            <div className="form-grid">
              <label>Nombre<input name="name" autoComplete="name" defaultValue={draft?.fields.get('name')} required pattern=".*\S.*" maxLength={100} /></label>
              <label>Correo electrónico<input name="email" type="email" autoComplete="email" defaultValue={draft?.fields.get('email')} required maxLength={160} /></label>
              <label className="full-field">{isDemo ? 'Nombre del colegio' : 'Colegio o empresa (opcional)'}<input name="organization" autoComplete="organization" defaultValue={draft?.fields.get('organization')} required={isDemo} pattern=".*\S.*" maxLength={160} /></label>
              <label className="full-field">{isDemo ? 'Número de estudiantes o comentario (opcional)' : '¿Qué necesitas?'}<textarea name="details" rows="3" defaultValue={draft?.fields.get('details')} required={type === 'contact'} maxLength={1200} /></label>
            </div>
            <p className="form-note">El siguiente paso prepara un mensaje para que lo revises antes de enviarlo.</p>
            <button type="submit" className="button button-primary">Preparar solicitud <ArrowRight /></button>
          </form>
        )}
      </div>
    </dialog>
  );
}

function formatPrice({ annual, monthlyAmount, total }, product, quote) {
  if (quote) return `Desde ${money(total)} según alcance`;
  if (product.oneTime) return `${money(total)} · pago único`;
  if (annual) return `${money(total)} al año (${money(monthlyAmount)} al mes)`;
  return `${money(total)} al mes`;
}
