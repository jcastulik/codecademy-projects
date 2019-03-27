const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.dropWhile()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.dropWhile()', _.dropWhile);

if (!_.dropWhile) {
  assert.terminateTestBlock();
  return;
}

const indexIsSmallerThanElement = (element, index) => index < element;

assert.equals(TEST_NAME, 'Returns an array', '_.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement)', Object.prototype.toString.call(_.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement)), '[object Array]');

if (Object.prototype.toString.call(_.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement)) !== '[object Array]') {
  assert.terminateTestBlock();
  return;
}

assert.arrayEquals(TEST_NAME, 'Drops elements until predicate function returns falsy', "_.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement", _.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement), [0, 4]);

assert.endTestBlock();