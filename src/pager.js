var SiteData = require('./pager/site_data.js');
var Renderer = require('./pager/renderer.js');
var Navigation = require('./pager/navigation.js');

var Pager = function (templates) {
  this.site_data   = new SiteData();
  this.renderer    = new Renderer(templates);
  this.navigation  = new Navigation();
};

module.exports = Pager;