const { is_number } = require('../lib');

describe('Test the is_number helper method.', () => {

  test('Should return true if object is a number', (done) => {
    expect(is_number(1)).toBe(true);

    done();
  });

  test('Should return false if object is not a number', (done) => {
    expect(is_number({})).toBe(false);

    done();
  });

});