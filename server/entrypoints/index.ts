import Fastify from 'fastify'
import helmet from '@fastify/helmet'
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'
import {
  API_SERVER_PORT,
  API_BASE_PATH,
  CORS_ORIGIN
} from '$/service/envValues'
import server from '$/$server'

const fastify = Fastify()

fastify.register(helmet, { crossOriginResourcePolicy: false })
fastify.register(cors, { origin: CORS_ORIGIN, credentials: true })
fastify.register(cookie)

server(fastify, { basePath: API_BASE_PATH })

fastify.listen({ port: API_SERVER_PORT, host: '0.0.0.0' })
