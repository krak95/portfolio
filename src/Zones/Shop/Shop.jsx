import './Shop.css';
import {useState, useEffect} from "react"
import {getShop} from "../../API/Axios"
import CartList from '../Cart/CartList';

function Shop() {
const [cartitem, setCartitem] = useState([])
console.log('cartitem',cartitem)

const [items, setItems] = useState([]);
console.log('item',items)
    useEffect(()=>{
        const getcart = JSON.parse(localStorage.getItem('cart'))
        if(getcart) setCartitem(getcart)
} ,[])


useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartitem))
} ,[cartitem])

const itemid = cartitem.map((item) =>(
    item.id
    ))

const handleAddtocart =(e, item)=>{
    if(itemid.includes(item.id))
    {
        return;
    }
    else{
        setCartitem(prevItems => {
            return [...prevItems,item] })
    }     
}

const getshop = async () =>{
    const getshop = await getShop()
    const result = getshop.data
    setItems(result)
    }

useEffect(()=>{
getshop()
},[])

const importAll=(r)=> {
    return r.keys().map(r);
    }
    console.log(importAll)
    const images = importAll(require.context('./prod-img/', false, /\.(png|jpe? g|svg)$/));

return (
<>
<div className="shop-div">
<h1>Shop</h1>
</div>
<div className="shop-container">
<table>
<tbody>
{items.map((item) =>(
<tr key={item.id}>
<td className='shop-img'><img src={images[item.img]} alt=""/></td>
<td>{item.name}</td>
<td>{item.price} €</td>
<td onClick={(e) => handleAddtocart(e, item)}>Cart</td>
</tr>
))}
</tbody>
</table>
</div>
<CartList cartitem={cartitem}/>
</>
)
}
export default Shop