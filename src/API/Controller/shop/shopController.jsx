import React,{useEffect, useState} from "react";
import {getShop} from "../../Axios"
import {addCart} from "./../../Axios"
import $ from "jquery"

const Items = () =>{
    
const handleAddtocart = (item) => () =>{
const session = localStorage.getItem('uname')
addCart(item,session)
$('.cart-div tbody').append("<tr><td>"+item.name+"</td>td>"+item.price+"</td></tr>")
let len = $('.cart-div tr').length;
$('.nrofitems p').text(len)
}

const [items, setItems] = useState([]);
const getshop = async () =>{
const getshop = await getShop()
const result = getshop.data
setItems(result)
}

useEffect(()=>{
getshop()
},[])

return(
items.map((item) =>(
<tr key={item.id}>
<td>{item.name}</td>
<td>{item.price}</td>
<td key={item} onClick={handleAddtocart(item)}>Add</td>
</tr>
))
)
}

export default Items