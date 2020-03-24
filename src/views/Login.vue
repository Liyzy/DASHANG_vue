<template>
  <div id="login">
    <img src="@/assets/images/dashangLogo.jpg" />
    <h1>欢迎登录</h1>
    <div>
      <table id="login_form" align="center">
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
          <td class="col-1">用户类型：</td>
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
            <router-link to="/register">
              <a herf="/register">没有账号？立即注册</a>
            </router-link>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button type="button" @click="login()" id="login_btn">登录</button>
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
  name: "Login",
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
    login() {
      // code login logic here
      console.log("点击了登录按钮");
    }
  }
};
</script>

<style scoped>
#login h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#login img {
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

#login_form {
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

#login_btn {
  width: 100px;
  margin-top: 15px;
  margin-bottom: 20px;
}

a {
  color: green;
  font-size: 13px;
  text-decoration: none;
}
a:hover {
  cursor: pointer;
  text-decoration: underline;
}
a:active {
  color: black;
}
a:visited {
  color: purple;
}
</style>