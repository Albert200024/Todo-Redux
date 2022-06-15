import { createSlice } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
    name:"todos",
    initialState:{
        todos:JSON.parse(localStorage.getItem('todo'))
    },
    
    reducers:{
        add (state, action) {
           state.todos.push({
               id:Date.now(),
               text:action.payload.value,
               chekend:false
           })
        
        },
        remove(state, action){
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        },
        cheking(state, action){
            let newItem = state.todos.find(item => item.id === action.payload.id)
            newItem.chekend = !newItem.chekend
        },
        clearCompleting(state, action){
            state.todos = state.todos.filter(item => !item.chekend)
        }
    }
})

export const {add, remove, cheking, clearCompleting} = todoSlicer.actions
export default todoSlicer.reducer