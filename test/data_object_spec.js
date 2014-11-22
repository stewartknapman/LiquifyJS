/* jslint node: true */
/* global describe, it, expect */

var DataObject = require('../lib/liquify/data_object.js');

describe('DataObject', function () {
  
  var my_array = [
    {
      "title": "My Page 1",
      "slug": "my-page-1",
      "body": "This is my first page"
    },
    {
      "title": "My Page 2",
      "slug": "my-page-2",
      "body": "This is my second page"
    },
    {
      "title": "My Page 3",
      "slug": "my-page-3",
      "body": "This is my third page"
    }
  ];
  var my_json = {
    "my-page-1": {
      "title": "My Page 1",
      "slug": "my-page-1",
      "body": "This is my first page"
    },
    "my-page-2": {
      "title": "My Page 2",
      "slug": "my-page-2",
      "body": "This is my second page"
    },
    "my-page-3": {
      "title": "My Page 3",
      "slug": "my-page-3",
      "body": "This is my third page"
    }
  };
  
  it('takes a json array and turns it into a data object', function () {
    var my_data = new DataObject(my_array);
    
    console.log('---');
    console.log(my_data);
    console.log(my_data.length);
    
    for (var d in my_data) {
      console.log('data: ', d, my_data[d]);
    }
    for (var i = 0; i < my_data.length; i++) {
      console.log('for: ', i, my_data[i]);
    }
    
    expect(my_data.first).toEqual({
      "title": "My Page 1",
      "slug": "my-page-1",
      "body": "This is my first page"
    });
    expect(my_data.last).toEqual({
      "title": "My Page 3",
      "slug": "my-page-3",
      "body": "This is my third page"
    });
    expect(my_data['my-page-2']).toEqual({
      "title": "My Page 2",
      "slug": "my-page-2",
      "body": "This is my second page"
    });
    expect(my_data.size).toBe(3);
    expect(my_data.length).toBe(3);
  });
  
  xit('takes a json object and turns it into a data object', function () {
/*
    var my_data = new DataObject(my_json);
    
    console.log('---');
    console.log(my_data);
    console.log(my_data.length);
    
    for (var d in my_data) {
      console.log('data: ', d);
    }
    for (var i = 0; i < my_data.length; i++) {
      console.log('for: ', i);
    }
*/
    
/*
    expect(my_data.first).toEqual({
      "title": "My Page 1",
      "slug": "my-page-1",
      "body": "This is my first page"
    });
    expect(my_data.last).toEqual({
      "title": "My Page 3",
      "slug": "my-page-3",
      "body": "This is my third page"
    });
    expect(my_data['my-page-2']).toEqual({
      "title": "My Page 2",
      "slug": "my-page-2",
      "body": "This is my second page"
    });
    expect(my_data.size).toBe(3);
    expect(my_data.length).toBe(3);
*/
  });
  
  xit('works in a loop');
  
});