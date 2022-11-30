import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const createSession = async (uname, pwd) => {
    return api.post("/login", {uname, pwd});
}
export const verifyToken = async (token) => {
    return api.post("/verifyToken", {token});
}

