import axios from 'axios'

const API = axios.create({baseURL: `${process.env.REACT_APP_BACKEND_URL}`})

export const logIn = (FormData) => API.post('/auth/login', FormData)
export const signUp = (FormData) => API.post('/auth/register', FormData)