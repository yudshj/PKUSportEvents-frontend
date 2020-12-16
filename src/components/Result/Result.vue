<template>
  <div el-container direction="vertical" class="demo-box">
    <div el-header>
      <page-head></page-head>
    </div>
    <div el-container>
      <div el-aside width="200px"></div>
      <div el-container direction="vertical">
        <div el-main>
          <match-block></match-block>
        </div>
        <div el-footer></div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHead from "@/components/Tools/PageHead";
import MatchSideMenu from "@/components/Result/MatchSideMenu";
import MatchBlock from "@/components/Result/MatchBlock";
export default {
  name: "Result",
  components: {PageHead, MatchSideMenu, MatchBlock}
}
</script>

<style scoped>

</style>
