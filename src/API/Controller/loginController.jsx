import {createSession} from "./../Axios"
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

const login = async (uname, pwd) => {
        const session = await createSession(uname, pwd);
        const result = session.data;
        console.log('controller',result)
        if(result === 'ok'){
        localStorage.setItem('uname',uname);
        localStorage.setItem('pwd',pwd);
        setUser(uname)
        }
    }

    const  logout = () =>{
        setUser(null)
        localStorage.removeItem('uname')
        localStorage.removeItem('pwd')
    }

return( 
<>
<AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
{children}
</AuthContext.Provider>
</>
)

}
