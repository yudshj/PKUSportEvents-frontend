<template>
    <el-container class="main-container" direction="vertical">
        <el-container class="part-container" direction="vertical">
            <h1 class="bigtext">个人信息</h1>
            <el-container direction="horizontal" style="margin-bottom:-10px">
                <p class="smalltext">用户名: </p>
                <p v-text="username" style="margin-left:20px"></p>
            </el-container>
            <el-container direction="horizontal" style="margin-bottom:-10px">
                <p class="smalltext">用户ID: </p>
                <p v-text="userid" style="margin-left:20px"></p>
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
    export default {
        name: "Info",
        data () {
            return {
                username: this.$store.state.username,
                userid: this.$store.state.userid,
                userlevel: -1,
                lvdisplay: ""
            }
        },
        created(){
            this.getlevel()
        },
        methods:{
            getlevel() {
                this.$axios.post('/userinfo',{
                    userid : this.$store.state.userid
                },{
                    headers: {
                        'token': this.$store.state.token
                    }
                })
                    .then(resp => {
                            var lv = resp.data.data.permission
                            this.userlevel = lv
                            if(lv==10){
                                this.lvdisplay = "普通用户"
                            }
                            else if(lv==4){
                                this.lvdisplay = "发布者"
                            }
                            else if(lv==1){
                                this.lvdisplay = "管理员"
                            }
                            else if(lv==0){
                                this.lvdisplay = "超级管理员"
                            }
                            else {
                                this.lvdisplay = "未知权限等级"
                            }
                        }
                    )
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
