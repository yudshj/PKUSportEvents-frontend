<template>
  <el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      background-color="#CCFFFF"
      text-color="#222"
      active-text-color="#0099CC"
      style="min-width: 1300px">

    <template v-if="Identity === 0">
      <el-menu-item v-for="(item,i) in superList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
    </template>
    <template v-else>
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
    </template>
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
  name: 'PageHead',

  data () {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/result', navItem: '赛果'},
        {name: '/publish', navItem: '上传'},
        {name: '/user', navItem: '个人中心'}
      ],
      superList: [
        {name: '/index', navItem: '首页'},
        {name: '/result', navItem: '赛果'},
        {name: '/publish', navItem: '上传'},
        {name: '/user', navItem: '个人中心'},
        {name: '/index', navItem: '权限审核'}
      ],
      Identity: [

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
  },
  mounted: function (){
    this.$axios.post('/perm/getall', {}, {
      headers: {
        'token': this.$store.state.token
      }
    })
    .then(
        resp => {
          this.Identity = resp.data.code
        }
    )
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
