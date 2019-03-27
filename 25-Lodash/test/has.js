const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.has()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.has()', _.has);

if (!_.has) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'Returns true if an object has a value at a specified key', '_.has({"key": "value"}, "key")', _.has({"key": "value"}, "key"), true);
assert.equals(TEST_NAME, 'Returns false if an object does not have a value at a specified key', '_.has({"key": "value"}, "notKey")', _.has({"key": "value"}, "notKey"), false);

assert.endTestBlock();