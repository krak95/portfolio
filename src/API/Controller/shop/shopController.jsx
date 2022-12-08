import React,{useEffect, useState, useRef} from "react";
import {getShop} from "../../Axios"
import {cart} from "./addtoCart"
import Cart,{addtocart} from "../../../Zones/Cart/Cart";
import $ from "jquery"


function Items(){

/*const handleAddtocart = (item) => () =>{
const session = localStorage.getItem('uname')
addCart(item,session)
$('.cart-div tbody').append("<tr><td>"+item.name+"</td><td>"+item.price+"</td></tr>")
let len = $('.cart-div tr').length;
$('.nrofitems p').text(len)
}*/

useEffect(()=>{
getshop()
},[])

return(
<>

</>
)
}

export default Items