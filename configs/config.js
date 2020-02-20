const baseUrlMap = {
  api: {
    dev: 'http://www.baidu.com',
    test: 'http://www.baidu.com',
    prod: 'https://www.baidu.com'
  }
}
const getProxy = (env) => {
  return {
    '/api/': {
      target: baseUrlMap.api[env],
      changeOrigin: true,
      pathRewrite: { '/api': '' },
    }
  }
} 
module.exports = (env) => {
  return {
    proxy: getProxy(env),
    define: {
      "process.env.type": `"${env}"`,
      "process.env.apiUrl": `"${baseUrlMap.api[env]}"`,
    }
  }
}