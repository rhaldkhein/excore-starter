import { api, get, post, del } from 'excore/controller'
import { forbidden, notImplemented } from 'excore/error'

@api('user')
class User {

  // GET "/api/user/list"
  @get('list')
  async list(req, res) {
    const userService = req.service('user')
    const users = await userService.getAllUsers({})
    res.jsonSuccess(users)
  }

  // POST "/api/user"
  @post('index')
  async create(req, res) {
    const userService = req.service('user')
    await userService.create({})
    const users = await userService.getAllUsers({})
    res.jsonSuccess(users)
  }

  // DELETE "/api/user"
  @del('index')
  remove(req, res) {
    res.jsonError(forbidden('Not allow to remove a user'))
  }

  @get('newapi')
  newApi(req, res) {
    res.jsonError(notImplemented())
  }

}

export default User