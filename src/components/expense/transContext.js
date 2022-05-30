
import React, { createContext, useReducer } from "react"
import TransactionReducer from "./transReducer";

export const initialTransction = JSON.parse(localStorage.getItem('user') || '[]');



export const TransctionContext = createContext(initialTransction);
export const TransactionProvider = ({children})=>{
    let [state , dispatch] = useReducer(TransactionReducer,initialTransction);
    function addTransaction(transObj){
        dispatch({
            type: 'ADD_Transaction',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
                id: transObj.id


            }

    })

    };


  
    return (
        <TransctionContext.Provider value= {{
            transactions: state,
            addTransaction,
            dispatch,
        }

        }>
            {children}
        </TransctionContext.Provider>
    )

}