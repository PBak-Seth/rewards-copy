import { useQuery } from '@tanstack/react-query';
import { apiSimulator } from '../apiSimulator';
export function useGetTransactions(options) {
  return useQuery({
    queryFn: async () => {
      return await apiSimulator('data/transactions.json');
    },
    queryKey: ['getTransactions'],
    onError: (error) => {
      throw error;
    },
    ...options,
  });
}
