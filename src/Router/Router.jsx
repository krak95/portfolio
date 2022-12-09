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
$('.login-route').css('display','flex')
$('.user-route').css('display','none')
console.log('off')
}else{
$('.login-route').css('display','none')
$('.user-route').css('display','flex')
console.log('on')
}

const handleDropdownEnter = () =>{
$('.dropdown-div').addClass('dropdown-div-show')
}

const handleDropdownLeave = () =>{
$('.dropdown-div').removeClass('dropdown-div-show')
}

return (
<>
<div className='topheader'>
<div className='toptitle'>
<h1>José Amorim</h1>
</div>
<div className="dropdown"><button onClick={handleDropdownEnter} onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>Menu</button></div>
<div className='topmenu'>
<Link to="/">  Home</Link>
<Link className={store === null ? "login-route show" : "login-route hide"} to="/login"> Login</Link>
<Link className={store === null ? "user-route hide" : "user-route show"} to="/user"> User</Link>
<RouteAuth/>
<Link to="/shop">Shop</Link>
<Link to="/calculator">Calculator</Link>
</div>
</div>
<div className="dropdown-div" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
  
<ol>
  <li><div className="close-topmenu" onClick={handleDropdownLeave}>CLOSE</div></li>
<li><Link to="/">  Home</Link></li>
<li><Link className={store === null ? "login-route show" : "login-route hide"} to="/login"> Login</Link></li>
<li><Link className={store === null ? "user-route hide" : "user-route show"} to="/user"> User</Link></li>
<li><Link to="/shop">Shop</Link></li>
<li><Link to="/calculator">Calculator</Link></li>
</ol>
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