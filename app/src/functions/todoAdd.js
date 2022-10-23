import { useState, useEffect } from "react";

let todos = [
    {todoId : 0, todoText : "play with kids"},
    {todoId : 1, todoText : "learn morrocan"},
    {todoId : 2, todoText : "look for mother"}]

function foundTodo(todo, todos) {
    let found = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].todoText == todo) {
            found  = true
        }
    }
    return found
}
function uniqueId(savedTodos) {
    let biggestId = 0
    for (let i = 0; i < savedTodos.length; i++) {
        if (biggestId < savedTodos[i].todoId) {
            biggestId = savedTodos[i].todoId 
        }
    }
    return biggestId + 1
}
function validInput(inp) {
    let reg = new RegExp('^[a-zA-Z0-9_\., ]*$');
    return (inp != "" &&  reg.test(inp) && inp.length > 3) 
}

function todoAdd(message, setMessage) {
    let inp = document.querySelector(".input").value
    let savedTodos = JSON.parse(localStorage.getItem("todos"))
    if (savedTodos.length < 9) {
        if (validInput(inp)) {
            if (!foundTodo(inp, savedTodos)) {
                let id = uniqueId(savedTodos)
                savedTodos.push({todoId : id, todoText : inp})
                localStorage.setItem("todos", JSON.stringify(savedTodos))
                console.info("ADDED TODO")
            }
            else {
                setMessage("already exists")
                document.querySelector('.message').style.opacity = "1"
                setTimeout( () => {
                    document.querySelector('.message').style.opacity = "0"
                },2000)
            }
        }
        else {
            setMessage("todo not valid")
            document.querySelector('.message').style.opacity = "1"
            setTimeout( () => {
                document.querySelector('.message').style.opacity = "0"
            },2000)
        }
    }
    else {
        setMessage("max todos")
        document.querySelector('.message').style.opacity = "1"
        setTimeout( () => {
            document.querySelector('.message').style.opacity = "0"
        },2000)
    }
}
// [{"todoId": "0", "todoText": "do me ;_;"}]
export {todoAdd, todos}