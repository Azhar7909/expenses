const transactionReducer = ((state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            
                return[action.payload, ...state]
            
        case 'DELETE_TRANSACTION':
                var new_state = state.filter((item, index) => index !== action.payload );
                localStorage.setItem("Transactions",JSON.stringify(new_state)); 
                return new_state
               
        default:
            return state
    }
})

export default transactionReducer;