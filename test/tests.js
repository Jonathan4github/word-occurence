import { assert } from 'chai';
import word from '../src/main';

describe('Word occourence', () => {
  describe('Check for invalid input', () => {
    it('should returnEnter a string of words for undefined input ', () => {
      assert.equal(word(), 'Enter a string of words');
    });
    it('should return Input must be string for number', () => {
      assert.equal(word(2), 'Input must be string');
    });
    it('should return Input must be string for array', () => {
      assert.equal(word(['letter', 2]), 'Input must be string');
    });
    it('should return Input must be string for object', () => {
      assert.equal(word({ 'letter': 'a' }), 'Input must be string');
    });
  });
});
