require('dotenv').config({ path: 'server/.env' })
require('dotenv').config({ path: 'server2/.env' })

module.exports = [
  {
    input: 'server/api',
    baseURL: `${process.env.API_ORIGIN || ''}${process.env.API_BASE_PATH || ''}`
  },
  {
    input: 'server2/api',
    baseURL: `${process.env.API2_ORIGIN || ''}${
      process.env.API2_BASE_PATH || ''
    }`
  }
]
