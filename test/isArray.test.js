const { isArray } = require('../lib');

describe('Test the isArray helper method.', () => {

  test('Should return true if object is an array', (done) => {
    expect(isArray([])).toBe(true);

    done();
  });

  test('Should return false if object is not an array', (done) => {
    expect(isArray({})).toBe(false);

    done();
  });

});