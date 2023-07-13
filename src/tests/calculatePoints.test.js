import { calculatePoints } from '../utils/calculatePoints';
import { test, expect } from 'vitest';

test('calculate points', () => {
  expect(calculatePoints(120)).toBe(90);
  expect(calculatePoints(50)).toBe(0);
  expect(calculatePoints(100)).toBe(50);
});
