// The actual grunt server settings
module.exports = function(grunt) {
  var appConfig = grunt.config.get(['yeoman']);

  grunt.config.set('connect', {
    options: {
      port: 9000,
      hostname: 'localhost',
      livereload: 35729
    },
    livereload: {
      options: {
        open: true,
        middleware: function(connect) {
          return [
            connect.static('.tmp'),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect().use(
              '/app/styles',
              connect.static('./app/styles')
            ),
            connect.static(appConfig.app)
          ];
        }
      }
    },
    test: {
      options: {
        port: 9001,
        middleware: function(connect) {
          return [
            connect.static('.tmp'),
            connect.static('test'),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect.static(appConfig.app)
          ];
        }
      }
    },
    dist: {
      options: {
        open: true,
        base: '<%= yeoman.dist %>'
      }
    }
  });
};
