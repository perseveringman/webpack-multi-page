const baseUrlMap = {
  api: {
    dev: 'http://www.xxx.com',
    test: 'http://www.xxx.com',
    prod: 'https://www.xxx.com',
  },
};

const getProxy = env => ({
  '/api/': {
    target: baseUrlMap.api[env],
    changeOrigin: true,
    pathRewrite: { '/api': '' },
  },
});

module.exports = env => ({
  proxy: getProxy(env),
  define: {
    'process.env.type': `"${env}"`,
    'process.env.apiUrl': `"${baseUrlMap.api[env]}"`,
  },
});
