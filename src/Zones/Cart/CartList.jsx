import "./Cart.css"
import $ from "jquery"
import {useState} from 'react'
import CartItems from "./CartItems"
import { useEffect } from "react"
import cartimg from './cart.png'

function CartList({cartlist,handleClear1}){

const [cartstate, setCartstate] = useState([])

console.log('cartllist',cartstate)
useEffect(()=>{
    setCartstate(cartlist)
},[cartlist])

const handlePayment = () =>{
    localStorage.setItem('orders',localStorage.getItem('cart'))
}

const opencart =(e)=>{
    e.stopPropagation();
$('.cart-div').addClass('cart-open')
$('.cart-div table').addClass('cart-tableopen')
$('.nrofitems').addClass('cart-nrofitemshide')
$('.cart-container').addClass('cart-containerflex')
$('.close-cart').addClass('close-cartshow')
console.log('open')
}    

const closecart =(e)=>{
    e.stopPropagation();
$('.cart-div').removeClass('cart-open')
$('.cart-div table').removeClass('cart-tableopen')
$('.nrofitems').removeClass('cart-nrofitemshide')
$('.cart-container').removeClass('cart-containerflex')
$('.close-cart').removeClass('close-cartshow')
console.log('close')
}

function handleClear(){
    handleClear1()
}

if(cartstate.length === 0)
{
    return(

        <div onClick={opencart} className="cart-div">
                    <div onClick={closecart} className="close-cart">
        close
        </div>
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
        <div className="cart-controller">
        </div>
        </div>
        </div>
        </div>
        )
}
if(cartstate.length !== 0)
{
    return(
        <>
        <div onClick={opencart} className="cart-div">
        <div onClick={closecart} className="close-cart">close</div>
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

}
export default CartList