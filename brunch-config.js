// See http://brunch.io for documentation.
exports.config = {

	files: {
		javascripts: { joinTo: {
	      'js/app.js': [
					'app/initialize.js',
					'app/app.js',
					'app/tablescript.js'
				]
			}
		},
		stylesheets: { joinTo: 'css/app.css' }
	},

	plugins: {
		imageoptimizer: {
			smushit: true,
			path: 'assets/img'
		}
	}
};
