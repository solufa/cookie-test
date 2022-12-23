import { defineController } from './$relay'
import { createCookieOptions } from '$/service/createCookieOptions'

export type AdditionalRequest = {
  body: {
    id: string
  }
}

export default defineController(() => ({
  post: {
    hooks: {
      preHandler: (req, reply, done) => {
        reply.setCookie(
          'id',
          req.body?.id ?? '',
          createCookieOptions(undefined)
        )
        done()
      }
    },
    handler: () => {
      return { status: 200, body: { status: 'success' } }
    }
  }
}))
