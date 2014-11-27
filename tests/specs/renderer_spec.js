/* jslint node: true */
/* global describe, it, expect */

var Renderer = require('../../lib/liquify/renderer.js');
var DataObject = require('../../lib/liquify/data_object.js');

describe('Renderer', function () {
  
  var renderer;
  var data_obj;
  var templates = {
    var_1: 'hello {{ name }}'
  };
  
  var data = {
    name: 'liquify'
  };
  
  beforeEach(function () {
    renderer = new Renderer(templates);
    data_obj = new DataObject(data);
  });
  
  it('{{ my_var }}', function () {
    var content = renderer.render(data_obj, 'var_1');
    expect(content).toBe('hello liquify');
  });
  
});