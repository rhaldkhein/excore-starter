import { page, get, post } from 'excore/controller'

@page('user')
class Hello {

  // url: /user
  @get('index')
  world(req, res) {
    res.render('home', {
      name: 'Foo'
    })
  }

  // GET: /user/register
  @get('register')
  register(req, res) {
    res.render('register')
  }

  // POST: /user/register
  @post('register')
  registerProcess(req, res) {
    res.render('register')
  }

}

export default Hello