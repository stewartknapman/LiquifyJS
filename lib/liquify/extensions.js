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
      }
    }
  }
  return obj;
};

module.exports = lqfy;