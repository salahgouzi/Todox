import {useState, useEffect} from "react"
function AdderDiv( {savedTodos : savedTodos, setSavedTodos : setSavedTodos, fnc : todoAdd}) {
    
    let [message, setMessage] = useState("already added")   
     
    function handleEnterKey(event)  {
        if (event.key === 'Enter') {
            todoAdd(message, setMessage);
            setSavedTodos(JSON.parse(localStorage.getItem("todos")))
        }
    }
    return (
        <div className="cont">
            <div className="grp-cont">
                <input onKeyDown={handleEnterKey} placeholder="Type your Todo" className="input"/>
                <a href="#" className="add" onClick={() => {
                    todoAdd(message, setMessage);
                    setSavedTodos(JSON.parse(localStorage.getItem("todos")))
                }}>add</a>
            </div>
            <div className="message">
                {message}
            </div>
        </div>
    )
}

export default AdderDiv