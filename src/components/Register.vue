<template>
    <body id="paper">
    <el-form :model="loginForm" :rules="rules" ref="regform" class="login-container" label-position="left"
             label-width="0px" v-loading="loading">
        <h3 class="login_title">用户注册</h3>
        <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username"
                      auto-complete="off" placeholder="用户名(2~12位)"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password"
                      auto-complete="off" placeholder="密码(6~60位)"></el-input>
        </el-form-item>
            <el-form-item prop="confirm">
                <el-input type="password" v-model="loginForm.confirm"
                          auto-complete="off" placeholder="确认密码"></el-input>
            </el-form-item>
        <el-form-item style="width: 100%;margin-top: 40px">
            <el-button type="primary" style="width: 40%;background: #FF9966;border: none" v-on:click="register">注册</el-button>
        </el-form-item>
    </el-form>
    </body>
</template>
<script>
    export default{
        data () {
            const checkusn = (rule,value,callback) =>
            {
                if(value.length < 2){
                    this.checked = false
                    callback(new Error("用户名不能少于2位"))
                }
                else if(value.length > 12){
                    this.checked = false
                    callback(new Error("用户名不能多于12位"))
                }
                else callback( )
            }
            const checkpwd = (rule,value,callback) => {
                if(value.length < 6){
                    this.checked = false
                    callback(new Error("密码不能少于6位"))
                }
                else if(value.length > 60){
                    this.checked = false
                    callback(new Error("密码不能多于60位"))
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
                checked: true,
                loginForm: {
                    username: '',
                    password: '',
                    confirm: ''
                },
                loading: false
            }
        },
        methods: {
            register () {
                this.checked = true
                this.$refs["regform"].validate( )
                console.log(this.checked)
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
    .login_remember {
        margin: 0px 0px 35px 0px;
        text-align: left;
    }
</style>
