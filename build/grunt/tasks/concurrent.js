module.exports = function(grunt) {
  grunt.config.set('concurrent', {
    server: [
      'copy:styles'
    ],
    test: [
      'copy:styles'
    ],
    dist: [
      'copy:styles',
      'imagemin',
      'svgmin'
    ]
  });
};
