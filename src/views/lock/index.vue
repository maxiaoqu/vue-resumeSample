<template>
    <div class="lock-page flex layout-top" :class="lockInput">
        <div class="flex flex-1 lock-page-block" @click.stop="showLockView">
            <div class="login-form flex">
                <div class="milan-effect"
                     :class="[lockActive]"
                     @click.stop="clickLocking">
                    <div class="login-locked flex shine-white">
                        <span class="lock-solid">解锁</span>
                        <div class="login-locked__dash animate"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-1 lock-page-form">
            <div class="login-form flex">
                <div class="input-wrap">
                    <input type="password"
                           v-model="password"
                           placeholder="输入访问口令"
                           maxlength="12"
                           @input="changPassword"
                           @keyup.enter="gotoHome">
                    <span class="focus-input"></span>
                    <span class="login-btn" @click.stop="gotoHome">解锁</span>
                </div>
                <p class="text-err" v-if="passwordErr">口令错误，微信、电话联系16666666666获取口令</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getPwdKey} from "../../utils/utils";

    export default {
        name: "lock",
        data() {
            return {
                lockActive: '',
                lockInput: '',
                password: '',
                passwordErr: false
            }
        },
        methods: {
            // 点击返回解锁页面
            showLockView() {
                let _this = this;
                this.lockInput = '';
                this.lockInput = 'perspective-view';
                let setTimeoutTime = setTimeout(() => {
                    _this.lockInput = '';
                    clearTimeout(setTimeoutTime);
                }, 500)
            },
            // 点击解锁
            clickLocking() {
                let _this = this;
                this.lockActive = 'milan-effect-active';
                let setTimeoutTime = setTimeout(() => {
                    _this.lockInput = 'perspective-view perspective-animate';
                    this.lockActive = '';
                    clearTimeout(setTimeoutTime);
                }, 800)
            },
            // 改变口令时
            changPassword() {
                this.passwordErr = false;
            },
            // 到简历页面
            gotoHome() {
                let pKey = getPwdKey();
                if (this.password === pKey) {
                    localStorage.setItem('pKey', this.password);
                    this.$router.replace({
                        name: 'index'
                    })
                } else {
                    this.passwordErr = true;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .lock {
        &-page {
            background: #bd612d url("../../assets/img/bg2.jpg") 50%;
            background-size: cover;

            &-block {
                background: #121811 url("../../assets/img/bg1.jpg") 50%;
                background-size: cover;
                position: relative;
                z-index: 2;
                width: 100%;
                height: 100%;
                transform: translateZ(0) translateX(0) rotateY(0deg);
                transition: transform .4s;
                transform-origin: 50% 90%;
                overflow: hidden;
            }

            &-form {
                position: absolute;
                z-index: 1;
                height: 100%;
                width: 100%;
                opacity: 0;
                transition: opacity 1s;
                overflow: hidden;
            }

            .login-form {
                position: relative;
                z-index: 2;
                width: 400px;
                height: 100px;
                border-radius: 5px;

                .milan-effect {
                    position: relative;
                    display: inline-block;
                    margin: 1em;

                    &:after, &:before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 140px;
                        height: 140px;
                        margin: -70px 0 0 -70px;
                        border-radius: 50%;
                        opacity: 0;
                        border: 3px solid hsla(0, 0%, 100%, .5);
                        pointer-events: none;
                        box-shadow: 0 0 100px 34px hsla(0, 0%, 100%, .1)
                    }
                }

                .milan-effect-active {
                    &:after {
                        animation-name: anim-effect-milan-3, anim-effect-milan-1;
                        animation-duration: 5s, 2s;
                        animation-iteration-count: 1, infinite;
                        animation-timing-function: ease, linear;
                        animation-fill-mode: forwards
                    }

                    &:before {
                        animation-name: anim-effect-milan-3, anim-effect-milan-2;
                        animation-duration: 5s, 2s;
                        animation-iteration-count: 1, infinite;
                        animation-timing-function: ease, linear;
                        animation-fill-mode: forwards
                    }
                }

                .login-locked {
                    width: 60px;
                    height: 60px;
                    border-radius: 30px;
                    background: hsla(0, 0%, 100%, .1);
                    cursor: pointer;
                    transition: opacity 2s;

                    .lock-solid {
                        color: hsla(0, 0%, 100%, .8);
                        font-size: 20px;
                        font-weight: 500;
                    }

                    &__dash {
                        border: 3px outset #e69e4b;
                        width: 74px;
                        height: 74px;
                        border-radius: 999px;
                        position: absolute;
                        box-shadow: 0 0 0 3px rgba(7, 114, 159, .8);

                        &.animate {
                            animation: lock-rotate 6s linear infinite;
                            transform: translateZ(0);
                        }
                    }
                }

                .shine-white {
                    animation: shineWhite 2s infinite;
                }

                .input-wrap {
                    display: flex;
                    position: relative;
                    background: hsla(0, 0%, 100%, .2);
                    padding: 8px 30px 8px 8px;
                    border-radius: 5px;
                    transition: all 1s;

                    input {
                        border: none;
                        border-radius: 4px;
                        background: none;
                        color: #fff;
                        padding: 2px 5px;
                        font-size: 14px;
                        width: 80%;
                        position: relative;
                        z-index: 1;
                        display: inline-block;
                        max-width: 650px;
                        vertical-align: top;

                        &::-webkit-input-placeholder {
                            color: hsla(0, 0%, 100%, .6);
                            font-size: 16px;
                        }

                        &:focus {
                            outline: none;
                        }

                        &:focus + .focus-input {
                            visibility: visible;
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    .focus-input {
                        position: absolute;
                        display: block;
                        width: 100%;
                        height: 100%;
                        top: -2px;
                        left: -2px;
                        pointer-events: none;
                        border: 2px solid #07729f;
                        border-radius: 8px;
                        visibility: hidden;
                        opacity: 0;
                        transition: all .4s;
                        transform: scaleX(1.1) scaleY(1.3);
                    }

                    .login-btn {
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        position: absolute;
                        right: 5px;
                        top: 0px;
                        transform: rotate(0deg);
                        transition-duration: .5s;
                        font-size: 14px;
                        font-weight: 500;
                        color: hsla(0, 0%, 100%, .8);
                    }
                }

                .text-err {
                    color: #b52d2d;
                    margin-top: 10px;
                    font-weight: 500;
                    font-size: 12px;
                    animation-duration: 1s;
                    animation-fill-mode: both;
                    animation-name: fadeInUp;
                }
            }
        }
    }

    .layout-top {
        flex: 1;
        overflow: auto
    }

    .flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .flex-1 {
        flex: 1;
    }

    .perspective-view {
        perspective: 1500px
    }

    .perspective-animate {
        .lock-page-block {
            opacity: .5;
            transform: translateZ(-1500px) rotateX(80deg);
            cursor: pointer;

            &:after {
                display: block;
                content: "";
                position: absolute;
                z-index: 3;
                background: hsla(0, 0%, 100%, .1);
                width: 100%;
                height: 100%;
            }
        }

        .lock-page-form {
            opacity: 1;
            transition: opacity 1s
        }
    }

    @-webkit-keyframes anim-effect-milan-1 {
        0% {
            transform: perspective(1000px) rotate3d(1, 1, 1, 0deg);
            -webkit-transform: perspective(1000px) rotate3d(1, 1, 1, 0deg)
        }
        to {
            transform: perspective(1000px) rotate3d(1, 1, 1, 1turn);
            -webkit-transform: perspective(1000px) rotate3d(1, 1, 1, 1turn);
        }
    }

    @keyframes anim-effect-milan-1 {
        0% {
            transform: perspective(1000px) rotate3d(1, 1, 1, 0deg)
        }
        to {
            transform: perspective(1000px) rotate3d(1, 1, 1, 1turn)
        }
    }

    @-webkit-keyframes anim-effect-milan-2 {
        0% {
            transform: perspective(1000px) rotate3d(1, -1, 1, 0deg);
            -webkit-transform: perspective(1000px) rotate3d(1, -1, 1, 0deg);
        }
        to {
            transform: perspective(1000px) rotate3d(1, -1, 1, 1turn);
            -webkit-transform: perspective(1000px) rotate3d(1, -1, 1, 1turn);
        }
    }

    @keyframes anim-effect-milan-2 {
        0% {
            transform: perspective(1000px) rotate3d(1, -1, 1, 0deg)
        }
        to {
            transform: perspective(1000px) rotate3d(1, -1, 1, 1turn)
        }
    }

    @-webkit-keyframes anim-effect-milan-3 {
        0%, to {
            opacity: 1
        }
        25%, 75% {
            opacity: 1
        }
    }

    @keyframes anim-effect-milan-3 {
        0%, to {
            opacity: 1
        }
        25%, 75% {
            opacity: 1
        }
    }

    @-webkit-keyframes shineWhite {
        0% {
            box-shadow: 0 0 1px #dfdfdf
        }

        50% {
            box-shadow: 0 0 10px hsla(0, 0%, 100%, .6)
        }

        to {
            box-shadow: 0 0 1px #dfdfdf
        }
    }

    @keyframes shineWhite {
        0% {
            box-shadow: 0 0 1px #dfdfdf
        }

        50% {
            box-shadow: 0 0 10px hsla(0, 0%, 100%, .6)
        }

        to {
            box-shadow: 0 0 1px #dfdfdf
        }
    }

    @-webkit-keyframes lock-rotate {
        0% {
            transform: rotate(0)
        }

        to {
            transform: rotate(1turn)
        }
    }

    @keyframes lock-rotate {
        0% {
            transform: rotate(0)
        }

        to {
            transform: rotate(1turn)
        }
    }

    @-webkit-keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0)
        }

        to {
            opacity: 1;
            transform: translateZ(0)
        }
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0)
        }

        to {
            opacity: 1;
            transform: translateZ(0)
        }
    }
</style>
