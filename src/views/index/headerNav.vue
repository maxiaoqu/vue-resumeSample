<template>
    <nav v-show="fixedNav != ''"
         id="headerNav"
         class="navbar navbar-custom navbar-fixed-top"
         :class="fixedNav">
        <h4 class="container">
            码小趣&nbsp;-&nbsp;Web前端开发工程师
        </h4>
    </nav>
</template>

<script>
    export default {
        name: "headerNav",
        props: {
            fixedNav: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .navbar {
        &-custom {
            margin-bottom: 0;
            text-transform: uppercase;
            background: #268a7f;
            transition: all .3s ease-in-out;

            h4 {
                width: 100%;
                margin: 0;
                color: #fff;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>