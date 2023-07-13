import { Customers } from '../components/Customers/Customers';
import { DateFilter } from '../features/DateFilter/DateFilter';
import { Transactions } from '../components/Transactions/Transactions';
import { ContextProvider } from '../store/store';

export const Landing = () => {
  return (
    <section className="container">
      <ContextProvider>
        <Customers />
        <div>
          <DateFilter />
          <Transactions />
        </div>
      </ContextProvider>
    </section>
  );
};
