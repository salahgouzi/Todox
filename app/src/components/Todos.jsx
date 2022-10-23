import Todo from "./Todo"
import {useState, useEffect} from "react"

function Todos ({fnc: deleteTodo}) {
    let savedTodos = JSON.parse(localStorage.getItem("todos"))
    if (!savedTodos) {
        localStorage.setItem("todos", JSON.stringify([{todoText: "im a default todo ;_;", todoId: 0}]))
    }
    let [savedTodosS, setSavedTodosS] = useState(savedTodos)
    return (
    <div className="todos">
    { savedTodos.map( (todo) => (
        <Todo
        todoText={todo.todoText}
        savedTodosS={savedTodosS}
        setSavedTodosS={setSavedTodosS}
        deleteFnc={deleteTodo}
        key={todo.todoId}
        id={todo.todoId}/>
        )) }
    </div>
    )
}
export default Todos