/* jslint node: true */
/* global describe, it, expect */

var Liquify = require('../lib/liquify.js');

describe('LiquifyJS', function () {

  var templates = {
    template_1: 'hello {{ name }}'
  };

  // Geting started
  it('returns the liquify object when instatiated', function () {
    // check something funky is not going on, ie errors
    var liquify = new Liquify();
    expect(typeof liquify).toBe('object');
  });

  it('accepts an optional object of templates on instantiation', function () {
    var liquify = new Liquify({
      templates: templates
    });
    
    expect(liquify.templates.template_1).toBe('hello {{ name }}');
  });

  it('accepts an optional data on instantiation', function () {
    var liquify = new Liquify({
      templates: templates,
      data: {
        name: 'liquify'
      }
    });
    
    expect(liquify.data.name).toBe('liquify');
  });
  
  // Default settings
  it('has a sensible set of default settings', function () {
    expect(Liquify.Defaults.active_class).toBe('is-active');
    expect(Liquify.Defaults.data_attrs.target).toBe('data-lqfy-target');
    expect(Liquify.Defaults.data_attrs.template).toBe('data-lqfy-template');
  });
  
  it('uses these default settings', function () {
    var liquify = new Liquify();
    expect(liquify.settings.active_class).toBe('is-active');
    expect(liquify.settings.data_attrs.target).toBe('data-lqfy-target');
    expect(liquify.settings.data_attrs.template).toBe('data-lqfy-template');
  });
  
  xit('can have these default settings overridden', function () {
    var liquify = new Liquify({
      settings: {
        active_class: 'is-current',
        data_attrs: {
          target: 'data-nav-target'
        }
      }
    });
    expect(liquify.settings.active_class).toBe('is-current');
    expect(liquify.settings.data_attrs.target).toBe('data-nav-target');
    expect(liquify.settings.data_attrs.template).toBe('data-lqfy-template');
  });
  
});