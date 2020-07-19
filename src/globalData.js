import { createContext } from "react"
// import transactionReducer from "./transactReducer";


const initialTransactions = [
    {description: "News",amount:500},
    {description: "Book",amount:-300},
    {description: "Cash",amount:300},
    
]

export const transactionsContext = createContext(initialTransactions);