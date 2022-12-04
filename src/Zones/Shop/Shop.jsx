import './Shop.css';
import Items from '../../API/Controller/shop/shopController';

function Shop() {



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
<Items/>
</tbody>
</table>
</div>
</>
)
}

export default Shop