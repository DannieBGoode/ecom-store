module.exports = function(grunt) {
  grunt.config.set('filerev', {
    dist: {
      src: [
        '<%= yeoman.dist %>/scripts/{,*/}*.js',
        '<%= yeoman.dist %>/styles/{,*/}*.css',
        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        '<%= yeoman.dist %>/styles/fonts/*'
      ]
    }
  });
};
