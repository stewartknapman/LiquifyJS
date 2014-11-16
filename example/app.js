var fs = require('fs');
var Pager = require('../lib/pager');

var templates = {
  temp: fs.readFileSync('./example/template.liquid', 'utf8')
};

var pager = new Pager(templates);

/*
  load all data up front
*/
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