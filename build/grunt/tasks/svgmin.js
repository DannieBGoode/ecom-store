module.exports = function(grunt) {
  grunt.config.set('svgmin', {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.app %>/images',
        src: '{,*/}*.svg',
        dest: '<%= yeoman.dist %>/images'
      }]
    }
  });
};
