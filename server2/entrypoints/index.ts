import Fastify from 'fastify'
import helmet from '@fastify/helmet'
import cors from '@fastify/cors'
import { API_SERVER_PORT, API_BASE_PATH } from '$/service/envValues'
import server from '$/$server'

const fastify = Fastify()

fastify.register(helmet, { crossOriginResourcePolicy: false })
fastify.register(cors)

server(fastify, { basePath: API_BASE_PATH })

fastify.listen({ port: API_SERVER_PORT })
