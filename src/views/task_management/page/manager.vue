<template>
    <div class="managerMain">
        <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;"
                 v-model="activeName"
                 @tab-click="handleClick">
<!--            <el-tab-pane name="first" :key="'first'"><span slot="label"><i class="el-icon-s-data"></i> <span-->
<!--                    style="font-size: 14px;">季度报表</span></span>-->
<!--                <manager-charts v-if="isChildUpdate1"></manager-charts>-->
<!--            </el-tab-pane>-->
            <el-tab-pane name="second" :key="'second'"><span slot="label"><i class="el-icon-s-shop"></i> <span
                    style="font-size: 14px;">采购管理</span></span>
                <manager-purchase v-if="isChildUpdate2"></manager-purchase>
            </el-tab-pane>
            <el-tab-pane name="third" :key="'third'"><span slot="label"><i class="el-icon-s-claim"></i> <span
                    style="font-size: 14px;">任务管理</span></span>
                <manager-task v-if="isChildUpdate3"></manager-task>
            </el-tab-pane>
            <el-tab-pane name="fourth" :key="'fourth'"><span slot="label"><i class="el-icon-s-order"></i> <span
                    style="font-size: 14px;">订单管理</span></span>
                <manager-order v-if="isChildUpdate4"></manager-order>
            </el-tab-pane>
            <el-tab-pane name="fifth" :key="'fifth'"><span slot="label"><i class="el-icon-s-goods"></i> <span
                    style="font-size: 14px;">商品管理</span></span>
                <manager-goods v-if="isChildUpdate5"></manager-goods>
            </el-tab-pane>
            <el-tab-pane name="sixth" :key="'sixth'"><span slot="label"><i class="el-icon-s-home"></i> <span
                    style="font-size: 14px;">厂商管理</span></span>
                <manager-vendor v-if="isChildUpdate6"></manager-vendor>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import managerOrder from "./manager/managerOrder";
    import managerTask from "./manager/managerTask";
    import managerPurchase from "./manager/managerPurchase";
    import managerGoods from "./manager/managerGoods";
    import managerVendor from "./manager/managerVendor";
    import managerCharts from "./manager/managerCharts";

    export default {
        name: "Manager",
        components: {
            managerOrder,
            managerTask,
            managerPurchase,
            managerGoods,
            managerVendor,
            managerCharts
        },
        data() {
            return {
                tabPosition: 'left',

                activeName: "second",
                isChildUpdate1:false,
                isChildUpdate2:true,
                isChildUpdate3:false,
                isChildUpdate4:false,
                isChildUpdate5:false,
                isChildUpdate6:false,
            };
        },
        methods:{
            handleClick(tab) {
                if(tab.name == "first") {
                    this.isChildUpdate1 = true;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = false;
                    this.isChildUpdate6 = false;
                } else if(tab.name == "second") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = true;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = false;
                    this.isChildUpdate6 = false;
                }else if(tab.name == "third") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = true;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = false;
                    this.isChildUpdate6 = false;
                }else if(tab.name == "fourth") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = true;
                    this.isChildUpdate5 = false;
                    this.isChildUpdate6 = false;
                }else if(tab.name == "fifth") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = true;
                    this.isChildUpdate6 = false;
                }else if(tab.name == "sixth") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = false;
                    this.isChildUpdate6 = true;
                }
            }
        }
    }
</script>

<style scoped>
    .managerMain {
        height: 100%;
        width: 100%;
        padding: 0;
        position: fixed;
    }

    .el-tab-pane {
        font-size: 60px;
    }
</style>
