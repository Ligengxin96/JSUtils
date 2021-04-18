/**
 * 
 * @param {Array} ary 
 * @param {Function} fn 
 * @returns {Boolean} whether all elements that pass the test implemented by the provided function
 */
const all = (ary, fn) => ary.every(fn);

/**
 * 
 * @param {Array} ary 
 * @returns {Boolean} whether all elements are equal
 */
const allEqual = ary => ary.every(val => val === ary[0]);

/**
 * 
 * @param {Array} ary
 * @returns {Array} return flatted 1d array
 */
const deepFlatten = ary => [].concat(...ary.map(item => (Array.isArray(item) ? deepFlatten(item) : item)));

/**
 * 
 * @param {Array | Number} nums 
 * @returns {Number} return input values average
 */
const average = (...nums) => {
  const falttedAry = deepFlatten(nums);
  return falttedAry.reduce((acc, val) => acc + val, 0) / falttedAry.length;
}

/**
 * 
 * @param {Array} ary 
 * @param {Number | string | Boolean} val 
 * @returns {Number} occurrence of target value
 */
const countOccurrence = (ary, val) => ary.reduce((pre, current) => (current === val ? pre + 1 : pre), 0);

/**
 * 
 * @param {Array} a 
 * @param {Array} b 
 * @returns {Array} an array for elements in a array that are different from the b array
 */
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

/**
 * 
 * @param {Array} ary 
 * @param {Number | string | Boolean} val 
 * @returns {Array} an array for value index in source array
 */
const indexOfAll = (ary, val) => ary.reduce((pre, current, index) => (current === val ? [...pre, index] : pre), []);

/**
 * 
 * @param {Array} a 
 * @param {Array} b 
 * @returns {Array} an array for elements both in a array and in b array
 */
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

/**
 * 
 * @param {Number} min
 * @param {Number} max 
 * @param {Number} n 
 * @returns {Array} an array with n length for elements all not smaller then min and and not bigger then max
 */
const randomIntArrayInRange = (min, max, n = 1) => {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp
  }
  return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

/**
 * 
 * @param {Array} items 
 * @param {Number} id 
 * @param {String} link 
 * @returns {Array} an tree construct array 
 */
const nest = (items, id = null, link = 'parentId') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));

module.exports.all = all;
module.exports.allEqual = allEqual;
module.exports.deepFlatten = deepFlatten;
module.exports.average = average;
module.exports.countOccurrence = countOccurrence;
module.exports.difference = difference;
module.exports.indexOfAll = indexOfAll;
module.exports.intersection = intersection;
module.exports.randomIntArrayInRange = randomIntArrayInRange;
module.exports.nest = nest;