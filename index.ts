type generateRandomStringSignature = (length: number) => string;

/**
  Generate random string
  @param {number} length - length of the string
  @returns {string} - random string
  
  @example
  generateRandomString(10) // 'aBcDeFgHiJ'
*/
export const generateRandomString: generateRandomStringSignature = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

type generateRandomChineseSignature = (length: number) => string;

/**
  Generate random Chinese characters
  @param {number} length - length of the string
  @returns {string} - random Chinese characters
 
  @example
  generateRandomChinese(10) // '你好世界你好世界世界'
*/
export const generateRandomChinese: generateRandomChineseSignature = (length) => {
    let result = '';

    for (let i = 0; i < length; i += 1) {
        const unicode = Math.floor(Math.random() * (0x9fff - 0x4e00 + 1)) + 0x4e00;
        result += String.fromCharCode(unicode);
    }

    return result;
};
