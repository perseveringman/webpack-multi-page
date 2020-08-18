import { isInRisApp } from '@/utils/utils';
const monitor = ({ event_category = '', event = '', label = '', action = '', refer = '', extra = ''}) => {
  isInRisApp()
    ?window.gtag('event', event, {
      'event_category': event_category,    //必要参数,用于在GA后台统计UA
      label,
      action,
      refer,
      extra
    })
    : window.gtag('event', "web/"+event, {
      'event_category': "web/"+event_category,    //必要参数,用于在GA后台统计UA
      label,
      action,
      refer,
      extra
    })
}
export default monitor
