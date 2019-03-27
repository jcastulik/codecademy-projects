const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (end == null) {
      end = start;
      start = 0;
    } else if (start > end) {
      const temp = end
      end = start
      start = temp
    };
    const isInRange = Boolean(start<=number && number<end);
    return isInRange;
  },

  words(string) {
    const words = string.split(' ');
    return words;
  },

  pad(string, length) {
    if (string.length >= length) {
      return string;
    };
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },

  has(object, key) {
    const hasValue = object[key] !== undefined;
    return hasValue;
  },

  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = key;
      invertedObject = {originalValue: key}
    }
  	return invertedObject
  },

  findKey(object, predicate) {
    for (let key in object) {
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      }
    } return undefined;
  },

  drop(array, number) {
    if (number == null) {
      number = 1;
    };
    const droppedArray = array.slice(number);
    return droppedArray;
  },

  dropWhile(array, predicate) {
    const dropNumber = array.findIndex((element,index) => {return !predicate(element,index,array)});
  	const droppedArray = this.drop(array, dropNumber);
		return droppedArray;
  },

  chunk(array,size) {
    if (size == null) {
      size = 1;
    };
    const arrayChunks = [];
    for (let i =0; i<array.length; i+size) {
      const arrayChunk = array.slice(i);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunk;
  }
};


// Do not write or modify code below this line.
module.exports = _;
