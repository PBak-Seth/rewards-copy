import { calculateCustomersPoints } from '../../utils/calculateCustomerPoints';
import { useFilterTransactions } from '../../hooks/useFilterTransactions';

import styles from './AwardPoints.module.css';

export const AwardPoints = ({ customerId }) => {
  const { filteredTransactions } = useFilterTransactions();
  const points = calculateCustomersPoints(customerId, filteredTransactions);

  return <div className={styles.container}>Points : {points}</div>;
};
