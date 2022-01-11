import { createSlice } from "@reduxjs/toolkit";


const initialState=[]

const addEventReducer = createSlice({
    name: "events",
    initialState,
    reducers: {
        addEvents:(state, action) => {
            state.push(action.payload);
            return state;
        }
    }
})

export const { addEvents } = addEventReducer.actions
export const reducer = addEventReducer.reducer