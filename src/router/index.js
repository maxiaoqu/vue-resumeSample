import router from './routers';
import {indexRouter, useRouter, errorRouter} from './getRouter';
import {getPwdKey} from "../utils/utils";

// 添加参数，避免多次循环导致的错误
var getRouters,
    pKey = getPwdKey();

// 合并当前所有的路由
const newRouters = (to, next, getrouter) => {
    const routerArr = indexRouter.concat(useRouter).concat(errorRouter);
    router.addRoutes(routerArr);
    next({...to, replace: true});
};

// 当前路由的标题
const routersTitle = title => {
    title = "码小趣 - web前端开发工程师简历";
    window.document.title = title;
};

// 路由跳转之前
router.beforeEach((to, from, next) => {
    if (!getRouters) {
        getRouters = true;
        newRouters(to, next);
    }
    if (!localStorage.getItem('pKey') && to.path !== '/lock') {
        next({
            path: '/lock'
        })
        return;
    } else if ((localStorage.getItem('pKey') !== pKey) && to.path !== '/lock') {
        next({
            path: '/lock'
        })
        return;
    } else if (to.path === '' || to.path === '/') {
        next({
            path: '/'
        })
        return;
    } else {
        next()
        return;
    }
})
// 路由跳转之后
router.afterEach((to, from) => {
    //routersTitle(to.meta.title)
})

export default router
