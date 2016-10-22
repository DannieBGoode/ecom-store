module.exports = function(grunt) {
  grunt.config.set('ngtemplates', {
    dist: {
      options: {
        module: 'testApp',
        htmlmin: '<%= htmlmin.dist.options %>',
        usemin: 'scripts/scripts.js'
      },
      cwd: '<%= yeoman.app %>',
      src: 'views/{,*/}*.html',
      dest: '.tmp/templateCache.js'
    }
  });
};
