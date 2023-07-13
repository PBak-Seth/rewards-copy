import { useContext } from 'react';

import { Context } from '../../store/store';
import { Loader } from '../Loader/Loader';
import { useGetCustomers } from '../../api/queries/useGetCustomers';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import { CustomersList } from './CustomersList/CustomersList.jsx';

import styles from './Customer.module.css';

export const Customers = () => {
  const { customers, setCustomers } = useContext(Context);
  const { isLoading, isError } = useGetCustomers({
    onSuccess: (data) => {
      setCustomers(data);
    },
  });

  if (isLoading) return <Loader />;

  if (isError) {
    return <ErrorMessage>We cannot fetch customers. Please try again later.</ErrorMessage>;
  }

  return (
    <div className={styles.customers}>
      <h1 className={styles.title}>Customers</h1>
      {customers && <CustomersList customers={customers} />}
    </div>
  );
};
