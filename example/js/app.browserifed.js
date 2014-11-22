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
require('./liquify/extensions');
var lqfy_defaults = require('./liquify/defaults');

var Liquify = function (options) {
  this.options = options || {};
  this.templates = this.options.templates || {};
  this.data = this.options.data || {};
  //this.settings = lqfy.extend(Liquify.Defaults, this.options.settings);
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
},{"./liquify/defaults":3,"./liquify/extensions":4}],3:[function(require,module,exports){
var LiquifyDefaults = {
  active_class: 'is-active',
  data_attrs: {
    target: 'data-lqfy-target',
    template: 'data-lqfy-template'
  }
};

module.exports = LiquifyDefaults;
},{}],4:[function(require,module,exports){
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
      
      
      
/*
        if (typeof arguments[argument][a] === 'object') {
          var copy = obj[a];
          if (typeof obj[a] !== 'object') {
            copy = {};
            copy[a] = obj[a];
          }
          
        console.log(a, copy);

          
          
          
          obj[a] = lqfy.extend(copy, arguments[argument][a]);
        } else {
          obj[a] = arguments[argument][a];
        }
*/
      }
    }
  }
  return obj;
};

module.exports = lqfy;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL2V4YW1wbGUvanMvYXBwLmpzIiwiL1VzZXJzL3N0ZXdhcnRrbmFwbWFuL0RldmVsb3BtZW50L0xpcXVpZnlKUy9saWIvbGlxdWlmeS5qcyIsIi9Vc2Vycy9zdGV3YXJ0a25hcG1hbi9EZXZlbG9wbWVudC9MaXF1aWZ5SlMvbGliL2xpcXVpZnkvZGVmYXVsdHMuanMiLCIvVXNlcnMvc3Rld2FydGtuYXBtYW4vRGV2ZWxvcG1lbnQvTGlxdWlmeUpTL2xpYi9saXF1aWZ5L2V4dGVuc2lvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBMaXF1aWZ5ID0gcmVxdWlyZSgnLi4vLi4vbGliL2xpcXVpZnknKTtcblxudmFyIGxpcXVpZnkgPSBuZXcgTGlxdWlmeSgpO1xuXG5cblxuXG5cblxuXG5cblxuLypcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgUGFnZXIgPSByZXF1aXJlKCcuLi9saWIvcGFnZXInKTtcblxudmFyIHRlbXBsYXRlcyA9IHtcbiAgdGVtcDogZnMucmVhZEZpbGVTeW5jKCcuL2V4YW1wbGUvdGVtcGxhdGUubGlxdWlkJywgJ3V0ZjgnKVxufTtcblxudmFyIHBhZ2VyID0gbmV3IFBhZ2VyKHRlbXBsYXRlcyk7XG4qL1xuXG4vKlxuICBsb2FkIGFsbCBkYXRhIHVwIGZyb250XG4qL1xuLypcbnBhZ2VyLm5hdmlnYXRpb24ub25fbmF2X2FjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgXG4gIHBhZ2VyLm5hdmlnYXRpb24ucm91dGUoJy8nLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGJvZHk6IHBhZ2VyLnNpdGVfZGF0YS5nZXRfZGF0YV9mb3IoWydwYWdlcycsIHJvdXRlLnJvdXRlX21hdGNoaW5nLCAnYm9keSddKVxuICAgIH07XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgXG4gICAgcGFnZXIucmVuZGVyZXIucmVuZGVyKGRhdGEsIHJvdXRlLnRlbXBsYXRlX25hbWUsIHJvdXRlLnJlbmRlcl90YXJnZXQsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zb2xlLmxvZygncmVuZGVyZWQnKTtcbiAgICB9KTtcbiAgfSk7XG4gIFxufTtcblxucGFnZXIuc2l0ZV9kYXRhLm9uX2RhdGFfbG9hZGVkID0gZnVuY3Rpb24gKGRhdGEpIHsgLy8gYnVnOiBkYXRhIGlzIHVuZGVmaW5lZCBidXQgdGhpcy5kYXRhIGlzIGNvcnJlY3RcbiAgcGFnZXIubmF2aWdhdGlvbi5pbml0KCk7IC8vIHNob3VsZCBiZSBtb3ZlZCBpbnNpZGUgcGFnZXJcbn07XG5cbnBhZ2VyLnNpdGVfZGF0YS5sb2FkKCcvZGF0YS5qc29uJyk7XG4qL1xuXG5cbi8qXG4gIGxvYWQgZGF0YSBvbiBjbGlja1xuKi9cblxuLypcbnBhZ2VyLm5hdmlnYXRpb24ub25fbmF2X2FjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICBwYWdlci5zaXRlX2RhdGEub25fZGF0YV9sb2FkZWQgPSBmdW5jdGlvbiAoZGF0YSkgeyAvLyBkYXRhIC0+IGJ1ZzogZGF0YSBpcyB1bmRlZmluZWQgYnV0IHRoaXMuZGF0YSBpcyBjb3JyZWN0XG4gICAgXG4gICAgLy8gQlVHOiBsb2FkaW5nIGRhdGEgaGVyZVxuICAgIC8vIHBhZ2VyLm5hdmlnYXRpb24ucm91dGUoJy8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBwYWdlci5yZW5kZXJlci5yZW5kZXIoZGF0YSwgdGhpcy50ZW1wX25hbWUsIHRoaXMudGFyZ2V0KTtcbiAgICAvLyB9KTtcbiAgICBcbiAgfTtcbiAgXG4gIHBhZ2VyLnNpdGVfZGF0YS5sb2FkKCcvZGF0YS5qc29uJyk7IC8vIGhvdyB0byB1c2UgdGhpcy5jdXJyZW50X3JvdXRlIGhlcmU/XG59O1xuXG5wYWdlci5uYXZpZ2F0aW9uLmluaXQoKTtcbiovIiwicmVxdWlyZSgnLi9saXF1aWZ5L2V4dGVuc2lvbnMnKTtcbnZhciBscWZ5X2RlZmF1bHRzID0gcmVxdWlyZSgnLi9saXF1aWZ5L2RlZmF1bHRzJyk7XG5cbnZhciBMaXF1aWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy50ZW1wbGF0ZXMgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGVzIHx8IHt9O1xuICB0aGlzLmRhdGEgPSB0aGlzLm9wdGlvbnMuZGF0YSB8fCB7fTtcbiAgLy90aGlzLnNldHRpbmdzID0gbHFmeS5leHRlbmQoTGlxdWlmeS5EZWZhdWx0cywgdGhpcy5vcHRpb25zLnNldHRpbmdzKTtcbn07XG5cbkxpcXVpZnkuRGVmYXVsdHMgPSBscWZ5X2RlZmF1bHRzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpcXVpZnk7XG5cblxuXG5cbi8qXG52YXIgU2l0ZURhdGEgPSByZXF1aXJlKCcuL2xpcXVpZnkvc2l0ZV9kYXRhJyk7XG52YXIgUmVuZGVyZXIgPSByZXF1aXJlKCcuL2xpcXVpZnkvcmVuZGVyZXInKTtcbnZhciBOYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi9saXF1aWZ5L25hdmlnYXRpb24nKTtcblxudmFyIFBhZ2VyID0gZnVuY3Rpb24gKHRlbXBsYXRlcykge1xuICB0aGlzLnNpdGVfZGF0YSAgID0gbmV3IFNpdGVEYXRhKCk7XG4gIHRoaXMucmVuZGVyZXIgICAgPSBuZXcgUmVuZGVyZXIodGVtcGxhdGVzKTtcbiAgdGhpcy5uYXZpZ2F0aW9uICA9IG5ldyBOYXZpZ2F0aW9uKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VyO1xuKi8iLCJ2YXIgTGlxdWlmeURlZmF1bHRzID0ge1xuICBhY3RpdmVfY2xhc3M6ICdpcy1hY3RpdmUnLFxuICBkYXRhX2F0dHJzOiB7XG4gICAgdGFyZ2V0OiAnZGF0YS1scWZ5LXRhcmdldCcsXG4gICAgdGVtcGxhdGU6ICdkYXRhLWxxZnktdGVtcGxhdGUnXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGlxdWlmeURlZmF1bHRzOyIsImxxZnkgPSB7fTtcblxubHFmeS5leHRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgZm9yICh2YXIgYXJndW1lbnQgaW4gYXJndW1lbnRzKSB7XG4gICAgZm9yICh2YXIgYSBpbiBhcmd1bWVudHNbYXJndW1lbnRdKSB7XG4gICAgICBpZiAoYXJndW1lbnRzW2FyZ3VtZW50XS5oYXNPd25Qcm9wZXJ0eShhKSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudF1bYV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmpbYV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgb2JqW2FdID0gbHFmeS5leHRlbmQob2JqW2FdLCBhcmd1bWVudHNbYXJndW1lbnRdW2FdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbYV0gPSBhcmd1bWVudHNbYXJndW1lbnRdW2FdO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4vKlxuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudF1bYV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFyIGNvcHkgPSBvYmpbYV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmpbYV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb3B5ID0ge307XG4gICAgICAgICAgICBjb3B5W2FdID0gb2JqW2FdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coYSwgY29weSk7XG5cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBvYmpbYV0gPSBscWZ5LmV4dGVuZChjb3B5LCBhcmd1bWVudHNbYXJndW1lbnRdW2FdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbYV0gPSBhcmd1bWVudHNbYXJndW1lbnRdW2FdO1xuICAgICAgICB9XG4qL1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBscWZ5OyJdfQ==
