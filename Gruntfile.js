module.exports = function(grunt) {

  var sass    = require('node-sass');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      css: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/base.css': 'sass/base.scss',
          'css/patterns.css': 'sass/patterns.scss',
          'css/utils.css': 'sass/utils.scss'
        }
      }
    },
    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: '{,*/}*.css',
          dest: 'css/'
        }]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css'],
        dest: 'css/',
        ext: '.css'
      }
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);
};
