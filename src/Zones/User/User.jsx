import Screenstat from "../../Components/screenStat/screenStat"
import {useState} from "react"
import { useEffect } from "react"
import axios from "axios"

function User() {
const [items, setItems] = useState([])

useEffect(()=>{
    const order = JSON.parse(localStorage.getItem('orders'))
    console.log(order)
    setItems(order)
    },[])
    console.log('order: ',items)

    function handleMongo(){
        const newNote = {
            title:title,
            content:content,
        }
        axios.post('http://localhost:5500/create', newNote)
        console.log('created')
    }

const [title, setTitle] = useState('')
const [content, setContent] = useState('')
console.log(title,content)
return (
<div className="user-div">
    <button onClick={handleMongo} >MONGO BUTTON</button>
<input type="text" onChange={e => setTitle(e.target.value)} />
<input type="text" onChange={e => setContent(e.target.value)}/>

<h1>User</h1>
<div className="orders-div">
    <div className="orders-container">
        <table>
            <tbody>
                    {items?.map((item=>(
                        <tr key={item.id}>
                            <td>{item.nr}</td>
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