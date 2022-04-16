import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

//props true로 props 값으로 라우팅 가능, props 방식이 재활용가능
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, //alias 방식은 url 변경 안됨, children -> nested route /teams/t1
    { path: '/users', component: UsersList },

    { path: '/:notFound(.*)', component: NotFound }, //정의되지않은 url 전부 notFound는 변경가능
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
