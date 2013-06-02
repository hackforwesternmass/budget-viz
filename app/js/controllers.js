(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require, exports, module) {
    var $, MapController, Models, Spine, d3;

    Spine = window.Spine || require('spine');
    $ = Spine.$;
    Models = require('data/models');
    d3 = require('d3');
    MapController = (function(_super) {
      __extends(MapController, _super);

      MapController.prototype.map = null;

      function MapController() {
        this.d3LoadCounties = __bind(this.d3LoadCounties, this);
        this.d3LoadStates = __bind(this.d3LoadStates, this);        MapController.__super__.constructor.apply(this, arguments);
        this.d3LoadStates();
        this.d3LoadCounties();
      }

      MapController.prototype.d3LoadStates = function() {
        var svg,
          _this = this;

        svg = d3.select("#" + (this.el.attr('id'))).append('svg');
        this.states = svg.append('g').attr('id', 'states');
        this.states.attr('transform', 'scale(.75, .75)');
        return d3.json('/static/data/geo/gz_2010_us_040_00_20m.json', function(collection) {
          return _this.states.selectAll('path').data(collection.features).enter().append('path').classed('state', true).attr('d', d3.geo.path().projection(d3.geo.albersUsa())).attr('id', function(d) {
            return d.properties.STATE;
          }).style('fill-opacity', function(d) {
            var map_data, state, state_id;

            map_data = module.config().database_data;
            state_id = d.properties.STATE;
            state = map_data[0][state_id];
            return state.alpha * .01;
          }).on('mouseover', function() {
            return d3.select(this).classed('hover', true);
          }).on('mouseout', function() {
            return d3.select(this).classed('hover', false);
          }).append("svg:title").text(function(d) {
            return d.properties.NAME;
          });
        });
      };

      MapController.prototype.d3LoadCounties = function() {
        var svg,
          _this = this;

        svg = d3.select("#map2").append('svg');
        this.counties = svg.append('g').attr('id', 'counties');
        this.counties.attr('transform', 'scale(.75, .75)');
        return d3.json('/static/data/app/geo/gz_2010_us_050_00_20m.json', function(collection) {
          return _this.counties.selectAll('path').data(collection.features).enter().append('path').classed('state', true).attr('d', d3.geo.path().projection(d3.geo.albersUsa())).attr('id', function(d) {
            return "" + d.properties.STATE + d.properties.COUNTY;
          }).style('fill-opacity', function(d) {
            var county_fips, state_fips;

            county_fips = parseInt(d.properties.COUNTY, 10);
            state_fips = parseInt(d.properties.STATE, 10);
            county_fips /= 200;
            if (county_fips < 1) {
              return county_fips;
            } else {
              return 1;
            }
          }).on('mouseover', function() {
            return d3.select(this).classed('hover', true);
          }).on('mouseout', function() {
            return d3.select(this).classed('hover', false);
          });
        });
      };

      return MapController;

    })(Spine.Controller);
    return exports = {
      MapController: MapController
    };
  });

}).call(this);
