<template>
    <div class="venderMain">
        <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;">
            <el-tab-pane><span slot="label"><i class="el-icon-s-data"></i> <span style="font-size: 14px;">季度报表</span></span><vender-charts></vender-charts></vender-charts></el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-order"></i> <span style="font-size: 14px;">生产管理</span></span><vender-my-goods></vender-my-goods></el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-claim"></i> <span style="font-size: 14px;">任务管理</span></span><vender-task></vender-task></el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-goods"></i> <span style="font-size: 14px;">查看产品</span></span><vender-goods></vender-goods></el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-shop"></i> <span style="font-size: 14px;">注册产品</span></span><vender-new></vender-new></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import venderCharts from "./vender/venderCharts";
    import venderTask from "./vender/venderTask";
    import venderGoods from "./vender/venderGoods";
    import venderMyGoods from "./vender/venderMyGoods";
    import venderNew from "./vender/venderNew";

    export default {
        name: "Vender",
        components:{
            venderCharts,
            venderTask,
            venderGoods,
            venderMyGoods,
            venderNew,
        },
        data() {
            return {
                tabPosition: 'left'
            };
        },
    }
</script>

<style scoped>
    .venderMain{
        height: 100%;
        width: 100%;
        padding: 0;
        position: fixed;
    }
    .el-tab-pane{
        font-size:60px;
    }
</style>
