<template>
    <div class="userMain">
        <el-tabs type="border-card"
                 :tab-position="tabPosition"
                 style="height: 100%;"
                 v-model="activeName"
                 @tab-click="handleClick">
            <el-tab-pane name="first" :key="'first'">
                <span slot="label"><i class="el-icon-s-custom"></i> <span style="font-size: 14px;">用户主页</span>
                </span>
                <userHome v-if="isChildUpdate1"></userHome>
            </el-tab-pane>
            <el-tab-pane name="second" :key="'second'">
                <span slot="label"><i class="el-icon-s-goods"></i> <span
                    style="font-size: 14px;">商品货架</span></span>
                <user-goods v-if="isChildUpdate2"></user-goods>
            </el-tab-pane>
            <el-tab-pane name="third" :key="'third'">
                <span slot="label"><i class="el-icon-s-shop"></i> <span
                    style="font-size: 14px;">品牌展示</span></span>
                <user-brand v-if="isChildUpdate3"></user-brand>
            </el-tab-pane>
            <el-tab-pane name="fourth" :key="'fourth'"><span slot="label"><i class="el-icon-s-order"></i> <span
                    style="font-size: 14px;">我的订单</span></span>
                <user-order v-if="isChildUpdate4"></user-order>
            </el-tab-pane>
<!--            <el-tab-pane><span slot="label"><i class="el-icon-s-claim"></i> <span-->
<!--                    style="font-size: 14px;">购物清单</span></span>-->
<!--                <user-shopping></user-shopping>-->
<!--            </el-tab-pane>-->
        </el-tabs>
    </div>
</template>

<script>
    import userHome from "./user/userHome";
    import userGoods from "./user/userGoods";
    import userBrand from "./user/userBrand";
    import userOrder from "./user/userOrder";
    import userShopping from "./user/userShopping";

    export default {
        name: "User",
        components: {
            userHome,
            userGoods,
            userBrand,
            userOrder,
            userShopping
        },
        data() {
            return {
                tabPosition: 'left',

                activeName: "first",
                isChildUpdate1:true,
                isChildUpdate2:false,
                isChildUpdate3:false,
                isChildUpdate4:false,
            };
        },
        methods:{
            handleClick(tab) {
                if(tab.name == "first") {
                    this.isChildUpdate1 = true;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                } else if(tab.name == "second") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = true;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                }else if(tab.name == "third") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = true;
                    this.isChildUpdate4 = false;
                }else if(tab.name == "fourth") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = true;
                }
            }
        }
    }
</script>

<style scoped>
    .userMain {
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
