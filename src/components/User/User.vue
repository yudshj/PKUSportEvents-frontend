<template>
    <div el-container direction="vertical" class="demo-box">
        <div el-header>
            <page-head></page-head>
        </div>
    <el-main>
        <side-index @indexSelect="changeDisplay" ref="sideIndex">
        </side-index>
        <router-view/>
    </el-main>
    </div>
</template>

<script>
    import PageHead from '@/components/Tools/PageHead'
    import SideIndex from "./sideIndex";
    export default {
        name: "User",
        components: {SideIndex, PageHead},
        methods:{
            changeDisplay(){
                var type = this.$refs.sideIndex.type
                console.log(type)
            }
        }
    }
</script>
