imodule.exports = (grunt) ->
  grunt.initConfig(
    pkg: grunt.file.readJSON('package.json')

    coffee:
      data:
        files:
          '../data/static/data/app/js/app.js': '../data/static/data/app/coffeescript/app.coffee'
          '../data/static/data/app/js/controllers.js': '../data/static/data/app/coffeescript/controllers.coffee'
          '../data/static/data/app/js/map.js': '../data/static/data/app/coffeescript/map.coffee'
          '../data/static/data/app/js/models.js': '../data/static/data/app/coffeescript/models.coffee'

    requirejs:
      data:
        options:
          optimize: 'uglify2'
          generateSourceMaps: true
          baseUrl: "../data/static/data/"
          name: "app/js/map"
          out: "../data/static/data/app/build/map.js"
          mainConfigFile:'../data/static/data/config.js'
          insertRequire: ['app/js/map']
          wrap: true
          preserveLicenseComments: false
  )

  grunt.registerTask('data', [
    'coffee:data',
    'requirejs:data'
  ])
  grunt.loadNpmTasks('grunt-contrib-requirejs')
  grunt.loadNpmTasks('grunt-contrib-coffee')
