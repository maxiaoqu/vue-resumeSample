<template>
    <div id="technologyInfo" class="technologyInfo">
        <div class="container">
            <div class="section-title text-center center">
                <h2><strong>专业</strong> 技能</h2>
                <hr>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img src="../../assets/img/about.png" class="img-responsive">
                </div>
                <div class="col-md-6">
                    <div class="about-text">
                        <i class="fa fa-check-square-o"></i>
                        <div class="padding-left">
                            <h4>PC端</h4>
                            <p>熟练各种浏览器、平板、各种分辨率下的电脑的样式适配，能独立解决项目上遇到>=90%以上的问题</p>
                        </div>
                        <i class="fa fa-check-square-o"></i>
                        <div class="padding-left">
                            <h4>移动端</h4>
                            <p>熟练多种环境下（安卓、Qt、react-native...）的app应用开发，适配各种手机机型、屏幕尺寸</p></div>
                        <i class="fa fa-check-square-o"></i>
                        <div class="padding-left">
                            <h4>小程序</h4>
                            <p>熟练使用微信小程序、支付宝小程序，其他小程序开发正在尝试开发中...</p>
                        </div>
                        <i class="fa fa-check-square-o"></i>
                        <div class="padding-left">
                            <h4>其它</h4>
                            <p>能单独提取、封装各种插件、方法，熟练使用Php开发，java开发正在自学中...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "technologyInfo"
    }
</script>

<style lang="less" scoped>
    .technologyInfo {
        padding: 80px 0;
        color: #444;
        background: #f4d03f;
        background: linear-gradient(to bottom, #f4d03f 70%, #c3a632 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f4d03f', endColorstr='#c3a632', GradientType=0);

        .about-text {
            margin-left: 10px;
        }

        .section-title.center hr {
            background: #f7dc6f;
        }

        .padding-left {
            padding-left: 50px;
        }

        H4 {
            color: #333;
        }

        i.fa {
            float: left;
            display: block;
            margin-right: 15px;
            color: #fff;
            font-size: 24px;
            text-shadow: 0 0 1px #666;
        }

        img {
            margin-top: -30px;
            margin-left: 10px;
        }

        p {
            margin-top: 20px;
            margin-bottom: 30px;
        }
    }
</style>