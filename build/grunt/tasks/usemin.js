module.exports = function(grunt) {
  grunt.config.set('usemin', {
    html: ['<%= yeoman.dist %>/{,*/}*.html'],
    css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
    js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
    options: {
      assetsDirs: [
        '<%= yeoman.dist %>',
        '<%= yeoman.dist %>/images',
        '<%= yeoman.dist %>/styles'
      ],
      patterns: {
        js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
      }
    }
  });
};
