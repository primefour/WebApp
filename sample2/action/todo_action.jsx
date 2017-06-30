let todoIdx = 0 
export const AddToDo= (text) =>({
    type:'ADD_TODO',
    id:todoIdx++,
    text 
})


export const CompleteToDo = (id) =>({
    type:'COMPLETE_TODO',
    id
})

export const FilterToDo = (filter)=>({
    type:'SET_FILTER',
    filter
})
