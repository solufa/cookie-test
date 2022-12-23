import dotenv from 'dotenv'

dotenv.config()

const API_SERVER_PORT = +(process.env.PORT ?? '8080')
const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN ?? ''
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? ''
const API_BASE_PATH = process.env.API_BASE_PATH ?? ''

export { API_SERVER_PORT, COOKIE_DOMAIN, CORS_ORIGIN, API_BASE_PATH }
