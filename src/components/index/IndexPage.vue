<template>
  <div el-container direction="vertical" class="demo-box">
    <div el-header>
      <page-head></page-head>
    </div>
    <div el-main></div>
  </div>
</template>

<script>
import PageHead from '@/components/Tools/PageHead'

export default {
  name: "IndexPage",
  components: {PageHead},
  comments: {PageHead}
}
</script>

<style scoped>

</style>