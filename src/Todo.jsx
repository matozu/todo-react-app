import PropTypes from "prop-types"
import { todoPropTypes } from "./TodoPropTypes"


export default function Todo ({todo, toogleTodo}){
    function handleClick() {
        toogleTodo(todo.id)
    }

    return  (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={handleClick}  />
            {todo.name}
        </div>
    )
    
}

Todo.propTypes = {
    todo: todoPropTypes,
    toogleTodo: PropTypes.func.isRequired
}