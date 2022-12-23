import { defineController } from './$relay'

export default defineController(() => ({
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
