import {createSession, verifyToken} from "../../Axios"
import { useNavigate } from "react-router-dom";
import React,{useState,createContext, useEffect} from "react";
import $ from "jquery"

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
const result = session.status;
console.log('controller',result)
if(result === 200){
localStorage.setItem('uname',uname);
localStorage.setItem('pwd',pwd);
localStorage.setItem('token',session.data);
setUser(uname)
$('.login-route').addClass('hide').removeClass('show')
$('.user-route').addClass('show').removeClass('hide')
navigate("/user")
console.log('user,loging')
}
}


const  logout = () =>{
setUser(null)
localStorage.removeItem('uname')
localStorage.removeItem('pwd')
localStorage.removeItem('token')
console.log('bye')
$('.login-route').addClass('show').removeClass('hide')
$('.user-route').addClass('hide').removeClass('show')
//clearInterval(vtoken3)
}

const vtoken = async (token) =>{
const verify = await verifyToken(token);
const result = verify.data
console.log('verify',result)
if(result === 'nok')
{
    logout()
}
}
let token = localStorage.getItem('token')
vtoken(token)

    /*const vtoken3 = setInterval(() => {
        const token = localStorage.getItem('token')
            vtoken(token)
            console.log('interval')
        }, 1000);*/




return( 
<>
<AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
{children}
</AuthContext.Provider>
</>
)

}
