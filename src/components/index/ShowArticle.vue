<template>
  <div id="app">
  <!-- 用 v-for 渲染文章列表 -->
  <Article v-for="article in articleList" :key="article.title" :article="article"></Article>
  </div>
</template>

<script>
// 引入组件
import Article from '@/components/index/Article.vue';
export default {
  name: 'ShowArticle',
  // 注册组件
  components: {
    Article
  },
  data: function() {
    return {
      articleList: [
        {
          id: 1,
          cover: require('@/assets/images/640.jpeg'),
          title: '首发！近百位漫画家创作了一本战“疫”漫画，全书免费读',
          time: '2020-02-03',
          content:
              '这个春节与往年大不相同：大人们停止了走亲访友，孩子们被禁止外出玩耍，“口罩”取代“红包”成为正月里的关键词。也许你已经知道了，这些改变与新型冠状病毒有关，也许你还想知道，这讨厌的病毒为什么会突然出现、该怎么打败它，一级小朋友们可以帮什么忙？为了解答你的疑问，《中国少年报》、未来网联手近百位漫画家制作了这本电子漫画书，你应当知道的五件事。'
        },
        {
          id: 2,
          cover: require('@/assets/images/640.jpeg'),
          title: '首发！近百位漫画家创作了一本战“疫”漫画，全书免费读',
          time: '2020-02-02',
          content:
              '这个春节与往年大不相同：大人们停止了走亲访友，孩子们被禁止外出玩耍，“口罩”取代“红包”成为正月里的关键词。也许你已经知道了，这些改变与新型冠状病毒有关，也许你还想知道，这讨厌的病毒为什么会突然出现、该怎么打败它，一级小朋友们可以帮什么忙？为了解答你的疑问，《中国少年报》、未来网联手近百位漫画家制作了这本电子漫画书，你应当知道的五件事。'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>