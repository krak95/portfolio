import "./Cart.css"
import $ from "jquery"
import {cart} from './../../API/Controller/shop/addtoCart'
import {addCart} from './../../API/Axios'
import CartItems from "./CartItems"

function CartList({cartitem}){
const opencart = ()=>{
$('.cart-div').addClass('cart-open')
$('.cart-div table').addClass('cart-tableopen')
$('.nrofitems').addClass('cart-nrofitemshide')
$('.cart-container').addClass('cart-containerflex')
$('.close-cart').addClass('close-cartshow')
console.log('open')
}    

const closecart = () =>{
$('.cart-div').removeClass('cart-open')
$('.cart-div table').removeClass('cart-tableopen')
$('.nrofitems').removeClass('cart-nrofitemshide')
$('.cart-container').removeClass('cart-containerflex')
$('.close-cart').removeClass('close-cartshow')
console.log('close')
}

return(
<>
<div>
<div onClick={closecart} className="close-cart">
close
</div>
<div onClick={opencart} className="cart-div">
<div className="nrofitems">
<p>{/*cartitem.length*/}</p>
</div>
<div className="cart-container">
<table>
<tbody>
    {cartitem.map(item=>{
     return <CartItems key={item.id} item={item}/>
    })}
</tbody>
</table>
</div>
</div>
</div>
</>
)
}
export default CartList