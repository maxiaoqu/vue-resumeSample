import Index from '../frame/frame/index';

export const indexRouter = [{
    path: '/',
    name: '_index',
    redirect: '/index',
    meta: {
        title: '首页',
        hideInMenu: false,
        notCache: true,
        icon: 'ios-add'
    },
    component: Index,
    children: [{
        path: '/index',
        name: 'index',
        meta: {
            title: '首页',
            hideInMenu: false,
            notCache: true,
        },
        component: () => import ("@/views/index/index.vue")
    }]
}]

export const useRouter = [
    {
        path: '/lock',
        name: 'lock',
        meta: {
            title: '首页',
            hideInMenu: false,
            notCache: true,
        },
        component: () => import ("@/views/lock/index.vue")
    }
];

export const errorRouter = [];
