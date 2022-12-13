import './Shop.css';
import {useState, useEffect} from "react"
import {getShop} from "../../API/Axios"
import CartList from '../Cart/CartList';
import Filters from './Filters';

function Shop() {
const [cartitem, setCartitem] = useState([])

const [items, setItems] = useState([]);
    useEffect(()=>{
        const getcart = JSON.parse(localStorage.getItem('cart'))
        if(getcart) setCartitem(getcart)
} ,[])

useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartitem))
} ,[cartitem])

const itemid = cartitem?.map((item) =>(
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

const clearCart =()=>{
    setCartitem([])
    localStorage.removeItem('cart')
    console.log('cartitem',cartitem)
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
    const images = importAll(require.context('./prod-img/', false, /\.(png|jpe? g|svg)$/));

return (
<>
<div className="shop-div">
</div>
<div className="shop-container">
<Filters/>
    <div className='shop1'>
    <table>
<tbody>
{items.map((item) =>(
<tr key={item.id}>
<td className='shop-img'><img src={images[item.img]} alt=""/></td>
<td>{item.name}</td>
<td>{item.price} €</td>
<td><button  onClick={(e) => handleAddtocart(e, item)}>Cart</button></td>
</tr>
))}
</tbody>
</table>
    </div>
    <div className='shop2'>
        {items.map((item) =>(
        <div className='grid-item' key={item.id}>
            <div><img src={images[item.img]} alt=""/></div>
            <div>{item.name}</div>
            <div>{item.price} €</div>
            <div><button  onClick={(e) => handleAddtocart(e, item)}>Cart</button></div>
        </div>
            ))}
    </div>
<CartList cartlist={cartitem} handleClear1={(e) => clearCart(e)}/>
</div>
</>
)
}
export default Shop

