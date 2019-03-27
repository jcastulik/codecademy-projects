const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.words()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.words()', _.words);

if (!_.words) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'Returns an array', '_.words("hi ho")', Object.prototype.toString.call(_.words("hi ho")), '[object Array]');

if (Object.prototype.toString.call(_.words("hi ho")) !== '[object Array]') {
  assert.terminateTestBlock();
  return;
}

assert.arrayEquals(TEST_NAME, 'Returns an array of words from a string with one word', '_.words("hi")', _.words("hi"), ["hi"]);
assert.arrayEquals(TEST_NAME, 'Returns an array of words from a string with two words', '_.words("hi there")', _.words("hi there"), ["hi", "there"]);
assert.arrayEquals(TEST_NAME, 'Returns an array of words from a string with three words', '_.words("hi there you")', _.words("hi there you"), ["hi", "there", "you"]);

assert.endTestBlock();