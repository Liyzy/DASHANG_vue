<template>
    <div class="vendorMain">
        <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;"
                 v-model="activeName"
                 @tab-click="handleClick">
<!--            <el-tab-pane name="first" :key="'first'"><span slot="label"><i class="el-icon-s-data"></i> <span-->
<!--                    style="font-size: 14px;">季度报表</span></span>-->
<!--                <vendor-charts v-if="isChildUpdate1"></vendor-charts>-->
<!--            </el-tab-pane>-->
            <el-tab-pane name="second" :key="'second'"><span slot="label"><i class="el-icon-s-order"></i> <span
                    style="font-size: 14px;">生产管理</span></span>
                <vendor-my-goods v-if="isChildUpdate2"></vendor-my-goods>
            </el-tab-pane>
            <el-tab-pane name="third" :key="'third'"><span slot="label"><i class="el-icon-s-claim"></i> <span
                    style="font-size: 14px;">任务管理</span></span>
                <vendor-task v-if="isChildUpdate3"></vendor-task>
            </el-tab-pane>
            <el-tab-pane name="fourth" :key="'fourth'"><span slot="label"><i class="el-icon-s-goods"></i> <span
                    style="font-size: 14px;">查看产品</span></span>
                <vendor-goods v-if="isChildUpdate4"></vendor-goods>
            </el-tab-pane>
            <el-tab-pane name="fifth" :key="'fifth'"><span slot="label"><i class="el-icon-s-shop"></i> <span
                    style="font-size: 14px;">注册产品</span></span>
                <vendor-new v-if="isChildUpdate5"></vendor-new>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import vendorCharts from "./vendor/vendorCharts";
    import vendorTask from "./vendor/vendorTask";
    import vendorGoods from "./vendor/vendorGoods";
    import vendorMyGoods from "./vendor/vendorMyGoods";
    import vendorNew from "./vendor/vendorNew";

    export default {
        name: "vendor",
        components: {
            vendorCharts,
            vendorTask,
            vendorGoods,
            vendorMyGoods,
            vendorNew,
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
            };
        },
        methods: {
            handleClick(tab) {
                if (tab.name == "first") {
                    this.isChildUpdate1 = true;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = false;
                } else if (tab.name == "second") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = true;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = false;
                } else if (tab.name == "third") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = true;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = false;
                } else if (tab.name == "fourth") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = true;
                    this.isChildUpdate5 = false;
                } else if (tab.name == "fifth") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                    this.isChildUpdate4 = false;
                    this.isChildUpdate5 = true;
                }
            }
        }
    }
</script>

<style scoped>
    .vendorMain {
        height: 100%;
        width: 100%;
        padding: 0;
        position: fixed;
    }

    .el-tab-pane {
        font-size: 60px;
    }
</style>
