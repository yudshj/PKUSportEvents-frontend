<template>
    <el-container class="main-container" direction="vertical">
        <el-container class="part-container" direction="vertical">
            <h1 class="bigtext">标签选择</h1>
            <el-checkbox-group class="checkgroup" v-model="selected">
                <el-checkbox class="checkbutton" v-for="item in tags" :label="item.id" :key="item.id">{{item.name}}</el-checkbox>
            </el-checkbox-group>
            <el-button type="primary" class="savebutton" v-on:click="saveSelect">保存选择</el-button>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Like",
        data () {
            return {
                username: this.$store.state.username,
                selected: [ ],
                tags: [
                    {
                        id: 0,
                        name: '足球'
                    },
                    {
                        id: 1,
                        name: '篮球'
                    },
                    {
                        id: 2,
                        name: '排球'
                    },
                ]
            }
        },
        methods: {
            saveSelect() {
                console.log(this.selected)
                this.$axios.post('/tag/getall',{})
                .then(resp => {console.log(resp.data)})
            }
        }

    }
</script>

<style scoped>
    .main-container {
        postion: absolute;
        margin-left: 250px;
        margin-right:0;
        width: 800px;
        margin-top: 20px;
    }
    .part-container {
        border-radius: 15px;
        width: 800px;
        background: #fff;
        margin-bottom: 20px;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #DCDCDC;
    }
    .bigtext{
        width:120px
    }
    .smalltext{
        margin-left:50px;
        color:gray
    }
    .el-checkbox+.el-checkbox {
        margin-left: 0;
    }
    .el-checkbox {
        margin-right: 30px;
        margin-bottom: 10px;
    }
    .savebutton{
        margin-bottom:30px;
        margin-left:340px;
        width:120px; /*(left+width/2)等于container的大小的一半，就可以居中*/
        background: #FF9966;
        border: none;
    }
    .checkgroup{
        margin-bottom:10px;
        margin-left:30px;
    }
</style>
