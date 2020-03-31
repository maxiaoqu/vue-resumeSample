let modelData = [
    {
        name: "微应用发布系统（Pc）",
        time: "2020年02月-2020年03月",
        technology: ['Vue', 'Vuex', 'Vue-router', 'Axios', 'echarts', 'iview'],
        miaoshu: '该项目一个通用项目，是操作微应用的发布，目前支持发布qt、链接、微前端的微应用项目',
        zhize: [
            '搭建vue框架，封装项目结构和代码组件',
            '设置路由权限，只给第三方厂商相应的路由权限和按钮权限',
            '负责"应用管理"、"系统管理"、"App轮播图管理"编码和联调',
        ]
    },{
        name: "微应用框架（Pc、App）",
        time: "2019年06月-2019年10月",
        link: "",
        technology: ['Vue', 'Vuex', 'Vue-router', 'WebPack', 'Vue-Cli3+'],
        miaoshu: '该项目主要适用于目前的微服务框架，使前端的页面、模块、组件更灵活，能使用在多个项目上',
        zhize: [
            '支持整体打包、单模块打包、测试环境打包、线上（生产）环境打包',
            '支持在安卓、Web等环境下运行'
        ]
    }, {
        name: "微应用模版框架（App）",
        time: "2019年11月-2019年12月",
        link: "",
        technology: ['Vue', 'Vuex', 'Vue-router', 'WebPack', 'Vue-Cli3+'],
        miaoshu: '该项目主要解决第三方厂商对接微应用的问题',
        zhize: [
            '打包框架模版，提供第三方厂商一起共用的模版框架',
            '提供多个公用方法、插件供第三方厂商使用',
            '支持在安卓、Web等环境下运行'
        ]
    }, {
        name: "安卓Kotlin+Cordove模版",
        time: "2017年09月-2019年09月",
        link: "",
        technology: ['Kotlin', 'Cordove', 'Vue', 'Vuex', 'Vue-router', 'WebPack', 'Vue-Cli3+'],
        miaoshu: '该项目安卓项目杂乱、无法统一的问题',
        zhize: [
            '解决了安卓代码、方法、插件的统一',
            '支持前端多种框架调用',
            '减少了安卓人员的工作量、提高了开发效率'
        ]
    }, {
        name: "vue-selecttree（Npmjs）",
        time: "2019年03月-2019年05月",
        link: "https://www.npmjs.com/package/vue-selecttree",
        technology: ['Vue', 'WebPack'],
        miaoshu: '一款好用的vue树组件',
        zhize: [
            '解决树组件的多样化问题',
            '支持Vue2、Vue3+'
        ]
    }, {
        name: "echarts-3d（Npmjs）",
        time: "2019年09月-2019年10月",
        link: "https://www.npmjs.com/package/echarts-3d",
        technology: ['echarts', 'WebPack'],
        miaoshu: '一款好用的3D柱状图',
        zhize: [
            'echarts的3D柱状图',
            '支持前端多种框架调用'
        ]
    }
]

export const getModelData = () => {
    return modelData;
}