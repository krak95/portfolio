import React, { useState,useContext } from 'react';
import {AuthContext} from "./../../API/Controller/loginController"
import Screenstat from '../../Components/screenStat/screenStat';
import "./Login.css"

function Login() {
const {authenticated,login,logout} = useContext(AuthContext);
const [uname, setUname] = useState('');
const [pwd, setPwd] = useState('');
const [fname, setFname] = useState('');
const [email, setEmail] = useState('');

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
<ol>
<form onSubmit={handleForm}>
<li><h2>Login</h2></li>
<p>Username</p>
<li><input type="text" onChange={(e)=>setUname(e.target.value)}/>   </li>
<p>Password</p>
<li><input type="password" onChange={(e)=>setPwd(e.target.value)}/></li>
<li><button>Submit</button></li>
</form>
</ol>
</div>
<div className='signup-container'>
<ol>
<li><h2>Signup</h2></li>
<p>Name</p>
<li><input type="text" onChange={(e)=>setFname(e.target.value)}/>   </li>
<p>Email</p>
<li><input type="password" onChange={(e)=>setEmail(e.target.value)}/></li>
<p>Username</p>
<li><input type="password" onChange={(e)=>setUname(e.target.value)}/></li>
<p>Password</p>
<li><input type="password" onChange={(e)=>setPwd(e.target.value)}/></li>
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
<div className='login-contaienr'>
<button onClick={handleLogout}>Logout</button>
</div>
</div>
<Screenstat/>
</>
)
}

}

export default Login