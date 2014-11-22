require('./liquify/extensions');
var lqfy_defaults = require('./liquify/defaults');
var Eventer = require('./liquify/eventer.js');

var Liquify = function (options) {
  new Eventer(this);
  this._init(options);
};

Liquify.prototype._init = function (options) {
  this.options = options || {};
  this.templates = this.options.templates || {};
  this.data = this.options.data || {};
  this.settings = lqfy.extend(Liquify.Defaults, this.options.settings);  
};

Liquify.Defaults = lqfy_defaults;

module.exports = Liquify;




/*
var SiteData = require('./liquify/site_data');
var Renderer = require('./liquify/renderer');
var Navigation = require('./liquify/navigation');

var Pager = function (templates) {
  this.site_data   = new SiteData();
  this.renderer    = new Renderer(templates);
  this.navigation  = new Navigation();
};

module.exports = Pager;
*/