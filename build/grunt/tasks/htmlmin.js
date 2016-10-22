module.exports = function(grunt) {
  grunt.config.set('htmlmin', {
    dist: {
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        collapseBooleanAttributes: true,
        removeCommentsFromCDATA: true
      },
      files: [{
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['*.html'],
        dest: '<%= yeoman.dist %>'
      }]
    }
  });
};
