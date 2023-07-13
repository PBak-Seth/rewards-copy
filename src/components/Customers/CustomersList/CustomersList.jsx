import { Customer } from '../Customer/Customer.jsx';

import styles from './CustomersList.module.css';

export const CustomersList = ({ customers }) => {
  return (
    <ul className={styles.customersList}>
      {customers.map((customer) => {
        return (
          <li key={customer.id}>
            <Customer customerData={customer} />
          </li>
        );
      })}
    </ul>
  );
};
