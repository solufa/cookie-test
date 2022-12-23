import dotenv from 'dotenv'

dotenv.config()

const API_SERVER_PORT = +(process.env.PORT ?? '8080')
const API_BASE_PATH = process.env.API_BASE_PATH ?? ''

export { API_SERVER_PORT, API_BASE_PATH }
