import { createStore } from 'redux'
import reducer from '../reducer/todo_reducer.jsx'
export const ToDoStore = createStore(reducer)

