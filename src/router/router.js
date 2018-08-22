import AC from './async_load.js'

export default [
  //首页
  {
    type: 'Route',
    path: '/',
    exact: true,
    component: AC(() => import('page/home'))
  },
  // {
  //   type: 'Route',
  //   path: '/user/index',
  //   exact: true,
  //   component: AC(() => import('page/user'))
  // },
  // {
  //   type: 'Redirect',
  //   fromPath: '/product',
  //   toPath: '/product/index'
  // },
  {
    type: 'Route',
    path: '*',
    exact: false,
    component: AC(() => import('page/error'))
  }
]



