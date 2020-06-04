export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            name: 'login',
            icon: 'smile',
            path: '/user/login',
            component: './user/login',
          },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        routes: [
          {
            path: '/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            component: './Dashboard',
          },
          {
            path: '/setting',
            icon: 'setting',
            name: 'setting',
            routes: [
              {
                name: 'user',
                icon: 'user',
                path: '/setting/user',
                component: './Setting/User',
              },
              {
                name: 'department',
                icon: 'apartment',
                path: '/setting/department',
                component: './Setting/Department',
              },
              {
                name: 'role',
                icon: 'userSwitch',
                path: '/setting/role',
                component: './Setting/Role',
              },
              {
                name: 'menu',
                icon: 'menu',
                path: '/setting/menu',
                component: './Setting/Menu',
              },
              {
                name: 'post',
                icon: 'fire',
                path: '/setting/post',
                component: './Setting/Post',
              },
              {
                name: 'dictionary',
                icon: 'gold',
                path: '/setting/dictionary',
                component: './Setting/Dictionary',
              },
            ],
          },
          {
            path: '/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                name: 'table-list',
                icon: 'smile',
                path: '/list/table-list',
                component: './list/table-list',
              },
            ],
          },
          {
            name: 'exception',
            icon: 'warning',
            path: '/exception',
            routes: [
              {
                name: '403',
                icon: 'smile',
                path: '/exception/403',
                component: './exception/403',
              },
              {
                name: '404',
                icon: 'smile',
                path: '/exception/404',
                component: './exception/404',
              },
              {
                name: '500',
                icon: 'smile',
                path: '/exception/500',
                component: './exception/500',
              },
            ],
          },
          {
            path: '/',
            redirect: '/dashboard/analysis',
          },
          {
            component: '404',
          },
        ],
      },
    ],
  },
];
