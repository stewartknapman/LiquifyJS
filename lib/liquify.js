require('./liquify/extensions');
var lqfy_defaults   = require('./liquify/defaults');
var DataObject      = require('./liquify/data_object.js');
var Actioner        = require('./liquify/actioner.js');
var Router          = require('./liquify/router.js');
var Renderer        = require('./liquify/renderer.js');

// TODO:
//  - ajax data load
//  - update data (data store?)
//  - template store

var Liquify = function (options) {
  this._init(options);
  this._add_event_listners();
};

Liquify.prototype.action = function (callback) {
  this._action_callback = callback;
};

Liquify.prototype.route = function (route, callback) {
  this.previous_route = this.current_route;
  this.current_route = route;
  this._router.route(route, callback);
};

Liquify.prototype.render = function () {
  var data = arguments[0];
  var template = this.current_template;
  var target = this.current_target;
  var callback;
  
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      var arg = arguments[i];
      console.log(i, arg);
      
      if (typeof arg === 'function') {
        callback = arg;
      } else if (typeof arg === 'object') {
        template = arg.template || this.current_template;
        target = arg.target || this.current_target;
      }
    }
  }
  
  this._renderer.render(data, template, target, callback);
};

// Private
Liquify.prototype._init = function (options) {
  this.options = options || {};
  this.templates = this.options.templates || {};
  this.data = new DataObject(this.options.data || {});
  this.settings = lqfy.extend(Liquify.Defaults, this.options.settings);
  
  this._actioner = new Actioner(this);
  this._router = new Router(this);
  this._renderer = new Renderer(this);
  
  this._action_callback = false;
  
  // currents
  this.previous_ele = false;
  this.previous_url = false;
  this.previous_slug = false;
  this.previous_route = false;
  this.previous_target = false;
  this.previous_template = false;
  this.current_ele = false;
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
  this.previous_ele = this.current_ele;
  this.previous_url = this.current_url;
  this.previous_slug = this.current_slug;
  this.previous_target = this.current_target;
  this.previous_template = this.current_template;
  this.current_ele = current_data.ele;
  this.current_url = current_data.url;
  this.current_slug = this._slug_from_url(current_data.url);
  this.current_target = current_data.target;
  this.current_template = current_data.template;
  
  // call the action callback
  if (this._action_callback) this._action_callback.apply(this);
  
  // open routing again
  this._router.open();
};

Liquify.prototype._slug_from_url = function (url) {
  var url_parts = url.split('/');
  return url_parts[url_parts.length - 1];
};

Liquify.Defaults = lqfy_defaults;

module.exports = Liquify;