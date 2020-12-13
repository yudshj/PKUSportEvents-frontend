<template>
    <el-container class="main-container" direction="vertical">
        <el-container class="part-container" direction="vertical">
            <h1 style="width:20%">基本信息</h1>
            <el-container direction="horizontal">
                <p style="width:20%;color:gray">用户名: </p>
                <p v-text="username"></p>
            </el-container>
        </el-container>
        <el-container class="part-container" direction="vertical">
            <h1 style="width:20%">其他信息</h1>
            <el-container direction="horizontal">
                <p style="width:20%;color:gray"> </p>
                <p v-text="username"></p>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Info",
        data () {
            return {
                username: this.$store.state.username
            }
        }
    }
</script>

<style scoped>
    .main-container {
        position: relative;
        margin-left: 25%;
        margin-top: 1%
    }
    .part-container {
        border-radius: 15px;
        width: 80%;
        background: #fff;
        margin-bottom: 5%;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #DCDCDC;
    }
</style>
