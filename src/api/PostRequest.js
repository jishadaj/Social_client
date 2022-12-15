import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BACKEND_URL}` })

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`)

export const likePost = (id, userId) => API.put(`post/${id}/like`, { userId: userId })

export const deletePost = (id, userId) => API.delete(`/post/${id}/${userId}`);

export const addComment = (comment, userId, id) => {
    console.log(comment, userId);
    return API.put(`/post/${id}/comment`, { comment, userId });
};