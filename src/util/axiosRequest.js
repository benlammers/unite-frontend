import axios from 'axios'

const axiosRequest = axios.create({
   baseURL: 'http://127.0.0.1:8000/',
   responseType: 'json',
})

axiosRequest.interceptors.request.use(config => {
   config.headers['Content-Type'] = 'application/json'
   return config
})

export default axiosRequest
