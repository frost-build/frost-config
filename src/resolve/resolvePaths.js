import path from 'path'

export default function resolvePaths(config) {
	const { paths } = config
	const resolveWith = relative => path.resolve(paths.root, relative)

	config.paths = Object.keys(config.paths).reduce((acc, key) => {
		...acc,
		[key]: resolveWith(config.paths[key])
	}, {})
	return config
}
