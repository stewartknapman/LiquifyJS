(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Liquify = require('../../lib/liquify');

var liquify = new Liquify();
console.log(liquify);








/*
var fs = require('fs');
var Pager = require('../lib/pager');

var templates = {
  temp: fs.readFileSync('./example/template.liquid', 'utf8')
};

var pager = new Pager(templates);
*/

/*
  load all data up front
*/
/*
pager.navigation.on_nav_action = function () {
  
  pager.navigation.route('/', function () {
    var route = this;
    var data = {
      body: pager.site_data.get_data_for(['pages', route.route_matching, 'body'])
    };
    console.log(data);
    
    pager.renderer.render(data, route.template_name, route.render_target, function(){
      console.log('rendered');
    });
  });
  
};

pager.site_data.on_data_loaded = function (data) { // bug: data is undefined but this.data is correct
  pager.navigation.init(); // should be moved inside pager
};

pager.site_data.load('/data.json');
*/


/*
  load data on click
*/

/*
pager.navigation.on_nav_action = function () {

  pager.site_data.on_data_loaded = function (data) { // data -> bug: data is undefined but this.data is correct
    
    // BUG: loading data here
    // pager.navigation.route('/', function () {
      // pager.renderer.render(data, this.temp_name, this.target);
    // });
    
  };
  
  pager.site_data.load('/data.json'); // how to use this.current_route here?
};

pager.navigation.init();
*/
},{"../../lib/liquify":2}],2:[function(require,module,exports){
require('./liquify/extensions');
var lqfy_defaults = require('./liquify/defaults');
var Eventer = require('./liquify/eventer.js');

var Liquify = function (options) {
  new Eventer(this);
  this._init(options);
};

// Private
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
},{"./liquify/defaults":3,"./liquify/eventer.js":4,"./liquify/extensions":5}],3:[function(require,module,exports){
var LiquifyDefaults = {
  active_class: 'is-active',
  data_attrs: {
    target: 'data-lqfy-target',
    template: 'data-lqfy-template'
  }
};

module.exports = LiquifyDefaults;
},{}],4:[function(require,module,exports){
var Eventer = function (caller) {
  this.caller = caller;
  this.caller._events = {};
  this.caller.on = this.on;
  this.caller.off = this.off;
  this.caller.trigger = this.trigger;
};

// this === caller not Eventer
Eventer.prototype.on = function (event, callback) {
  if (!this._events[event]) this._events[event] = [];
  this._events[event].push(callback);
  return this._events[event].length - 1;
};

Eventer.prototype.off = function (event, id) {
  if (event && id) {
    if (this._events[event][id]) this._events[event][id] = null;
  } else if (event) {
    if (this._events[event]) this._events[event] = null;
  } else {
    this._events = {};
  }
};

Eventer.prototype.trigger = function (event, args) {
  if (typeof args !== 'object') args = [args]; 
  for (var i in this._events[event]) {
    var e = this._events[event][i];
    if (typeof e === 'function') e.apply(this, args);
  }
};

module.exports = Eventer;
},{}],5:[function(require,module,exports){
lqfy = {};

lqfy.extend = function () {
  var obj = {};
  for (var argument in arguments) {
    for (var a in arguments[argument]) {
      if (arguments[argument].hasOwnProperty(a)) {
        if (typeof arguments[argument][a] === 'object' && typeof obj[a] === 'object') {
          obj[a] = lqfy.extend(obj[a], arguments[argument][a]);
        } else {
          obj[a] = arguments[argument][a];
        }
      }
    }
  }
  return obj;
};

module.exports = lqfy;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL2V4YW1wbGUvanMvYXBwLmpzIiwiL1VzZXJzL3N0ZXdhcnRrbmFwbWFuL0RldmVsb3BtZW50L0xpcXVpZnlKUy9saWIvbGlxdWlmeS5qcyIsIi9Vc2Vycy9zdGV3YXJ0a25hcG1hbi9EZXZlbG9wbWVudC9MaXF1aWZ5SlMvbGliL2xpcXVpZnkvZGVmYXVsdHMuanMiLCIvVXNlcnMvc3Rld2FydGtuYXBtYW4vRGV2ZWxvcG1lbnQvTGlxdWlmeUpTL2xpYi9saXF1aWZ5L2V2ZW50ZXIuanMiLCIvVXNlcnMvc3Rld2FydGtuYXBtYW4vRGV2ZWxvcG1lbnQvTGlxdWlmeUpTL2xpYi9saXF1aWZ5L2V4dGVuc2lvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBMaXF1aWZ5ID0gcmVxdWlyZSgnLi4vLi4vbGliL2xpcXVpZnknKTtcblxudmFyIGxpcXVpZnkgPSBuZXcgTGlxdWlmeSgpO1xuY29uc29sZS5sb2cobGlxdWlmeSk7XG5cblxuXG5cblxuXG5cblxuLypcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgUGFnZXIgPSByZXF1aXJlKCcuLi9saWIvcGFnZXInKTtcblxudmFyIHRlbXBsYXRlcyA9IHtcbiAgdGVtcDogZnMucmVhZEZpbGVTeW5jKCcuL2V4YW1wbGUvdGVtcGxhdGUubGlxdWlkJywgJ3V0ZjgnKVxufTtcblxudmFyIHBhZ2VyID0gbmV3IFBhZ2VyKHRlbXBsYXRlcyk7XG4qL1xuXG4vKlxuICBsb2FkIGFsbCBkYXRhIHVwIGZyb250XG4qL1xuLypcbnBhZ2VyLm5hdmlnYXRpb24ub25fbmF2X2FjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgXG4gIHBhZ2VyLm5hdmlnYXRpb24ucm91dGUoJy8nLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGJvZHk6IHBhZ2VyLnNpdGVfZGF0YS5nZXRfZGF0YV9mb3IoWydwYWdlcycsIHJvdXRlLnJvdXRlX21hdGNoaW5nLCAnYm9keSddKVxuICAgIH07XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgXG4gICAgcGFnZXIucmVuZGVyZXIucmVuZGVyKGRhdGEsIHJvdXRlLnRlbXBsYXRlX25hbWUsIHJvdXRlLnJlbmRlcl90YXJnZXQsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zb2xlLmxvZygncmVuZGVyZWQnKTtcbiAgICB9KTtcbiAgfSk7XG4gIFxufTtcblxucGFnZXIuc2l0ZV9kYXRhLm9uX2RhdGFfbG9hZGVkID0gZnVuY3Rpb24gKGRhdGEpIHsgLy8gYnVnOiBkYXRhIGlzIHVuZGVmaW5lZCBidXQgdGhpcy5kYXRhIGlzIGNvcnJlY3RcbiAgcGFnZXIubmF2aWdhdGlvbi5pbml0KCk7IC8vIHNob3VsZCBiZSBtb3ZlZCBpbnNpZGUgcGFnZXJcbn07XG5cbnBhZ2VyLnNpdGVfZGF0YS5sb2FkKCcvZGF0YS5qc29uJyk7XG4qL1xuXG5cbi8qXG4gIGxvYWQgZGF0YSBvbiBjbGlja1xuKi9cblxuLypcbnBhZ2VyLm5hdmlnYXRpb24ub25fbmF2X2FjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICBwYWdlci5zaXRlX2RhdGEub25fZGF0YV9sb2FkZWQgPSBmdW5jdGlvbiAoZGF0YSkgeyAvLyBkYXRhIC0+IGJ1ZzogZGF0YSBpcyB1bmRlZmluZWQgYnV0IHRoaXMuZGF0YSBpcyBjb3JyZWN0XG4gICAgXG4gICAgLy8gQlVHOiBsb2FkaW5nIGRhdGEgaGVyZVxuICAgIC8vIHBhZ2VyLm5hdmlnYXRpb24ucm91dGUoJy8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBwYWdlci5yZW5kZXJlci5yZW5kZXIoZGF0YSwgdGhpcy50ZW1wX25hbWUsIHRoaXMudGFyZ2V0KTtcbiAgICAvLyB9KTtcbiAgICBcbiAgfTtcbiAgXG4gIHBhZ2VyLnNpdGVfZGF0YS5sb2FkKCcvZGF0YS5qc29uJyk7IC8vIGhvdyB0byB1c2UgdGhpcy5jdXJyZW50X3JvdXRlIGhlcmU/XG59O1xuXG5wYWdlci5uYXZpZ2F0aW9uLmluaXQoKTtcbiovIiwicmVxdWlyZSgnLi9saXF1aWZ5L2V4dGVuc2lvbnMnKTtcbnZhciBscWZ5X2RlZmF1bHRzID0gcmVxdWlyZSgnLi9saXF1aWZ5L2RlZmF1bHRzJyk7XG52YXIgRXZlbnRlciA9IHJlcXVpcmUoJy4vbGlxdWlmeS9ldmVudGVyLmpzJyk7XG5cbnZhciBMaXF1aWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgbmV3IEV2ZW50ZXIodGhpcyk7XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59O1xuXG4vLyBQcml2YXRlXG5MaXF1aWZ5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMudGVtcGxhdGVzID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlcyB8fCB7fTtcbiAgdGhpcy5kYXRhID0gdGhpcy5vcHRpb25zLmRhdGEgfHwge307XG4gIHRoaXMuc2V0dGluZ3MgPSBscWZ5LmV4dGVuZChMaXF1aWZ5LkRlZmF1bHRzLCB0aGlzLm9wdGlvbnMuc2V0dGluZ3MpO1xufTtcblxuTGlxdWlmeS5EZWZhdWx0cyA9IGxxZnlfZGVmYXVsdHM7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlxdWlmeTtcblxuXG5cblxuLypcbnZhciBTaXRlRGF0YSA9IHJlcXVpcmUoJy4vbGlxdWlmeS9zaXRlX2RhdGEnKTtcbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoJy4vbGlxdWlmeS9yZW5kZXJlcicpO1xudmFyIE5hdmlnYXRpb24gPSByZXF1aXJlKCcuL2xpcXVpZnkvbmF2aWdhdGlvbicpO1xuXG52YXIgUGFnZXIgPSBmdW5jdGlvbiAodGVtcGxhdGVzKSB7XG4gIHRoaXMuc2l0ZV9kYXRhICAgPSBuZXcgU2l0ZURhdGEoKTtcbiAgdGhpcy5yZW5kZXJlciAgICA9IG5ldyBSZW5kZXJlcih0ZW1wbGF0ZXMpO1xuICB0aGlzLm5hdmlnYXRpb24gID0gbmV3IE5hdmlnYXRpb24oKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFnZXI7XG4qLyIsInZhciBMaXF1aWZ5RGVmYXVsdHMgPSB7XG4gIGFjdGl2ZV9jbGFzczogJ2lzLWFjdGl2ZScsXG4gIGRhdGFfYXR0cnM6IHtcbiAgICB0YXJnZXQ6ICdkYXRhLWxxZnktdGFyZ2V0JyxcbiAgICB0ZW1wbGF0ZTogJ2RhdGEtbHFmeS10ZW1wbGF0ZSdcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXF1aWZ5RGVmYXVsdHM7IiwidmFyIEV2ZW50ZXIgPSBmdW5jdGlvbiAoY2FsbGVyKSB7XG4gIHRoaXMuY2FsbGVyID0gY2FsbGVyO1xuICB0aGlzLmNhbGxlci5fZXZlbnRzID0ge307XG4gIHRoaXMuY2FsbGVyLm9uID0gdGhpcy5vbjtcbiAgdGhpcy5jYWxsZXIub2ZmID0gdGhpcy5vZmY7XG4gIHRoaXMuY2FsbGVyLnRyaWdnZXIgPSB0aGlzLnRyaWdnZXI7XG59O1xuXG4vLyB0aGlzID09PSBjYWxsZXIgbm90IEV2ZW50ZXJcbkV2ZW50ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICBpZiAoIXRoaXMuX2V2ZW50c1tldmVudF0pIHRoaXMuX2V2ZW50c1tldmVudF0gPSBbXTtcbiAgdGhpcy5fZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c1tldmVudF0ubGVuZ3RoIC0gMTtcbn07XG5cbkV2ZW50ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChldmVudCwgaWQpIHtcbiAgaWYgKGV2ZW50ICYmIGlkKSB7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldmVudF1baWRdKSB0aGlzLl9ldmVudHNbZXZlbnRdW2lkXSA9IG51bGw7XG4gIH0gZWxzZSBpZiAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2ZW50XSkgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gIH1cbn07XG5cbkV2ZW50ZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBhcmdzICE9PSAnb2JqZWN0JykgYXJncyA9IFthcmdzXTsgXG4gIGZvciAodmFyIGkgaW4gdGhpcy5fZXZlbnRzW2V2ZW50XSkge1xuICAgIHZhciBlID0gdGhpcy5fZXZlbnRzW2V2ZW50XVtpXTtcbiAgICBpZiAodHlwZW9mIGUgPT09ICdmdW5jdGlvbicpIGUuYXBwbHkodGhpcywgYXJncyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRlcjsiLCJscWZ5ID0ge307XG5cbmxxZnkuZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb2JqID0ge307XG4gIGZvciAodmFyIGFyZ3VtZW50IGluIGFyZ3VtZW50cykge1xuICAgIGZvciAodmFyIGEgaW4gYXJndW1lbnRzW2FyZ3VtZW50XSkge1xuICAgICAgaWYgKGFyZ3VtZW50c1thcmd1bWVudF0uaGFzT3duUHJvcGVydHkoYSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRdW2FdID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqW2FdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG9ialthXSA9IGxxZnkuZXh0ZW5kKG9ialthXSwgYXJndW1lbnRzW2FyZ3VtZW50XVthXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2FdID0gYXJndW1lbnRzW2FyZ3VtZW50XVthXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBscWZ5OyJdfQ==
