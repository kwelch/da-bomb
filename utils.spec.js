import {generateRandomNumber} from './utils';

describe('generateRandomNumber', () => {
  it('should generate a number between the min and max', () => {
    const actual = generateRandomNumber(0, 1);
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(1);
  })

  it('should generate an integer', () => {
    const actual = generateRandomNumber(0, 100);
    expect(actual % 1).toBe(0);
  });
});