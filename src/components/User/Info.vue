<template>
    <el-container class="main-container" direction="vertical">
        <el-container class="part-container" direction="vertical">
            <h1 class="bigtext">基本信息</h1>
            <el-container direction="horizontal">
                <p class="smalltext">用户名: </p>
                <p v-text="username"></p>
            </el-container>
        </el-container>
        <el-container class="part-container" direction="vertical">
            <h1 class="bigtext">其他信息</h1>
            <el-container direction="horizontal">
                <p class="smalltext"> </p>
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
        margin-left: 250px;
        margin-top: 10px;
    }
    .part-container {
        border-radius: 15px;
        width: 600px;
        background: #fff;
        margin-bottom: 20px;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #DCDCDC;
    }
    .bigtext{
        width:120px
    }
    .smalltext{
        margin-left:50px;
        color:gray
    }
</style>
