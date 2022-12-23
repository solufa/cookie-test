type SameSite = 'none' | 'lax' | 'strict' | undefined

export type Methods = {
  post: {
    reqBody: {
      id: string
      sameSite: SameSite
    }
    resBody: { status: 'success' }
  }
  delete: {
    reqBody: {
      sameSite: SameSite
    }
    resBody: { status: 'success' }
  }
}
