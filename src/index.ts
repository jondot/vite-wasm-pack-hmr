import debounce from "lodash/debounce"
import colors from "picocolors"

const wasmPackHmr = (
	period = 2000,
	filter = (file: string) => file.endsWith(".wasm"),
	log = () => {
		console.log(
			`${colors.dim(new Date().toLocaleTimeString())} ${colors.cyan(
				colors.bold("[wasm-pack-hmr]"),
			)} ${colors.green("reloading")}`,
		)
	},
) => {
	const reload = debounce((server) => {
		if (log) {
			log()
		}
		server.ws.send({
			type: "full-reload",
			path: "*",
		})
	}, period)
	return {
		name: "wasm-pack-hmr",
		enforce: "post",
		handleHotUpdate({ file, server }) {
			if (filter(file)) {
				reload(server)
			}
		},
	}
}

export { wasmPackHmr }
