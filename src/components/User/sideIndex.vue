<template>
    <el-menu
            :default-active="currentPath"
            class="categories"
            router
            active-text-color="red">
        <el-menu-item :key="key0" :index="index0">
            <i class="el-icon-user-solid"></i>
            <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item :key="key1" :index="index1">
            <i class="el-icon-star-on"></i>
            <span slot="title">权限申请</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'sideIndex',
        data () {
            return{
                key0: "0",
                key1: "1",
                index0: "/user/info",
                index1: "/user/access"
            }

        },
        computed: {
            currentPath () {
                return this.$route.path
            }
        }
    }
</script>

<style scoped>
    .categories {
        position: absolute;
        margin-top: 15px;
        margin-left:-10px;
        width: 200px;
        height: 450px;
    }
</style>
