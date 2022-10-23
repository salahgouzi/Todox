import {useState, useEffect} from "react"

function Todo ({savedTodosS : savedTodosS , setSavedTodosS : setSavedTodosS ,
    todoText :todoText,  deleteFnc : deleteTodo , id: todoId})
    {   

        return (
            <div className="todo" id={todoId} key={todoId}>
                <span className="todo-text">
                {todoText}
                </span>
                <span className="todo-tools">
                    <span onClick=
                        { () => {
                        deleteTodo(todoId);
                        let savedTodos = JSON.parse(localStorage.getItem("todos"))
                        setSavedTodosS(savedTodos)
                        } }
                        className="todo-btn todo-delete">x</span>
                </span>
            </div>
        )
    }

export default Todo