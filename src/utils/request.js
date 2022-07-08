import axios from 'axios'
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  console.log(token)
  if (token) config.headers.Authorization = 'Bearer ' + token
  return config
}, (err) => {
  return Promise.reject(err)
})
http.interceptors.response.use((res) => {
  const { data } = res.data
  console.log(data)
  return data
}, (err) => {
  return Promise.reject(err)
})
export default http
