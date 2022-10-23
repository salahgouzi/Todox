function deleteTodo(todoId) {
    let savedTodos = JSON.parse(localStorage.getItem("todos"))
    savedTodos = savedTodos.filter(function(savedTodo) {
        return savedTodo.todoId !== todoId
    })
    localStorage.setItem("todos", JSON.stringify(savedTodos))
    console.log(savedTodos)
    
}
export default deleteTodo