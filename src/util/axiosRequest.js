import axios from 'axios'

const axiosRequest = axios.create({
   baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/' : process.env.REACT_APP_BACKEND_URL,
   responseType: 'json',
})

axiosRequest.interceptors.request.use(config => {
   config.headers['Content-Type'] = 'application/json'
   return config
})

export default axiosRequest
