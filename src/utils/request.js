// 1.创建一个新的axios实例
// 2.请求拦截器，如果有token，进行头部携带
// 3.响应拦截器：一是剥离无效数据，二是处理token失效
// 4.导出一个函数，调用当前的axios实例发请求，返回值promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出baseURL，以防其他地方不用axios时，也可以使用
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
// 1.创建一个新的axios实例
const instance = axios.create({
  baseURL,
  timeout: 5000
})
// 2.请求拦截器
instance.interceptors.request.use(config => {
//   获取用户信息
  const { profile } = store.state.user
  // 如有有token,就携带
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 3.响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  // 401处理token失效情况
  if (err.response && err.response.status === 401) {
    // 1. 清空用户信息
    // 2. 跳转到登录页
    // 3. 携带路由参数（当前路由信息，登录后再跳转回来）
    store.commit('user/setUser', {})
    // 获取当前路由信息: encodeURIComponent编码，是为了防止解析路由中用等号分割的多个参数时出问题；
    // router.currentRoute.value 是因为currentRoute是ref响应式数据
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirect' + fullPath)
  }
  return Promise.reject(err)
})
// 4.导出一个请求工具函数
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    //   1.如果是get方法，用params传参；
    //   2.如果是post方法，用data传参
    //   3. 因此传参的key，需要动态设置。用[],可以写js表达式，动态设置KEY
    // method有可能等于GET、Get、get，因此统一转换成小写
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
