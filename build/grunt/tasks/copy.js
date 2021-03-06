module.exports = function(grunt) {
  grunt.config.set('copy', {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>',
        src: [
          '*.{ico,png,txt}',
          '*.html',
          'mockdata/*.json',
          'images/{,*/}*.{webp}',
          'styles/fonts/{,*/}*.*'
        ]
      }, {
        expand: true,
        cwd: '.tmp/images',
        dest: '<%= yeoman.dist %>/images',
        src: ['generated/*']
      }, {
        expand: true,
        cwd: 'bower_components/bootstrap/dist',
        src: 'fonts/*',
        dest: '<%= yeoman.dist %>'
      }]
    },
    styles: {
      expand: true,
      cwd: '<%= yeoman.app %>/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }
  });
};
