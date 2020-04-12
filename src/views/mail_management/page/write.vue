<template>
  <div>
    <el-row>
      <el-button type="primary" size="medium" plain>发送</el-button>
      <el-button type="primary" size="medium" plain>存草稿</el-button>
      <el-button type="primary" size="medium" plain>取消</el-button>
    </el-row>
    <div>
      <table>
        <tbody>
          <tr>
            <th>收件人：</th>
            <td>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </td>
          </tr>
          <tr>
            <th>主题：</th>
            <td>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </td>
          </tr>
          <tr>
            <th rowspan="30">正文：</th>
            <td>
              <textarea class="" rows="30" cols="70"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "write",
  data() {
    return {
      input: ""
    };
  }
};
</script>

