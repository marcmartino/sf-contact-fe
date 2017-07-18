import Vue from 'vue'
import Router from 'vue-router'
import SignInPage from '@/components/SignInPage'
import JoinPage from '@/components/JoinPage'
import ContactCreatePage from '@/components/ContactCreatePage'
import AllContactsPage from '@/components/AllContactsPage'
import ContactPage from '@/components/ContactPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Sign In',
      component: SignInPage
    },
    {
      path: '/signIn',
      name: 'Sign In',
      component: SignInPage
    },
    {
      path: '/join',
      name: 'Join',
      component: JoinPage
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: ContactCreatePage
    },
    {
      path: '/create',
      name: 'Create',
      component: ContactCreatePage
    },
    {
      path: '/browse',
      name: 'Contacts',
      canReuse: false,
      component: AllContactsPage
    },
    {
      path: '/view/:id',
      name: 'Contact',
      component: ContactPage
    }
  ]
})
