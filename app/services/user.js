
function UserService(provider) {
  const db = provider.get('db')

  return {
    async create(user) {
      await db.User.create(user)
    }
  }
}

export default UserService