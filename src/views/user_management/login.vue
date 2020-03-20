<template>
    <div class="login_container">
        <div class="login_box">
            <!-- logo -->
            <div class="logo">
                <img src="../../assets/images/logo/logo.jpg"/>
            </div>
            <!-- 登录表单 -->
            <div>
                <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="90px"
                         class="login_form">
                    <el-form-item label="用户名:" prop="username">
                        <el-input v-model="loginForm.username" prefix-icon="el-icon-user" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:" prop="password">
                        <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"
                                  autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用户类型:" prop="usertype">
                        <el-select v-model="loginForm.usertype" placeholder="请选择用户类型">
                            <el-option label="用户" value="ordinaryUser"></el-option>
                            <el-option label="物业" value="property "></el-option>
                            <el-option label="厂商" value="vendor"></el-option>
                        </el-select>
                    </el-form-item>

                    <div class="registerLink">
                        <el-link href="#/register">没有账号？立即注册</el-link>
                    </div>

                    <el-form-item class="login_btn_area">
<!--                        <el-button type="primary" round @click="login">登录</el-button>-->
                        <el-button type="primary" round @click="login"><el-link href="#/home">登录</el-link></el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            var validatePassword = (rule, value, callback) => {
                var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (!reg.test(this.loginForm.password)) {
                    callback(new Error('最少8个字符，至少一个大写字母、小写字母和数字'))
                } else {
                    callback();
                }
            };
            return {
                loginForm: {
                    username: '',
                    password: '',
                    usertype: '',
                },

                loginFormRules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '用户名长度为3到10个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, validator: validatePassword, trigger: 'blur'}
                    ],
                    usertype: [
                        {required: true, message: '请选择用户类型', trigger: 'change'}
                    ]
                }
            }
        },
        methods: {
            login() {
                // 登录的逻辑代码
                // 表单预验证
                // valid：bool类型
                this.$refs.loginFormRef.validate(async valid => {
                    // console.log(valid)
                    if (!valid) return false
                    // this.$http.post('login', this.loginForm): 返回值为promise
                    // 返回值为promise，可加await简化操作 相应的也要加async
                    const { data: res } = await this.$http.post('login', this.loginForm)
                    // console.log(res)
                    if (res.meta.status !== 200) return this.$message.error('登录失败')
                    this.$message.success('登录成功')
                    // 1、将登陆成功之后的token, 保存到客户端的sessionStorage中; localStorage中是持久化的保存
                    //   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
                    //   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
                    window.sessionStorage.setItem('token', res.data.token)
                    // 2、通过编程式导航跳转到后台主页, 路由地址为：/home
                    this.$router.push('/home')
                })
            }
        }
    }
</script>

<style scoped>
    .login_container {
        height: 100%;
        background-color: #019058;
    }

    .login_box {
        width: 450px;
        height: 430px;
        background-color: #ffffff;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .logo {
        height: 130px;
        width: 130px;
        border: solid 1px #eeeeee;
        border-radius: 50%;
        box-shadow: 0 0 10px #eeeeee;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .logo img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

    .login_form {
        position: absolute;
        bottom: 20px;
        width: 100%;
        padding: 0 30px;
        box-sizing: border-box;
    }

    .registerLink {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .login_btn_area button {
        width: 200px;
    }
</style>
