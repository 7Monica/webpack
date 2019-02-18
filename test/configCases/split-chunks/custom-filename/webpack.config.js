module.exports = {
	entry: {
		a: "./a",
		b: "./b"
	},
	output: {
		filename: "[name].js",
		libraryTarget: "commonjs2"
	},
	optimization: {
		chunkIds: "named",
		splitChunks: {
			cacheGroups: {
				dep: {
					chunks: "all",
					test: /shared/,
					filename: "shared-[name].js",
					enforce: true
				}
			}
		}
	}
};
