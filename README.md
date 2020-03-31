<p align="center">
    <a href="http://www.maxiaoqu.com/">
        <img width="300" src="http://www.maxiaoqu.com/maxiaoqu.png">
    </a>
</p>

<h2>
    简历模板
    <h4>一款漂亮大气的程序员简历模板：适用于PHP程序员、iOS程序员、Android程序员、Web前端程序员、Java程序员、NodeJS程序员等等程序员</h4>
</h2>

## 案例地址
- [demo地址](https://github.com/maxiaoqu/vue-resumeSample)
- [案例地址](http://example.maxiaoqu.com/jianli/)   访问口令：maxiaoqu

## 主要维护人员
|人员|github账号|头像|作者网站|联系邮箱|
|---|---|---|---|---|
|杨正炳|[maxiaoqu](https://github.com/maxiaoqu) |  ![](https://avatars1.githubusercontent.com/u/25891598?s=60&v=4)|www.maxiaoqu.com|maxiaoqu@gmail.com

## 简历预览
<p align="center">
    <img src="https://github.com/maxiaoqu/vue-resumeSample/image/demo1.png">
    <img src="https://github.com/maxiaoqu/vue-resumeSample/image/demo2.png">
    <img src="https://github.com/maxiaoqu/vue-resumeSample/image/demo3.png">
</p>

## 安装
```
npm install
```

## 运行
```
npm run serve
```

## 打包
```
npm run build
```

## 检查
```
npm run lint
```

## 文件结构
```shell
├── public...........................打包所需静态资源
└── src..............................存放文件的相关目录
    └── assets.......................项目静态资源
        └── treeData.json............树组件需要的数据
    ├── components...................模板组件
        └── treerows.vue.............树组件的渲染盒子组件
    ├── iconfont.....................阿里巴巴图标库（icon图标）的树组件用到
    ├── view.........................页面文件
        └──  SelectTree.vue..........树组件展示
    ├── APP.vue......................app.vue文件
    └── main.js......................配置（阿里巴巴图标库）在这里引入
```