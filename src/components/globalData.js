import React, { createContext, useReducer } from "react"
import transactionReducer from "./transactReducer";




export const transactionsData = createContext();

export function ContextProvider({children}) {
    const [state, dispatch] = useReducer(transactionReducer, [])
    // Add Transaction Action Function
    function AddTransaction(newTransaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: {
                description: newTransaction.desc,
                amount: newTransaction.amount,
                trans:newTransaction.transactionType
            }
        })
    }
    // Delete Transaction Action
    function DeleteTransaction(index) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:index
        })
    }


    return(
        <transactionsData.Provider value={
            {
                data:state,
                AddTransaction,
                DeleteTransaction
            }}>
            {children}
        </transactionsData.Provider>
    )
}