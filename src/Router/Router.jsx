import React,{useContext} from "react"
import {Routes,Route,Link,Navigate} from "react-router-dom"
import Home from "../Zones/Home/Home"
import Login from "../Zones/Login/Login"
import Shop from "../Zones/Shop/Shop"
import "./Router.css"
import { AuthContext, AuthProvider } from "./../API/Controller/login/loginController"

function Router(){

    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);
      
        if(loading){
          return <div className="loading">Loading...</div>
        }
      
        if(!authenticated){
          return <Navigate to = "/login"/>;
        }
        return children;
      };

    return (
        <>
<div className='topheader'>
<div className='toptitle'>
<h1>José Amorim</h1>
</div>
<div className='topmenu'>
<Link to="/">  Home</Link>
<Link to="/shop">  Shop</Link>
<Link to="/login"> Login</Link>
<div className="dropdown"><button>Dropdown</button></div>
</div>

</div>
<AuthProvider>
<Routes>
<Route path="/"     element={<Private><Home/></Private>}  />
<Route exact path="login" element={<Login/>} />
<Route exact path="shop" element={<Shop/>} />
</Routes>
</AuthProvider>
        </>
    )
}

export default Router;