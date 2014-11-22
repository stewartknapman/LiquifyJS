# Liquify JS

A simple browser framework that changes a pages content by rendering liquid templates.

The idea is to allow you to use already existing liquid templates from your Shopify or Siteleaf theme to render out the updated content, reducing the amount of duplicate code.

## Data loading

Data will be storeed and then used to pass through to the renderer as liquid locales.

1. Load data upfront by giving Liquify a json object or a url to load a json object from.

    var lqfy = new Liquify({
      data: { ... },
      data_url: '/data.json'
    });

2. Load data from a url on a nav action.

3. A combination of both. i.e. site globals upfront and page specific data on nav click.
 (Data will be added to the data store therefore caching it)
 
## Actions

    var lqfy = new Liquify({
      templates: { ... }
    });
        
    lqfy.action(function () {
      
      // do stuff here
      
    });
    
### All data loaded upfront

    lqfy.action(function () {
      
      lqfy.route('/', function () {
        
        var data = {
          site: lqfy.data,
          current: lqfy.get_data_for(['pages', lqfy.current_slug])
        }
        
        lqfy.render(data, lqfy.current_template, lqfy.current_target);
      });
      
    });
    
### Loaded on action

    lqfy.action(function () {
      
      lqfy.on_data_from(lqfy.current_url, function () {
      
        lqfy.route('/', function () {
          
          var data = {
            site: lqfy.data,
            current: lqfy.get_data_for(['pages', lqfy.current_slug])
          }
          
          lqfy.render(data, lqfy.current_template, lqfy.current_target);
        });
      
      });
      
    });