import {Link} from "react-router-dom"
import $ from "jquery"
import "./topMenu.css"

function RouteAuth(){
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
}
  
  export default RouteAuth