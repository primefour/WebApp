let todoIdx = 0 
export addToDo= (info) =>{
    return {
        type:'TODO_ADD',
        id:todoIdx++,
        info
    }
}


export completeToDo = (id) =>{
    return{
        type:'COMPLETE',
        id
    }
}

export filterTodo = (filter)=>{
    return {
        type:'SET_FILTER',
        filter
    }
}
