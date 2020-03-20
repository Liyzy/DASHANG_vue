<template>
    <div class="userMain">
        <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;">
            <el-tab-pane><span slot="label"><i class="el-icon-s-goods"></i> <span style="font-size: 14px;">商品货架</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-shop"></i> <span style="font-size: 14px;">品牌展示</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-order"></i> <span style="font-size: 14px;">我的订单</span></span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-claim"></i> <span style="font-size: 14px;">购物清单</span></span>我的行程</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                tabPosition: 'left'
            };
        },
    }
</script>

<style scoped>
    .userMain{
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
