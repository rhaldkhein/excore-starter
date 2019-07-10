import { page, get } from 'excore/lib/controller'

@page('hello')
class Hello {

  @get('world')
  world(req, res) {
    res.send('Hello World')
  }

}

export default Hello