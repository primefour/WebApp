import {combineReducers} from 'redux'

const todo_reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          info: action.info,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {id:todo.id,info:todo.info,completed:true}
          : todo
      )
    default:
      return state
  }
}

const filter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

const ToDoReducer = combineReducers({
  todo_reducer,
  filter
})

export default ToDoReducer

