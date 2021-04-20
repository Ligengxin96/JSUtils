const stringUtils = require('../src/String');
const assert = require('assert');

describe('test-stringUtils', function() {
  describe(`test 'capitalize' function`, function() {
    it(`should return empty string`, function() {
      const result = stringUtils.capitalize(''); 
      assert.strictEqual(result, '');
    });

    it(`should return 'FooBar'`, function() {
      const result = stringUtils.capitalize('fooBar');
      assert.strictEqual(result, 'FooBar');
    });

    it(`should return 'Barfoo'`, function() {
      const result = stringUtils.capitalize('Barfoo');
      assert.strictEqual(result, 'Barfoo');
    });

    it(`should return 'A'`, function() {
      const result = stringUtils.capitalize('A');
      assert.strictEqual(result, 'A');
    });

    it(`should return 'B'`, function() {
      const result = stringUtils.capitalize('b');
      assert.strictEqual(result, 'B');
    });
  });

  describe(`test 'decapitalize' function`, function() {
    it(`should return empty string`, function() {
      const result = stringUtils.decapitalize(''); 
      assert.strictEqual(result, '');
    });

    it(`should return 'fooBar'`, function() {
      const result = stringUtils.decapitalize('FooBar');
      assert.strictEqual(result, 'fooBar');
    });

    it(`should return 'barFoo'`, function() {
      const result = stringUtils.decapitalize('barFoo');
      assert.strictEqual(result, 'barFoo');
    });

    it(`should return 'a'`, function() {
      const result = stringUtils.decapitalize('A');
      assert.strictEqual(result, 'a');
    });

    it(`should return 'b'`, function() {
      const result = stringUtils.decapitalize('B');
      assert.strictEqual(result, 'b');
    });
  });

  describe(`test 'capitalizeEveryWord' function`, function() {
    it(`should return empty string`, function() {
      const result = stringUtils.capitalizeEveryWord(''); 
      assert.strictEqual(result, '');
    });

    it(`should return 'A'`, function() {
      const result = stringUtils.capitalizeEveryWord('A');
      assert.strictEqual(result, 'A');
    });

    it(`should return 'FooBar'`, function() {
      const result = stringUtils.capitalizeEveryWord('fooBar');
      assert.strictEqual(result, 'FooBar');
    });

    it(`should return 'Barfoo'`, function() {
      const result = stringUtils.capitalizeEveryWord('Barfoo');
      assert.strictEqual(result, 'Barfoo');
    });

    it(`should return 'Hello World!'`, function() {
      const result = stringUtils.capitalizeEveryWord('hello world!'); 
      assert.strictEqual(result, 'Hello World!');
    });

    it(`should return 'Hello The World!'`, function() {
      const result = stringUtils.capitalizeEveryWord('hello github!'); 
      assert.strictEqual(result, 'Hello Github!');
    });
  });
});