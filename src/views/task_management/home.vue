<template>
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
    .homeHeader{
        height: 100%;
        background-color: #373f41;
        display: flex;
        align-items: center;
    }
    .homeMain{
        height: 720px;
    }
    .homeFooter{
        height: 100%;
        background-color: #373f41;
        display: flex;
        align-items: center;
    }
</style>
