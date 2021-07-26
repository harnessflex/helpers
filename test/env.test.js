const { env } = require('../lib');

describe('Test the env helper method.', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  test('Should return harness', (done) => {
    // Set environment variable.
    process.env.APP_NAME = 'Harness';
  
    expect(env('APP_NAME')).toBe('Harness');

    done();
  });

  test('Should return null if env is not present', (done) => {
    expect(env('RANDOM_ENV_NAME')).toBe(null);

    done();
  });

  test('Should return default "harness" if env is not present', (done) => {
    expect(env('RANDOM_ENV_NAME', 'harness')).toBe('harness');

    done();
  });

  test('Should throw an error if the env key is not a valid string', (done) => {
    expect(() => {
      env({});
    }).toThrow(TypeError);

    done();
  });

});