module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dest/feeds_harness.js': ['public/js/feeds_harness.js'],
                    'dest/templates.js': ['public/js/templates.js']
                }
            }
        },
        concat: {
            js: {
//                src: ['dest/feeds_harness.js', 'dest/templates.js', 'dest/slick.min.js'],
//                dest: 'public/build/scripts.js'
            },
            css: {
//                src: ['public/css/t1.css', 'public/css/t2.css'],
//                dest: 'public/build/style.css'
            }
        },
        watch: {
            js: {
                files: ['public/js/**/*.js'],
                tasks: ['concat:js']
            },
            css: {
                files: ['public/css/**/*.css'],
                tasks: ['concat:css']
            },
            less: {
                files: ['**/*.less'],
                tasks: ['less']
            },
            cssmin:{
                files:['public/css/master.css'],
                tasks: ['cssmin']
            },
            handlebars:{
                files:['templates/*.hbs'],
                tasks: ['handlebars']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['public/less']
                },
                files: {
                    'public/css/master.css': 'public/less/master.less'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/build/master.min.css': ['public/css/master.css']
                }
            }
        },
        handlebars: {
            all: {
                files: {
                    "public/js/templates.js": ["templates/*.hbs"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'watch', 'less', 'handlebars', 'cssmin']);
};