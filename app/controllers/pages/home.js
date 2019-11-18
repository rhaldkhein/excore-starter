import { page, get } from 'excore/controller'

@page('index')
class Hello {

  // GET "/"
  @get('index')
  index(req, res) {
    res.render('home', {
      name: 'World'
    })
  }

}

export default Hello