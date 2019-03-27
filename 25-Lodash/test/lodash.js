const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = 'Lodash Object';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_', _);

if (!_) {
  assert.terminateTestBlock();
  return;
}

assert.equals(TEST_NAME, 'The value of _ is an object', '_', Object.prototype.toString.call(_), '[object Object]');

assert.endTestBlock();