RegExp.escape = function (s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var Router = function (parent) {
  this.parent = parent;
  this.open();
};

Router.prototype.route = function (target_route, callback) {
  if (this._route_matches(target_route)){
    this.route_matched = true;
    callback.apply(this.parent);
  }
};

Router.prototype.open = function () {
  this.route_matched = false;
};

// Private
Router.prototype._route_matches = function (target_route) {
  var route = '^'+RegExp.escape(target_route).replace('\\*', '[^\\/]+')+'$';
  var regexp = new RegExp(route, 'gi');
  return !this.route_matched && regexp.test(this.parent.current_route);
};

module.exports = Router;