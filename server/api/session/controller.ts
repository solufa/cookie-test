import { defineController } from './$relay'
import { COOKIE_DOMAIN } from '$/service/envValues'

export type AdditionalRequest = {
  body: {
    id: string
  }
}

export default defineController(() => ({
  post: {
    hooks: {
      preHandler: (req, reply, done) => {
        const expiresIn = 60 * 60 * 24 * 5 * 1000
        const id = req.body?.id ?? ''

        reply.setCookie('id', id, {
          expires: new Date(Date.now() + expiresIn),
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          domain: COOKIE_DOMAIN,
          path: '/',
          sameSite: 'none'
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
      preHandler: (_, reply, done) => {
        reply.clearCookie('id', { path: '/' })
        done()
      }
    },
    handler: () => {
      return { status: 200, body: { status: 'success' } }
    }
  }
}))
