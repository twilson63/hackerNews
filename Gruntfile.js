module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: [
        'app/app.js',
        'app/controllers/**/*.js'
      ]
    },
    concat: {
      dev: {
        src: [
          'app/app.js',
          'app/controllers/**/*.js'
        ],
        dest: 'hackerNews.js'
      }
    },
    connect: {
      server: {
        options: {
          base: '.',
          port: 3000
        }
      }
    },
    watch: {
      dev: {
        files: ['app/app.js',
          'app/controllers/**/*.js'],
        tasks: ['jshint', 'concat']
      }
    }
    // ,
    // concurrent: {
    //   
    // }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concurrent');
  
  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('default', ['jshint','concat']);
}