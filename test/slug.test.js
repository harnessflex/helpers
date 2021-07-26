const { slug } = require('../lib');

describe('Test the slug helper method.', () => {
  test('Should return hello-world', (done) => {
    expect(slug('hello world')).toBe('hello-world');

    done();
  });

  test('Should throw an error if the value is not a valid string', (done) => {
    expect(() => {
      slug({});
    }).toThrow(TypeError);

    done();
  });

  test('Should throw an error if the separator value is not a valid string', (done) => {
    expect(() => {
      slug('hello world', {});
    }).toThrow(TypeError);

    done();
  });

});