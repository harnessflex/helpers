const { isObject } = require('../lib');

describe('Test the isObject helper method.', () => {

  test('Should return true if object is a valid object', (done) => {
    expect(isObject({})).toBe(true);

    done();
  });

  test('Should return false if object is not a valid object', (done) => {
    expect(isObject(null)).toBe(false);

    done();
  });

});