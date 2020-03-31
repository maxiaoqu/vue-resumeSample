import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// 公共样式
import './assets/less/common.less';
import './assets/css/bootstrap.min.css';
import './assets/css/fontAwesome.css';
import './assets/css/style.css';

// 组件样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
