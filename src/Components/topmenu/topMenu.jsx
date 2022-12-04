import {Link} from "react-router-dom"
function RouteAuth(){
  const store = localStorage.getItem('uname')
    if(store == null){
  return <Link to="/login"> Login</Link>
    }else{
  return <Link to="/user"> User</Link>
    }
  }
  
  export default RouteAuth