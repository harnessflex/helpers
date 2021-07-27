const { isBoolean } = require('../lib');

describe('Test the isBoolean helper method.', () => {

  test('Should return true if object is boolean', (done) => {
    expect(isBoolean(true)).toBe(true);

    done();
  });

  test('Should return false if object is not a boolean', (done) => {
    expect(isBoolean({})).toBe(false);

    done();
  });

});