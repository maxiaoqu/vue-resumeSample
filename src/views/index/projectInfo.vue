<template>
    <div id="projectInfo" class="projectInfo">
        <div class="container"> <!-- Container -->
            <div class="section-title text-center center">
                <h2>项目 <strong> 经验</strong></h2>
                <hr>
                <div class="clearfix"></div>
                <p>主要涉及网站、可视化大屏展示、安卓内嵌H5页面、前端调取安卓提供的相关方法、前端在地图上的点、线、面、图层、空间运算等</p>
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
                                    <template v-if="project.weapp && project.weapp.length>0">
                                        <div  class="col-sm-6 col-md-4 col-lg-4"
                                             v-for="(weapp,zindex) in project.weapp"
                                             :key="zindex">
                                            <img :src="weapp">
                                        </div>
                                    </template>
                                    <template v-if="project.zhize && project.zhize.length>0">
                                        <p class="zhize"
                                           v-for="(work,zindex) in project.zhize"
                                           :key="zindex">
                                            <i class="fa fa-hand-o-right"></i>{{work}}
                                        </p>
                                    </template>
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
    import {getProjectData} from "../../api/projectApi";

    export default {
        name: "projectInfo",
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
                this.projectData = getProjectData();
            }
        }
    }
</script>

<style lang="less" scoped>
    .projectInfo {
        padding: 80px 0;
        background: #ffffff;
        background: linear-gradient(to bottom, #e9f3ec 0%, #4eb75b 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9f3ec', endColorstr='#4eb75b', GradientType=0);

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
                height: 510px;
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