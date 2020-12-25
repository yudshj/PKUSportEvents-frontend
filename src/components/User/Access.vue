<template>
    <el-container class="main-container" direction="vertical">
        <el-container class="part-container" direction="vertical">
            <h1 class="bigtext">权限申请</h1>
            <el-container direction="horizontal">
                <p class="smalltext">当前权限等级: </p>
                <p v-text="lvdisplay" style="margin-left:20px"></p>
            </el-container>

            <el-container direction="horizontal" style="margin-left:50px">
            <el-select v-model="selected" placeholder="选择想要申请的权限" @change="AfterSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            </el-container>

            <el-button type="primary" class="savebutton" v-on:click="Apply">申请</el-button>

            <el-dialog class="login_dialog" :title="dialogTitle" :visible.sync="dialogVisible" :center=true :append-to-body=true :lock-scroll=true width="300px" :show-close=false :close-on-click-modal=false>
                <el-button class="confirm_button" type="primary" style="margin-left:75px;width:100px;background: #FF9966;border: none;" v-on:click="closedialog">确认</el-button>
            </el-dialog>

        </el-container>
    </el-container>
</template>

<script>
    const lvlist = ['0-普通用户','1-发布者','2-管理员']
    export default {
        name: "Like",
        data () {
            return {
                username: this.$store.state.username,
                userlevel: this.$store.state.level,
                lvdisplay: lvlist[this.$store.state.level],
                options: [{
                    value:1,
                    label:'1-发布者'
                },{
                    value:2,
                    label:'2-管理员'
                }],
                selected:"",
                dialogTitle:"",
                dialogVisible:false
            }
        },
        methods: {
            AfterSelect(){
                this.$forceUpdate()
            },
            Apply() {
                console.log(this.selected)
                if(this.selected == 0){
                    this.dialogTitle = "请选择想要申请的权限"
                }
                else {
                    this.dialogTitle = "申请发送失败"
                    this.$axios.post('/xxxx', {
                        username: this.$store.state.username,
                        applyid: this.selected
                    }, {
                        headers: {
                            'token': this.$store.state.token
                        }
                    })
                        .then(resp => {
                            if (resp.data.code == 0){
                                this.dialogTitle = "申请已发送"
                            }
                        })
                }
                this.dialogVisible = true
            },
            closedialog () {
                this.dialogVisible = false
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
    .el-checkbox+.el-checkbox {
        margin-left: 0;
    }
    .el-checkbox {
        margin-right: 30px;
        margin-bottom: 10px;
    }
    .savebutton{
        margin-top:20px;
        margin-bottom:30px;
        margin-left:340px;
        width:120px; /*(left+width/2)等于container的大小的一半，就可以居中*/
        background: #FF9966;
        border: none;
    }
    .checkgroup{
        margin-bottom:10px;
        margin-left:30px;
    }
</style>
