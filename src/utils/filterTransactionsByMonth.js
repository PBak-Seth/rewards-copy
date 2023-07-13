export const filterTransactionsByMonth = (transactions, targetMonth) => {
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.transactionDate);
    const month = transactionDate.toLocaleString('default', { month: 'long' });
    return month === targetMonth;
  });
};
