const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.inRange()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.inRange()', _.inRange);

if (!_.inRange) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'Uses end value as start value and start value as 0 if end value is not defined', '_.inRange(1, 2)', _.inRange(1, 2), true);
assert.equals(TEST_NAME, 'Reverses start and end values if start is bigger than end', '_.inRange(3, 4, 2)', _.inRange(3, 4, 2), true);
assert.equals(TEST_NAME, 'Returns true if an in-range value is in range', '_.inRange(2, 1, 3)', _.inRange(2, 1, 3), true);
assert.equals(TEST_NAME, 'Returns false if a too small value is out of range', '_.inRange(0, 1, 3)', _.inRange(0, 1, 3), false);
assert.equals(TEST_NAME, 'Returns false if a too large value is out of range', '_.inRange(4, 1, 3)', _.inRange(4, 1, 3), false);
assert.equals(TEST_NAME, 'Returns true if provided value is same as start value', '_.inRange(0, 1, 3)', _.inRange(1, 1, 3), true);
assert.equals(TEST_NAME, 'Returns false if provided value is same as end value', '_.inRange(4, 1, 3)', _.inRange(3, 1, 3), false);

assert.endTestBlock();