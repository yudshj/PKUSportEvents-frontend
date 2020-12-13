<template>
    <el-container class="main-container" direction="vertical">
        <el-container class="part-container" direction="vertical">
            <h1 style="width:20%">标签选择</h1>
            <el-checkbox-group style="margin-bottom:5%;margin-left:5%;" v-model="selected">
                <el-checkbox class="checkbutton" v-for="item in tags" :label="item.id" :key="item.id">{{item.name}}</el-checkbox>
            </el-checkbox-group>
            <el-button type="primary" style="margin-bottom:5%;margin-left:40%;width:20%;background: #FF9966;border: none;" v-on:click="saveSelect">保存选择</el-button>
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
            }
        }

    }
</script>

<style scoped>
    .main-container {
        position: relative;
        margin-left: 25%;
        margin-top: 1%
    }
    .part-container {
        border-radius: 15px;
        width: 80%;
        background: #fff;
        margin-bottom: 5%;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #DCDCDC;
    }
    .el-checkbox+.el-checkbox {
        margin-left: 0;
    }
    .el-checkbox {
        margin-right: 3%;
        margin-bottom: 1%;
    }
</style>
