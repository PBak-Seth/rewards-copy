import { calculatePoints } from './calculatePoints';

export const calculateCustomersPoints = (customerId, transactions) => {
  if (!transactions || !customerId) {
    return 0;
  }

  return transactions.reduce((acc, transaction) => {
    if (transaction.customerId === customerId) {
      return acc + calculatePoints({ transactionAmount: transaction.amount });
    }
    return acc;
  }, 0);
};
