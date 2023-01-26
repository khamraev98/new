import {createSlice} from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name: "todo",
    initialState: {
        data:[
            {id:1, completed:false, title: "task1"},
            {id:1, completed:true, title: "task2"},

        ]

    },


    reducers:{
        onToggle(state, action){
            state.data=state.data.map((value)=>value.id===action.payload.id? {...value, completed: !value.completed}: value);
        },
        onDelete(state, action){
            state.data=state.data.filter((value)=> value.id !==action.payload.id)
        }
        
    },

});