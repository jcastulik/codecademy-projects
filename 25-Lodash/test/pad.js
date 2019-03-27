const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.pad()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.pad()', _.pad);

if (!_.pad) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'Returns strings longer than provided length un-padded', '_.pad("hello", 4)', _.pad("hello", 4), "hello");
assert.equals(TEST_NAME, 'Returns evenly-padded strings', '_.pad("hi", 6)', _.pad("hi", 6), "  hi  ");
assert.equals(TEST_NAME, 'Returns oddly-padded strings with extra padding on right side', '_.pad("hi", 5)', _.pad("hi", 5), " hi  ");

assert.endTestBlock();