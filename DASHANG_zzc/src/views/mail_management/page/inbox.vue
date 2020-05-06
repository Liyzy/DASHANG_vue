<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height="550">
     <el-table-column
      type="selection"
      width="55">
      <!-- @selection-change="handleSelectionChange"> -->
    </el-table-column>
    <el-table-column
      prop="type"
      label="邮件类型"
      width="100">
    </el-table-column>
    <el-table-column
      prop="sender"
      label="发件人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="title"
      label="主题"
      width="800">
    </el-table-column>
    <el-table-column
      
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'inbox',

    data() {
      return {
        multipleSelection: [],
        tableData: [{
          type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
           type: '未读',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
          type: '已读',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
          type: '普通',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
           type: '缓慢',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
          type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
          type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
          type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
          type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
           type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
         type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
         type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }, {
         type: '紧急',
          sender: '王小虎',
          title: 'Welcome to Genymotion - User account activation',
          date: '2020-03-15',
        }   
        ],
        // methods:{   
        //     handleSelectionChange(val) {
        //         this.multipleSelection = val;
        //     }
        // }
      }
    }
  }
</script>

<style>

</style>