<template>
    <div el-container  class="demo-box">
        <div el-header>
            <page-head></page-head>
        </div>
        <side-index @indexSelect="changeDisplay" ref="sideIndex">
        </side-index>
        <router-view/>
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
