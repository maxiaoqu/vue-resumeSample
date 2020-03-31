<template>
    <div id="jishuInfo" class="jishuInfo">
        <div class="container"> <!-- Container -->
            <div class="section-title text-center center">
                <h2>技术 <strong> 选型</strong></h2>
                <hr>
                <div class="clearfix"></div>
                <p>主要涉及网站，包括PC端、手机端（安卓、Qt内嵌H5）、大屏可视化、地图页操作、微信小程序等</p>
            </div>
            <div class="row">
                <Carousel type="card" arrow="always" height="320px">
                    <CarouselItem v-for="item in jishuData" :key="item.key">
                        <h4 class="medium">{{ item.key }}</h4>
                        <span class="tagBox" v-for="tag in item.keyData" :key="tag">
                            <Tag type="warning">{{tag}}</Tag>
                        </span>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
    import {Carousel, CarouselItem, Tag} from 'element-ui';
    import {getJishuData} from "../../api/jishuApi";

    export default {
        name: "jishuInfo",
        components: {
            Carousel, CarouselItem, Tag
        },
        data() {
            return {
                jishuData: []
            }
        },
        mounted() {
            this.initData();
        },
        methods: {
            initData() {
                this.jishuData = getJishuData();
            }
        }
    }
</script>

<style lang="less" scoped>
    .jishuInfo {
        padding: 80px 0;
        background: linear-gradient(to bottom, #ffffff 0%, #47729e 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#47729e', GradientType=0);

        h4 {
            color: #d42c1a;
            font-size: 20px;
            opacity: 0.75;
            line-height: 40px;
            margin: 0 0 10px 0;
            text-align: center;
        }

        .tagBox {
            margin: 5px;
            display: inline-block;
        }
    }
</style>
<style lang="less">
    .el-carousel__item {
        padding: 10px 15px;

        &:nth-child(2n) {
            background-color: #99a9bf;
        }

        &:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
</style>