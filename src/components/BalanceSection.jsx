import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { saveTransaction } from "../context/GlobalAction";
import { toast } from "react-toastify";

const BalanceSection = () => {

  const {transactions , dispatch} = useContext(GlobalContext)
  
  const balance = transactions.reduce((p,c)=>{
    return p + c.amount
  },0)
  
  const [text , setText] = useState("")
  const [amount ,setAmount] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    const newTransaction = {
      id : crypto.randomUUID(),
      text,
      amount : parseInt(amount)
    }

    const data = saveTransaction(newTransaction) 
    dispatch({
      type : "SAVE" ,
      payload : data
    })

    toast.info("Transaction Save", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

    setText("")
    setAmount("")   
  }
  
  return (
    <div className="main-section">
      <div id="current-bal" className="balance">
        <span>
          <p>Current Balance</p>
          <h1>₹{balance}</h1>
        </span>
        <i className="fa-solid fa-wallet"></i>
      </div>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <input value={text} type="text" placeholder="Enter Your Transaction" onChange={(e)=>setText(e.target.value)}/>
        <input value ={amount} type="number" placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} />
        <button>
          Save Transaction<i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};

export default BalanceSection;
