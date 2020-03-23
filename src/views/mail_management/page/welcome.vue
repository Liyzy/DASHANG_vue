<template>
  <div class="mailWelcome">
    <h3>欢迎您，{{username}}</h3>
    <div>共有 {{num}} 封 <a href="" value="未读邮件">未读邮件</a></div>
  </div>
</template>
<script>
export default {
  name: "welcome",
  data() {
    return {
      username: "冯卓",
      num: '66'
    };
  }
};
</script>
<style scoped>
  mailWelcome{
    /*height: 100%;*/
    /*width: 100%;*/
    /*padding: 0;*/
    /*position: fixed;*/
  }
</style>
