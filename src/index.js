/**
 * webpack-js-concat-plugin
 * ---
 */

import fs from 'fs';
import fx from 'mkdir-recursive';
import path from 'path';
import chalk from 'chalk';
import concat from 'concat';

class JSConcatPlugin {
	constructor (options = {}) {
		this.pluginName = 'JSConcatWebpackPlugin';
		this.options = options;

		this.logs = [];
	}
	/**
	 * Init webpack plugin hooks
	 * @param  {[Object]} compiler [Webpack compiler]
	 */
	apply (compiler) {
		// If Webpack 4, then use new plugin hooks
		if (compiler.hooks) {
			compiler.hooks.afterEmit.tapAsync(this.pluginName, (compiler, callback) => {
				this.run(compiler, callback);
			});
		}
		// Otherwise use the old way of init plugin
		else {
			console.log('Not webpack 4+ ?, update or sue your self...');
		}
	}

	mergeOptions () {
		// Merge options
		this.options = Object.assign({
			files: {},
			output: './'
		}, this.options);
	}

	/**
	 * Process files
	 * @param  {[Object]} compiler [Webpack compiler]
	 * @param  {Function} callback [Webpack callback function]
	 */
	run (compiler, callback) {

		this.mergeOptions();

		// Start message
		console.log('\n' + chalk.bgWhite.black('   Concating   ') + '\n');

		for (let bundle in this.options.files){
			let files = this.options.files[bundle];
			let dir = path.join(this.options.output, path.dirname(bundle));
			if (!fs.existsSync(dir)) {
				fx.mkdirSync(dir);
			}
			concat(files, path.join(this.options.output, bundle));
		}

		callback();
	}
}

export default JSConcatPlugin;