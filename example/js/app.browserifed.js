(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Liquify = require('../../lib/liquify');

var liquify = new Liquify();
console.log(liquify.say_hello());


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
var Liquify = function () {
};

Liquify.prototype.say_hello = function () {
  return 'hello liquify';
};

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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL2V4YW1wbGUvanMvYXBwLmpzIiwiL1VzZXJzL3N0ZXdhcnRrbmFwbWFuL0RldmVsb3BtZW50L0xpcXVpZnlKUy9saWIvbGlxdWlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIExpcXVpZnkgPSByZXF1aXJlKCcuLi8uLi9saWIvbGlxdWlmeScpO1xuXG52YXIgbGlxdWlmeSA9IG5ldyBMaXF1aWZ5KCk7XG5jb25zb2xlLmxvZyhsaXF1aWZ5LnNheV9oZWxsbygpKTtcblxuXG4vKlxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcbnZhciBQYWdlciA9IHJlcXVpcmUoJy4uL2xpYi9wYWdlcicpO1xuXG52YXIgdGVtcGxhdGVzID0ge1xuICB0ZW1wOiBmcy5yZWFkRmlsZVN5bmMoJy4vZXhhbXBsZS90ZW1wbGF0ZS5saXF1aWQnLCAndXRmOCcpXG59O1xuXG52YXIgcGFnZXIgPSBuZXcgUGFnZXIodGVtcGxhdGVzKTtcbiovXG5cbi8qXG4gIGxvYWQgYWxsIGRhdGEgdXAgZnJvbnRcbiovXG4vKlxucGFnZXIubmF2aWdhdGlvbi5vbl9uYXZfYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICBcbiAgcGFnZXIubmF2aWdhdGlvbi5yb3V0ZSgnLycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGUgPSB0aGlzO1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgYm9keTogcGFnZXIuc2l0ZV9kYXRhLmdldF9kYXRhX2ZvcihbJ3BhZ2VzJywgcm91dGUucm91dGVfbWF0Y2hpbmcsICdib2R5J10pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBcbiAgICBwYWdlci5yZW5kZXJlci5yZW5kZXIoZGF0YSwgcm91dGUudGVtcGxhdGVfbmFtZSwgcm91dGUucmVuZGVyX3RhcmdldCwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJlZCcpO1xuICAgIH0pO1xuICB9KTtcbiAgXG59O1xuXG5wYWdlci5zaXRlX2RhdGEub25fZGF0YV9sb2FkZWQgPSBmdW5jdGlvbiAoZGF0YSkgeyAvLyBidWc6IGRhdGEgaXMgdW5kZWZpbmVkIGJ1dCB0aGlzLmRhdGEgaXMgY29ycmVjdFxuICBwYWdlci5uYXZpZ2F0aW9uLmluaXQoKTsgLy8gc2hvdWxkIGJlIG1vdmVkIGluc2lkZSBwYWdlclxufTtcblxucGFnZXIuc2l0ZV9kYXRhLmxvYWQoJy9kYXRhLmpzb24nKTtcbiovXG5cblxuLypcbiAgbG9hZCBkYXRhIG9uIGNsaWNrXG4qL1xuXG4vKlxucGFnZXIubmF2aWdhdGlvbi5vbl9uYXZfYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gIHBhZ2VyLnNpdGVfZGF0YS5vbl9kYXRhX2xvYWRlZCA9IGZ1bmN0aW9uIChkYXRhKSB7IC8vIGRhdGEgLT4gYnVnOiBkYXRhIGlzIHVuZGVmaW5lZCBidXQgdGhpcy5kYXRhIGlzIGNvcnJlY3RcbiAgICBcbiAgICAvLyBCVUc6IGxvYWRpbmcgZGF0YSBoZXJlXG4gICAgLy8gcGFnZXIubmF2aWdhdGlvbi5yb3V0ZSgnLycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHBhZ2VyLnJlbmRlcmVyLnJlbmRlcihkYXRhLCB0aGlzLnRlbXBfbmFtZSwgdGhpcy50YXJnZXQpO1xuICAgIC8vIH0pO1xuICAgIFxuICB9O1xuICBcbiAgcGFnZXIuc2l0ZV9kYXRhLmxvYWQoJy9kYXRhLmpzb24nKTsgLy8gaG93IHRvIHVzZSB0aGlzLmN1cnJlbnRfcm91dGUgaGVyZT9cbn07XG5cbnBhZ2VyLm5hdmlnYXRpb24uaW5pdCgpO1xuKi8iLCJ2YXIgTGlxdWlmeSA9IGZ1bmN0aW9uICgpIHtcbn07XG5cbkxpcXVpZnkucHJvdG90eXBlLnNheV9oZWxsbyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdoZWxsbyBsaXF1aWZ5Jztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGlxdWlmeTtcblxuXG5cblxuLypcbnZhciBTaXRlRGF0YSA9IHJlcXVpcmUoJy4vbGlxdWlmeS9zaXRlX2RhdGEnKTtcbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoJy4vbGlxdWlmeS9yZW5kZXJlcicpO1xudmFyIE5hdmlnYXRpb24gPSByZXF1aXJlKCcuL2xpcXVpZnkvbmF2aWdhdGlvbicpO1xuXG52YXIgUGFnZXIgPSBmdW5jdGlvbiAodGVtcGxhdGVzKSB7XG4gIHRoaXMuc2l0ZV9kYXRhICAgPSBuZXcgU2l0ZURhdGEoKTtcbiAgdGhpcy5yZW5kZXJlciAgICA9IG5ldyBSZW5kZXJlcih0ZW1wbGF0ZXMpO1xuICB0aGlzLm5hdmlnYXRpb24gID0gbmV3IE5hdmlnYXRpb24oKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFnZXI7XG4qLyJdfQ==
