import { page, get } from 'excore/controller'

@page('user')
class User {

  // GET "/user"
  @get('index')
  index(req, res) {
    res.render('user')
  }

  // GET "/user/list"
  @get('list')
  list(req, res) {
    res.render('user/list')
  }

}

export default User