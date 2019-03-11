import env from 'std-env'

export default function defaults() {
	return {
		analyze: false,
		build: {
			cssSourceMap: undefined,
			extractCSS: false,
			optimizeCSS: undefined,
			terser: {},
			transpile: []
		},
		filenames: {},
		cache: false,
		env,
		parallel: false,
		paths: {
			clientEntry: 'src/index.js',
			clientOutput: 'build/client',
			root: process.cwd(),
			serverEntry: 'server/server.js',
			serverOutput: 'build/server',
			template: 'src/index.html'
		},
		plugins: [],
		profile: false,
		quiet: Boolean(env.ci || env.test),
		webpack: {
			alias: {},
			loaders: {}
		}
	}
}
