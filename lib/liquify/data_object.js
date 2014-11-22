require('./extensions');

var DataObject = function () {
  Object.defineProperty(this, 'size', {
    get: function () { return this.length; }
  });
};

DataObject.prototype = [];

// Builder
var DataObjectBuilder = function (data) {
  this.data = data;
  var dataObj;
  
  if (Array.isArray(data)) {
    dataObj = this._from_array();
  } else if (typeof data === 'object') {
    dataObj = this._from_object();
  } else {
    dataObj = data;
  }
  
  return dataObj;
};

DataObjectBuilder.prototype._from_array = function () {
  var dataObj = new DataObject();
  for (var i = 0; i < this.data.length; i++) {
    var item = this.data[i];
    dataObj.push(item);
    var key = this._object_key_for_array(item) || i;
    Object.defineProperty(dataObj, key, {
      value: item
    });
  }
  
  Object.defineProperty(dataObj, 'first', {
    value: dataObj[0]
  });
  
  Object.defineProperty(dataObj, 'last', {
    value: dataObj[dataObj.length - 1]
  });
  
  return dataObj;
};

DataObjectBuilder.prototype._from_object = function () {
  
};

DataObjectBuilder.prototype._object_key_for_array = function (obj) {
  return obj.slug || obj.handle;
};


module.exports = DataObjectBuilder;