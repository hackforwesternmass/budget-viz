define (require, exports, module) ->
  Spine = window.Spine or require('spine')
  $ = Spine.$

  class BaseModel extends Spine.Model
    @configure 'Base', @attributes...

    @tryFind: (id) ->
      try
        return @find(id)
      catch e
        return null

  exports = null

