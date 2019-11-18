
function UserService(provider) {
  const db = provider.get('db')

  return {

    async create(user) {
      return await db.User.create(user)
    },

    async getAllUsers() {
      return await db.User.find({})
    }

  }
}

export default UserService