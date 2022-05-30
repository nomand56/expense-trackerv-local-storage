
const TransactionReducer = ((state, action)=>{
    switch (action.type) {
        case 'ADD_Transaction':
            let transactions = [...state, action.payload];
              localStorage.setItem('user',JSON.stringify(transactions))

            return transactions
        
        case 'DELETE_TRANSACTION':{
            let transactions =  state.filter(transaction => transaction.id !== action.payload);
            localStorage.setItem('user',JSON.stringify(transactions))

             return  transactions
        }
        default:
           return state;
    }
})


export default TransactionReducer;
