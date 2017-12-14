module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          dist: {
            files: [{
              expand: true,
              cwd: 'css/sass',
              src: ['grid-ui.scss'],
              dest: 'css',
              ext: '.css'
            }]
          }
        },

        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('pixrem')(),
                    require('autoprefixer')({browsers: 'last 2 versions'}),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'css/grid-ui.css',
                dest: 'css/grid-ui.min.css'
            }
        },

        watch: {
            grunt: {
                options: {
                reload: true
                },
                files: ['Gruntfile.js']
            },
            css: {
                files: ['css/sass/*.scss', 'css/sass/**/*.scss'],
                tasks: ['sass', 'postcss']
            }
        },

        cssbeautifier : {
            files : ["css/grid-ui.css"]
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-cssbeautifier');

    grunt.registerTask('default', ['watch']);

}
