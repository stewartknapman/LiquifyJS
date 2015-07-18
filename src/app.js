/*
  Specing out app - 19/7/15
  This is a general overview of how things should work.
  
  Important notes:
  - built to work with Shopify and Siteleaf so needs to work the same for both
  - uses liquid for rendering templates
  - gloabl flag/option for fading in new content vs rendering it straight away

  Notes for Shopify:
  - /index works for /
    /index.json returns rendered html of home page (weird?!)
    so probably need a way of getting the whole sites data i.e. index?view=site_json
    need to test this.
    Also most routes that are new pages would probaly look the same if we had the whole sites data.
  - needs a way of getting liquid includes!
*/

// INIT LIQUIFY
var lqify = new Liquify();

// MAIN ROUTES FOR APP
// params:
// - route. String or Regex String of route. notes: escape slashes, wildcard?
// - callback function
// - history api flag (boolean)[optional]
//   -- false: don't update the url becasue we are rendering a partial on the page i.e. modal content/ cart count, not the pages content.

// posible way to cache sites global data:
lqify.data('/path_to_global_site_data.json');

lqify.route('/page/*', function (lqify, route) {
  // params:
  // - lqify object (can also use 'this')
  // - matched_route object contains the route info:
  //   -- key: the route string (or regex str) passed to lqify.route
  //   -- matched: the actual route that was matched
  //   -- parts: array containing the matched route but split on '/'
  
  
  // Standard usage:
  
  // page data returned as json
  // givin a url to collect info from: route.matched -> /page/our-story
  var page_data = lqify.data(route.matched+'.json');
  
  // template returned as raw liquid
  // givin a url of the template
  var template = lqify.template(route.matched+'?view=raw');
  
  // render template to screen
  // params:
  // - template
  // - page_data
  // - element selector to insert rendered template into
  lqify.render(template, page_data, '[data-lqify-main]');
});

// PROGRESS EVENTS
lqify.on('progressStart', function () {
  // event fired when a route change is initiated i.e. user clicks a link or the back button
  // Good for adding progress bar to page
});

lqify.on('progress', function (progress) {
  // event fired during progress.
  // definitely from ajax request
  // possibly from other internal methods (meaning ajax progress is not 1-100%)
  // Good for updating progress bar
});

lqify.on('progressEnd', function () {
  // event fired when the page has finished being rendered
  // Good for cleaning up progress bar
});