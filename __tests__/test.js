const { generateRandomString } = require('../index');


describe('generateRandomString', () => {
  test('returns a string of the correct length', () => {
    expect(generateRandomString(10).length).toBe(10);
  });
  test('returns a different string each time', () => {
    const str1 = generateRandomString(10);
    const str2 = generateRandomString(10);
    expect(str1).not.toBe(str2);
  });
});