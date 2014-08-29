module.exports = function(grunt) {

    grunt.initConfig({
        react: {
            files: {
                expand: true,
                cwd: 'public/src/',
                src: ['**/*.jsx'],
                dest: 'public/build/',
                ext: '.js'
            }
        },
        less: {
            development: {
                files: {
                    'public/build/main.css': 'public/src/main.less'
                }
            }
        },
        watch: {
            'react': {
                files: 'public/src/**/*.jsx',
                tasks: ['react']
            },
            'less': {
                files: 'public/src/main.less',
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-react');

};
