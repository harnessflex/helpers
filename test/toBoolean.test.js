const { toBoolean } = require('../lib');
const BooleanCastError = require('../lib/Error/BooleanCastError');

describe('Test the toBoolean helper method.', () => {

  test('Should return true', (done) => {
    expect(toBoolean(true)).toBe(true);
    expect(toBoolean('true')).toBe(true);
    expect(toBoolean(1)).toBe(true);

    done();
  });

  test('Should return false', (done) => {
    expect(toBoolean(false)).toBe(false);
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean(0)).toBe(false);

    done();
  });

  test('Should throw an error if the value cannot be converted', (done) => {
    expect(() => {
      toBoolean(null);
    }).toThrow(BooleanCastError);

    done();
  });

});