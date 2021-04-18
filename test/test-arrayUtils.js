const arrayUtils = require('../src/Array');
const assert = require('assert');

describe('test-arrayUtils', function() {
  describe(`test 'all' function`, function() {
    it('should return true when not provided function', function() {
      const result = arrayUtils.all([2, 3, 4], x => x > 1);
      assert.strictEqual(result, true);
    });

    it('should return true when all elements pass the test implemented by the provided function', function() {
      const result = arrayUtils.all([2, 3, 4], x => x > 1);
      assert.strictEqual(result, true);
    });

    it('should return false when some elements not pass the test implemented by the provided function', function() {
      const result = arrayUtils.all([2, 3, 4], x => x > 3);
      assert.strictEqual(result, false);
    });

  });

  describe("test 'allEqual' function", function() {
    it('should return true when all elements are equal', function() {
      const result = arrayUtils.allEqual([1, 1, 1]);
      assert.strictEqual(result, true);
    });

    it('should return true when array is empty', function() {
      const result = arrayUtils.allEqual([]);
      assert.strictEqual(result, true);
    });

    it('should return false when some elements are not equal', function() {
      const result = arrayUtils.allEqual([1, 2, 3]);
      assert.strictEqual(result, false);
    });
  });

  describe("test 'deepFlatten' function", function() {
    it('should return [1, 2, 3]', function() {
      const result = arrayUtils.deepFlatten([1, 2, 3]);
      assert.deepStrictEqual(result,  [1, 2, 3]);
    });

    it('should return [1, 2, 3, 4]', function() {
      const result = arrayUtils.deepFlatten([1, [2], [3, 4]]);
      assert.deepStrictEqual(result, [1, 2, 3, 4]);
    });

    it('should return [1, 2, 3, 4, 5, 6]', function() {
      const result = arrayUtils.deepFlatten([1, [2, [3]], [4], [5], 6]);
      assert.deepStrictEqual(result, [1, 2, 3, 4, 5, 6]);
    });

    it('should return []', function() {
      let result = arrayUtils.deepFlatten([]);
      assert.deepStrictEqual(result, []);
    });
  });

  describe("test 'average' function", function() {
    it('should return 1', function() {
      const result = arrayUtils.average([1, 1, 1]);
      assert.strictEqual(result, 1);
    });

    it('should return 2', function() {
      const result = arrayUtils.average([1, 2, 3]);
      assert.strictEqual(result, 2);
    });

    it('should return 3', function() {
      const result = arrayUtils.average(3, 4, 2);
      assert.strictEqual(result, 3);
    });
  });

  describe("test 'countOccurrence' function", function() {
    it('should return 1', function() {
      const result = arrayUtils.countOccurrence([1, 1, 2], 1);
      assert.strictEqual(result, 2);
    });

    it('should return 0', function() {
      const result = arrayUtils.countOccurrence([], 1);
      assert.strictEqual(result, 0);
    });
  });

  describe("test 'difference' function", function() {
    it('should return []', function() {
      let result = arrayUtils.difference([1, 2, 3], [1, 2, 3]);
      assert.deepStrictEqual(result, []);

      result = arrayUtils.difference([1, 3], [1, 2, 3]);
      assert.deepStrictEqual(result, []);
    });

    it('should return [3]', function() {
      const result = arrayUtils.difference([1, 1, 3], [1, 2, 4]);
      assert.deepStrictEqual(result, [3]);
    });

    it('should return [1, 1, 3, 4]', function() {
      const result = arrayUtils.difference([1, 1, 2, 3, 4], [2]);
      assert.deepStrictEqual(result, [1, 1, 3, 4]);
    });
  });

  describe("test 'difference' function", function() {
    it('should return []', function() {
      let result = arrayUtils.indexOfAll([1, 2, 3], 4);
      assert.deepStrictEqual(result, []);

      result = arrayUtils.indexOfAll([], 1);
      assert.deepStrictEqual(result, []);
    });

    it('should return [0, 3]', function() {
      const result = arrayUtils.indexOfAll([1, 2, 3, 1, 2, 3], 1);
      assert.deepStrictEqual(result, [0,3]);
    });
  });

  describe("test 'intersection' function", function() {
    it('should return []', function() {
      let result = arrayUtils.intersection([], []);
      assert.deepStrictEqual(result, []);

      result = arrayUtils.intersection([1, 2], [3, 4]);
      assert.deepStrictEqual(result, []);
    });

    it('should return [1, 2]', function() {
      const result = arrayUtils.intersection([1, 1, 2], [1, 2]);
      assert.deepStrictEqual(result, [1, 1, 2]);
    });
  });

  describe("test 'randomIntArrayInRange' function", function() {
    it('should return an arry that length is 10 and it elements all not smaller then 5 and not bigger then 1', function() {
      let result = arrayUtils.randomIntArrayInRange(5, 1, 10);
      assert.strictEqual(result.length, 10);
      let checkResult = result.every(num => num >= 1 && num <= 5);
      assert.strictEqual(checkResult, true);

      result = arrayUtils.randomIntArrayInRange(1, 5, 10);
      assert.strictEqual(result.length, 10);
      checkResult = result.every(num => num >= 1 && num <= 5);
      assert.strictEqual(checkResult, true);
    });
  });

  describe("test 'nest' function", function() {
    it('should return an tree construct array', function() {
      let data = [
        { id: 1, parentId: null },
        { id: 2, parentId: 1 },
        { id: 3, parentId: 1 },
        { id: 4, parentId: 2 },
        { id: 5, parentId: 4 }
      ];
      let result = arrayUtils.nest(data);
      assert.strictEqual(result.length, 1);
      assert.strictEqual(JSON.stringify(result), '[{"id":1,"parentId":null,"children":[{"id":2,"parentId":1,"children":[{"id":4,"parentId":2,"children":[{"id":5,"parentId":4,"children":[]}]}]},{"id":3,"parentId":1,"children":[]}]}]')
      
      data = [
        { id: 1, parentId: null },
        { id: 2, parentId: null }
      ];
      result = arrayUtils.nest(data);
      assert.strictEqual(result.length, 2);
      assert.strictEqual(JSON.stringify(result), '[{"id":1,"parentId":null,"children":[]},{"id":2,"parentId":null,"children":[]}]')
    });
  });
});
