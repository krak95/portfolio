import React from "react"

function CartItems({item}){
return (
<>
<tr>
<td>
{item.name}   
</td>
<td>
{item.price}   
</td>

</tr>
</>
)
}

export default CartItems