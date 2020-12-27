<template>
	<div class="main-area">
		<page-head></page-head>
		<el-card style="text-align: left;width: 1460px;height:650px;position: absolute;left: 250px;top: 100px;">
  
  <el-table
    :data="tableData"
	height="600"
    border
    style="width: 1400px">
	<el-table-column label="权限审批" style="text-align:center">
	<el-table-column
	  prop="applyId"
	  label="申请id"
	  width="200">
	</el-table-column>
    <el-table-column
      prop="userId"
      label="申请用户id"
      width="200">
    </el-table-column>
    <el-table-column
      prop="permission"
      label="申请的权限"
      width="200">
    </el-table-column>
    <el-table-column
      prop="applyDate"
      label="发起申请时间"
      width="640">
    </el-table-column>
    <el-table-column
      label="操作"
      width="150">
      <template slot-scope="scope">
              <el-button
                size="small"
				type="success"
                @click.native.prevent="confirm(scope.$index, tableData)">通过</el-button>
              <el-button
                size="small"
                type="warning"
                @click.native.prevent="deny(scope.$index, tableData)">拒绝</el-button>
            </template>
          </el-table-column>
    </el-table-column>
	</el-table-column>
  </el-table>
</el-card>
<div style="position: absolute;left: 880px;top: 800px;">
	<el-button type="primary" round v-on:click="returnIndex">返回主界面</el-button>
	</div>
  </div>
</template>

<script>
  import PageHead from '@/components/Tools/PageHead'
  export default {
	name: 'PermVerify',
	components:{PageHead},
	mounted () {
	  this.load()
	  /*
	  for(i = 0; i < this.tableData.length; i++){
	  	if(this.tableData[i].permission === 1) {
	  			this.tableData[i].permmission = "管理员"
	  		}else if(this.tableData[i].permission === 4){
	  			this.tableData[i].perm = "发布者"
	  		}else if(this.tableData[i].permission === 0){
	  			this.tableData[i].perm = "超级管理员"
	  		}else if(this.tableData[i].permission === 10){
	  			this.tableData[i].perm = "普通用户"
	  		} 
	  	else{
	  			this.tableData[i].perm = "???"
	  		}
	  }*/
	},
    methods: {	
		load () {
		  var _this = this
				this.$axios.post('/perm/getall',{},{
				  headers: {
				    'token': this.$store.state.token
				  }
				})
				.then(resp => {
				  if (resp.data.code === 0){
				    this.tableData = resp.data.data
				  }
				  else if(resp.data.code === -1){
					  this.returnIndex()
				  }else{
					  this.tableData = [
						  {
						    "applyId": -1,
						    "userId": -1,
						    "permission": -1,
						     "applyDate": "9999-99-99 99:99:99",
						  }
					  ]
				  }
				})
				
		},
	  returnIndex(){
		this.$router.replace('/index')
	  },
      confirm(index, rows) {
		this.$axios.post('/perm/check', {
			allow: 1,
			applyId: rows[index].applyId
		}, {
		  headers: {
		    'token': this.$store.state.token
		  }
		})
		
		rows.splice(index, 1);
      },
	  deny(index, rows) {
		this.$axios.post('/perm/check', {
			allow: 0,
			applyId: rows[index].applyId
		}, {
		  headers: {
		    'token': this.$store.state.token
		  }
		})
		
	    rows.splice(index, 1);
	  },
    },

    data() {
      return {
        tableData: [
        ]
      }
    }
  }
</script>

<style>
</style>
