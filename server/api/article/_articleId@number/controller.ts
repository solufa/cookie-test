import { defineController } from './$relay'
import { getArticle } from '$/service/article'

export default defineController(() => ({
  get: ({ params: { articleId } }) =>
    ((article) =>
      article
        ? {
            status: 200 as const,
            body: article
          }
        : { status: 404 as const })(getArticle(articleId))
}))
