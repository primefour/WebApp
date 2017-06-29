import React from 'react'
import ReactDom from 'react-dom'
import store from './store/todo_store.jsx'
import ToDoListView from './components/todo_listview.jsx'

const toggleTodo = (id) => {
    console.log("on click item " + id)
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
