require('./extensions');

// Data object wrapper
var DataObject = function () {
  Object.defineProperty(this, 'size', {
    get: function () { return this.length; }
  });
  
  Object.defineProperty(this, 'first', {
    get: function () { return this[0]; }
  });
  
  Object.defineProperty(this, 'last', {
    get: function () { return this[this.length - 1]; }
  });
};

DataObject.prototype = [];

// Data object builder
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
  var _this = this;
  var dataObj = new DataObject();
  
  for (var i = 0; i < this.data.length; i++) {
    var item = _this._new_item(this.data[i]);
    var key = this._object_key_for_array(item) || i;
    dataObj = _this._set_item(dataObj, key, item);
  }
  return dataObj;
};

DataObjectBuilder.prototype._from_object = function () {
  var _this = this;
  var dataObj = new DataObject();
  
  for (var i in this.data) {
    if (this.data.hasOwnProperty(i)) {
      var item = _this._new_item(this.data[i]);
      dataObj = _this._set_item(dataObj, i, item);
    }
  }
  return dataObj;
};


DataObjectBuilder.prototype._new_item = function (item) {
  if (typeof item === 'object') item = new DataObjectBuilder(item);
  return item;
};

DataObjectBuilder.prototype._set_item = function (dataObj, key, item) {
  dataObj.push(item);
  Object.defineProperty(dataObj, key, {
    value: item
  });
  return dataObj;
};

DataObjectBuilder.prototype._object_key_for_array = function (obj) {
  return obj.slug || obj.handle;
};


module.exports = DataObjectBuilder;