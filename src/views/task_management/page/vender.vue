<template>
    <div class="venderMain">
        <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;">
            <el-tab-pane><span slot="label"><i class="el-icon-s-data"></i> <span style="font-size: 14px;">季度报表</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-order"></i> <span style="font-size: 14px;">生产管理</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-claim"></i> <span style="font-size: 14px;">任务管理</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-goods"></i> <span style="font-size: 14px;">查看产品</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-shop"></i> <span style="font-size: 14px;">查看商家</span></span>我的行程</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Vender",
        data() {
            return {
                tabPosition: 'left'
            };
        },
    }
</script>

<style scoped>
    .venderMain{
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
