import Todo from "./Todo";
import PropTypes from "prop-types"
import { todoPropTypes } from "./TodoPropTypes";

export default function TodoList({todos, toogleTodo}) {
    return (
        todos.map((todo) => <Todo key={todo.id} todo={todo} toogleTodo={toogleTodo}/>)
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(todoPropTypes),
    toogleTodo: PropTypes.func.isRequired
}


        