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
                tasks: ['libsass']
            }
        },
        browserify: {
            options: {
                transform: [require('grunt-react').browserify],
            },
            client: {
                src: ['public/src/**/*.jsx'],
                dest: 'public/build/main.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-libsass');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build', ['browserify', 'libsass']);
    grunt.registerTask('default', ['build']);
};
