import axiosReq from 'axios'
import { BASE_URL } from '../constants/api.constant'

export default axiosReq.create({baseURL: BASE_URL})


