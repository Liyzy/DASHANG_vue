<template>
  <div id="register">
    <img src="@/assets/images/dashangLogo.jpg" />
    <h1>欢迎注册加入大商</h1>
    <div>
      <table id="register_form" align="center">
        <tr>
          <td class="col-1">用户名：</td>
          <td class="col-2">
            <input type="text" name="username" v-model="input.username" placeholder="请输入用户名" />
          </td>
        </tr>
        <tr>
          <td class="col-1">密码：</td>
          <td class="col-2">
            <input type="password" name="password" v-model="input.password" placeholder="请输入密码" />
          </td>
        </tr>
        <tr>
          <td class="col-1">确认密码：</td>
          <td class="col-2">
            <input type="password" name="password" v-model="input.password" placeholder="请再次输入密码" />
          </td>
        </tr>
        <tr>
          <td class="col-1">注册用户类型：</td>
          <td class="col-2">
            <select>
              <option>用户</option>
              <option>物业</option>
              <option>厂商</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button type="button" @click="register()" id="register_btn">注册</button>
          </td>
        </tr>
      </table>

      <footer></footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Register",
  components: {
    Footer
  },
  data() {
    return {
      input: {
        username: "",
        password: "",
        usertype: ""
      }
    };
  },
  methods: {
    register() {
      // code register logic here
      console.log("点击了注册按钮");

      // 注册成功返回登陆界面
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
#rigster {
  flex: 1;
  height: 100%;
  background: rgb(1, 144, 88);
}

#register h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#register img {
    margin: 60px auto;
  height: 100px;
  width: 100px;
  display: block;
}

input {
  width: 200px;
}

select {
  width: 200px;
}

#register_form {
  border: 1px solid rgb(161, 158, 158);
  border-radius: 5px;
  text-align: center;
}

.col-1 {
  padding: 15px 0px 20px 20px;
}

.col-2 {
  padding: 15px 20px 20px 0px;
}

#register_btn {
  width: 100px;
  margin-top: 15px;
  margin-bottom: 20px;
}
</style>