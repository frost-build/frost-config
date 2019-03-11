import resolveArgs from './resolveArgs'
import resolvePaths from './resolvePaths'

export default function resolve(config) {
	return resolvePaths(resolveArgs(config))
}
