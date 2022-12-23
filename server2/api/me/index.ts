export type Methods = {
  get: {
    resBody: { id: string; status: 'login' } | { status: 'logout' }
  }
}
