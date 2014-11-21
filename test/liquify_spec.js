/* jslint node: true */
/* global describe, it, expect */

var Liquify = require('../lib/liquify.js');

describe('LiquifyJS', function () {
  it('it returns its name', function () {
    var liquify = new Liquify();
    expect(liquify.say_hello()).toBe('hello liquify');
  });
});