<template>
	<body id = "paper" style="overflow: scroll;">
	<page-head></page-head>
	<el-form :model = "ArticleInfo" class = "publish-container" 
	:label-position = "left" label-width = "60px" v-loading = "loading">
	
		<el-form-item>
			<h3 class = "Publish_title">发布您的战报</h3>
		</el-form-item>
		
		<el-form-item prop = "Title" label="标题:">
		<el-input
			type="titlearea"
			autosize
			auto-complete="off"
			placeholder="请输入标题"
			v-model="ArticleInfo.title">
		</el-input>
		</el-form-item>
		
		<el-form-item label = "标签:" style="text-align: left;">
		<el-tag
		  v-for="tag in AddTagList"
		  :key="tag.name"
		  closable
		  @close="TagCloseHandler(tag)">
		  {{tag.name}}
		</el-tag>
		
		<el-select v-if="selectVisible" v-model="newtag" placeholder="请选择" 
			style="height: 32px; line-height: 30px;margin-left: 10px;"
			@change="SelectHandle">
			<el-option
				v-for = "tag in TagList"
				:key = "tag.tagid"
				:label = "tag.name"
				:value = "tag.tagid"
			>
			</el-option>
		</el-select>
		<el-button v-else class="button-new-tag" size="small" @click = "ShowSelector">+Add Tag</el-button>
		</el-form-item>
		
		<el-form-item label = "正文:">
		<mavon-editor
		    v-model="ArticleInfo.article.articleContentMd"
		    style="height: 100%;min-height:300px"
		    ref=md
			@save="Changehtml"
		    @change="Changehtml"
		    fontSize="16px">
		</mavon-editor>
		</el-form-item>
		
		<el-form-item>
	    <el-button 
			type="primary" 
			style="width: 30%;background: #FF9966;border: none;margin-right:5px" 
			v-on:click="Publish">
			发布
		</el-button>
		 
	    <router-link to="Home">
				<el-button type="primary" style="width: 30%;background: #505458;border: none">
					退回上一级
				</el-button>
		</router-link>
		</el-form-item>
		
		<el-dialog class="publishFail_dialog" :title="FailMessage" :visible.sync="dialogFailVisible" :center=true :append-to-body=true :lock-scroll=true width="30%" :show-close=false :close-on-click-modal=false>
		    <el-button class="confirm_button" type="primary" style="width: 30%;background: #FF9966;border: none" v-on:click="closedialogFail">确认</el-button>
		</el-dialog>
		
		<el-dialog class="publishSucc_dialog" title="发布成功" :visible.sync="dialogSuccVisible" :center=true :append-to-body=true :lock-scroll=true width="30%" :show-close=false :close-on-click-modal=false>
		    <el-button class="confirm_button" type="primary" style="width: 30%;background: #FF9966;border: none" v-on:click="closedialogSucc">确认</el-button>
		</el-dialog>
	</el-form>
	</body>
</template>
<script>
	import PageHead from '@/components/Tools/PageHead'
	
	export default {
	  name:'Publish',
	  components: {PageHead},
	  data() {
	    return {
			loading:false,
			FailMessage:'',
			dialogFailVisible:false,
			dialogSuccVisible:false,
			selectVisible:false,
			newtag:'',
			TagList:[],
			AddTagList:[],
			ArticleInfo:{
				tags:[],
				title: '',
				article:{}
			},
	    }
	  },
	  methods:{
		  Publish(){
			  if(this.ArticleInfo.title != '' && this.ArticleInfo.article.articleContentMd != ''){
					for(var i = 0 ; i < this.AddTagList.length ; ++i)
						this.ArticleInfo.tags.push(this.AddTagList[i].tagid)
					//this.dialogSuccVisible = true
					this.$axios.post('/article/add',{
						title:this.ArticleInfo.title,
						markdownContent:this.ArticleInfo.article.articleContentMd,
						htmlContent:this.ArticleInfo.article.articleContentHtml,
						tagIds:this.ArticleInfo.tags
					},{
						headers: {
						          'token': this.$store.state.token
						        }
					})
					.then(resp => {
						console.log(resp)
						if(resp.data.code==0) this.dialogSuccVisible = true
						else{
							this.FailMessage = resp.data.msg
							this.dialogFailVisible = true
						}
					})
			    }
			    else {
					this.FailMessage = '用户名或内容不能为空'
					this.dialogFailVisible = true
				}
		  },
		  
		  Changehtml(value, render){
			  this.ArticleInfo.article.articleContentHtml = render  
		  },
		  closedialogFail () {
		      this.dialogFailVisible = false
		  },
		  
		  closedialogSucc() {
		      this.dialogSuccVisible = false
		  },
		  
		  TagCloseHandler(tag){
			  let va = tag
			  this.AddTagList.splice(this.AddTagList.indexOf(tag),1)
			  this.TagList.push(va)
			  this.TagList.sort(function(a,b){
				  	return a.tagid - b.tagid
			  })
		  },
		  
		  ShowSelector(){
			  this.selectVisible = true
		  },
		  
		  SelectHandle(){
			  if(this.newtag >= 0){
				for(var i = 0 ; i < this.TagList.length ; ++i)
				if(this.newtag == this.TagList[i].tagid){
					this.AddTagList.push(this.TagList[i])
					this.AddTagList.sort(function(a,b){
						return a.tagid - b.tagid
					})
					this.TagList.splice(i,1)
					break
				}
			  }
			  this.selectVisible = false
			  this.newtag = ''
		  }
	  },
	  mounted:function() {
	  	this.$axios.post('/tag/getall',{}).then(resp=>{
			for(var i = 0 ; i < resp.data.data.length ; ++i){
				let va = {
					name:resp.data.data[i].name,
					tagid:resp.data.data[i].tagId
				}
				this.TagList.push(va)
			}
			
			this.TagList.sort(function(a,b){
							  	return a.tagid - b.tagid
			})
		})
	  }
	}
</script>

<style>
	#paper {
	    /*background:url("../assets/logo.png") no-repeat;*/
	    background-position: center;
	    height: 100%;
	    width: 100%;
	    background-size: cover;
	    position: fixed;
	}
	body{
	    margin: 30;
	}
	.confirm_button{
	    position: absolute;
	    top: 50%;
	    left: 35%;
	}
	.el-tag{
		margin-left: 10px;
		text-align: left;
	}
	 .button-new-tag {
	    margin-left: 10px;
	    height: 32px;
	    line-height: 30px;
	    padding-top: 0;
	    padding-bottom: 0;
	  }
</style>
