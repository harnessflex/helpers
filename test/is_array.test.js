const { is_array } = require('../lib');

describe('Test the is_array helper method.', () => {

  test('Should return true if object is an array', (done) => {
    expect(is_array([])).toBe(true);

    done();
  });

  test('Should return false if object is not an array', (done) => {
    expect(is_array({})).toBe(false);

    done();
  });

});