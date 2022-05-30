import React, { useState,useEffect } from 'react'
import './style.css'
import {TransctionContext} from './transContext'
import { useContext } from 'react'

export default function Expense() {

    let {transactions , addTransaction,dispatch} = useContext(TransctionContext);
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState('');


    // useEffect(()=>{
    // },[transactions]);


    const handleAdd = (e)=>{
        e.preventDefault();
        if(Number(newAmount) === 0 ){
            alert("Please Enter Some Amount");
            return false;
            
        }
        

        addTransaction({
            id: Math.floor(Math.random() * 100000000),
            amount: Number(newAmount),
            desc: newDesc
        })
        setDesc('');
        setAmount('');
    }
    const getIncome = ()=>{
        let income = 0;
        for(let i =0; i < transactions.length; i++){
            if (transactions[i].amount > 0)
            income += transactions[i].amount;
        }
        return income;
    }

    const getExpense = ()=>{
        let expense = 0;
        for(let i =0; i < transactions.length; i++){
            if (transactions[i].amount < 0)
            expense += transactions[i].amount;
        }
        return expense;
    }

  return (
    <div>
        <div id='main'>
            <h1 className='expense'>Expense Tracker</h1>
            <h2 id='balance'>YOUR BALANCE <br /> ${getIncome() + getExpense()}</h2>
            <div id='centersheet'>
                <h2 >
                    INCOME <br/>  <label style={{color:'#1e82e6'}}>${getIncome()}</label>
                </h2>
                <h2 >
                    EXPENSE <br /> <label style={{color:'#ff5959'}}>${getExpense()}</label>
                </h2>
            </div>
            <h3>History <hr /></h3>
            <ul className='transaction-list'>
                {transactions.map((transObj , ind )=>{
                    return(
                        <li key={ind} >
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                            <button onClick={(e) => dispatch({type:"DELETE_TRANSACTION",payload:transObj.id})} className="delete-btn">x</button>

                        </li>
                    )
                })}

            </ul>
            <h3>Add New Transection <hr /></h3>
            <form className='transction-form' onSubmit={handleAdd}>
                <label> Enter Description <br /> <input
                value={newDesc}
                 placeholder='Description'
                  type="text" 
                  onChange={(evt)=>setDesc(evt.target.value)} 
                  required /></label>
                <br />
                <label> Enter Amount <br /> [Expense start with - 'Negtive' then Amount] <br /> <input 
                value={newAmount}
                placeholder='Amount'
                 type="number"
                  onChange={(evt)=>setAmount(evt.target.value)}
                   required/></label>
                <br />
                <input id='submit' type="submit" value="Add Transaction "/>
            </form>
        </div>
      
    </div>
  )
}
