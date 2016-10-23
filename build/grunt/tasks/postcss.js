module.exports = function(grunt) {
  grunt.config.set('postcss', {
    options: {
      processors: [
        require('autoprefixer-core')({browsers: ['last 1 version']})
      ]
    },
    server: {
      options: {
        map: true
      },
      files: [{
        expand: true,
        cwd: '.tmp/styles/',
        src: '{,*/}*.css',
        dest: '.tmp/styles/'
      }]
    },
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/styles/',
        src: '{,*/}*.css',
        dest: '.tmp/styles/'
      }]
    }
  });
};
