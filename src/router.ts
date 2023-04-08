import { FastifyInstance } from "fastify"

export default async (fastify: FastifyInstance) => {
	fastify.get(`/vitals`, async () => {
		return "OK"
	})
}
