import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: null,
    },
    {
      path: '/coaches/:id',
      component: null,
      children: [
        {
          path: 'contact', //coaches/c1/contact
          component: null,
        },
      ],
    },
    {
      path: '/register',
      component: null,
    },
    {
      path: '/request',
      component: null,
    },
    {
      path: '/:notFound(.*)',
      component: null,
    },
  ],
});

export default router;
