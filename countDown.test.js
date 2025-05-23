const countDown = require('./countDown');

describe('countDown', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('prints 3 2 1 when input is 3', () => {
    countDown(3);
    expect(console.log.mock.calls).toEqual([[3], [2], [1]]);
  });

  test('throws error when input is 0', () => {
    expect(() => countDown(0)).toThrow("Invalid input");
  });

  test('throws error when input is a string', () => {
    expect(() => countDown("abc")).toThrow("Invalid input");
  });
});
