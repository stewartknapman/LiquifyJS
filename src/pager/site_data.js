var $ = require('jquery');
  
var SiteData = function () {
  this.data = false;
  this.debug = true;
  
  // events
  this.on_data_load_start = false;
  this.on_data_loading = false;
  this.on_data_loaded = false;
  this.on_data_failed = false;
};

SiteData.prototype.load = function (target) {
  var _this = this;
  
  var request = $.ajax({
    url: target,
    beforeSend: function () {
      _this._trigger_event('on_data_load_start');
      if (_this.debug) console.log('loading site data...');
    },
    xhr: function () {
      var xhr = new window.XMLHttpRequest();
      xhr.addEventListener("progress", function(evt){
        if (evt.lengthComputable) {
          var percentComplete = (evt.loaded / evt.total) * 100;
          _this._trigger_event('on_data_loading', [percentComplete]);
          if (_this.debug) console.log('loading: '+ percentComplete + '%');
        }
      }, false);
      return xhr;
    }
  });
  
  request.done(function (data) {
    _this.data = data;
    _this._trigger_event('on_data_loaded', _this.data);
    if (_this.debug) console.log('site data loaded');
  });
  
  request.fail(function (err) {
    _this._trigger_event('on_data_failed', err);
    if (_this.debug) console.log('ajax err: ', err);
  });
};

SiteData.prototype.get_data_for = function (context) {
  return this._contextualised_data(context);
};

SiteData.prototype.get_data_for_route = function (route, context) {
  var data = this._contextualised_data(context);
  var route_parts = this._get_route_parts(route);
  return this._data_for_route_parts(route_parts, data);
};

/* Private */
SiteData.prototype._contextualised_data = function (context) {
  var data = this.data;
  if (typeof context === 'object') {
    for (var i in context) {
      if (data[context[i]]) {
        data = data[context[i]];
      }
    }
  } else if (typeof context === 'string') {
    data = data[context];
  }
  return data;
};

SiteData.prototype._get_route_parts = function (route) {
  var parts = route.split('/');
  if(parts[0] === '') parts.shift();
  return parts;
};

SiteData.prototype._data_for_route_parts = function (parts, data) {
  if (parts.length > 0 ) {
    var part = parts.shift();
    data = data[part];
    if (parts.length === 0) {
      return data;
    } else {
      return this._data_for_route_parts(parts, data);
    }
  } else {
    return false;
  }
};

SiteData.prototype._trigger_event = function (event, args) {
  if (typeof args === undefined) args = [];
  if (this[event]) this[event].apply(this, args);
};
  
module.exports = SiteData;