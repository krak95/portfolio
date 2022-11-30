import {createSession,verifyToken} from "./../Axios"
import { useNavigate } from "react-router-dom";
import React,{useState,createContext, useEffect} from "react";

export const AuthContext = createContext();
export const AuthProvider =  ({children}) => {
const [user, setUser] = useState(null);
const navigate = useNavigate();
useEffect(()=>{
    const recoverUser = localStorage.getItem('uname')
    if(recoverUser){
    setUser(recoverUser)
    }
},[])

const vtoken = async (token) =>{
    const verify = await verifyToken(token);
    const result = verify.data
    console.log('verify',result)
}

const login = async (uname, pwd) => {
        const session = await createSession(uname, pwd);
        const result = session.data;
        console.log('controller',result)
        if(result !== ''){
        localStorage.setItem('uname',uname);
        localStorage.setItem('pwd',pwd);
        localStorage.setItem('token',result);
        setUser(uname)
        vtoken2()
        }
    }

    function vtoken2(){
        const token = localStorage.getItem('token');
        setInterval(() => {
            vtoken(token)
        }, 1000);
    } 

    const  logout = () =>{
        setUser(null)
        localStorage.removeItem('uname')
        localStorage.removeItem('pwd')
        localStorage.removeItem('token')
        clearInterval(vtoken2)
        
    }

return( 
<>
<AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
{children}
</AuthContext.Provider>
</>
)

}
