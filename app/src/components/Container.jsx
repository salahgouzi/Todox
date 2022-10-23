import { useState, useEffect } from "react";
import Header from "./Header"
import Todos from "./Todos";
import AdderDiv from "./AdderDiv"
import logoClick from "../functions/logoClick"
import deleteTodo from "../functions/deleteTodo"
import {todoAdd, todos} from "../functions/todoAdd"

function Container() {
  let [savedTodos, setSavedTodos] = useState(
    JSON.parse(localStorage.getItem("todos"))
    )
  return (
    <div className="container">
    <Header fnc={logoClick}/>
    <AdderDiv savedTodos={savedTodos} setSavedTodos={setSavedTodos} fnc={todoAdd}/>
    <Todos fnc={deleteTodo}/>
  </div>
  )
}
export default Container;