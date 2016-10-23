/**
 * Linter tasks for application files. Registered tasks:
 *   - lint
 *   - lint:js
 *   - lint:js:app
 *   - lint:js:build
 *   - lint:js:test
 *
 * @param {Object} grunt Reference to the current Grunt process.
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('gruntify-eslint');

  grunt.config.set('eslint', {
    app: {
      src: [
        './<%= source.app %>/scripts/**/*.js',
        './build/**/*.js'
      ]
    },
    build: {
      src: [
        './<%= source.build %>/**/*.js',
        'Gruntfile.js'
      ]
    },
    test: {
      src: [
        './<%= source.test %>/spec/**/*.js'
      ]
    }
  });

  // Register the lint tasks.
  grunt.registerTask('lint:js:app', ['eslint:app']);
  grunt.registerTask('lint:js:build', ['eslint:build']);
  grunt.registerTask('lint:js:test', ['eslint:test']);
  grunt.registerTask('lint:js', [
    'lint:js:app',
    'lint:js:build',
    'lint:js:test'
  ]);
  grunt.registerTask('lint', ['lint:js']);
};
