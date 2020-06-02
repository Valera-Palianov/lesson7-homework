const tasks = ['clean:before', 'concat', 'sass', 'clean:after']
module.exports = grunt => {
	const sass = require('node-sass')
 
	require('load-grunt-tasks')(grunt)

	grunt.initConfig({
		concat: {
			dist: {
				src: [
					'src/**/*.sass',
				],
				dest: 'interim/style.sass'
			}
		},
		sass: {
			options: {
	            implementation: sass,
	            sourceMap: false,
	        },
	        dist: {
	            files: {
	                'dist/style.css': 'interim/style.sass'
	            }
	        }
		},
		clean: {
			before: ['dist'],
			after: ['interim']
		},
		watch: {
			css: {
				files: 'src/**/*.sass',
				tasks: tasks,
			},
		},
	})

	grunt.registerTask('default', [...tasks, 'watch'])
}