import React from 'react'
import PropTypes from 'prop-types'

const ToDoItem = ({ onClick, completed, text }) => (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }} >
    {text}
    </li>
)

ToDoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

const ToDoListView = ({ todos, onTodoClick }) => (
    <ul>
    {todos.map(todo => <ToDoItem key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
    </ul>
)

ToDoListView.propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}


export default ToDoListView 
