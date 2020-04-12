<template>

<div class="mailLeftMain">
  <el-tabs :tab-position="tabPosition" type="border-card" style="height: 100%;">
    <el-tab-pane label="欢迎页">
      <welcome></welcome>
    </el-tab-pane>

    <el-tab-pane label="详情页">
      <detial></detial>
    </el-tab-pane>

    <el-tab-pane label="写信">
      <write></write>
    </el-tab-pane>

    <el-tab-pane label="收信">
      <div><strong><span>收件箱</span></strong><span>(共 135 封，其中 未读邮件 91 封)</span></div>
      <el-row>
        <el-button type="primary" size="medium" plain>删除</el-button>
        <el-button type="primary" size="medium" plain>转发</el-button>
      </el-row>
      <inbox></inbox>
    </el-tab-pane>

    <el-tab-pane label="草稿箱">草稿箱</el-tab-pane>
    <el-tab-pane label="已发送">已经发送的信件</el-tab-pane>
  </el-tabs>
</div>


</template>

<script>
import inbox from './page/inbox'
import welcome from './page/welcome'
import detial from './page/detail'
import write from './page/write'
export default {
  name: 'left',
  components:{
    inbox,
    welcome,
    detial,
    write
  },
  data() {
    // const item = {
    //     date: '2016-05-02',
    //     name: '王小虎',
    //     address: '上海市普陀区金沙江路 1518 弄'
    //   };
      return {
        tabPosition: 'left',
        // tableData: Array(20).fill(item)
      };
    }
}
</script>
<style>
  .mailLeftMain{
    height: 100%;
    width: 100%;
    pidding:0;
    background: transparent;
    /*display: flex;*/
    position: absolute;
    /*align-content: center;*/
  }
/*.el-tabs__header{*/
/*  width: 100px;*/
/*}*/
/*.el-row{*/
/*  margin: 5px;*/
/*}*/
</style>
