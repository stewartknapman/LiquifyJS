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