/**
 * 
 * @param {Function} callback 
 * @returns {any} callback function return value
 */
const timeTaken = (callback) => {
  console.time('timeTaken');
  const result = callback();
  console.timeEnd('timeTaken');
  return result;
};

module.exports.timeTaken = timeTaken;