module.exports = function(grunt) {


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Re-usable filesystem paths (these shouldn't be modified)
        paths: {
          src:        'source',
          dist:       'built'
        },

        // Builds the site with Jekyll
        jekyll: {
            dist: {
                options: {
                    src: '<%= paths.src %>',
                    dest: '<%= paths.dist %>'
                }
            }
        },


        // Inlines your css
        premailer: {
          html: {
            options: {
              removeComments: true
            },
            files: [{
                expand: true,
                src: ['<%= paths.dist %>/*.html','<%= paths.dist %>/**/*.html'],
                dest: ''
            }]
          },
          txt: {
            options: {
              mode: 'txt'
            },
            files: [{
                expand: true,
                src: ['<%= paths.dist %>/*.html'],
                dest: '',
                ext: '.txt'
            }]
          }
        }

    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-premailer');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['jekyll','premailer']);
    grunt.registerTask('jekkthat', ['jekyll']);
};