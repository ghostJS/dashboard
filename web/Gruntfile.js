module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
          sass: {
            dist: {
              files: {
                'css/main.css': '**/*.scss'
              }
            }
          },

        cssmin: {
            combine: {
                files: {
                    'css/main.min.css': ['css/main.css']
                }
            }
        },

//        uglify: {
//            combine: {
//                files: {
//                    'dashboard/js/apps.min.js': ['dashboard/js/app.js']
//                }
//            }
//        },

        watch: {
          css: {
            files: '**/*.scss',
            tasks: ['sass', 'cssmin'],
          }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    
    grunt.registerTask('default', ['cssmin', 'sass'])


};