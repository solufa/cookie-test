import dotenv from 'dotenv'

dotenv.config()

const API_SERVER_PORT = +(process.env.PORT ?? '8080')
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? ''
const API_BASE_PATH = process.env.API2_BASE_PATH ?? ''

export { API_SERVER_PORT, CORS_ORIGIN, API_BASE_PATH }
