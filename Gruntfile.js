module.exports = function(grunt) {

    grunt.initConfig({
        libsass: {
            development: {
                src: 'public/src/main.scss',
                dest: 'public/build/main.css'
            }
        },
        watch: {
            'browserify': {
                files: 'public/src/**/*.js*',
                tasks: ['browserify']
            },
            'sass': {
                files: 'public/src/**/*.scss',
                tasks: ['libsass','autoprefixer']
            }
        },
        browserify: {
            options: {
                transform: [require('grunt-react').browserify],
                browserifyOptions: {
                    debug: true
                }
            },
            client: {
                src: ['public/src/**/*.jsx'],
                dest: 'public/build/main.js'
            }
        },
        autoprefixer: {
            prefix: {
                src: 'public/build/main.css',
                dest: 'public/build/main.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-libsass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('build', ['browserify', 'libsass', 'autoprefixer']);
    grunt.registerTask('default', ['build']);
};
