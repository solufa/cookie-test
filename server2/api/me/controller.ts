import { defineController } from './$relay'

export default defineController(() => ({
  get: ({ user }) => {
    return {
      status: 200,
      body: user ? { id: user.id, status: 'login' } : { status: 'logout' }
    }
  }
}))
