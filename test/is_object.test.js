const { is_object } = require('../lib');

describe('Test the is_object helper method.', () => {

  test('Should return true if object is a valid object', (done) => {
    expect(is_object({})).toBe(true);

    done();
  });

  test('Should return false if object is not a valid object', (done) => {
    expect(is_object(null)).toBe(false);

    done();
  });

});