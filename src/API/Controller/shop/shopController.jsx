import React,{useEffect, useState} from "react";
import {getShop} from "../../Axios"
import {addtocart} from "./addtoCart"
const Items = () =>{
    
    const handleAddtocart = (item) => () =>{
    const session = localStorage.getItem('uname')
    addtocart(item,session)

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