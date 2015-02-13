module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-tag');

    grunt.initConfig({
        release: {
            options: {
                npm: false,
                afterReleaseTasks: ['tag'],
                github: {
                    repo: "AirVantage/node-tech-time",
                    usernameVar: 'GITHUB_USERNAME',
                    passwordVar: 'GITHUB_PASSWORD'
                }
            }
        },
        tag: {
            options: {
                tagName: '<%= version.match(/\\d*/) %>.x'
            }
        }
    });
};
