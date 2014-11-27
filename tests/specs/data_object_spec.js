/* jslint node: true */
/* global describe, it, expect */

var DataObject = require('../../lib/liquify/data_object.js');

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
  
  var my_nested = {
    "title": "My Site",
    "pages": my_array
  };
  
  it('takes a json array and turns it into a data object', function () {
    var my_data = new DataObject(my_array);
    
    expect(my_data.first.title).toBe("My Page 1");
    expect(my_data.first.slug).toBe("my-page-1");
    expect(my_data.first.body).toBe("This is my first page");
    
    expect(my_data.last.title).toBe("My Page 3");
    expect(my_data['my-page-2'].title).toBe("My Page 2");
    
    expect(my_data.size).toBe(3);
    expect(my_data.length).toBe(3);
    
    for (var i = 0; i < my_data.length; i++) {
      expect(my_data[i].title).toBe( 'My Page ' + (i+1) );
    }
  });
  
  it('takes a json object and turns it into a data object', function () {
    var my_data = new DataObject(my_json);
    
    expect(my_data.first.title).toBe("My Page 1");
    expect(my_data.first.slug).toBe("my-page-1");
    expect(my_data.first.body).toBe("This is my first page");
    
    expect(my_data.last.title).toBe("My Page 3");
    expect(my_data['my-page-2'].title).toBe("My Page 2");
    expect(my_data.size).toBe(3);
    expect(my_data.length).toBe(3);
    
    for (var i = 0; i < my_data.length; i++) {
      expect(my_data[i].title).toBe( 'My Page ' + (i+1) );
    }
  });
  
  it('works recursively', function () {
    var my_data = new DataObject(my_nested);
    
    expect(my_data.title).toBe('My Site');
    
    expect(my_data.pages.first.title).toBe("My Page 1");
    expect(my_data.pages.first.slug).toBe("my-page-1");
    expect(my_data.pages.first.body).toBe("This is my first page");
    
    expect(my_data.pages.last.title).toBe("My Page 3");
    expect(my_data.pages['my-page-2'].title).toBe("My Page 2");
    
    expect(my_data.pages.size).toBe(3);
    expect(my_data.pages.length).toBe(3);
    
    for (var i = 0; i < my_data.pages.length; i++) {
      expect(my_data.pages[i].title).toBe( 'My Page ' + (i+1) );
    }
  });
  
});