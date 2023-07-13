import { useContext, useState } from 'react';

import { Loader } from '../Loader/Loader';
import { TransactionList } from './TransactionList/TransactionList';
import { Context } from '../../store/store';
import { paginate } from '../../utils/paginate';
import { Paginator } from '../Paginator/Paginator';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useFilterTransactions } from '../../hooks/useFilterTransactions';
import { useGetTransactions } from '../../api/queries/useGetTransactions';

import { ITEMS_PER_PAGE } from '../../constants/pagination';

import styles from './Transactions.module.css';

export const Transactions = () => {
  const { transactions, setTransactions } = useContext(Context);
  const [page, setPage] = useState(1);
  const { filteredTransactions } = useFilterTransactions();
  const { isLoading, isError } = useGetTransactions({
    onSuccess: (data) => {
      setTransactions(data);
    },
  });

  if (isLoading) return <Loader />;

  if (isError) {
    return <ErrorMessage>We cannot fetch transactions. Please try again later.</ErrorMessage>;
  }

  if (!transactions) return <Loader />;

  const { paginatedItems, pagination } = paginate(filteredTransactions, ITEMS_PER_PAGE, page);

  return (
    <div className={styles.transactions}>
      <h1>Transactions</h1>
      <TransactionList items={paginatedItems} />
      <Paginator page={page} setPage={setPage} pagination={pagination} />
    </div>
  );
};
