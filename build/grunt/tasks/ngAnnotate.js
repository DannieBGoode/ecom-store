module.exports = function(grunt) {
  grunt.config.set('ngAnnotate', {
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/concat/scripts',
        src: '*.js',
        dest: '.tmp/concat/scripts'
      }]
    }
  });
};
