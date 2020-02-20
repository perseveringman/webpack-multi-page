import zh from './zh-CN';
import en from './en-US';
import es from './es-MX';
import pt from './pt-BR';
export function getLocale () {
  return localStorage.getItem('busmap_locale');
}
export function setLocale (lang) {
  const locale = getLocale();
  if (locale !== lang) {
    localStorage.setItem('busmap_locale', lang);
    window.location.reload();
  }
}
export function formatMessage (key) {
  const locale = getLocale() || 'es-MX';
  switch(locale.slice(0, 2)) {
    case 'zh':
      return zh[key]
    case 'en':
      return en[key]
    case 'es':
      return es[key]
    case 'pt':
      return pt[key]
  }
}
