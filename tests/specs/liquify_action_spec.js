/* jslint node: true */
/* global describe, it, expect */

var Liquify = require('../../lib/liquify.js');

describe('LiquifyJS Action', function () {
  
  var liquify = new Liquify({
    data: {
      name: 'liquify',
      pages: [
        {
          title: 'Page 1',
          slug: 'page-1'
        },
        {
          title: 'Page 2',
          slug: 'page-2'
        }
      ]
    }
  });
  
  // main action method
  it('captures the click and calls the main action method', function () {
    var moose = '';
    
    liquify.action(function () {
      moose = 'hello monkey';
    });
    
    expect(moose).toBe('hello monkey');
  });
  
});