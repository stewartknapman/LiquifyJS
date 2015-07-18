var router = function () {
  this.routes = {};
  this.history = new History();
  this.events = new EventCapture(); // needs beter name?
  
  this._add_event_listeners();
};

// PUBLIC

router.prototype.add = function (key, callback, skip_history) {
  this.routes[key] = {
    key: key,
    callback: callback,
    skip_history: skip_history
  };
};

// PRIVATE

liquify.prototype._add_event_listeners = function () {
  var _this = this;
  
  // capture click or form submit
  // form submit overrides skip_history i.e. you don't go to a new page 
  this.events.on('event', function (url, override_skip_history) {
    _this.trigger('progressStart');
    _this._route(url, override_skip_history);
  });
  
  this.history.on('back', function (url, override_skip_history) {
    _this.trigger('progressStart');
    _this._route(url, override_skip_history);
  });
};

liquify.prototype._route = function (url, override_skip_history) {
  var route = this._matched_route(url);
  if (route) {
    if (override_skip_history !== true || route.skip_history !== true) {
      this.history.update();
    }
    
    // TODO: route info
    route.callback.apply(this, [this, route_info]);
  }
};

liquify.prototype._matched_route = function (url) {
  var matched_route = false;
  this._each_route(function (route, key) {
    if (this._route_matches(route, url)) {
      matched_route = route;
    }
  });
  return matched_route;
};

liquify.prototype._each_route = function (callback) {
  for (var key in this.routes) {
    if (this.routes.hasOwnProperty(key)) {
      var route = this.routes[key];
      callback.apply(this, [route, key]);
    }
  }
};

liquify.prototype._route_matches = function (route, url) {
  // check if this url matches the current route
  // if so return true
  // else return false
};

module.exports = router;