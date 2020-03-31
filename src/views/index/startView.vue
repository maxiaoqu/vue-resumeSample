<template>
    <header id="startView" class="startView">
        <div class="startView-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1>码小趣<span class="brand-heading">  -  Web前端开发工程师</span></h1>
                        <p class="startView-text">喜欢技术、热爱挑战</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "startView"
    }
</script>

<style lang="less" scoped>
    .startView {
        display: table;
        width: 100%;
        height: 100%;
        padding: 100px 0;
        text-align: center;
        color: #fff;
        background: url(../../assets/img/intro-bg2.jpg) no-repeat bottom center;
        background-color: #000;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        -o-background-size: cover;

        &-body {
            display: table-cell;
            vertical-align: middle;

            .brand-heading {
                color: #F4D03F;
                text-transform: uppercase;
                letter-spacing: -2px;
            }

            .startView-text {
                font-size: 18px;
            }
        }
    }

    @media (min-width: 768px) {
        .startView {
            height: 100%;
            padding: 0;

            &-body {
                H1 {
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -2px;
                }

                .startView-text {
                    font-size: 20px;
                    text-transform: uppercase;
                    letter-spacing: 8px;
                    margin-bottom: 50px;
                }
            }
        }
    }

    .btn-circle {
        width: 70px;
        height: 70px;
        margin-top: 45px;
        padding: 7px 16px;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: 100% !important;
        font-size: 40px;
        color: #F4D03F;
        background: 0 0;
        transition: background .3s ease-in-out;
        margin-bottom: 0px;

        &:hover, &:focus {
            outline: 0;
            color: #F4D03F;
            background: rgba(255, 255, 255, .1);
        }

        i.animated {
            -webkit-transition-property: -webkit-transform;
            -webkit-transition-duration: 1s;
            -moz-transition-property: -moz-transform;
            -moz-transition-duration: 1s;
        }

        &:hover i.animated {
            -webkit-animation-name: pulse;
            -moz-animation-name: pulse;
            -webkit-animation-duration: 1.5s;
            -moz-animation-duration: 1.5s;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
        }
    }

    @-webkit-keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    @-moz-keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
</style>