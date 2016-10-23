module.exports = function(grunt) {
  grunt.config.set('watch', {
    bower: {
      files: ['bower.json'],
      tasks: ['wiredep']
    },
    js: {
      files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
      tasks: ['newer:eslint:all', 'newer:jscs:all'],
      options: {
        livereload: '<%= connect.options.livereload %>'
      }
    },
    jsTest: {
      files: ['test/spec/{,*/}*.js'],
      tasks: ['newer:eslint:test', 'newer:jscs:test', 'karma']
    },
    styles: {
      files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
      tasks: ['newer:copy:styles', 'postcss']
    },
    gruntfile: {
      files: ['Gruntfile.js']
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        '<%= yeoman.app %>/{,*/}*.html',
        '.tmp/styles/{,*/}*.css',
        '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  });
};
