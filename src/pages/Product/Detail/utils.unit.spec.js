import { calculateAverageRate } from './utils';

describe('Product Detail Utils', () => {
  describe('calculateAvarageRate function', () => {
    test('calculateAverageRate: Should round number correctly', () => {
      expect(calculateAverageRate([{ rate: 4.6 }])).toEqual(5);
    });
    test('calculateAverageRate: Should calculate average rate and round correctly', () => {
      expect(calculateAverageRate([{ rate: 4 }, { rate: 1 }])).toEqual(3);
    });
  });
});
