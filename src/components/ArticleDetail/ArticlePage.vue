<!--meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=no" /-->
<template>
	<div class="articles-area">
		<page-head></page-head>
		<el-card style="text-align: left;width: 380px;height:260px;position: absolute;left: 40px;top: 150px;">
			<div style="position: absolute;left: 40px;top: 30px;"><el-avatar :size="80" :src="circleUrl"></el-avatar></div>
			<div><span style="text-align: left;font-size: 20px;position: absolute;right: 90px;top: 40px;"><strong>作者名称</strong></span></div>
			<div><span style="text-align: left;font-size: 16px;position: absolute;left: 190px;top: 80px;">作者签名~~~zzzzz</span></div>
			<div><el-button type="primary" round style="position: absolute;left: 150px;bottom: 40px;">关注作者</el-button></div>
		</el-card>
		<el-card style="text-align: left;width: 960px;position: absolute;left: 450px;top: 120px;">
		    <div>
				<span style="font-size: 20px"><strong>{{article.title}}</strong></span>
				<el-divider content-position="left">{{article.releaseDate}}</el-divider>
				<el-tag>足球</el-tag>
				<el-tag>这是一个tag~</el-tag>
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
import PageHead from '@/components/Tools/PageHead'///
import Article from '@/components/ArticleDetail/OtherArticles.vue'
  export default {
    name: 'ArticleDetails',
	components:{PageHead,Article},
    data () {
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
      ],
		circleUrl: "file://D:/workspace/PKUSportEvents-frontend-master/src/assets/pic.jpg",
        article: [],
		
      }
    },
    mounted () {
      this.load()
    },
    methods: {
	  returnIndex(){
		this.$router.replace('/index')
	  },
		
      load () {
        var _this = this
		this.$axios.post('/article/get/' + this.$route.query.id,{},{
		  headers: {
		    'token': this.$store.state.token
		  }
		})
		.then(resp => {
		  if (resp.data.code === 0){
		    _this.article = resp.data.data
		  }
		  else{
			  _this.article = {id: 1,
			          title: "文章不存在",
			          articleContentMd: "a",
			          htmlContent: resp.data,
					  //articleContentHtml: "此时进入`main`函数中，首先将虚拟地址`[end, KERNBASE+4MB)`中的空闲块交给`kalloc.c`中定义的空闲块链表进行管理（所以这段空间中分出去的任何页面都是满足`P2V`和`V2P`声明的地址转换公式的），之后开始调用`vm.c`中的`kvmalloc`进行内核页表的初始化，后者先调用了`setupkvm`函数进行了内核页表的初始化后调用`switchkvm`将`cr3`寄存器设置为内核目录起始地址以完成完成内核页表的设置其中`setupkvm`函数通过逐段的调用`mappages`函数来完成对内核页表的初始化，要了解`mappages`函数的功能我们先需要分析`walkpgdir`函数的功能，即对传入的虚拟地址`va`返回它对应的二级页表页表项的（虚拟）地址，如果二级页表页不存在则在`alloc!=0`时候自动的进行二级页表页的分配。注：页表项的内容的前20位对应物理地址的前20位，而后12位存储了一些权限信息，在宏定义中又给出其中的一部分，如`PTE_P`表示页表项是否有效，`PTE_W`表示页表对应的内存是否可写入等。",
			          articleAbstract: "az",
			          articleCover: "this.article.articleCover",
			          releaseDate: ""}
		  }
		})
      }
    }
  }
</script>

<style scoped>
  @import "../../style/markdown.css";
</style>
