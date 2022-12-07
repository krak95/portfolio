import './Shop.css';
import {useState, useEffect} from "react"
import {getShop} from "../../API/Axios"
import CartList from '../Cart/CartList';

function Shop() {

    const [cartitem, setCartitem] = useState([])
    const handleAddtocart =(e, item)=>{
        setCartitem(prevItems => {
            return [...prevItems,item]
        })
        console.log(item)
    }
    console.log(cartitem)


const [items, setItems] = useState([]);
const getshop = async () =>{
const getshop = await getShop()
const result = getshop.data
setItems(result)
}
useEffect(()=>{
    getshop()
    },[])

return (
<>
<div className="shop-div">
<h1>Shop</h1>
</div>
<div className="shop-container">
<table>
<tbody>
<tr>
<th>Name</th>
<th>Price</th>
</tr>
{items.map((item) =>(
<tr  key={item.id}>
<td>{item.name}</td>
<td>{item.price}</td>
<td onClick={e => handleAddtocart(e, item)}>Cart</td>
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