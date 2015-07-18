var liquify = function () {
  this.router = new Router();
  this.data = new Data();
  this.templates = new Templates();
  this.renderer = new Renderer();
  
  this._add_event_listeners();
};

// PUBLIC

liquify.prototype.route = function (key, callback, skip_history) {
  this.router.add(key, callback, skip_history);
};

liquify.prototype.data = function (url) {
  return this.data.collect_data_from(url);
};

liquify.prototype.template = function (url) {
  return this.templates.collect_template_from(url);
};

liquify.prototype.render = function (template, data, selector) {
  this.renderer.render(template, data, selector);
};

// PRIVATE

liquify.prototype._add_event_listeners = function () {
  // listen for and fire progress events
};

module.exports = liquify;