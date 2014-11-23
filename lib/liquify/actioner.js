var $       = require('jquery');
var Eventer = require('./eventer.js');

var Actioner = function (parent) {
  new Eventer(this);
  this.parent = parent;
  this._add_event_listners();
};

// Private
Actioner.prototype._add_event_listners = function () {
  var _this = this;
  $(document).on('click', '['+_this._get_data_attr_setting('target')+']', function (e) {
    e.preventDefault();
    _this._invoke_action(e.currentTarget);
  });
};

Actioner.prototype._invoke_action = function (currentTargetEle) {
  $currentTargetEle = $(currentTargetEle);
  var current_data = {
    url: $currentTargetEle.attr('href'),
    target: $currentTargetEle.data(this._get_data_attr_setting('target').replace('data-', '')),
    template: $currentTargetEle.data(this._get_data_attr_setting('template').replace('data-', ''))
  };

  this.trigger('invoke_action', [current_data]);
};

Actioner.prototype._get_data_attr_setting = function (item) {
  return this.parent.settings.data_attrs[item];
};

module.exports = Actioner;



/*
var $ = require('jquery');

RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var Navigation = function (target, active_class) {
  this.link_target = target || '[data-nav-target]';
  this.active_class = active_class || 'is_active';
  
  // route specific vars
  this.previous_matching_route = false;
  this.route_matched  = false;
  this.route_matching = false;
  this.previous_link  = false;
  this.previous_route = false;
  this.current_link   = false;
  this.current_route  = false;
  this.template_name  = false;
  this.render_target  = false;
  
  // events
  this.on_nav_action = false;
};

Navigation.prototype.init = function () {
  var _this = this;
  $(document).on('click', this.link_target, function (event) {
    event.preventDefault();
    _this._on_click_handler(event);
  });
};

Navigation.prototype.route = function (target_route, callback) {
  if (this._route_matches(target_route)) {
    this.route_matched = true;
    this.route_matching = target_route;
    callback.apply(this);
  }
};

// Private
Navigation.prototype._on_click_handler = function (event) {
  var $link = $(event.currentTarget);
  
  this._update_route_vars(event.currentTarget);
  this._update_navigation($link);
  this._update_document_state($link);
  this._trigger_event('on_nav_action');
};

Navigation.prototype._update_route_vars = function (current_target) {
  var $link = $(current_target);
  this.previous_matching_route = this.route_matching;
  this.route_matched  = false;
  this.route_matching = false;
  this.previous_link  = this.current_link;
  this.previous_route = this.current_route;
  this.current_link   = current_target;
  this.current_route  = $link.attr('href');
  this.template_name  = $link.data('nav-template');
  this.render_target  = $link.data('nav-target');
};

Navigation.prototype._update_navigation = function ($link) {
  $('.'+ this.active_class).removeClass(this.active_class);
  $link.addClass(this.active_class);
  if ($link.data('nav-parent-link')) $('[href="' + $link.data('nav-parent-link') + '"]').addClass(this.active_class);
};

Navigation.prototype._update_document_state = function ($link) {
  // TODO:
  // - update document title
  // - work out first param obj for pushstate
  if (history.pushState) {
    history.pushState({}, '', $link.attr('href'));
  }
};

Navigation.prototype._trigger_event = function (event, args) {
  if (typeof args === undefined) args = [];
  if (this[event]) this[event].apply(this, args);
};

Navigation.prototype._route_matches = function (target_route) {
  var route = '^'+RegExp.escape(target_route).replace('\\*', '[^\\/]+')+'$';
  var regexp = new RegExp(route, 'gi');
  return !this.route_matched && regexp.test(this.current_route);
};

module.exports = Navigation;
*/