/**
 * Generate random string
 * @param {Int} length - length of the string
 * @returns {String} - random string
 * @example
 * generateRandomString(10) // 'aBcDeFgHiJ'
 */
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Generate random Chinese characters
 * @param {Int} length - length of the string
 * @returns {String} - random Chinese characters
 * @example
 * generateRandomChinese(10) // '你好世界你好世界世界'
 */

function generateRandomChinese(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const unicode = Math.floor(Math.random() * (0x9FFF - 0x4E00 + 1)) + 0x4E00;
    result += String.fromCharCode(unicode);
  }
  return result;
}

module.exports = {
  generateRandomString,
  generateRandomChinese,
};
