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
<UserInfo/>
<Offline/>
<div className="ledOff"></div>
</div>
</>
)
}else{
return(
<>
<div className="Screenstat">
<UserInfo/>
<Online/>
<div className="ledOn"></div>
</div>
</>
)
}

}

export default Screenstat