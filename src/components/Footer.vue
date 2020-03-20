<template>
  <div class="footer">
    <p>大商集团版权所有&nbsp;copyright&nbsp;2003-{{year}}&nbsp;{{recordation}}&nbsp;ICP证:{{ICP}}</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: "2020",
      ICP: "辽B-2-4-20080134",
      recordation: "辽ICP备13005630号",
    };
  }
};
</script>

<style scoped>
.footer{
  height: 100%;
  width: 100%;
  background-color: #373f41;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
