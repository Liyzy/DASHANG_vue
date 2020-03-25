<template>
<div id="main">
 <el-container>
      <el-header height="90px" >
          <!-- Header content -->
          <p>Header</p>
          
        </el-header>
      
        <el-main>
          <!-- Main content -->
          <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=1)" width="100%" color=#87CEFA SIZE=3>
          <left></left>
        </el-main>
        
        <el-footer>
          <!-- Footer content -->
          <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=1)" width="100%" color=#87CEFA SIZE=3>
          <p>footer</p>
        </el-footer>
        
      </el-container>   
</div>
   
</template>

<script>
import left from './Left'

export default {
  name: 'App',
  components:{
    left,
  },
  
}
</script>

<style>
  #main,.el-container{
    padding: 0px;
    margin: 0px;
    height: 100%;
    background-image: url('./mail_assets/back1.jpg');
    background-size: 100% 100%;
    /* .../assets/mail_img/back1.jpg */
  }
  .el-main,.el-footer{
    padding:5px;
    height:fit-content;
    background-color: cornsilk;
    opacity: 0.85;
  }
  .el-header{
    background-color:#4682B4;
  }
  

</style>