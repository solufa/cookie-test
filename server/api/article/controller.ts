import { defineController } from './$relay'
import { getArticles } from '$/service/article'

export default defineController(() => ({
  get: ({ query }) => ({ status: 200, body: getArticles(query?.search) })
}))
