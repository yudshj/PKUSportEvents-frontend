<template>
    <body id="paper">
    <el-form :model="loginForm" :rules="rules" ref="regform" class="login-container" label-position="left"
             label-width="0px" v-loading="loading">
        <h3 class="login_title">用户注册</h3>
        <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username"
                      auto-complete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password"
                      auto-complete="off" placeholder="密码(至少7位)"></el-input>
        </el-form-item>
            <el-form-item prop="confirm">
                <el-input type="password" v-model="loginForm.confirm"
                          auto-complete="off" placeholder="确认密码"></el-input>
            </el-form-item>
        <el-form-item style="width: 100%;margin-top: 40px">
            <el-button type="primary" style="width: 40%;background: #FF9966;border: none" v-on:click="register">注册</el-button>
        </el-form-item>
        <el-dialog class="login_dialog" :title="dialogTitle" :visible.sync="dialogVisible" :center=true :append-to-body=true :lock-scroll=true width="30%" :show-close=false :close-on-click-modal=false>
            <el-button class="confirm_button" type="primary" style="width: 30%;background: #FF9966;border: none;" v-on:click="closedialog">确认</el-button>
        </el-dialog>
    </el-form>
    </body>
</template>
<script>
    export default{
        data () {
            const checkusn = (rule,value,callback) =>
            {
                if(value.length == 0){
                    this.checked = false
                    callback(new Error("用户名不能为空"))
                }
                else if(this.name_exist == true){
                    callback(new Error("用户名已存在"))
                }
                else callback( )
            }
            const checkpwd = (rule,value,callback) => {
                if(value.length <= 6){
                    this.checked = false
                    callback(new Error("密码不能少于7位"))
                }
                else callback( )
                this.$refs["regform"].validateField("confirm")
            }
            const confirmpwd = (rule,value,callback) => {
                if(value !== this.loginForm.password) {
                    this.checked = false
                    callback(new Error("两次输入密码不一致"))
                }
                else
                    callback( )
            }
            return {
                rules: {
                    username: [
                        {validator:checkusn, required:true, trigger:'blur'}
                    ],
                    password: [
                        {validator:checkpwd, required:true, trigger:'blur'}
                    ],
                    confirm:[
                        {validator:confirmpwd, required:true, trigger:'blur'}
                    ]
                },
                loginForm: {
                    username: '',
                    password: '',
                    confirm: ''
                },
                loading: false,
                checked: true,
                name_exist: false,
                dialogVisible: false,
                dialogTitle: ""
            }
        },
        methods: {
            register () {
                this.checked = true
                this.name_exist = false
                this.$refs["regform"].validate( )
                if(this.checked == true) {
                    this.$axios.post('/register',{
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    })
                    .then(resp =>{
                        console.log(resp.data)
                        if(resp.data.code == 0){ // 注册成功
                            this.dialogTitle = "注册成功"
                            this.dialogVisible = true
                        }
                        else if(resp.data.code ==1){ // 用户名已存在
                            this.name_exist = true
                            this.$refs["regform"].validateField("username")
                        }
                        else{ // 用户名or密码不合要求(已拦截) 或未知错误
                            this.dialogTitle = "未知错误"
                            this.dialogVisible = false
                        }
                    })
                }
            },
            closedialog( ){
                if(this.dialogTitle == "注册成功"){
                    this.$router.replace('login')
                }
                this.dialogVisible = false
            }
        }
    }
</script>
<style>
    #paper {
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }
    body{
        margin: -5px 0px;
    }
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 90px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .confirm_button{
        position: absolute;
        top: 50%;
        left: 35%;
    }
</style>
