// Empties folders to start fresh
module.exports = function(grunt) {
  grunt.config.set('clean', {
    dist: {
      files: [{
        dot: true,
        src: [
          '.tmp',
          '<%= yeoman.dist %>/{,*/}*',
          '!<%= yeoman.dist %>/.git{,*/}*'
        ]
      }]
    },
    server: '.tmp'
  });
};
