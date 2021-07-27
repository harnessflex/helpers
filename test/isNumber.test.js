const { isNumber } = require('../lib');

describe('Test the isNumber helper method.', () => {

  test('Should return true if object is a number', (done) => {
    expect(isNumber(1)).toBe(true);

    done();
  });

  test('Should return false if object is not a number', (done) => {
    expect(isNumber({})).toBe(false);

    done();
  });

});