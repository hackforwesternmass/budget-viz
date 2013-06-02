(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require, exports, module) {
    var $, Controllers, MapViewController, Models, Spine;

    Spine = window.Spine || require('spine');
    $ = Spine.$;
    Controllers = require('data/controllers');
    Models = require('data/models');
    MapViewController = (function(_super) {
      __extends(MapViewController, _super);

      function MapViewController() {
        MapViewController.__super__.constructor.apply(this, arguments);
        this.mapController = new Controllers.MapController({
          el: $('div[data-controller=map]', this.el)
        });
      }

      return MapViewController;

    })(Spine.Controller);
    return exports = {
      MapViewController: MapViewController
    };
  });

}).call(this);
