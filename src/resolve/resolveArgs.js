export default function resolveArgs(args, config) {
	return args.reduce((acc, curr) => ({
		...acc,
		[curr]: true
	}), config)
}
