import axios from 'axios'

const API = axios.create({baseURL: `${process.env.REACT_APP_BACKEND_URL}`})

export const userChats = (id) => API.get(`/chat/${id}`)