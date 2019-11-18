import { page, get, post } from 'excore/controller'

@page('user')
class Hello {

  // GET: /user
  @get('index')
  world(req, res) {
    res.render('user')
  }

  // GET: /user/signup
  @get('signup')
  signup(req, res) {
    res.render('user/signup')
  }

  // POST: /user/signup
  @post('signup')
  signupProcess(req, res) {
    res.render('user/signup')
  }

}

export default Hello