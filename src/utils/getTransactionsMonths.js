export const getTransactionsMonths = (transactions) => {
  const months = new Set();

  transactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.transactionDate);
    const month = transactionDate.toLocaleString('default', { month: 'long' });
    months.add(month);
  });

  return Array.from(months);
};
