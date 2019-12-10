import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Project from '../views/Project'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Tatiana Dias - Portfolio'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/project/:id',
    name: 'project',
    props: route => ({ id: +route.params.id }),
    component: Project
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
