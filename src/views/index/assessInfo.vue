<template>
    <div id="assessInfo" class="assessInfo text-center">
        <div class="container">
            <div class="section-title center">
                <h2>自我 <strong>评价</strong></h2>
                <hr>
            </div>
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="testimonial owl-carousel owl-theme">
                        <div class="item">
                            <p>
                                热爱学习,良好的团队合作精神，能迅速融入新的团队。</br>易和人相处，拥有良好的亲和力。
                            </p>
                        </div>
                        <div class="item">
                            <p>
                                有强烈的责任感，工作踏实，性格开朗乐观，积极上进，吃苦耐劳。</br>能在较大的压力下保持良好的工作状态，善于自我调节。
                            </p>
                        </div>
                        <div class="item">
                            <p>
                                非常热爱编程，喜欢钻研新的技术，喜欢接受各种不同的挑战。</br>具有很强的自学能力和良好的学习方法。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    require
    export default {
        name: "assessInfo",
        mounted() {
            this.init()
        },
        methods:{
            init(){

            }
        }
    }
</script>

<style lang="less" scoped>
    .assessInfo {
        background: url(../../assets/img/about1.jpg);
        background-size: cover;
        background-attachment: fixed;
        color: #ddd;
        padding: 80px 0;
    }

    .testimonial {
        padding: 0;
        .item {
            display: block;
            width: 100%;
            height: auto;
            p {
                font-weight: 500;
                margin: 30px 0;
                font-size: 20px;
                line-height: 40px;
                color: #ddd;
            }
        }
        .owl-theme .owl-controls {
            .owl-page span {
                display: block;
                width: 10px;
                height: 10px;
                margin: 5px 7px;
                filter: Alpha(Opacity=1);
                opacity: 1;
                -webkit-border-radius: 0;
                -moz-border-radius: 20px;
                border-radius: 50%;
                background: #FFFFFF;
                transition: all 0.5s;
            }
            .owl-page.active span,
            &.clickable .owl-page:hover span {
                filter: Alpha(Opacity=100);
                opacity: 1;
                background: #F4D03F;
            }
            .owl-page.active span {
                background: #F4D03F;
            }
        }
    }
</style>