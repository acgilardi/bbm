module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            dev: {
                files: ['src/**/*.*'],
                tasks: ['build']
            },
            options: {
                liveReload: true
            }
        },
        express: {
            dev: {
                options: {
                    port: 8080,
                    script: 'server.js',
                    node_env: 'dev'
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: 'src/assets/js/vendor',
                    layout: 'byComponent'
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        src: [ '**' ],
                        dest: 'build/',
                        cwd: 'src',
                        expand: true
                    }
                ]
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // define tasks
    grunt.registerTask('default', ['bower']);
    grunt.registerTask('build', ['copy:build']);
    grunt.registerTask('server', ['build', 'express:dev', 'watch']);
};
