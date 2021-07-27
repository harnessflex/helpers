const { isFunction } = require('../lib');

describe('Test the isFunction helper method.', () => {

  test('Should return true if object is a function', (done) => {
    const func = () => {
      console.log('this is a function');
    }

    expect(isFunction(func)).toBe(true);

    done();
  });

  test('Should return false if object is not a function', (done) => {
    expect(isFunction({})).toBe(false);

    done();
  });

});