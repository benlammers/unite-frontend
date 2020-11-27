import axios from 'axios'
import Cookies from 'js-cookie'

const axiosSpotify = axios.create({
   baseURL: 'https://api.spotify.com/v1/',
   responseType: 'json',
})

axiosSpotify.interceptors.request.use(config => {
   config.headers['Accept'] = 'application/json'
   config.headers['Content-Type'] = 'application/json'
   config.headers['Authorization'] = `Bearer ${Cookies.get('Spotify-Token')}`
   return config
})

export default axiosSpotify
