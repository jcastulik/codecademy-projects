const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.chunk()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.chunk()', _.chunk);

if (!_.chunk) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'Returns an array', '_.chunk([1, 2, 3, 4], 2)', Object.prototype.toString.call(_.chunk([1, 2, 3, 4], 2)), '[object Array]');

if (Object.prototype.toString.call(_.chunk([1, 2, 3, 4], 2)) !== '[object Array]') {
  assert.terminateTestBlock();
  return;
}

assert.arrayEquals(TEST_NAME, 'Chunks evenly-divided arrays', '_.chunk([1, 2, 3, 4], 2)', _.chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
assert.arrayEquals(TEST_NAME, 'Chunks unevenly-divided arrays', '_.chunk([1, 2, 3, 4, 5], 2)', _.chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);

assert.endTestBlock();