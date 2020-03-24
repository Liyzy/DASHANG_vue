<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <div class="homeMain">
                <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;">
                    <el-tab-pane><span slot="label"><i class="el-icon-s-goods"></i> <span style="font-size: 14px;">商品货架</span></span>我的行程</el-tab-pane>
                    <el-tab-pane><span slot="label"><i class="el-icon-s-shop"></i> <span style="font-size: 14px;">品牌展示</span></span></el-tab-pane>
                    <el-tab-pane><span slot="label"><i class="el-icon-s-order"></i> <span style="font-size: 14px;">我的订单</span></span>我的行程</el-tab-pane>
                    <el-tab-pane><span slot="label"><i class="el-icon-s-claim"></i> <span style="font-size: 14px;">购物清单</span></span>我的行程</el-tab-pane>
                </el-tabs>
            </div>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";

    export default {
        name: "propertyhome",
        components:{
            Header,
            Footer
        },
        data() {
            return {
                tabPosition: 'left'
            };
        },
        methods: {
            logout() {
                // 清空token
                window.sessionStorage.clear()
                this.$router.push('/login')
            }
        }
    }


</script>

<style scoped>

/*    .el-footer{*/
/*        background-color: #373f41;*/
/*        color: #fff;*/
/*        font-size: 14px;*/
/*        text-align: center;*/
/*    }*/


/*    .el-main {*/
/*        background-color: #E9EEF3;*/
/*        color: #333;*/
/*        text-align: center;*/
/*        line-height: 50px;*/
/*    }*/

/*    .homeMain{*/
/*        margin-top:-20px;*/
/*        margin-left:-20px;*/
/*        margin-right:-20px;*/
/*        margin-bottom:-18px;*/

/*        height: 680px;*/
/*        align-content:stretch;*/
/*    }*/
/*    .el-tab-pane{*/
/*        font-size:60px;*/
/*    .label{*/
/*        font-size:60px;*/
/*    }*/
/*    }*/

/*    .el-dropdown-link {*/
/*        cursor: pointer;*/
/*        color: #000;*/
/*    }*/
/*    .el-icon-arrow-down {*/
/*        font-size: 12px;*/
/*    }*/
</style>
