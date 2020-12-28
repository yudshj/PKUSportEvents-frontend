<!--meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=no" /-->
<template>
	<div class="articles-area">
		<page-head></page-head>
		<el-card style="text-align: left;width: 380px;height:260px;position: absolute;left: 40px;top: 150px;">
			<div style="position: absolute;left: 45px;top: 50px;"><el-avatar :size="80" :src="circleUrl"></el-avatar></div>
			<div><span style="text-align: left;font-size: 20px;position: absolute;left: 170px;top: 40px;"><strong>作者名称</strong></span></div>
			<div><span style="text-align: left;font-size: 16px;position: absolute;left: 150px;top: 80px;">这个人很懒，没有写个人签名</span></div>
			<div><el-button type="primary" round style="position: absolute;left: 150px;bottom: 50px;">关注作者</el-button></div>
		</el-card>
		<el-card style="text-align: left;width: 960px;position: absolute;left: 450px;top: 120px;">
		    <div>
				<span style="font-size: 20px"><strong>{{article.title}}</strong></span>
				<el-divider content-position="left">{{article.releaseDate}}</el-divider>
				<el-tag>信科</el-tag>
				<div class="markdown-body">
					<div v-html="article.htmlContent"></div>
				</div>
		    </div>
		<div style="position: relative;left:420px"><el-button type="primary" round v-on:click="returnIndex">返回</el-button></div>
		</el-card>
		
		<el-card style="text-align: left;width: 440px;position: absolute;left: 1440px;top: 150px;">
		    <div><Article v-for="article in articleList" :key="article.title" :article="article"></Article></div>
		</el-card>
		
	</div>
</template>

<script>

import PageHead from '@/components/Tools/PageHead'
import Article from '@/components/ArticleDetail/OtherArticles.vue'
  export default {
    name: 'ArticleDetails',
	components:{PageHead,Article},
    data () {
      return {
		articleList: [

      ],
		circleUrl: require('@/assets/images/640.jpeg'),
        article: [],
		
      }
    },
    mounted () {
      this.load()
      this.getArticle()
    },
    methods: {
	  returnIndex(){
		this.$router.replace('/index')
	  },
      getArticle (){
        this.$axios.post('/article/getall',{},{
          headers: {
            'token': this.$store.state.token
          }
        })
            .then(resp => {
              if (resp.data.code === 0){
                this.articleList = resp.data.data
              }
              else {this.articleList = [
                {
                  articleId: 1,
                  cover: require('@/assets/images/640.jpeg'),
                  title: '首发！近百位漫画家创作了一本战“疫”漫画，全书免费读',
                  ReleaseDate: '2020-02-03',
                  markdownContent:
                      '这个春节与往年大不相同：大人们停止了走亲访友，孩子们被禁止外出玩耍，“口罩”取代“红包”成为正月里的关键词。也许你已经知道了，这些改变与新型冠状病毒有关，也许你还想知道，这讨厌的病毒为什么会突然出现、该怎么打败它，一级小朋友们可以帮什么忙？为了解答你的疑问，《中国少年报》、未来网联手近百位漫画家制作了这本电子漫画书，你应当知道的五件事。'
                },
                {
                  articleId: 2,
                  cover: require('@/assets/images/640.jpeg'),
                  title: '首发！近百位漫画家创作了一本战“疫”漫画，全书免费读',
                  ReleaseDate: '2020-02-03',
                  markdownContent:
                      '这个春节与往年大不相同：大人们停止了走亲访友，孩子们被禁止外出玩耍，“口罩”取代“红包”成为正月里的关键词。也许你已经知道了，这些改变与新型冠状病毒有关，也许你还想知道，这讨厌的病毒为什么会突然出现、该怎么打败它，一级小朋友们可以帮什么忙？为了解答你的疑问，《中国少年报》、未来网联手近百位漫画家制作了这本电子漫画书，你应当知道的五件事。'
                },
              ]}
            })
      },
		
      load () {
        var _this = this
		this.$axios.post('/article/get/' + this.$route.query.id,{},{
		  headers: {
		    'token': this.$store.state.token
		  },
		})
		.then(resp => {
		  if (resp.data.code === 0){
		    _this.article = resp.data.data
		  }
		  else{
			  _this.article = {id: 1,
			          title: "文章不存在",
			          htmlContent: "文章不存在",
			          releaseDate: "-1"}
		  }
		})
      }
    }
  }
</script>

<style scoped>
  @import "../../style/markdown.css";
</style>
