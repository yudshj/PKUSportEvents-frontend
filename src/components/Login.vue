<template>
    <body id="paper">
    <el-form :model="loginForm" :rules="rules" class="login-container" label-position="left"
             label-width="0px" v-loading="loading">
        <h3 class="login_title">PKUSports</h3>
        <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username"
                      auto-complete="off" placeholder="用户名 / username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password"
                      auto-complete="off" placeholder="密码 / password"></el-input>
        </el-form-item>
        <el-checkbox class="login_remember" v-model="checked"
                     label-position="left"><span style="color: #505458">下次自动登录</span></el-checkbox>
        <el-form-item>
            <el-button type="primary" style="width: 30%;background: #FF9966;border: none;margin-right:5px" v-on:click="login">登录</el-button>
            <router-link to="register"><el-button type="primary" style="width: 30%;background: #505458;border: none">注册</el-button></router-link>
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
            return {
                rules: {
                },
                loginForm: {
                    username: '',
                    password: ''
                },
                checked: true,
                loading: false,
                dialogVisible: false,
                dialogTitle: ""
            }
        },
        methods: {
            login () {
                this.$axios.post('/login',{
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(resp => {
                    if(resp.data.code == 0) { //登陆成功
                        var token = resp.data.data
                        console.log(token)
                        if(this.checked == true){
                            this.$store.commit("long_login",token)
                        }
                        else{
                            this.$store.commit("short_login",token)
                        }
                        console.log(this.$store.state.token)
                        this.$router.replace('home')
                    }
                    else  { //用户名或密码错误
                        this.dialogTitle = "用户名或密码错误"
                        this.dialogVisible = true
                    }
                })
            },
            closedialog () {
                this.dialogVisible = false
            }
        }
    }
</script>
<style>
    #paper {
        /*background:url("../assets/logo.png") no-repeat;*/
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }
    body{
        margin: 0;
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
        text-align:left;
    }
    .confirm_button{
        position: absolute;
        top: 50%;
        left: 35%;
    }

</style>
