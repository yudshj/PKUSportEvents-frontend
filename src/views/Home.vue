<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <body> Logined. </body>
    <el-button type="primary" style="width: 30%;background: #FF9966;border: none;" v-on:click="logout">退出登录</el-button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  methods: {
    logout() {
      this.$store.commit("logout")
      this.$router.replace('/login')
    }
  }
}
</script>
