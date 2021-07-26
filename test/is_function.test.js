const { is_function } = require('../lib');

describe('Test the is_function helper method.', () => {

  test('Should return true if object is a function', (done) => {
    const func = () => {
      console.log('this is a function');
    }

    expect(is_function(func)).toBe(true);

    done();
  });

  test('Should return false if object is not a function', (done) => {
    expect(is_function({})).toBe(false);

    done();
  });

});