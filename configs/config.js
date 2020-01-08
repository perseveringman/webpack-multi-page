const baseUrlMap = {
  bcApi: {
    dev: 'http://funny.bc.test.golemon123.com',
    test: 'http://funny.bc.test.golemon123.com',
    prod: 'https://funny.bc.golemon123.com'
  },
  uApi: {
    dev: 'http://funny.u.test.golemon123.com',
    test: 'http://funny.u.test.golemon123.com',
    prod: 'https://funny.u.golemon123.com'
  }
}
const getProxy = (env) => {
  return {
    '/api/users/apply/talent': {
      target: baseUrlMap.bcApi[env],
      changeOrigin: true,
      pathRewrite: { '/api': '' },
    },
    '/api/user': {
      target: baseUrlMap.uApi[env],
      changeOrigin: true,
      pathRewrite: { '/api': '' },
    },
    '/api/': {
      target: baseUrlMap.bcApi[env],
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
      "process.env.bcApiUrl": `"${baseUrlMap.bcApi[env]}"`,
      "process.env.uApiUrl": `"${baseUrlMap.uApi[env]}"`
    }
  }
}