(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL2V4YW1wbGUvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIFBhZ2VyID0gcmVxdWlyZSgnLi4vbGliL3BhZ2VyJyk7XG5cbnZhciB0ZW1wbGF0ZXMgPSB7XG4gIHRlbXA6IGZzLnJlYWRGaWxlU3luYygnLi9leGFtcGxlL3RlbXBsYXRlLmxpcXVpZCcsICd1dGY4Jylcbn07XG5cbnZhciBwYWdlciA9IG5ldyBQYWdlcih0ZW1wbGF0ZXMpO1xuKi9cblxuLypcbiAgbG9hZCBhbGwgZGF0YSB1cCBmcm9udFxuKi9cbi8qXG5wYWdlci5uYXZpZ2F0aW9uLm9uX25hdl9hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIFxuICBwYWdlci5uYXZpZ2F0aW9uLnJvdXRlKCcvJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZSA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBib2R5OiBwYWdlci5zaXRlX2RhdGEuZ2V0X2RhdGFfZm9yKFsncGFnZXMnLCByb3V0ZS5yb3V0ZV9tYXRjaGluZywgJ2JvZHknXSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICAgIHBhZ2VyLnJlbmRlcmVyLnJlbmRlcihkYXRhLCByb3V0ZS50ZW1wbGF0ZV9uYW1lLCByb3V0ZS5yZW5kZXJfdGFyZ2V0LCBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJ3JlbmRlcmVkJyk7XG4gICAgfSk7XG4gIH0pO1xuICBcbn07XG5cbnBhZ2VyLnNpdGVfZGF0YS5vbl9kYXRhX2xvYWRlZCA9IGZ1bmN0aW9uIChkYXRhKSB7IC8vIGJ1ZzogZGF0YSBpcyB1bmRlZmluZWQgYnV0IHRoaXMuZGF0YSBpcyBjb3JyZWN0XG4gIHBhZ2VyLm5hdmlnYXRpb24uaW5pdCgpOyAvLyBzaG91bGQgYmUgbW92ZWQgaW5zaWRlIHBhZ2VyXG59O1xuXG5wYWdlci5zaXRlX2RhdGEubG9hZCgnL2RhdGEuanNvbicpO1xuKi9cblxuXG4vKlxuICBsb2FkIGRhdGEgb24gY2xpY2tcbiovXG5cbi8qXG5wYWdlci5uYXZpZ2F0aW9uLm9uX25hdl9hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgcGFnZXIuc2l0ZV9kYXRhLm9uX2RhdGFfbG9hZGVkID0gZnVuY3Rpb24gKGRhdGEpIHsgLy8gZGF0YSAtPiBidWc6IGRhdGEgaXMgdW5kZWZpbmVkIGJ1dCB0aGlzLmRhdGEgaXMgY29ycmVjdFxuICAgIFxuICAgIC8vIEJVRzogbG9hZGluZyBkYXRhIGhlcmVcbiAgICAvLyBwYWdlci5uYXZpZ2F0aW9uLnJvdXRlKCcvJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gcGFnZXIucmVuZGVyZXIucmVuZGVyKGRhdGEsIHRoaXMudGVtcF9uYW1lLCB0aGlzLnRhcmdldCk7XG4gICAgLy8gfSk7XG4gICAgXG4gIH07XG4gIFxuICBwYWdlci5zaXRlX2RhdGEubG9hZCgnL2RhdGEuanNvbicpOyAvLyBob3cgdG8gdXNlIHRoaXMuY3VycmVudF9yb3V0ZSBoZXJlP1xufTtcblxucGFnZXIubmF2aWdhdGlvbi5pbml0KCk7XG4qLyJdfQ==
