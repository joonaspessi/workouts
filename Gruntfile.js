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
        libsass: {
            development: {
                src: 'public/src/main.scss',
                dest: 'public/build/main.css'
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
    grunt.loadNpmTasks('grunt-libsass');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('default', ['react', 'libsass']);
};
