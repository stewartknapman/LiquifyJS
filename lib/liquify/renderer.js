var $       = require('jquery');
var Liquid  = require('liquid.js');

var Renderer = function (parent) {
  this.parent = parent;
  var _this = this;
  
  // include handler for Liquid
  Liquid.readTemplateFile = function(path) {
    path = path.replace('includes/', ''); // need this for siteleaf
    return _this.parent.templates[path];
  };
};

Renderer.prototype.render = function (data, template_name, target, cb) {
  var template = this.parent.templates[template_name];  
  var liquid = Liquid.parse(template);
  var content = liquid.render(data);
  this._display_content(content, target, cb);
};

// Private
Renderer.prototype._display_content = function (content, target, cb) {
  var _this = this;
  $(target).fadeOut(300, function(){
    $(this).html(content).fadeIn(300, function () {
      if (cb) cb.apply(_this);
    });
  });
};

module.exports = Renderer;