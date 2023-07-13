export const calculatePoints = ({
  transactionAmount,
  minimumThreshold = 50,
  baseThreshold = 100,
  bonusMultiplier = 2,
}) => {
  if (!transactionAmount || transactionAmount < minimumThreshold) {
    return 0;
  }

  if (transactionAmount <= baseThreshold) {
    return transactionAmount - minimumThreshold;
  }

  return minimumThreshold + (transactionAmount - baseThreshold) * bonusMultiplier;
};
