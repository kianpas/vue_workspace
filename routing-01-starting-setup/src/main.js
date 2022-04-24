import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

//props true로 props 값으로 라우팅 가능, props 방식이 재활용가능
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      //한페이지내 보여질 여러 컴포넌트 지정 가능
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, //alias 방식은 url 변경 안됨, children -> nested route /teams/t1
    //beforeEnter, beforeeach와 같은 가드역할, 특정 라우트에서만
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },

    { path: '/:notFound(.*)', component: NotFound }, //정의되지않은 url 전부 notFound는 변경가능
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    //savedPosition 이전 페이지의 위치
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
router.beforeEach(function (to, from, next) {
  console.log('global');
  console.log(to, from);
  //next로 네비게이션 진행, next(false)로 방지 가능, 라우딩 문자열, 객체도 전달가능
  //next();
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', param: { teamId: 't2' } });
  // }
  next();
});

//라우트 다음 표현
router.afterEach(function (to, from) {
  //sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
