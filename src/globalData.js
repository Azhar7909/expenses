import React,  { createContext } from "react"
// import transactionReducer from "./transactReducer";


const initialTransactions = [
    {description: "News",amount:500},
    {description: "Book",amount:-300},
    {description: "Cash",amount:300},
    
]

export const transactionsContext = createContext(initialTransactions);

// export const transactionProvider = ({children}) => {
//     const [state, dispatch] = useReducer(transactionReducer, initialTransactions)

//     function addTransaction(transObj) {
//         dispatch({
//             type:"ADD_TRANSACTION",
//             payload: {
//                 description: transObj.desc,
//                 amount: transObj.amount
//             }
//         })
//     } 
//     return(
//         <transactionsContext.Provider value={{
//             transactions: state,
//             addTransaction
//         }}>
//             {children}
//         </transactionsContext.Provider>
//     )
// }
