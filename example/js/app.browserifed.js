(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Liquify = require('../../lib/liquify');

var liquify = new Liquify();









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
var lqfy_defaults = require('./liquify/defaults');

var Liquify = function (options) {
  this.options = options || {};
  this.templates = this.options.templates || {};
  this.data = this.options.data || {};
  this.settings = Liquify.Defaults;
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
},{"./liquify/defaults":3}],3:[function(require,module,exports){
var LiquifyDefaults = {
  active_class: 'is-active',
  data_attrs: {
    target: 'data-lqfy-target',
    template: 'data-lqfy-template'
  }
};

module.exports = LiquifyDefaults;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL2V4YW1wbGUvanMvYXBwLmpzIiwiL1VzZXJzL3N0ZXdhcnRrbmFwbWFuL0RldmVsb3BtZW50L0xpcXVpZnlKUy9saWIvbGlxdWlmeS5qcyIsIi9Vc2Vycy9zdGV3YXJ0a25hcG1hbi9EZXZlbG9wbWVudC9MaXF1aWZ5SlMvbGliL2xpcXVpZnkvZGVmYXVsdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgTGlxdWlmeSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9saXF1aWZ5Jyk7XG5cbnZhciBsaXF1aWZ5ID0gbmV3IExpcXVpZnkoKTtcblxuXG5cblxuXG5cblxuXG5cbi8qXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIFBhZ2VyID0gcmVxdWlyZSgnLi4vbGliL3BhZ2VyJyk7XG5cbnZhciB0ZW1wbGF0ZXMgPSB7XG4gIHRlbXA6IGZzLnJlYWRGaWxlU3luYygnLi9leGFtcGxlL3RlbXBsYXRlLmxpcXVpZCcsICd1dGY4Jylcbn07XG5cbnZhciBwYWdlciA9IG5ldyBQYWdlcih0ZW1wbGF0ZXMpO1xuKi9cblxuLypcbiAgbG9hZCBhbGwgZGF0YSB1cCBmcm9udFxuKi9cbi8qXG5wYWdlci5uYXZpZ2F0aW9uLm9uX25hdl9hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIFxuICBwYWdlci5uYXZpZ2F0aW9uLnJvdXRlKCcvJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZSA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBib2R5OiBwYWdlci5zaXRlX2RhdGEuZ2V0X2RhdGFfZm9yKFsncGFnZXMnLCByb3V0ZS5yb3V0ZV9tYXRjaGluZywgJ2JvZHknXSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICAgIHBhZ2VyLnJlbmRlcmVyLnJlbmRlcihkYXRhLCByb3V0ZS50ZW1wbGF0ZV9uYW1lLCByb3V0ZS5yZW5kZXJfdGFyZ2V0LCBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJ3JlbmRlcmVkJyk7XG4gICAgfSk7XG4gIH0pO1xuICBcbn07XG5cbnBhZ2VyLnNpdGVfZGF0YS5vbl9kYXRhX2xvYWRlZCA9IGZ1bmN0aW9uIChkYXRhKSB7IC8vIGJ1ZzogZGF0YSBpcyB1bmRlZmluZWQgYnV0IHRoaXMuZGF0YSBpcyBjb3JyZWN0XG4gIHBhZ2VyLm5hdmlnYXRpb24uaW5pdCgpOyAvLyBzaG91bGQgYmUgbW92ZWQgaW5zaWRlIHBhZ2VyXG59O1xuXG5wYWdlci5zaXRlX2RhdGEubG9hZCgnL2RhdGEuanNvbicpO1xuKi9cblxuXG4vKlxuICBsb2FkIGRhdGEgb24gY2xpY2tcbiovXG5cbi8qXG5wYWdlci5uYXZpZ2F0aW9uLm9uX25hdl9hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgcGFnZXIuc2l0ZV9kYXRhLm9uX2RhdGFfbG9hZGVkID0gZnVuY3Rpb24gKGRhdGEpIHsgLy8gZGF0YSAtPiBidWc6IGRhdGEgaXMgdW5kZWZpbmVkIGJ1dCB0aGlzLmRhdGEgaXMgY29ycmVjdFxuICAgIFxuICAgIC8vIEJVRzogbG9hZGluZyBkYXRhIGhlcmVcbiAgICAvLyBwYWdlci5uYXZpZ2F0aW9uLnJvdXRlKCcvJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gcGFnZXIucmVuZGVyZXIucmVuZGVyKGRhdGEsIHRoaXMudGVtcF9uYW1lLCB0aGlzLnRhcmdldCk7XG4gICAgLy8gfSk7XG4gICAgXG4gIH07XG4gIFxuICBwYWdlci5zaXRlX2RhdGEubG9hZCgnL2RhdGEuanNvbicpOyAvLyBob3cgdG8gdXNlIHRoaXMuY3VycmVudF9yb3V0ZSBoZXJlP1xufTtcblxucGFnZXIubmF2aWdhdGlvbi5pbml0KCk7XG4qLyIsInZhciBscWZ5X2RlZmF1bHRzID0gcmVxdWlyZSgnLi9saXF1aWZ5L2RlZmF1bHRzJyk7XG5cbnZhciBMaXF1aWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy50ZW1wbGF0ZXMgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGVzIHx8IHt9O1xuICB0aGlzLmRhdGEgPSB0aGlzLm9wdGlvbnMuZGF0YSB8fCB7fTtcbiAgdGhpcy5zZXR0aW5ncyA9IExpcXVpZnkuRGVmYXVsdHM7XG59O1xuXG5MaXF1aWZ5LkRlZmF1bHRzID0gbHFmeV9kZWZhdWx0cztcblxubW9kdWxlLmV4cG9ydHMgPSBMaXF1aWZ5O1xuXG5cblxuXG4vKlxudmFyIFNpdGVEYXRhID0gcmVxdWlyZSgnLi9saXF1aWZ5L3NpdGVfZGF0YScpO1xudmFyIFJlbmRlcmVyID0gcmVxdWlyZSgnLi9saXF1aWZ5L3JlbmRlcmVyJyk7XG52YXIgTmF2aWdhdGlvbiA9IHJlcXVpcmUoJy4vbGlxdWlmeS9uYXZpZ2F0aW9uJyk7XG5cbnZhciBQYWdlciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZXMpIHtcbiAgdGhpcy5zaXRlX2RhdGEgICA9IG5ldyBTaXRlRGF0YSgpO1xuICB0aGlzLnJlbmRlcmVyICAgID0gbmV3IFJlbmRlcmVyKHRlbXBsYXRlcyk7XG4gIHRoaXMubmF2aWdhdGlvbiAgPSBuZXcgTmF2aWdhdGlvbigpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWdlcjtcbiovIiwidmFyIExpcXVpZnlEZWZhdWx0cyA9IHtcbiAgYWN0aXZlX2NsYXNzOiAnaXMtYWN0aXZlJyxcbiAgZGF0YV9hdHRyczoge1xuICAgIHRhcmdldDogJ2RhdGEtbHFmeS10YXJnZXQnLFxuICAgIHRlbXBsYXRlOiAnZGF0YS1scWZ5LXRlbXBsYXRlJ1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpcXVpZnlEZWZhdWx0czsiXX0=
