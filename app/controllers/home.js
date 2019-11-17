import { page, get } from 'excore/controller'

@page('index')
class Hello {

  @get('index')
  index(req, res) {
    res.render('home', {
      name: 'Foo'
    })
  }

}

export default Hello