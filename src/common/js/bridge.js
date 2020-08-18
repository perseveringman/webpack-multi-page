import { isiOS } from '@/utils/utils';

function init() {
  if (typeof window !== 'undefined') {
    window.executeNativeCmd = (cmd, params) => {
      // iOS
      if (isiOS()) {
        try {
          window.webkit.messageHandlers.golemonWebview.postMessage({ cmd, params });
          return;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('ios context not exist ');
        }
      } else {
        // 安卓
        try {
          // eslint-disable-next-line no-unused-expressions
          params
            ? window.golemonWebview[cmd](JSON.stringify(params))
            : window.golemonWebview[cmd]();
          return;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('android context not exist ');
        }
      }

      // 网页
      // eslint-disable-next-line no-console
      console.log('fake func', cmd, params);
      if (cmd === 'openNewPage') {
        window.location.href = params.url;
      }
      if (cmd === 'destroyPage') {
        window.history.back();
      }
      if (cmd === 'getBaseInfo') {
        window.getBaseInfoResult({});
      }
    };
  }
}

init();
