require('./extensions');
var $       = require('jquery');
var Liquid  = require('liquid.js');

var Renderer = function (templates) {
  this.templates = templates;
  var _this = this;
  
  // include handler for Liquid
  Liquid.readTemplateFile = function(path) {
    return _this.templates[lqfy.last_from_path(path)];
  };
};

Renderer.prototype.render_to_page = function (data, template_name, target, cb) {
  var content = this.render(data, template_name);
  this._display_content(content, target, cb);
};

Renderer.prototype.render = function (data, template_name) {
  var template = this.templates[template_name];  
  var liquid = Liquid.parse(template);
  return liquid.render(data);
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