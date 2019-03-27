const assert = {
  testBlockTestCounts: {},

  beginTestBlock(testName) {
    this.testBlockTestCounts[testName] = 0;
    console.log(`${testName} Tests:`);
    // console.group(); - Not currently supported by LE Node version
  },

  endTestBlock() {
    // console.groupEnd(); - Not currently supported by LE Node version
  },

  terminateTestBlock() {
    console.log('Terminating tests...');
    this.endTestBlock();
  },

  incrementTestNumber(testName) {
    this.testBlockTestCounts[testName] += 1;
    return this.testBlockTestCounts[testName];
  },

  exists(testName, functionString, value) {
    const testNumber = this.incrementTestNumber(testName);

    if (value) {
      console.log("\x1b[32m%s\x1b[0m", `${testNumber} - ${functionString} is defined - Passed!`);
    } else {
      console.log("\x1b[31m%s\x1b[0m", `${testNumber} - ${functionString} is defined - Failed: ${functionString} was not properly defined.`);
    }
  },

  equals(testName, description, functionString, actualValue, expectedValue) {
    const testNumber = this.incrementTestNumber(testName);

    if (actualValue === expectedValue) {
      console.log("\x1b[32m%s\x1b[0m", `${testNumber} - ${description} - Passed!`);
    } else {
      console.log("\x1b[31m%s\x1b[0m", `${testNumber} - ${description} - Failed: ${functionString} returned ${actualValue} instead of ${expectedValue}.`);
    }
  },

  arrayEquals(testName, description, functionString, actualValue, expectedValue) {
    const testNumber = this.incrementTestNumber(testName);

    if (arraysAreEqual(actualValue, expectedValue)) {
      console.log("\x1b[32m%s\x1b[0m", `${testNumber} - ${description} - Passed!`);
    } else {
      console.log("\x1b[31m%s\x1b[0m", `${testNumber} - ${description} - Failed: ${functionString} returned ${arrayToString(actualValue)} instead of ${arrayToString(expectedValue)}.`);
    }
  },
};

function arrayToString(array) {
  return `[ ${array.join(', ')} ]`;
}

function arraysAreEqual(array1, array2) {
  const sortedArray2 = array2.sort();
  return array1.length === array2.length && 
      array1.sort().every((array1value, index) => {
        array2Value = sortedArray2[index];
        if (isArray(array1value) && isArray(array2Value)) {
          return arraysAreEqual(array1value, array2Value);
        } else {
          return array1value === array2Value;
        }
      });
}

function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]';
}

module.exports = assert;