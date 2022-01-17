const eventReducer = (state = [], action) => {
    state.push(action.payload)
    return state;
}

export default eventReducer 