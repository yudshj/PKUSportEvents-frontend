<template>
  <div>
    <el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      background-color="#4f4f4f"
      text-color="white"
      active-text-color="#00A2E9"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>

      <el-button
              type="primary"
              size="small"
              style="width: 9%;background: #FF9966;border: none;position:absolute;margin-top: 14px;right:10%"
              v-on:click="logout">
              退出登录
      </el-button>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/homepage', navItem: '首页'},
          {name: '/t2', navItem: '测试2'}
        ],
        keywords: ''
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
