export type Methods = {
  post: {
    reqBody: {
      id: string
      removeCredentials: boolean
    }
    resBody: { status: 'success' }
  }
}
