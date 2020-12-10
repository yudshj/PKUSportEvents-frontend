<template>
    <el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <span style="position: absolute;padding-top: 20px;right: 45%;font-size: 20px;font-weight: bold">PKU Sports</span>

      <el-button
          type="primary"
          size="small"
          style="width: 9%;background: #696969;border: none;position:absolute;margin-top: 14px;right:3%"
          v-on:click="logout">
        退出登录
      </el-button>

    </el-menu>
</template>

<script>
  export default {
    name: 'PagePresent',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/result', navItem: '赛果'},
          {name: '/upload', navItem: '上传'},
          {name: '/admin', navItem: '个人中心'}
        ]
      }
    },
    computed: {
      currentPath () {
        var x = this.$route.path.indexOf('/', 1)
        if (x !== -1) {
          return this.$route.path.substring(0, x)
        } else {
          return this.$route.path
        }
      }
    },
    methods: {
      logout() {
        this.$store.commit("logout")
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
