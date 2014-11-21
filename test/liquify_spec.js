/* jslint node: true */
/* global describe, it, expect */

var Liquify = require('../lib/liquify.js');

describe('LiquifyJS', function () {

  var templates = {
    template_1: 'hello {{ name }}'
  };

  it('returns the liquify object when instatiated', function () {
    // check something funky is not going on, ie errors
    var liquify = new Liquify();
    expect(typeof liquify).toBe('object');
  });

  it('it accepts an optional object of templates on instantiation', function () {
    var liquify = new Liquify({
      templates: templates
    });
    
    expect(liquify.templates.template_1).toBe('hello {{ name }}');
  });

  it('it accepts an optional data on instantiation', function () {
    var liquify = new Liquify({
      templates: templates,
      data: {
        name: 'liquify'
      }
    });
    
    expect(liquify.data.name).toBe('liquify');
  });
  
});