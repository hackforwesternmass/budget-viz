define (require, exports, module) ->
  Spine = window.Spine or require('spine')
  $ = Spine.$
  Models = require('data/models')
  d3 = require('d3')


  class MapController extends Spine.Controller
    map: null

    constructor: ->
      super
      @d3LoadStates()
      @d3LoadCounties()

    d3LoadStates: =>
      svg = d3.select("##{@el.attr('id')}").append('svg')
      @states = svg.append('g').attr('id', 'states')
      @states.attr('transform', 'scale(.75, .75)')

      d3.json '/static/data/geo/gz_2010_us_040_00_20m.json', (collection) =>
        @states.selectAll('path')
          .data(collection.features)
          .enter().append('path')
          .classed('state', true)
          .attr('d', d3.geo.path().projection(d3.geo.albersUsa()))
          .attr('id', (d) ->
            d.properties.STATE
          )
          .style('fill-opacity', (d) ->
            map_data = module.config().database_data
            state_id = d.properties.STATE
            state = map_data[0][state_id]
            state.alpha * .01
          )
          .on('mouseover', ->
            d3.select(this).classed('hover', true)
            # Display fact data in tooltip?
          ).on('mouseout', ->
            d3.select(this).classed('hover', false)
          )
          .append("svg:title")
          .text((d) -> d.properties.NAME)

    d3LoadCounties: =>
      svg = d3.select("#map2").append('svg')
      @counties = svg.append('g').attr('id', 'counties')
      @counties.attr('transform', 'scale(.75, .75)')

      d3.json '/static/data/app/geo/gz_2010_us_050_00_20m.json', (collection) =>
        @counties.selectAll('path')
          .data(collection.features)
          .enter().append('path')
          .classed('state', true)
          .attr('d', d3.geo.path().projection(d3.geo.albersUsa()))
          .attr('id', (d) ->
            "#{d.properties.STATE}#{d.properties.COUNTY}"
          )
          .style('fill-opacity', (d) ->
            county_fips = parseInt(d.properties.COUNTY, 10)
            state_fips  = parseInt(d.properties.STATE, 10)
            county_fips /= 200
            if county_fips < 1
              county_fips
            else
              1
          )
          .on('mouseover', ->
            d3.select(this).classed('hover', true)
            # Display fact data in tooltip?
          ).on('mouseout', ->
            d3.select(this).classed('hover', false)
          )

  exports =
    MapController: MapController

