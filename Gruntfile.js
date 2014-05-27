module.exports = function( grunt ) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		express: {
			dev: {
				options: {
					port: 3000,
					script: 'app.js'
				}
			}
		},
		less: {
			dev: {
				options: {
					paths: ['public_assets/css/src','bower_components/bootstrap/less']
				},
				files: {
					'public_assets/css/styles.css': 'public_assets/css/src/styles.less'
				}
			}
		},
		watch: {
			app: {
				files: ['app.js'],
				tasks: ['express'],
				options: {
					spawn: false
				}
			},
			livereload: {
				options: {
					livereload: true
				},
				files: ['views/**/*.jade','public_assets/**/*']
			},
			styles: {
				files: ['public_assets/css/src/**/*.less'],
				tasks: ['less:dev']
			}
		}
	});
	
	grunt.registerTask('default', ['express:dev','watch']);
};