const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.clamp()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.clamp()', _.clamp);

if (!_.clamp) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'Returns in-range values unmodified', '_.clamp(2, 1, 3)', _.clamp(2, 1, 3), 2);
assert.equals(TEST_NAME, 'Clamps values by lower bound', '_.clamp(0, 1, 3)', _.clamp(0, 1, 3), 1);
assert.equals(TEST_NAME, 'Clamps values by upper bound', '_.clamp(5, 1, 3)', _.clamp(5, 1, 3), 3);

assert.endTestBlock();