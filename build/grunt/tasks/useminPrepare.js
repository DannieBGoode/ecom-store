module.exports = function(grunt) {
  grunt.config.set('useminPrepare', {
    html: '<%= yeoman.app %>/index.html',
    options: {
      dest: '<%= yeoman.dist %>',
      root: './',
      flow: {
        html: {
          steps: {
            js: ['concat', 'uglifyjs'],
            css: ['cssmin']
          },
          post: {}
        }
      }
    }
  });
};
