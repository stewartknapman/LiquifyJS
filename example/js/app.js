var fs = require('fs');
var Liquify = require('../../lib/liquify');

var templates = {
  temp: fs.readFileSync('./example/liquid/template.liquid', 'utf8')
};

var liquify = new Liquify({
  templates: templates
});

console.log(liquify);

liquify.action(function () {
  
  liquify.route('/', function () {
    var data = {
      body: 'hello liquify'
    };
    liquify.render(data);
  });
  
  liquify.route('/*', function () {
    console.log('routing /*'); // should not be called
  });
  
});