import './bridge';
import { isInRisApp } from '@/utils/utils';

const monitor = (params) => {
  const { event_category = '', event = '', label = '', action = '', refer = '', extra = '' } = params;
  console.log('monitor:', params)
  if (isInRisApp()) {
    window.gtag('event', event + '_inside', {
      'event_category': event_category,    //必要参数,用于在GA后台统计UA
      label,
      action,
      refer,
      extra
    })
    window.executeNativeCmd('onStat', {
      key: event,
      label,
      action,
      refer,
      extra
    })
  } else {
    window.gtag('event', event, {
      'event_category': event_category,    //必要参数,用于在GA后台统计UA
      label,
      action,
      refer,
      extra
    })
  }
}
export default monitor
