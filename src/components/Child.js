import React, { useContext, useState } from 'react';
import '../App.css';
import {transactionsData} from './globalData'

function Child() {

    // use states to get value fields
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const {data} = useContext(transactionsData);
    const {AddTransaction} = useContext(transactionsData)
    const {DeleteTransaction} = useContext(transactionsData)
    const [transactionType, setTransactionType ] = useState(true);
    console.log("transactionType: ",transactionType);
    
    const handleSubmission = (event) => {
      event.preventDefault();
      
      if (transactionType) {
        AddTransaction({
        desc:desc,
        amount:Number(amount)
      })
      } else {
        AddTransaction({
        desc:desc,
        amount: -Number(amount)
      })
      }
     
      setDesc("")
      setAmount("")

    }

    const deleteHandle = (index) => {
      DeleteTransaction(index)
    }
    

    function getIncome() {
        let income = 0;
        for (var i = 0; i < data.length; i++) 
        {
          if (data[i].amount > 0) {
            income += data[i].amount
          }
        }
        return income;
      }
    

    function getExpense() {
     
        let expense = 0 ;
        for (var i = 0; i < data.length; i++) {
          if (data[i].amount < 0) {
            expense -= data[i].amount
          }
        } 
        return expense;
      }      

  return (
    <div className="container">
      <div className="expenseContainer">
        <h2 className="textAlignCenter textColorWight">Expense Tracker</h2>
        <h4 className="paddingMarginNone textColorWight">Your Balance</h4>
        <h1 className="paddingMarginNone brownColor">$ {(getIncome() - getExpense()).toFixed(2)}</h1>
        <div className="bgWhiteBorderRadius">
          <div className="spaceAround">
            <span className="darkcynColor">Income</span>
            <span className="darkcynColor">Expense</span>
          </div>
          <div className="spaceAround brownColor">
            <span>$ {getIncome().toFixed(2)}</span>
            <span>$ {getExpense().toFixed(2)}</span>
          </div>
        </div><br/>
        <h4 className="paddingMarginNone textColorWight">
          History 
          <span style={{color:'darkgreen'}}> ( <span style={{color:'brown'}}>{data.length}</span> )</span>
        </h4><hr/>
        <ul className="lisStyleNone">
          {data.length !==0?
              data.map((d,ind)=>{
                  return(
                    <li className={`spaceBetween bgWhiteBorderRadius ${d.amount > 0 ? 'greenColor' : 'redColor'}`} key={ind+1}> 
                        <span >{ind+1}) {d.description}</span>
                        <span>
                          <span >${d.amount > 0 ? d.amount : -d.amount}</span>
                          <button onClick={()=>deleteHandle(ind)} className="deleteBtn">x</button>
                        </span>
                    </li>
                  )
              }): <div className="inputField">No Transactions available</div>
          }
        </ul>
        <h4 className="textColorWight">Add now transaction</h4>
        <form onSubmit={handleSubmission}>
          <p style={{color:'white', marginTop:'-20px'}}>Please select your Transaction Type:</p>
          <input type="radio" id="incomeType" name="transactionType" onChange={()=>setTransactionType(!transactionType)} value={transactionType} checked={transactionType} />
          <label htmlFor="income" style={{color:'green'}}>Income</label>
          <input type="radio" id="expenseType" name="transactionType"  onChange={()=>setTransactionType(!transactionType)} value={!transactionType} checked={!transactionType} />
          <label htmlFor="expense" style={{color:'darkred'}}>Expense</label><br/>
          <label htmlFor="Text" className="textColorWight">
            Description<br/>
            <input className="inputField" onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" required />
          </label><br/>
          <label htmlFor="Text" className="textColorWight">
            Amount<br/>
            <input className="inputField" onChange={(e)=>setAmount(e.target.value)} value={amount} type="number" required/>
          </label><br/><br/>
          <input className="fullSizeBtn" type="submit" value="add transaction"/>
        </form>
      </div>
    </div>
  );
}

export default Child;
