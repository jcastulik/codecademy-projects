const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.drop()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.drop()', _.drop);

if (!_.drop) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'Returns an array', '_.drop(["hi", "bye"])', Object.prototype.toString.call(_.drop(["hi", "bye"])), '[object Array]');

if (Object.prototype.toString.call(_.drop(["hi", "bye"])) !== '[object Array]') {
  assert.terminateTestBlock();
  return;
}

assert.arrayEquals(TEST_NAME, 'Drops one element if no number is specified', '_.drop(["hi", "bye"])', _.drop(["hi", "bye"]), ["bye"]);
assert.arrayEquals(TEST_NAME, 'Drops the specified number of elements from the beginning of an array', '_.drop(["hi", "okay", "yes", "bye"], 2)', _.drop(["hi", "okay", "yes", "bye"], 2), ["yes", "bye"]);

assert.endTestBlock();