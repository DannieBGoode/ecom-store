module.exports = function(grunt) {
  grunt.config.set('cdnify', {
    dist: {
      html: ['<%= yeoman.dist %>/*.html']
    }
  });
};
