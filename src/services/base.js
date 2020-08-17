import Fly from 'flyio/dist/npm/fly';
import qs from 'qs';
import getConfig from 'configs/config';

const { proxy } = getConfig(process.env.type);

const request = new Fly();
request.config.baseURL = '/';
request.config.withCredentials = true;
request.config.timeout = 7000;

const handleRequestUrl = url => {
  // dev环境走webpack的devServer
  if (process.env.type === 'dev') {
    return url;
  }

  const currentPath = Object.keys(proxy).find(path => new RegExp(path).test(url));
  if (!currentPath) {
    throw new Error('没有匹配到path，请查看config.js确认');
  }
  const currentProxy = proxy[currentPath];
  request.config.baseURL = currentProxy.target;
  const pathRewriteKey = Object.keys(currentProxy.pathRewrite)[0] || '';
  const pathRewriteValue = currentProxy.pathRewrite[pathRewriteKey] || '';
  return url.replace(pathRewriteKey, pathRewriteValue);
};

// 请求拦截
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
request.interceptors.request.use(
  (config, promise) => {
    config.url = handleRequestUrl(config.url);

    if (config.method === 'POST') {
      config.data = qs.stringify(config.data);
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
  }, (error, promise) => promise.reject(error),
);

// 响应拦截
request.interceptors.response.use(
  (response, promise) => response.data,
  (err, promise) => {
    // 接口错误上报
    // eslint-disable-next-line no-console
    console.log('接口错误', err);
    return promise.reject(err);
  },
);
export default request;
