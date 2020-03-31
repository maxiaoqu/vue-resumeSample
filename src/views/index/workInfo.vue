<template>
    <div id="workInfo" class="workInfo text-center">
        <div class="container">
            <div class="section-title center">
                <h2>人生 <strong> 经历</strong></h2>
                <hr>
                <p>热爱互联网，热爱技术，专注于前端技术开发和用户体验</p>
            </div>
            <div class="workInfo-row">
                <div class="workInfo-row-item col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="../../assets/img/school.jpg" alt="北京大学" class="img-circle team-img">
                        <div class="caption">
                            <h3>北京大学</h3>
                            <p>计算机专业</p>
                            <p>2013.09-2017.09</p>
                            <p>为了周末、暑假能兼职老师公司的网站页面设计，自主学习前端技术...</p>
                        </div>
                    </div>
                </div>
                <div class="workInfo-row-item col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="../../assets/img/rzt.jpeg" alt="阿里巴巴集团" class="img-circle team-img">
                        <div class="caption">
                            <h3>阿里巴巴集团</h3>
                            <p>web前端开发工程师、前端技术经理</p>
                            <p>2016.10-至今</p>
                            <p>负责搭建相关的前端框架、制定技术规范、编码等相关的前端工作...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "workInfo"
    }
</script>

<style lang="less" scoped>
    .workInfo {
        padding: 80px 0;
        background: #ffffff;
        background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#cccccc', GradientType=0);

        &-row {
            display: block;
            text-align: center;

            img.img-circle.team-img {
                width: 120px;
                height: 120px;
                border: 4px solid transparent;
                transition: all 0.5s;
            }

            &-item {
                height: 360px;
                float: none;
                display: inline-flex;
                margin: 10px 0;

                .thumbnail {
                    width: 100%;
                    height: 100%;
                    border: 0;

                    &:hover {
                        z-index: 2;
                        box-shadow: 0 15px 30px rgba(0, 0, 0, .7);
                        transform: translate3d(0, -2px, 0);
                        transition: all 0.8s;
                    }

                    .caption {
                        padding: 9px;
                        color: #5a5a5a;
                    }
                }
            }
        }
    }


</style>