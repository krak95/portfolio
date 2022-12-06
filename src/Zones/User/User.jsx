import Screenstat from "../../Components/screenStat/screenStat"
import {useState} from "react"
import {cart} from "./../../API/Controller/shop/addtoCart"

function User() {
    
const icart = cart()
console.log(icart)
const [cart, setCart] = useState([])

return (
<div className="user-div">
<h1>User</h1>
<div className="cart-container">
<table>
<tbody className='cart-additems'>
</tbody>
</table>
</div>
<Screenstat/>
</div>
)
}

export default User