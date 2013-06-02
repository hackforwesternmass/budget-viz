define (require, exports, module) ->
  Spine = window.Spine or require('spine')
  $ = Spine.$
  Controllers = require('data/controllers')
  Models = require('data/models')


  class MapViewController extends Spine.Controller
    constructor: ->
      super

      @mapController = new Controllers.MapController(
        el: $('div[data-controller=map]', @el)
      )

  exports =
    MapViewController: MapViewController

