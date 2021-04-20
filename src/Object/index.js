/**
 * 
 * @param {Object} obj 
 * @param {String} prefix 
 * @returns {Object} a flattened object
 */
 const flattenObject = (obj, prefix = '') =>
 Object.keys(obj).reduce((pre, current) => {
   prefix = prefix.length ? prefix + '.' : '';
   if (typeof obj[current] === 'object') {
     if (Array.isArray(obj[current])) {
       throw new Error('do not support an array property')
     }
     Object.assign(pre, flattenObject(obj[current], prefix + current));
   } else {
     pre[prefix + current] = obj[current] ;
   }
   return pre;
 }, {});

/**
 * 
 * @param {Object} obj 
 * @returns {Object} a folded object 
 */
const unflattenObject = (obj) => {
  return Object.keys(obj).reduce((pre, current) => {
    if (current.indexOf('.') !== -1) {
      const keys = current.split('.');
      Object.assign(
        pre,
        JSON.parse(
          '{'
            + keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') + obj[current] +
          '}'.repeat(keys.length)
        )
      );
    } else {
      pre[current] = obj[current];
    }
    return pre;
  }, {});
}

/**
 * 
 * @param {Object} a 
 * @param {Object} b 
 * @returns {Boolean} whether object a and object are definite equal
 */
const deepEquals = (a, b) => {
  if (a === b) {
    return true;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }
 
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')){
    return a === b;
  }

  if (a.prototype !== b.prototype) {
    return false;
  }

  return aKeys.every(current => deepEquals(a[current], b[current]));
};


module.exports.flattenObject = flattenObject;
module.exports.unflattenObject = unflattenObject;
module.exports.deepEquals = deepEquals;