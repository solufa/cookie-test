import { defineHooks } from './$relay'

export type AdditionalRequest = {
  user: {
    id: string
  }
}

export default defineHooks(() => ({
  preHandler: (req, res, done) => {
    if (!req.cookies.id) {
      res.status(401).send()
      return
    }

    req.user = { id: req.cookies.id }
    done()
  }
}))
