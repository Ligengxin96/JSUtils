/**
 * 
 * @param {String} str
 * @returns {String} a string with the first letter in uppercase
 */
const capitalize = ([first, ...rest]) => {
  if (!first) {
    return '';
  }
  return first.toUpperCase() + rest.join('');
}

/**
 * 
 * @param {String} str
 * @returns {String} a string with the first letter in lowercase
 */
 const decapitalize = ([first, ...rest]) => {
  if (!first) {
    return '';
  }
  return first.toLowerCase() + rest.join('');
}

/**
 * 
 * @param {String} str 
 * @returns a string with the first letter of each word in uppercase
 */
const capitalizeEveryWord = (str) => {
  return str.replace(/\b[a-z]/g, word => word.toUpperCase());
}

module.exports.capitalize = capitalize;
module.exports.decapitalize = decapitalize;
module.exports.capitalizeEveryWord = capitalizeEveryWord;