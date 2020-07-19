import React, { useContext } from 'react';
import './App.css';
import {transactionsContext} from './globalData'

function Child() {
    const data = useContext(transactionsContext);

    function getIncome() {
      let income = 0 ;
      for (let i = 0; i < data.length; i++) {
        if (data[i].amount > 0) {
          income = income + data[i].amount;
          console.log(i);
        }
        return income;
      }
    }
    function getExpense() {
      let expense = 0 ;
      for (let i = 0; i < data.length; i++) {
        if (data[i].amount < 0) {
          expense = expense + data[i].amount;
          console.log(i);
        }
        return expense;
      }
    }

  return (
    <div className="container">
      <div className="expenseContainer">
        <h2 className="textAlignCenter textColorWight">Expense Tracker</h2>
        <h4 className="paddingMarginNone textColorWight">Your Balance</h4>
        <h1 className="paddingMarginNone brownColor">$444.00</h1>
        <div className="bgWhiteBorderRadius">
          <div className="spaceAround">
            <span className="darkcynColor">Income</span>
            <span className="darkcynColor">Expense</span>
          </div>
          <div className="spaceAround brownColor">
            <span>$ {getIncome()}</span>
            <span>$ {getExpense()}</span>
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
                    <li className="spaceBetween bgWhiteBorderRadius" key={ind+1}>
                        <span className="darkcynColor">{ind+1}) {d.description}</span>
                        <span className="brownColor">${d.amount}</span>
                    </li>
                  )
              }): <div className="inputField">No Transactions available</div>
          }
        </ul>
        <h4 className="textColorWight">Add now transaction</h4>
        <form action="">
          <label htmlFor="Text" className="textColorWight">
            Description<br/>
            <input className="inputField" type="text" required/>
          </label><br/>
          <label htmlFor="Text" className="textColorWight">
            Amount<br/>
            <input className="inputField" type="number" min="1" required/>
          </label><br/><br/>
          <input className="fullSizeBtn" type="submit" value="add transaction"/>
        </form>
      </div>
    </div>
  );
}

export default Child;
