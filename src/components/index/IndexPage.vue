<template>
  <div el-container direction="vertical" class="demo-box">
    <div el-header>
      <page-head></page-head>
    </div>
    <div el-main id="show">
      <show-article></show-article>
    </div>
  </div>
</template>

<script>
import PageHead from '@/components/Tools/PageHead'
import ShowArticle from '@/components/index/ShowArticle'
export default {
  name: "IndexPage",
  components: {PageHead, ShowArticle},
  beforeCreate(){
    // 添加背景色
    document.querySelector('body').setAttribute('style', 'background-color:#FFFFFF')
  },
  beforeDestroy(){
    document.querySelector('body').setAttribute('style', '')
  },
}
</script>

<style scoped>
#show {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 820px;
}



</style>