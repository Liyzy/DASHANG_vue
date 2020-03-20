<template>
    <div class="managerMain">
        <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;">
            <el-tab-pane><span slot="label"><i class="el-icon-s-data"></i> <span style="font-size: 14px;">季度报表</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-shop"></i> <span style="font-size: 14px;">采购管理</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-claim"></i> <span style="font-size: 14px;">任务管理</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-order"></i> <span style="font-size: 14px;">订单管理</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-goods"></i> <span style="font-size: 14px;">商品管理</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-home"></i> <span style="font-size: 14px;">厂商管理</span></span>我的行程</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Manager",
        data() {
            return {
                tabPosition: 'left'
            };
        },
    }
</script>

<style scoped>
    .managerMain{
        margin-top:-20px;
        margin-left:-20px;
        margin-right:-20px;

        height: 718px;
        align-content:stretch;
    }
    .el-tab-pane{
        font-size:60px;
    }
</style>
