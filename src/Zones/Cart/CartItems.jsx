import React from "react"

function CartItems({items}){
return (
<>
<tr>
<td>
{items.name}   
</td>
<td>
{items.price}   
</td>

</tr>
</>
)
}

export default CartItems