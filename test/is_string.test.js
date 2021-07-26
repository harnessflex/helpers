const { is_string } = require('../lib');

describe('Test the is_string helper method.', () => {

  test('Should return true if object is a valid string', (done) => {
    expect(is_string('Hello world')).toBe(true);

    done();
  });

  test('Should return false if object is not a valid string', (done) => {
    expect(is_string(null)).toBe(false);

    done();
  });

});