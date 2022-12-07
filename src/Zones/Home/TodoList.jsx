import {useEffect} from "react"
import {useState} from "react"
import Home from "./Home"
import Todo from "./Todo"

function TodoList({todos}) {
    

return (
<>
<h1>
{todos.length}
</h1>

{todos.map(todo=>{
    return <Todo key={todo.id} todo={todo}/>
})}
</>
)
}

export default TodoList