import "./Cart.css"
import $ from "jquery"
import CartItems from "./CartItems"

function CartList({cartlist,handleClear1}){

const opencart =()=>{
$('.cart-div').addClass('cart-open')
$('.cart-div table').addClass('cart-tableopen')
$('.nrofitems').addClass('cart-nrofitemshide')
$('.cart-container').addClass('cart-containerflex')
$('.close-cart').addClass('close-cartshow')
console.log('open')
}    

const closecart =()=>{
$('.cart-div').removeClass('cart-open')
$('.cart-div table').removeClass('cart-tableopen')
$('.nrofitems').removeClass('cart-nrofitemshide')
$('.cart-container').removeClass('cart-containerflex')
$('.close-cart').removeClass('close-cartshow')
console.log('close')
}

function handleClear(e){
    handleClear1(e)
}

const handlePayment = () =>{
    localStorage.setItem('orders',JSON.stringify(cartlist))
}

return(
<>
<div>
<div onClick={closecart} className="close-cart">
close
</div>
<div onClick={opencart} className="cart-div">
<div className="nrofitems">
<p>{cartlist.length}</p>
</div>
<div className="cart-container">
<table>
<tbody>
    {cartlist.map(item=>{
     return <CartItems key={item.id} items={item}/>
    })}
       
</tbody>
</table>
<button onClick={handleClear}>clear cart</button>
<button onClick={handlePayment}>Payment</button>
</div>
</div>
</div>
</>
)
}
export default CartList