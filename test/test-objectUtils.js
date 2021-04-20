const objectUtils = require('../src/Object');
const assert = require('assert');

describe('test-objectUtils', function() {
  describe(`test 'flattenObject' function`, function() {
    it('should return a empty object', function() {
      const result = objectUtils.flattenObject({});
      assert.deepStrictEqual(result, {});
    });

    it('should return a flattened object', function() {
      const result = objectUtils.flattenObject({ a: { b: { c: 1 } }, d: 1 });
      assert.deepStrictEqual(result, { 'a.b.c': 1, d: 1 });
    });

    it('should throw an excpetion', function() {
      try {
        objectUtils.flattenObject({ a: { b: { c: [1] } }, d: 1 });
      } catch (error) {
        assert.strictEqual(error.message, 'do not support an array property');
      }
    });
  });

  describe(`test 'unflattenObject' function`, function() {
    it('should return a empty object', function() {
      const result = objectUtils.unflattenObject({});
      assert.deepStrictEqual(result, {});
    });

    it('should return a floded object', function() {
      const result = objectUtils.unflattenObject({ 'a.b.c': 1, d: 1 });
      assert.deepStrictEqual(result, { a: { b: { c: 1 } }, d: 1 });
    });
  });

  describe(`test 'deepEquals' function`, function() {
    it('should return true when two objects are empty object', function() {
      const result = objectUtils.deepEquals({}, {});
      assert.strictEqual(result, true);
    });
  });

  describe(`test 'deepEquals' function`, function() {
    it('should return true when two objects are equal', function() {
      const result = objectUtils.deepEquals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' });
      assert.strictEqual(result, true);
    });
  });

  describe(`test 'deepEquals' function`, function() {
    it('should return false when two objects are not equal ', function() {
      const result = objectUtils.deepEquals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'bar' });
      assert.strictEqual(result, false);
    });
  });
});
