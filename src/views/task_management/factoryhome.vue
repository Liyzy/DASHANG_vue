<template>
    <el-container>
        <el-header>
            <div style="display: flex;align-items: center;">
                <el-image
                        style="width: 50px; height: 50px; border-radius:50%;"
                        :src="require('../../assets/images/avatars/user1.jpg')"
                        :fit="fill">
                </el-image>
                <span style="margin-left: 40px;">大商电器代理服务平台</span>
            </div>

            <div>
                <el-button type="text" style="padding-right: 5px;color: #fff;font-size: 20px;">用户名</el-button>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
<!--                <el-button type="primary" icon="el-icon-message" circle></el-button>-->
                <el-button type="info" @click="logout" icon="el-icon-switch-button" style="font-size: 14px">注销</el-button>
            </div>
        </el-header>
        <el-main>
            <div class="homeMain">
                <el-tabs type="border-card" :tab-position="tabPosition" style="height: 100%;">
                    <el-tab-pane><span slot="label"><i class="el-icon-s-data"></i> <span style="font-size: 14px;">季度报表</span></span>我的行程</el-tab-pane>
                    <el-tab-pane><span slot="label"><i class="el-icon-s-order"></i> <span style="font-size: 14px;">生产管理</span></span>我的行程</el-tab-pane>
                    <el-tab-pane><span slot="label"><i class="el-icon-s-claim"></i> <span style="font-size: 14px;">任务管理</span></span>我的行程</el-tab-pane>
                    <el-tab-pane><span slot="label"><i class="el-icon-s-goods"></i> <span style="font-size: 14px;">查看产品</span></span>我的行程</el-tab-pane>
                    <el-tab-pane><span slot="label"><i class="el-icon-s-shop"></i> <span style="font-size: 14px;">查看商家</span></span>我的行程</el-tab-pane>
                </el-tabs>
            </div>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
    import Footer from "../../components/Footer";

    export default {
        name: "factoryhome",
        components:{
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
    /*.el-header{*/
    /*    background-color: #373f41;*/
    /*    color: #fff;*/

    /*    font-size: 20px;*/

    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    padding-left: 20px;*/
    /*    align-items: center;*/
    /*}*/



    /*.el-main {*/
    /*    background-color: #E9EEF3;*/
    /*    color: #333;*/
    /*    text-align: center;*/
    /*    line-height: 50px;*/
    /*}*/

    /*.homeMain{*/
    /*    margin-top:-20px;*/
    /*    margin-left:-20px;*/
    /*    margin-right:-20px;*/
    /*    margin-bottom:-18px;*/

    /*    height: 680px;*/
    /*    align-content:stretch;*/
    /*}*/
    /*.el-tab-pane{*/
    /*    font-size:60px;*/
    /*.label{*/
    /*    font-size:60px;*/
    /*}*/
    /*}*/

    /*.el-dropdown-link {*/
    /*    cursor: pointer;*/
    /*    color: #000;*/
    /*}*/
    /*.el-icon-arrow-down {*/
    /*    font-size: 12px;*/
    /*}*/
</style>

