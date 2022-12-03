import "./screenStat.css"
import React,{useContext} from 'react';
import UserInfo from "../userInfo/userInfo";
import {AuthContext} from "./../../API/Controller/loginController"
import $ from 'jquery'

function Screenstat() {

function screenstopen(){
    $('.Screenstat').toggleClass('userwindow-open')
        $('.Screenstat ol').toggleClass('screenlist')
        $('.userinfo').toggleClass('userinfo-show')
        $('.pState').toggleClass('pState-show')
}

const {logout} = useContext(AuthContext);
const Offline = () =>{
return (
<>
<h3>Offline</h3>
</>
)
}
const Online = () =>{

return (
<>
<h3>Online</h3>
<button onClick={logout}>Logout</button>
</>
)

}
const user = localStorage.getItem('uname')
if(user === null){
return (
<>
<div  className="Screenstat">
<ol>
    <li className="userinfo"><UserInfo/></li>
    <li><Offline/></li>
    <li><div className="ledOff"></div></li>

</ol>
</div>
</>
)
}else{
return(
<>
<div onClick={screenstopen} className="Screenstat">
<ol>
<li className="pState"><Online/></li>
<li><div className="ledOn"></div></li>    
<li className="userinfo"><UserInfo/></li>
</ol>
</div>
</>
)
}

}

export default Screenstat