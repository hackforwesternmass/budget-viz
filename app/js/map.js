(function() {
  define(['jquery', 'd3', 'data/app'], function($, d3, controllers) {
    return new controllers.MapViewController({
      el: $('#database-app')
    });
  });

}).call(this);
