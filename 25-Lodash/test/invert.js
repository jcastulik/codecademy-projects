const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.invert()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.invert()', _.invert);

if (!_.invert) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'Returns an object with all keys and values inverted', '_.invert({originalKey: "originalValue"})["originalValue"])', _.invert({originalKey: "originalValue"})['originalValue'], 'originalKey');
assert.equals(TEST_NAME, 'Returns an object with all keys and values inverted', '_.invert({originalKey: "originalValue"})["originalKey"])', _.invert({originalKey: "originalValue"})['originalKey'], undefined);

assert.endTestBlock();