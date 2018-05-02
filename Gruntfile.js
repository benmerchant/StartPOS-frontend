module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
          'app/vendor/jquery.js',
          'app/vendor/bootstrap.js',
          'app/vendor/angular.js',
          'app/vendor/angular-route.js',
          'app/vendor/angular-sanitize.js',
          'app/module.js',
          'app/components/**/*.js',
          'app/views/**/*.js'
        ],
        dest: 'assets/js/<%= pkg.name %>Grunt.min.js'
      }
    },
    sass: {
      dev: {
        files: {'assets/css/bootstrap.css': 'assets/scss/bootstrap.scss'}
      },
      production: {
        files: {'assets/css/bootstrap.css': 'assets/scss/bootstrap.scss'}
      }
    },
    watch: {
      js: {
        files: ['app/**/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['assets/scss/*.scss'],
        tasks: ['sass:dev'],
        options: { livereload: false }
      },
      css: {
        files: ['assets/css/bootstrap.css'],
        options: { livereload: true }
      }
    }
  });

  // load the plugin that provides the uglify task
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  // set up default task
  grunt.registerTask('default', ['uglify', 'sass:dev']);
};
