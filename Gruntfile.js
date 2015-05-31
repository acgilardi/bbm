module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
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
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    // define tasks
    grunt.registerTask('server', ['express:dev', 'watch']);
};
