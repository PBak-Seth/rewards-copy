import styles from './Transaction.module.css';
import { calculatePoints } from '../../../utils/calculatePoints';

const Transaction = ({ transactionData }) => {
  return (
    <div className={styles.container}>
      <p>Transaction nr : {transactionData.id}</p>
      <p>customer : {transactionData.customerId}</p>
      <p>{transactionData.transactionDate}</p>
      <p>amount : {transactionData.amount}</p>
      <p>points : {calculatePoints({ transactionAmount: transactionData.amount })}</p>
    </div>
  );
};

export { Transaction };
