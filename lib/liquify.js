require('./liquify/extensions');
var lqfy_defaults   = require('./liquify/defaults');
var DataObject      = require('./liquify/data_object.js');
var Actioner        = require('./liquify/actioner.js');
var Router          = require('./liquify/router.js');

var Liquify = function (options) {
  this._init(options);
  this._add_event_listners();
};

Liquify.prototype.action = function (callback) {
  this._action_callback = callback;
};

Liquify.prototype.route = function (route, callback) {
  this.current_route = route;
  this._router.route(route, callback);
};

// Private
Liquify.prototype._init = function (options) {
  this.options = options || {};
  this.templates = this.options.templates || {};
  this.data = new DataObject(this.options.data || {});
  this.settings = lqfy.extend(Liquify.Defaults, this.options.settings);
  
  this._actioner = new Actioner(this);
  this._router = new Router(this);
  
  this._action_callback = false;
  
  // currents
  this.current_url = false;
  this.current_slug = false;
  this.current_route = false;
  this.current_target = false;
  this.current_template = false;
};

Liquify.prototype._add_event_listners = function () {
  var _this = this;
  this._actioner.on('invoke_action', function (currents) {
    _this._invoke_action(currents);
  });
};

Liquify.prototype._invoke_action = function (current_data) {
  // set currents
  this.current_url = current_data.url;
  this.current_slug = this._slug_from_url(current_data.url);
  this.current_target = current_data.target;
  this.current_template = current_data.template;
  
  // open routing again
  this._router.open();
  
  // call the action callback
  if (this._action_callback) this._action_callback.apply(this);
};

Liquify.prototype._slug_from_url = function (url) {
  var url_parts = url.split('/');
  return url_parts[url_parts.length - 1];
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