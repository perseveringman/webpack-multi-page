import Fly from 'flyio/dist/npm/fly'
import qs from 'qs'
import getConfig from 'configs/config'
const { proxy } = getConfig(process.env.type)

const request = new Fly()
request.config.baseURL = '/'
request.config.withCredentials = true
request.config.timeout = 7000

const handleRequestUrl = (url) => {
  // dev环境走webpack的devServer
  if (process.env.type === 'dev') {
    return url
  }

  const currentPath = Object.keys(proxy).find(path => {
    const reg = new RegExp(path)
    if (reg.test(url)) {
      return true
    }
  })
  if (!currentPath) {
    throw new Error('没有匹配到path，请查看config.js确认')
  }
  const currentProxy = proxy[currentPath]
  request.config.baseURL = currentProxy.target
  const pathRewriteKey = Object.keys(currentProxy.pathRewrite)[0] || ''
  const pathRewriteValue = currentProxy.pathRewrite[pathRewriteKey] || ''
  return url.replace(pathRewriteKey, pathRewriteValue)
}

// 请求拦截
request.interceptors.request.use(
  (config, promise) => {
    // if (cookieData && cookieData.Q) {
    //   const cookie = `Q=${cookieData.Q}; T=${cookieData.T}`
    //   config.headers['Cookie'] = cookie
    // }

    config.url = handleRequestUrl(config.url)

    if (config.method === 'POST') {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    config.headers['QnmAuth'] = 'eyJpdiI6IkN5Q1JNSUhjcUFmMWFLWHJ6ZGxvXC9nPT0iLCJ2YWx1ZSI6IjZqV3RpUzh2VXFIdHQ2bWtHV3pIV3ZzZmxJaWVScGlMdzl6ZVl1N01odUdCdnBkSk9cL2pRdjVPNFQ3QzdqRHdBQ1h6SHZJaGRhSDlvejRvVzJOaEJIZ25ENndCNnI2QjNWT01LSjdVMEZkNWthNUVZVGVHVjRKNEZUcUNxZ0c2c2E5Zkt5Tmx5VEVJekhtSWgxNXhwcnl6TUtoZUI0XC9GUFVVQVVDbVI1ZE56a2ZldFZVR3NiazUxVWdrdW5hY3psc2ZVWkFcL0tnSXNZcWsySXZIZzlQNXpWZ3plZFlJdWVsYzR1MnFkalwvYWpoRTE5ZFlnckYwb0Vlc29cL2J2aFwvcG5pWklxMmpQVFc2QjQwNDhtTGdVSERhN3RyQ0tLaWV6ZU1OVUhrQWRKWVg5Mmt5RVptQW5GNDN6dlBOeEFqZ3hrZFY4VUhuVjdQRmRzOW5SbUdLUXNxY3FjVjdBS2t6MTkyMGduRWFKcGE5d2F2c28rQ2lheDlMUW1TVERxeWczcTNZT0RKQ3dod0oxZFVwblRJRzV6a0lMQzJIRFdlOVB5VUFtWEw5UjZmTzhIRXRFRXViXC9cL0tyMG9kVDJNbjVVaSIsIm1hYyI6IjFlNWNlNTYwMTJhZjk5Y2Q4NWIwYzZlMzljZjI0NjJlMWQ1ZjE4MjUxZTliNzMzNDc0Y2ZmOTQ4MzUxY2NjMTIifQ=='
    return config
  }, (error, promise) => {
    return promise.reject(error)
  }
)

// 响应拦截
request.interceptors.response.use(
  (response, promise) => {
    return response.data
  },
  (err, promise) => {
    // 接口错误上报
    console.log('接口错误', err)
    return promise.reject(err)
  }
)
export default request
