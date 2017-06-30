import React from 'react'
import ReactDom from 'react-dom'
import ToDoListView from './components/todo_listview.jsx'
import CompleteToDo from './action/todo_action.jsx'

import {createStore } from 'redux'
import ToDoReducer from './reducer/todo_reducer.jsx'

const ToDoStore = createStore(ToDoReducer)



const toggleTodo = (id) => {
    console.log("on click item " + id)
    ToDoStore.dispatch({
        type:'COMPLETE_TODO',
        id:1
    })
}

var todo_list = [{
    id:0,
    text:"hello",
    completed:false},
    {
    id:1,
    text:"world",
    completed:false}]

const App = () => (
    <div>
    <ToDoListView todos={todo_list} onTodoClick= {toggleTodo}/>
    </div>
)

const app = document.createElement('div');
document.body.appendChild(app);

ReactDom.render(<App/>,app)
