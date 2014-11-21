/*
var $ = require('jquery');
var tinyliquid = require('tinyliquid');

var Renderer = function (templates) {
  this.templates = templates;
};

Renderer.prototype.render = function (data, template_name, target, cb) {
  var _this = this;
  var locals = {
    locals: data
  };
  var template = this.templates[template_name];
  var render = tinyliquid.compile(template);
  var context = tinyliquid.newContext(locals);
  
  // set tinyliquid extenstions
  context.onInclude(function (name, callback) {
    _this.onInclude(name, callback);
  });
  
  render(context, function (err) {
    if (err) console.error(err);
    
    var content = context.getBuffer();
    _this._display_content(content, target, cb);
  });
};

Renderer.prototype._display_content = function (content, target, cb) {
  var _this = this;
  $(target).fadeOut(300, function(){
    $(this).html(content).fadeIn(300, function () {
      if (cb) cb.apply(_this);
    });
  });
};

// Tinyliquid extenstions
Renderer.prototype.onInclude = function (name, callback) {
  name = name.replace('includes/', '');
  var template = this.templates[name];
  var ast = tinyliquid.parse(template);
  callback(false, ast);
};

module.exports = Renderer;
*/