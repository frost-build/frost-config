import { stat } from 'fs-extra'
import path from 'path'
import defaults from './defaults/defaults'
import resolve from './resolve/resolve'

async function checkForConfig(path) {
	let hasFile
	try {
		const descriptor = await stat(path)
		hasFile = descriptor && descriptor.isFile()
	} catch (err) {
		hasFile = false
	}

	return hasFile
}

export default async function loadConfig(args) {
	let config = defaults()
	const hasFile = await checkForConfig(path.resolve(process.cwd(), 'frost-config.js'))

	if (hasFile) {
		const userOptions = require(path.resolve(process.cwd(), 'frost-config.js'))
		config = { ...config, ...userOptions }
	}

	return resolve(config)
}
