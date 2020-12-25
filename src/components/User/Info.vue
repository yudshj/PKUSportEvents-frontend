<template>
    <el-container class="main-container" direction="vertical">
        <el-container class="part-container" direction="vertical">
            <h1 class="bigtext">基本信息</h1>
            <el-container direction="horizontal" style="margin-bottom:-10px">
                <p class="smalltext">用户名: </p>
                <p v-text="username" style="margin-left:20px"></p>
            </el-container>
            <el-container direction="horizontal" style="margin-bottom:20px">
                <p class="smalltext">当前权限等级: </p>
                <p v-text="lvdisplay" style="margin-left:20px"></p>
            </el-container>
        </el-container>
        <!--
        <el-container class="part-container" direction="vertical">
            <h1 class="bigtext">其他信息</h1>
            <el-container direction="horizontal">
                <p class="smalltext"> </p>
                <p v-text="username"></p>
            </el-container>
        </el-container>
        -->
    </el-container>
</template>

<script>
    const lvlist = ['0-普通用户','1-发布者','2-管理员']
    export default {
        name: "Info",
        data () {
            return {
                username: this.$store.state.username,
                userlevel: this.$store.state.level,
                lvdisplay: lvlist[this.$store.state.level]
            }
        }
    }
</script>

<style scoped>
    .main-container {
        postion: absolute;
        margin-left: 250px;
        margin-right:0;
        width: 800px;
        margin-top: 20px;
    }
    .part-container {
        border-radius: 15px;
        width: 800px;
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
