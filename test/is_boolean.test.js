const { is_boolean } = require('../lib');

describe('Test the is_boolean helper method.', () => {

  test('Should return true if object is boolean', (done) => {
    expect(is_boolean(true)).toBe(true);

    done();
  });

  test('Should return false if object is not a boolean', (done) => {
    expect(is_boolean({})).toBe(false);

    done();
  });

});