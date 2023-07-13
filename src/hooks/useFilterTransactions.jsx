import { useContext } from 'react';

import { Context } from '../store/store';
import { filterTransactionsByMonth } from '../utils/filterTransactionsByMonth';

import { FILTER_DEFAULT_VALUE } from '../constants/filters';

export const useFilterTransactions = () => {
  const { filter, transactions } = useContext(Context);

  const filteredTransactions =
    filter !== FILTER_DEFAULT_VALUE ? filterTransactionsByMonth(transactions, filter) : transactions;

  return {
    filteredTransactions,
  };
};
