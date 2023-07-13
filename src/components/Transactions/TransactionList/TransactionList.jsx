import { Transaction } from '../Transaction/Transaction';

import styles from './TransactionList.module.css';

export const TransactionList = ({ items }) => {
  return (
    <ul className={styles.transactionsList}>
      {items.map((transaction) => (
        <li key={transaction.id}>
          <Transaction transactionData={transaction} />
        </li>
      ))}
    </ul>
  );
};
