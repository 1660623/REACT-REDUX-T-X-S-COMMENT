import Axios from "axios"
import {BASE_URL} from './../constants/config'

export const apiCall = (endPoint, method= 'GET', body,header = {})=>{
        return Axios({
            method: method,
            url: `${BASE_URL}${endPoint}`,
            data: body,
            headers: header
        }).catch(err=> console.log(err))
}