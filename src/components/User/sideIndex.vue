<template>
    <el-menu
            class="categories"
            default-active="0"
            @select="handleSelect"
            active-text-color="red">
        <el-menu-item index="0">
            <i class="el-icon-user-solid"></i>
            <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="1">
            <i class="el-icon-star-on"></i>
            <span slot="title">偏好设置</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'sideIndex',
        data () {
            return {
                type: ''
            }
        },
        methods: {
            handleSelect (key) {
                if(key == "0"){
                    this.$router.replace('/user/info')
                }
                else if(key == "1"){
                    this.$router.replace('/user/like')
                }
            }
        }
    }
</script>

<style scoped>
    .categories {
        position: absolute;
        width: 20%;
        height: 80%;
    }
</style>
