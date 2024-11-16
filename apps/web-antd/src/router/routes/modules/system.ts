import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ion:settings-outline',
      keepAlive: true,
      order: 1001,
      title: $t('system.title'),
    },
    name: 'System',
    path: '/system',
    children: [
      {
        name: 'SystemUserList',
        path: '/user/list',
        component: () => import('#/views/system/user/index.vue'),
        meta: {
          title: $t('system.page.user'),
          icon: 'ion:person-outline',
        },
      },
      {
        name: 'SystemRoleList',
        path: '/role/list',
        component: () => import('#/views/system/user/index.vue'),
        meta: {
          title: $t('system.page.role'),
          icon: 'ion-accessibility-outline',
        },
      },
      {
        name: 'SystemMenuList',
        path: '/menu/list',
        component: () => import('#/views/system/user/index.vue'),
        meta: {
          title: $t('system.page.menu'),
          icon: 'ion:menu-outline',
        },
      },
      {
        name: 'SystemDeptList',
        path: '/dept/list',
        component: () => import('#/views/system/user/index.vue'),
        meta: {
          title: $t('system.page.dept'),
          icon: 'ion:layers-outline',
        },
      },
      {
        name: 'SystemLogList',
        path: '/log/list',
        component: () => import('#/views/system/user/index.vue'),
        meta: {
          title: $t('system.page.log'),
          icon: 'ion:reader-outline',
        },
      },
    ],
  },
];

export default routes;
