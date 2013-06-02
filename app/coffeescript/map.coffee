define ['jquery', 'd3', 'data/app'], ($, d3, controllers) ->
  new controllers.MapViewController(el: $('#database-app'))
