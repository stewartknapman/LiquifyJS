require('./extensions');

// Data object wrapper
var DataObject = function () {
};

DataObject.prototype = {};

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
    var key = this._object_key_for_array(item);
    if (key !== undefined) dataObj = _this._set_item(dataObj, key, item); // prop key name
    dataObj = _this._set_item(dataObj, i, item, true); // array name key
  }
  
  dataObj = _this._set_item(dataObj, 'length', this.data.length);
  dataObj = _this._set_item(dataObj, 'size', this.data.length);
  dataObj = _this._set_item(dataObj, 'first', this.data[0]);
  dataObj = _this._set_item(dataObj, 'last', this.data[this.data.length - 1]);
  
  return dataObj;
};

DataObjectBuilder.prototype._from_object = function () {
  var _this = this;
  var dataObj = new DataObject();
  var n = 0;
  for (var i in this.data) {
    if (this.data.hasOwnProperty(i)) {
      var item = _this._new_item(this.data[i]);
      dataObj = _this._set_item(dataObj, i, item, true);
      dataObj = _this._set_item(dataObj, n, item);
      n++;
    }
  }
  
  dataObj = _this._set_item(dataObj, 'length', n);
  dataObj = _this._set_item(dataObj, 'size', n);
  dataObj = _this._set_item(dataObj, 'first', dataObj[0]);
  dataObj = _this._set_item(dataObj, 'last', dataObj[n - 1]);
  
  return dataObj;
};


DataObjectBuilder.prototype._new_item = function (item) {
  if (typeof item === 'object') item = new DataObjectBuilder(item);
  return item;
};

DataObjectBuilder.prototype._set_item = function (dataObj, key, item, enumerable) {
  if (enumerable === undefined) enumerable = false;
  Object.defineProperty(dataObj, key, {
    value: item,
    enumerable: enumerable
  });
  return dataObj;
};

DataObjectBuilder.prototype._object_key_for_array = function (obj) {
  return obj.slug || obj.handle;
};


module.exports = DataObjectBuilder;