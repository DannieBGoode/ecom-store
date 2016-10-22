module.exports = function(grunt) {
  grunt.config.set('jscs', {
    options: {
      config: '.jscsrc',
      verbose: true
    },
    all: {
      src: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    test: {
      src: ['test/spec/{,*/}*.js']
    }
  });
};
