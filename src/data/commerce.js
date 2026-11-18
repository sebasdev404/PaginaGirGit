const moneyFormatter = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 2 });

export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'contacto@girgitsoftware.com';
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.trim();

export function whatsappLink(message) {
  return /^\+?[1-9]\d{7,14}$/.test(whatsappNumber ?? '')
    ? `https://wa.me/${whatsappNumber.replace(/^\+/, '')}?text=${encodeURIComponent(message)}`
    : null;
}

export function emailLink(subject, message) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message.replace(/\r?\n/g, '\r\n'))}`;
}

export function money(amount) {
  return `USD ${moneyFormatter.format(amount)}`;
}

export function productPricing(product, cycle) {
  const annual = !product.oneTime && cycle === 'anual';
  const monthlyAmount = annual ? product.annualPrice : product.monthlyPrice;
  return { annual, monthlyAmount, total: annual ? monthlyAmount * 12 : monthlyAmount };
}
