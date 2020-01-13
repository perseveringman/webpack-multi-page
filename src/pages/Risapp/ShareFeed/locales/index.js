import zh from './zh-CN';
import en from './en-US';
import es from './es-MX';
import pt from './pt-BR';
export function getLocale () {
  return localStorage.getItem('outside_web_locale');
}
export function setLocale (lang = 'es-MX') {
  const locale = getLocale();
  if (locale !== lang) {
    const langMap = {
      'zh': 'zh-CN',
      'en': 'en-US',
      'es': 'es-MX',
      'pt': 'pt-BR'
    }
    localStorage.setItem('outside_web_locale', langMap[lang.slice(0, 2)]);
    window.location.reload();
  }
}
export function formatMessage ({id: key}) {
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
