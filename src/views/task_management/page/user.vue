<template>
    <div class="userMain">
        <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;">
            <el-tab-pane><span slot="label"><i class="el-icon-s-custom"></i> <span style="font-size: 14px;">用户主页</span></span><userHome></userHome></el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-goods"></i> <span style="font-size: 14px;">商品货架</span></span><commodity_list></commodity_list></el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-shop"></i> <span style="font-size: 14px;">品牌展示</span></span><brand_list></brand_list></el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-order"></i> <span style="font-size: 14px;">我的订单</span></span><order_list></order_list></el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-claim"></i> <span style="font-size: 14px;">购物清单</span></span><shopping_cart></shopping_cart></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import userHome from "./user/userHome";
    import brand_list from "../../order_management/brand_list";
    import commodity_list from "../../order_management/commodity_list";
    import order_list from "../../order_management/order_list";
    import shopping_cart from "../../order_management/shopping_cart";

    export default {
        name: "User",
        components: {
            userHome,
            brand_list,
            commodity_list,
            order_list,
            shopping_cart
        },
        data() {
            return {
                tabPosition: 'left'
            };
        },
    }
</script>

<style scoped>
    .userMain{
        height: 100%;
        width: 100%;
        padding: 0;
        position: fixed;
        /*border-width: 0;*/
    /*    margin-top:-20px;*/
    /*    margin-left:-20px;*/
    /*    margin-right:-20px;*/

    /*    height: 718px;*/
    /*    align-content:stretch;*/
    }
    /*.el-tab-pane{*/
    /*    height: 100%;*/
    /*    width: 100%;*/
    /*    padding: 0;*/
    /*    margin: 0;*/
    /*}*/
</style>
