const { dot_notation } = require('../lib');

const object = {
  test: {
    string: 'Hello world'
  }
};

describe('Test the dot_notation helper method', () => {

  test('Should return Hello world', (done) => {
    expect(dot_notation(object, 'test.string')).toBe('Hello world');

    done();
  });

  test('Should return null if the key does not exist', (done) => {
    expect(dot_notation(object, 'test.string2')).toBe(null);

    done();
  });

  test('Should throw an error if the object is not a valid object', (done) => {
    expect(() => {
      dot_notation(null, 'test.string');
    }).toThrow(TypeError);

    done();
  });

  test('Should throw an error if the key is not a valid string notation', (done) => {
    expect(() => {
      dot_notation(object, null);
    }).toThrow(TypeError);

    done();
  });

});