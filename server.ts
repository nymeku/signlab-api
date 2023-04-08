import { config } from "dotenv"
import { build } from "./app"
config()

export default async function start() {
	const server = build()
	server.listen({ host: "0.0.0.0", port: process.env.PORT as unknown as number }, (err, address) => {
		if (err) {
			console.error(err)
			process.exit(1)
		}
		console.log(server.printRoutes())
		console.log(`Server listening at ${address}`)
	})
}

start()
