import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3500'
})

export const new1 = async (title, content) => {
    return api.post("/create", {title, content});
}
