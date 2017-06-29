let todoIdx = 0 
export AddToDo= (info) =>{
    return {
        type:'TODO_ADD',
        id:todoIdx++,
        info
    }
}


export CompleteToDo = (id) =>{
    return{
        type:'COMPLETE',
        id
    }
}

export FilterToDo = (filter)=>{
    return {
        type:'SET_FILTER',
        filter
    }
}
