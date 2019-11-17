import User from './User'
import Blog from './Blog'

function DbContext() {
  return {
    User,
    Blog
  }
}

export default DbContext