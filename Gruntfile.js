module.exports = function(grunt) {

  var sass    = require('node-sass');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      css: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/base.css': 'sass/base.scss',
          'css/din-family.css': 'sass/din-family.scss',
          'css/links-forms.css': 'sass/links-forms.scss',
          'css/patterns.css': 'sass/patterns.scss',
          'css/navigation.css': 'sass/navigation.scss',
          'css/utils.css': 'sass/utils.scss'
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