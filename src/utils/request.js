import axios from 'axios'

export default function request(options) {
  return new Promise((resolve, reject) => {
    // 1.创建 axios 实例
    const instance = axios.create({
      baseURL = 'https://api.example.com',
      timeout = 5000
    })

    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

      // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

      // 3.对请求的参数进行序列化(看服务器是否需要序列化)
      // config.data = qs.stringify(config.data)
      // console.log(config)

      // 4.等等
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 响应拦截器
    instance.interceptors.response.use(response => {
      return response;
    }, error => {
      return Promise.reject(error)
    })

    // 2.传入对象进行网络请求
    instance(options).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
