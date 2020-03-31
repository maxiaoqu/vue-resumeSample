<template>
    <div id="modelInfo" class="modelInfo">
        <div class="container"> <!-- Container -->
            <div class="section-title text-center center">
                <h2>平台 <strong> 框架</strong></h2>
                <hr>
                <div class="clearfix"></div>
                <p>主要解决目前市场上没有满足我们项目本身的一些技术插件、技术框架等</p>
            </div>
            <div class="row">
                <div class="portfolio-items">
                    <div class="col-sm-6 col-md-4 col-lg-4" v-for="(project,index) in projectData" :key="index">
                        <div class="portfolio-item">
                            <div class="content-box">
                                <div class="content-text">
                                    <h4>{{project.name}}</h4>
                                    <p class="time">{{project.time}}</p>
                                    <Tag type="danger" size="mini" effect="dark" v-for="tag in project.technology"
                                         :key="tag">{{tag}}
                                    </Tag>
                                    <div class="miaoshu">
                                        <i class="fa fa-star-o"></i>{{project.miaoshu}}
                                    </div>
                                    <p class="zhize" v-for="(work,zindex) in project.zhize" :key="zindex">
                                        <i class="fa fa-hand-o-right"></i>{{work}}
                                    </p>
                                    <a class="link"
                                       v-if="project.link !=''"
                                       :href="project.link"
                                       target="_blank">点击查看</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tag} from 'element-ui';
    import {getModelData} from "../../api/modelApi";

    export default {
        name: "modelInfo",
        components: {
            Tag
        },
        data() {
            return {
                projectData: []
            }
        },
        mounted() {
            this.initData()
        },
        methods: {
            initData() {
                this.projectData = getModelData();
            }
        }
    }
</script>

<style lang="less" scoped>
    .modelInfo {
        padding: 80px 0;
        background: #ffffff;
        background: linear-gradient(to bottom, #f5e4cf 0%, #b674cc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5e4cf', endColorstr='#b674cc', GradientType=0);

        .portfolio-item {
            margin-bottom: 30px;
            transition: all 0.5s ease-out;
            background: #fff;
            padding: 10px 15px;

            &:hover {
                margin-bottom: 30px;
                transform: scale(1.1);
            }

            .content-box {
                height: 320px;
                overflow: hidden;
                position: relative;

                .content-text {
                    h4 {
                        text-align: center;
                    }

                    .time {
                        color: #007efd;
                    }

                    .el-tag {
                        margin: 1.5px 1px;
                    }

                    .miaoshu {
                        color: #5bc0de;
                        padding: 10px 0;
                    }

                    .zhize {
                        padding: 0;
                        margin: 0;
                        padding-bottom: 5px;
                    }

                    .link {
                        color: #5bc0de;
                        line-height: 40px;
                    }
                }
            }
        }

        i.fa {
            font-size: 20px;
            padding: 5px;
            color: #F4D03F;
        }
    }
</style>