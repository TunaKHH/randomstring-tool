const { generateRandomString, generateRandomChinese } = require('../dist/index');

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

describe('generateRandomChinese', () => {
    test('returns a string of the correct length', () => {
        expect(generateRandomChinese(10).length).toBe(10);
    });
    test('returns a different string each time', () => {
        const str1 = generateRandomChinese(10);
        const str2 = generateRandomChinese(10);
        expect(str1).not.toBe(str2);
    });
});
