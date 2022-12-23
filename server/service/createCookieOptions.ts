import { CookieSerializeOptions } from '@fastify/cookie'
import { COOKIE_DOMAIN } from './envValues'

export const createCookieOptions = (
  sameSite: CookieSerializeOptions['sameSite']
) => ({
  expires: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
  httpOnly: true,
  secure: process.env.NODE_ENV !== 'development',
  domain: COOKIE_DOMAIN,
  path: '/',
  sameSite
})
