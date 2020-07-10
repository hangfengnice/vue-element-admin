/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const cardostoolRouter = {
  path: '/cardostool',
  component: Layout,
  redirect: 'noRedirect',
  name: 'cardostool',
  meta: {
    title: '运维工具',
    icon: 'dashboard'
  },
  children: [
    {
      path: 'main',
      component: () => import('@/views/cardos-tool/index.vue'),
      name: 'cardostoolMain',
      meta: { title: '运维主页' }
    },
    {
      path: 'add',
      component: () => import('@/views/cardos-tool/add.vue'),
      name: 'cardostoolAdd',
      meta: { title: '工具新增' }
    },
    {
      path: 'run',
      component: () => import('@/views/cardos-tool/run.vue'),
      name: 'cardostoolRun',
      meta: { title: '工具执行' }
    }
  ]
}

export default cardostoolRouter
