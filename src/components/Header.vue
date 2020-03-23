<template>
    <div class="header">

        <!--    :src="require('../assets/images/avatars/user1.jpg')"            :src="require('../../public/favicon.ico')"-->
        <div style="display: flex;align-items: center;">
            <el-image style="width: 80px; height: 50px; border-radius:50%;" :src="require('../../public/图标.png')" :fit="fill">
            </el-image>
            <span style="margin-left: 20px;">大商电器代理服务平台</span>
        </div>
<!--        <div>-->
<!--            <el-button type="text" style="padding-right: 5px;color: #fff;font-size: 20px;">用户名</el-button>-->
<!--            <el-button type="primary" icon="el-icon-edit" circle></el-button>-->
<!--            <el-button type="primary" icon="el-icon-message" circle @click="toMail"></el-button>-->
<!--            <el-button type="info" @click="logout" icon="el-icon-switch-button" style="font-size: 14px">注销</el-button>-->
<!--        </div>-->
        <div class="user_info_container">
            <span><el-button type="text" @click="toMail" style="color: #ecf0f1; font-size: 20px;"><i class="el-icon-message"></i> 我的邮件</el-button></span>
            <img :src="avatarURL" :alt="username" class="avatar_img"/>
            <el-dropdown>
                <span class="el-dropdown-link">{{username}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-house"><el-button @click="toHome" type="text">用户主页</el-button></el-dropdown-item>
                    <el-dropdown-item icon="el-icon-switch-button"><el-button @click="logout" type="text">注销</el-button></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                avatarURL: 'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',  // 登录成功后动态获取
                username: '一只鱼',  // 登录成功后动态获取
                }

        },
        methods: {
            toMail(){
                // window.sessionStorage.clear()
                this.$router.push('/mail')
            },
            toHome(){
                // window.sessionStorage.clear()
                this.$router.push('/home')
            },
            logout() {
                // 清空token
                window.sessionStorage.clear()
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .header{
        background-color: #373f41;
        color: #fff;
        width: 100%;
        font-size: 20px;

        display: flex;
        justify-content: space-between;
        padding-left: 0px;
        align-items: center;
    }
    .avatar_img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-left: 50px;
        margin-right: 20px;
    }
    .user_info_container {
        display: flex;
        align-items: center;
        position: absolute;
        right: 20px;
        font-size: 17px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #ecf0f1;
        font-size: 20px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
