module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		babel: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'public/react-prod/script.js': 'public/react-src/script.jsx'
				}
			}
		},
		watch: {
			jsx: {
				files: ['**/*.jsx'],
				tasks: ['babel']
			}
		}
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['babel']);
	grunt.registerTask('dev', ['babel', 'watch']);
}