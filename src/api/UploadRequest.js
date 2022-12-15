import axios from 'axios'

const API = axios.create({baseURL: `${process.env.REACT_APP_BACKEND_URL}`})

export const uploadImage = (data)=> API.post('/upload', data)

export const uploadPost = (data) => API.post("/post", data)