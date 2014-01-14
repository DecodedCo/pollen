module.exports = function(grunt) {

  var sass    = require('node-sass')
    , bourbon = require('node-bourbon').includePaths
    , neat    = require('node-neat').includePaths;

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      css: {
        options: {
          includePaths: neat,
          outputStyle: 'expanded'
        },
        files: {
          'css/styles.css': 'sass/styles.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
};