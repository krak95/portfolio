import React, { useState,useContext, useEffect } from 'react';
import {AuthContext} from "./../../API/Controller/login/loginController"
import "./Login.css"
import Screenstat from "./../../Components/screenStat/screenStat"
import {ShotClock} from './../../Components/shotClock/shotClock';
import RouteAuth from '../../Components/topmenu/topMenu';
import Router from '../../Router/Router';

function Login() {
const {authenticated,login,logout} = useContext(AuthContext);
const [uname, setUname] = useState('');
const [pwd, setPwd] = useState('');
const [fname, setFname] = useState('');
const [email, setEmail] = useState('');
const [date, setDate] = useState('');

const Clock1 = () =>{
    let today = new Date();
    let date1 = today.toLocaleString()
    useEffect(()=>{
        const interval = setInterval(() => {
            setDate(date1)
    }, 1000);
    return () => clearInterval(interval)
    },[])
return(
    <>{date}</>
)
}

function handleLogout(e){
e.preventDefault();
logout();
}

function handleForm(e) {
e.preventDefault();
login(uname,pwd)
}

if(!authenticated){
return (
<>
<div className='login-main-div'>
<div className="login-div">
<div className='login-container'>
<div className='aniborder'> 
<ol>
<form onSubmit={handleForm}>
<li><h2>Login</h2></li>
<label>
<p>Username</p>
<li><input type="text" onChange={(e)=>setUname(e.target.value)}/></li>
</label> 
<label><p>Password</p>
<li><input type="password" onChange={(e)=>setPwd(e.target.value)}/></li>
</label>
<li><button>Submit</button></li>
</form>
</ol>
</div>
</div>
<div className='signup-container'>
<ol>
<li><h2>Signup</h2></li>
<label>
<p>Name</p>
<li><input type="text" onChange={(e)=>setFname(e.target.value)}/>   </li>
</label>
<label>
<p>Email</p>
<li><input type="password" onChange={(e)=>setEmail(e.target.value)}/></li>
</label>
<label>
<p>Username</p>
<li><input type="password" onChange={(e)=>setUname(e.target.value)}/></li>
</label>
<label>
<p>Password</p>
<li><input type="password" onChange={(e)=>setPwd(e.target.value)}/></li>
</label>
<li><button onClick={handleForm}>Submit</button></li>
</ol>
</div>
</div> 
</div>
<Screenstat/>
</>
)
}
else
{
return(
<>
<div className='login-div'>
<div className='login-container'>
    <div className='clock'>
        <Clock1/>
    </div>
</div>
</div>
<ShotClock/>
<Screenstat/>

</>
)
}

}

export default Login