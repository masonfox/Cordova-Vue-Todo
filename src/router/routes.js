import Home from '../views/HomeView'
import About from '../views/AboutView'
import Todo from '../views/TodoView'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/todo',
    component: Todo
  }
]

export default routes
