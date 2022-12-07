import e from "cors"
import {useState, useRef} from "react"
import TodoList from "./TodoList"

function Home() {
const [todos, setTodos] = useState([])
const todoNameRef = useRef()

const handleAddTodo = () =>{
    const name = todoNameRef.current.value
    if(name === '') return
    let i =+ 1
    setTodos(prevTodos => {
        return [...prevTodos,{ id:i, name:name, complete:false}]
    })
    todoNameRef.current.value=null
}



return (
<>
<TodoList todos={todos}/>
<input ref={todoNameRef} type="text" />
<button onClick={handleAddTodo}>Add todo</button>
<button>Clear todo</button>
<div>0 left</div>
</>
)
}

export default Home