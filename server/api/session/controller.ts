import { CookieSerializeOptions } from '@fastify/cookie'
import { defineController } from './$relay'
import { COOKIE_DOMAIN } from '$/service/envValues'

export type AdditionalRequest = {
  body: {
    id: string
    sameSite: CookieSerializeOptions['sameSite']
  }
}

export default defineController(() => ({
  post: {
    hooks: {
      preHandler: (req, reply, done) => {
        reply.setCookie('id', req.body?.id ?? '', {
          expires: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          domain: COOKIE_DOMAIN,
          path: '/',
          sameSite: req.body?.sameSite
        })
        done()
      }
    },
    handler: () => {
      return { status: 200, body: { status: 'success' } }
    }
  },
  delete: {
    hooks: {
      preHandler: (req, reply, done) => {
        reply.clearCookie('id', { path: '/', sameSite: req.body?.sameSite })
        done()
      }
    },
    handler: () => {
      return { status: 200, body: { status: 'success' } }
    }
  }
}))
