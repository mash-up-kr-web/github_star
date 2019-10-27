import axios from 'axios';

export const get = (url:string) => {
  return axios.get(`${process.env.REACT_APP_DOMAIN}${url}`)
}

/**
 * TODO: error 핸들링
 * 
 */