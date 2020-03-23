<template>
    <div class="homePage">
        <el-container>
    <!--  导航栏  -->
        <el-header class="homeHeader">
            <Header></Header>
        </el-header>

        <el-main class="homeMain">
            <User></User>
        </el-main>
        <el-footer class="homeFooter">
            <Footer></Footer>
        </el-footer>
    </el-container>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";
    import User from "./page/user";
    // import Manager from "./page/manager";
    // import vender from "./page/vender";

    export default {
        name: "home",
        components:{
            Header,
            Footer,
            User,
            // Manager,
            // Vender,
        },
        methods: {
            saveNavState (activePath) {
                window.sessionStorage.setItem('activePath', activePath)
            }
        }
    }
</script>

<style scoped>
    .homePage{
        height: 100%;
        width: 100%;
        /*position: fixed;*/
    }
    .homeHeader{
        height: 100%;
        background-color: #373f41;
        display: flex;
        align-items: center;
    }
    .homeMain{
        height: 100%;
        width: 100%;
        padding: 0;

        /*position: relative;*/
        /*    margin-top:-20px;*/
        /*    margin-left:-20px;*/
        /*margin-right:-18px;*/
    }
    .homeFooter{
        height: 100%;
        width: 100%;
        background-color: #373f41;
        display: flex;
        position:absolute;
        bottom:0%;
        align-items: center;
    }
</style>
