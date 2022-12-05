import React,{useContext,useState} from "react"
import {Routes,Route,Link,Navigate} from "react-router-dom"
import Home from "../Zones/Home/Home"
import Login from "../Zones/Login/Login"
import Shop from "../Zones/Shop/Shop"
import Calculator from "../Zones/Calculator/Calculator"
import User from "../Zones/User/User"
import "./Router.css"
import { AuthContext, AuthProvider } from "./../API/Controller/login/loginController"
import RouteAuth from "../Components/topmenu/topMenu"
import $ from "jquery"

function Router(){
    const Forbidden = ({children}) => {
        const {authenticated,login, loading} = useContext(AuthContext);
      
        if(loading){
          return <div className="loading">Loading...</div>
        }
      
        if(!authenticated){ 
          return <Navigate to = "/login"/>;
        }   
        return children;
      };
const store = localStorage.getItem('uname')
    if(store == null){
      $('.login-route').css('display','block')
      $('.user-route').css('display','none')
      console.log('off')
      }else{
      $('.login-route').css('display','none')
      $('.user-route').css('display','block')
      console.log('on')
  }
    return (
        <>
<div className='topheader'>
<div className='toptitle'>
<h1>José Amorim</h1>
</div>
<div className='topmenu'>
<Link to="/">  Home</Link>
<Link className={store === null ? "login-route show" : "login-route hide"} to="/login"> Login</Link>
<Link className={store === null ? "user-route hide" : "user-route show"} to="/user"> User</Link>
<RouteAuth/>

<Link to="/shop">Shop</Link>
<Link to="/calculator">Calculator</Link>
<div className="dropdown"><button>Dropdown</button></div>
</div>
</div>
<AuthProvider>
<Routes>
<Route path="/" element={<Home/>}  />
<Route exact path="login" element={<Login/>}/>
<Route exact path="user" element={<Forbidden><User/></Forbidden>}/>
<Route exact path="shop" element={<Shop/>}/>
<Route exact path="calculator" element={<Calculator/>} />
</Routes>
</AuthProvider>
        </>
    )
}

export default Router;