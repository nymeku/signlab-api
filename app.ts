import fastify from "fastify"
import router from "./src/router"

export const build = (opts = {}) => {
	const app = fastify(opts)
	const prefix = "api/v1"

	app.register(router, { prefix })

	return app
}
