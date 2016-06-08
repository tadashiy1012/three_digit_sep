const assert = require('power-assert');
const sepalator = require('../index.js');

describe('three_digit_sep test', () => {
  it('Pattern of arguments expected', () => {
    const num = 1234567890;
    const result = sepalator(num);
    assert(result !== undefined);
    assert(result === '1,234,567,890');
  });
  it('Pattern of arguments expected B', () => {
    const num = '01234567890';
    const result = sepalator(num);
    assert(result !== undefined);
    assert(result === '1,234,567,890');
  });
  it('Failure pattern', () => {
    try {
      const num = Number.POSITIVE_INFINITY;
      sepalator(num);
    } catch(e) {
      assert(e.message === 'Invalid argument');
    }
    try {
      sepalator('hogehoge');
    } catch(e) {
      assert(e.message === 'Invalid argument');
    }
  });
});