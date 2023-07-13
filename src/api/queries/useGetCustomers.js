import { useQuery } from '@tanstack/react-query';
import { apiSimulator } from '../apiSimulator';
export function useGetCustomers(options) {
  return useQuery({
    queryFn: async () => {
      return await apiSimulator('data/customers.json');
    },
    queryKey: ['getCustomers'],
    onError: (error) => {
      throw error;
    },
    ...options,
  });
}
