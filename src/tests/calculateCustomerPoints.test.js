import { test, expect } from 'vitest';
import { calculateCustomersPoints } from '../utils/calculateCustomerPoints';

const TEST_DATA = [
  {
    customerId: 1,
    amount: 120,
  },
  {
    customerId: 1,
    amount: 50,
  },
  {
    customerId: 1,
    amount: 100,
  },
  {
    customerId: 2,
    amount: 100,
  },
];

test('calculate customer points', () => {
  expect(calculateCustomersPoints(1, TEST_DATA)).toBe(140);
});
