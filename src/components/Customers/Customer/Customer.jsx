import { AwardPoints } from '../../../features/AwardPoints/AwardPoints';
import styles from './Customer.module.css';

export const Customer = ({ customerData: { name, email, address, phone, id } }) => {
  return (
    <div className={styles.container}>
      <h1>Name : {name}</h1>
      <p>email : {email}</p>
      <p>Address : {address}</p>
      <p>Phone : {phone}</p>
      <AwardPoints customerId={id} />
    </div>
  );
};
