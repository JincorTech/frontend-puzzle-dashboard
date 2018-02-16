import numeral from 'numeral';

export const numberWithCommas = (x) => numeral(x).format('0,0.[00000]');
export const percentNumber = (x) => {
  if (x < 0) {
    return numeral(x / 100).format('0.[00]%');
  }

  return numeral(x / 100).format('+0.[00]%');
};
