import { numberWithCommas, percentNumber } from './index';

describe('number with commas', () => {
  test('1000000.123123123 should be 100,000.12312', () => {
    expect(numberWithCommas(100000.123123123)).toBe('100,000.12312');
  });

  test('0.00055 should be 0.00055', () => {
    expect(numberWithCommas(0.00055)).toBe('0.00055');
  });

  test('-123456.123123123 should be -123,456.12345', () => {
    expect(numberWithCommas(-123456.123123123)).toBe('-123,456.12312');
  });
});

describe('percent number', () => {
  test('108.5548045841904 shoud be +108.55%', () => {
    expect(percentNumber(108.5548045841904)).toBe('+108.55%');
  });

  test('-14 shoud be -14%', () => {
    expect(percentNumber(-14)).toBe('-14%');
  });
});
