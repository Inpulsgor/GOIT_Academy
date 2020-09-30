import React from "react";
import TransactionsData from "./TransactionsData";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  // console.log(items);
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionsData key={item.id} items={item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
