const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.findKey()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.findKey()', _.findKey);

if (!_.findKey) {
  assert.terminateTestBlock();
  return;
}

const startsWithV = string => string.startsWith('v');
assert.equals(TEST_NAME, 'Returns the corresponding key of a value that returns truthy from the predicate function', '_.findKey({"key": "value"}, startsWithV)', _.findKey({"key": "value"}, startsWithV), "key");
assert.equals(TEST_NAME, 'Returns undefined if an object has no values that return truthy from the predicate function', '_.findKey({"key": "notValue"}, startsWithV)', _.findKey({"key": "notValue"}, startsWithV), undefined);

assert.endTestBlock();