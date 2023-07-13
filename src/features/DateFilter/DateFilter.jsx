import { useContext } from 'react';

import { Context } from '../../store/store';
import { getTransactionsMonths } from '../../utils/getTransactionsMonths';

import { FILTER_DEFAULT_VALUE } from '../../constants/filters';

import styles from './DateFilter.module.css';

export const DateFilter = () => {
  const { transactions, filter, setFilter } = useContext(Context);

  if (!transactions) return null;

  const months = getTransactionsMonths(transactions);

  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  };

  //filtering by month only to keep it simple
  return (
    <div className={styles.container}>
      <h2>Filter</h2>
      <select value={filter} onChange={filterChangeHandler}>
        <option value={FILTER_DEFAULT_VALUE}>None</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};
