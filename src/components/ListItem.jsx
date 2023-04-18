import {FaTrash} from 'react-icons/fa'
import { deleteTransacation } from '../context/GlobalAction'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { toast } from "react-toastify";


const ListItem = ({transaction}) => {
  const {dispatch} = useContext (GlobalContext)
  const handleDelete = (id)=>{
    const data = deleteTransacation (id)
    dispatch({
      type : "DELETE",
      payload : data
    })

    toast.error("Transaction Deleted" , {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })

  }

  return (
    <li className="list-item">
    <span>
      <h3 className={transaction.amount > 0 ? "income-transaction" : "expense-transaction"}>₹{transaction.amount}</h3>
      <h4>{transaction.text}</h4>
    </span>
    <button className="delbtn" onClick={()=>handleDelete(transaction.id)}><FaTrash/></button>
  </li>
  )
}

export default ListItem
