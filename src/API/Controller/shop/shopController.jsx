import React,{useEffect, useState, useRef} from "react";
import {getShop} from "../../Axios"
import {cart} from "./addtoCart"
import Cart,{addtocart} from "../../../Zones/Cart/Cart";
import $ from "jquery"


function Items(){
        const [cartitem, setCartitem] = useState([])
        const handleAddtocart =(e, item)=>{
            setCartitem(prevItems => {
                return [...prevItems,item]
            })
            console.log(item)
        }
        console.log(cartitem)


/*const handleAddtocart = (item) => () =>{
const session = localStorage.getItem('uname')
addCart(item,session)
$('.cart-div tbody').append("<tr><td>"+item.name+"</td><td>"+item.price+"</td></tr>")
let len = $('.cart-div tr').length;
$('.nrofitems p').text(len)
}*/

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
<>
{items.map((item) =>(
<tr  key={item.id}>
<td>{item.name}</td>
<td>{item.price}</td>
<td onClick={e => handleAddtocart(e, item)}>Cart</td>
</tr>
))}
</>
)
}

export default Items