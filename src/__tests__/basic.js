import { calculateTotal } from '../calculate';

test('basic test', () => {
    const result = 4;
    expect(result).toBe(4);
});

test('calculateTotal sum', () => {
  const list = [
    {
        id: 456,
        name: 'Война и мир',
        count: 3,
        price: 400,
    },
    {
        id: 77,
        name: 'JS',
        count: 1,
        price: 1200,
    },
  ];
  const result = calculateTotal(list);
  expect(result).toBe(2400);
});
