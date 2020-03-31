<template>
    <div class="index" ref="indexHome">
        <headerNav :fixedNav="fixedNav"></headerNav>
        <startView></startView>
        <userInfo></userInfo>
        <workInfo></workInfo>
        <jishuInfo></jishuInfo>
        <projectInfo></projectInfo>
        <modelInfo></modelInfo>
        <technologyInfo></technologyInfo>
        <assessInfo></assessInfo>
        <contactInfo></contactInfo>
    </div>
</template>

<script>
    import headerNav from "./headerNav";
    import startView from "./startView";
    import userInfo from "./userInfo";
    import workInfo from "./workInfo";
    import jishuInfo from "./jishuInfo";
    import projectInfo from "./projectInfo";
    import modelInfo from "./modelInfo";
    import technologyInfo from "./technologyInfo";
    import assessInfo from "./assessInfo";
    import contactInfo from "./contactInfo";

    export default {
        name: "index",
        components: {
            headerNav,
            startView,
            userInfo,
            workInfo,
            jishuInfo,
            projectInfo,
            modelInfo,
            technologyInfo,
            assessInfo,
            contactInfo
        },
        data() {
            return {
                fixedNav: ''
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu, true)
        },
        methods: {
            menu() {
                let scrollTop = this.$refs.indexHome.scrollTop || this.$refs.indexHome.scrollTop,
                    offsetHeight = document.documentElement.offsetHeight;
                if (scrollTop > (offsetHeight / 3)) {
                    this.fixedNav = 'top-nav-collapse';
                } else {
                    this.fixedNav = '';
                }
            }
        },
    }
</script>

<style scoped lang="less">
    .index {
        width: 100%;
        height: 100%;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none
        }
    }
</style>
