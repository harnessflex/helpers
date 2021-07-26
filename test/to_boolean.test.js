const { to_boolean } = require('../lib');
const BooleanCastError = require('../lib/Error/BooleanCastError');

describe('Test the to_boolean helper method.', () => {

  test('Should return true', (done) => {
    expect(to_boolean(true)).toBe(true);
    expect(to_boolean('true')).toBe(true);
    expect(to_boolean(1)).toBe(true);

    done();
  });

  test('Should return false', (done) => {
    expect(to_boolean(false)).toBe(false);
    expect(to_boolean('false')).toBe(false);
    expect(to_boolean(0)).toBe(false);

    done();
  });

  test('Should throw an error if the value cannot be converted', (done) => {
    expect(() => {
      to_boolean(null);
    }).toThrow(BooleanCastError);

    done();
  });

});