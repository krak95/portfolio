import "./screenStat.css"
import React from 'react';
import UserInfo from "../userInfo/userInfo";

function Screenstat() {

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
</>
)

}
const user = localStorage.getItem('uname')
if(user === null){
return (
<>
<div className="Screenstat">
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
<div className="Screenstat">
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