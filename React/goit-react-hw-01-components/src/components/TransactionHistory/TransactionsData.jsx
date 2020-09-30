import React from "react";

const TransactionsData = ({ items: { amount, currency, id, type } }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionsData;
