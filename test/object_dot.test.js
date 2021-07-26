const { object_dot } = require('../lib');

const object = {
  test: {
    string: 'Hello world'
  }
};

describe('Test the object_dot helper method', () => {

  test('Should return Hello world', (done) => {
    expect(object_dot(object, 'test.string')).toBe('Hello world');

    done();
  });

  test('Should return null if the key does not exist', (done) => {
    expect(object_dot(object, 'test.string2')).toBe(null);

    done();
  });

  test('Should throw an error if the object is not a valid object', (done) => {
    expect(() => {
      object_dot(null, 'test.string');
    }).toThrow(TypeError);

    done();
  });

  test('Should throw an error if the key is not a valid string notation', (done) => {
    expect(() => {
      object_dot(object, null);
    }).toThrow(TypeError);

    done();
  });

});