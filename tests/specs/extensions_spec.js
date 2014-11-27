/* jslint node: true */
/* global describe, it, expect */

require('../../lib/liquify/extensions.js');

describe('lqfy', function () {

  describe('.extend', function () {
    
    it('returns an object made from two others', function () {
      var objA = {
        a: 'a',
        b: 'b',
        c: 'c'
      };
      var objB = {
        moose: 'moose',
        monkey: { banana: true },
        c: 'weasel'
      };
      var objC = {
        a: 'a',
        b: 'b',
        c: 'weasel',
        moose: 'moose',
        monkey: { banana: true }
      };
      
      expect(lqfy.extend(objA, objB)).toEqual(objC);
    });
    
    it('recurses', function () {
      var objA = {
        a: {
          b: 'b',
          moose: 'moose',
          monkey: 'monkey'
        }
      };
      var objB = {
        a: {
          b: { c: 'c' },
          monkey: 'myMonkey',
          weasel: 'weasel'
        }
      };
      var objC = {
        a: {
          b: { c: 'c' },
          moose: 'moose',
          monkey: 'myMonkey',
          weasel: 'weasel'
        }
      };
      
      expect(lqfy.extend(objA, objB)).toEqual(objC);
    });
    
  });
  
});