import React, { useContext } from "react";
import ListItem from "./ListItem";
import GlobalContext from "../context/GlobalContext";

const ListGroup = () => {

const {transactions} = useContext (GlobalContext)
if(transactions.length ===0){
  return(
    <h1 className="no-transaction">No Transaction Here</h1>
  )
}

  return (
    <ul className="list-group">
      {
        transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction} />)
      }
    </ul>
  );
};

export default ListGroup;
