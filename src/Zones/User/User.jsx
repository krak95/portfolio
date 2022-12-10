import Screenstat from "../../Components/screenStat/screenStat"
import {useState} from "react"
import { useEffect } from "react"

function User() {
const [items, setItems] = useState([])

useEffect(()=>{
    const order = JSON.parse(localStorage.getItem('orders'))
    console.log(order)
    setItems(order)
    },[])
    console.log(items)
    
return (
<div className="user-div">
<h1>User</h1>
<div className="orders-div">
    <div className="orders-container">
        <table>
            <tbody>
                    {items?.map((item=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                        )))}
                
            </tbody>
        </table>    
    </div>
</div>
<Screenstat/>
</div>
)
}

export default User