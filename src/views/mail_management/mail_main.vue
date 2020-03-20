<template>
    <el-container>
      <el-header class="mailHeader">
          <!-- Header content -->
          <Header></Header>

        </el-header>

        <el-main class="mailMain">
          <!-- Main content -->
<!--          <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=1)" width="100%" color=#87CEFA SIZE=3>-->
          <div class="mailMainB"><left></left></div>
        </el-main>

        <el-footer class="mailFooter">
          <!-- Footer content -->
<!--          <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=1)" width="100%" color=#87CEFA SIZE=3>-->
          <Footer></Footer>
        </el-footer>

      </el-container>
</template>

<script>
import left from './Left';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: 'mail',
  components:{
      Footer,
      Header,
      left,
  },

}
</script>

<style scoped>

  /*#main,*/
  /*.el-container{*/
  /*  padding: 0px;*/
  /*  margin: 0px;*/
  /*  height: 780px;*/
  /*  background-image: url('./mail_assets/back1.jpg');*/
  /*  background-size: 100% 100%;*/
  /*   .../assets/mail_img/back1.jpg */
  /*}*/
  /*.el-main,.el-footer{*/
  /*  padding:5px;*/
  /*  height:fit-content;*/
  /*  background-color: cornsilk;*/
  /*  opacity: 0.85;*/
  /*}*/
    .mailHeader{
        height: 100%;
        background-color: #373f41;
        display: flex;
        align-items: center;
    }
    .mailMain{
        height: 720px;
        height:fit-content;
        background-image: url('./mail_assets/back1.jpg');
        background-size: 100% 100%;
    }
    .mailMainB{
        padding: 0px;
        margin: -20px;
        height: 720px;
        height:fit-content;
        background: cornsilk;
        /*background: #fff;*/
        opacity: 0.85;
    }
    .mailFooter{
        height: 100%;
        background-color: #373f41;
        display: flex;
        align-items: center;
    }


</style>
