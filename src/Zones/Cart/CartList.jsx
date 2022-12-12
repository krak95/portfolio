import "./Cart.css"
import $ from "jquery"
import {useState} from 'react'
import CartItems from "./CartItems"
import { useEffect } from "react"
import cartimg from './cart.png'

function CartList({cartlist,handleClear1}){



const handlePayment = () =>{
    localStorage.setItem('orders',localStorage.getItem('cart'))
}

const opencart =()=>{
$('.cart-div').addClass('cart-open')
$('.cart-div table').addClass('cart-tableopen')
$('.nrofitems').addClass('cart-nrofitemshide')
$('.cart-container').addClass('cart-containerflex')
$('.close-cart').addClass('close-cartshow')
}    

const closecart =()=>{
$('.cart-div').removeClass('cart-open')
$('.cart-div table').removeClass('cart-tableopen')
$('.nrofitems').removeClass('cart-nrofitemshide')
$('.cart-container').removeClass('cart-containerflex')
$('.close-cart').removeClass('close-cartshow')
}

function handleClear(){
    handleClear1()
}

return(
<>
<div>
<div onClick={closecart} className="close-cart">
close
</div>
<div onClick={opencart} className="cart-div">
<div className="nrofitems">
    <img src={cartimg} alt="" />
    <div >
    <p>{cartlist.length}</p>
    </div>

</div>
<div className="cart-container">
    <div className="cart-tableflex">
<table>
<tbody>
    {cartlist.map(item=>{
     return <CartItems key={item.id} items={item}/>
    })}
       
</tbody>
</table>
</div>
<div className="cart-controller">
<button onClick={handleClear}>clear cart</button>
<button onClick={handlePayment}>Payment</button>
</div>
</div>
</div>
</div>
</>
)
}
export default CartList