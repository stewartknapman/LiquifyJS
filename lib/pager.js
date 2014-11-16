var SiteData = require('./pager/site_data');
var Renderer = require('./pager/renderer');
var Navigation = require('./pager/navigation');

var Pager = function (templates) {
  this.site_data   = new SiteData();
  this.renderer    = new Renderer(templates);
  this.navigation  = new Navigation();
};

module.exports = Pager;