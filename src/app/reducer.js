import { createSlice } from "@reduxjs/toolkit";


// const initialState=[]

// const addEventReducer = createSlice({
//     type: "events",
//     initialState,
//     reducers: {
//         addEvents:(state, action) => {
//             state.push(action.payload);
//             return state;
//         }
//     }
// })

// let store = createStore(event)

const eventReducer = (state = [], action) => {
    state.push(action.payload)
    return state;
}


// store.dispatch(addEventReducer)
// export const { addEvents } = addEventReducer.actions
// export const reducer = addEventReducer.reducer

export default eventReducer