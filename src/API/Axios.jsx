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
export const getShop = async () => {
    return api.get("/getShop");
}
export const addCart = async (item,session) => {
    console.log('axios',item,session)
    return api.post("/addCart",{item,session});
}

