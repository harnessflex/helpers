const { isString } = require('../lib');

describe('Test the isString helper method.', () => {

  test('Should return true if object is a valid string', (done) => {
    expect(isString('Hello world')).toBe(true);

    done();
  });

  test('Should return false if object is not a valid string', (done) => {
    expect(isString(null)).toBe(false);

    done();
  });

});