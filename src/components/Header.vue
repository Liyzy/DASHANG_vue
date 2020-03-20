<template>
    <div class="header">
    <div style="display: flex;align-items: center;">
        <el-image
                style="width: 50px; height: 50px; border-radius:50%;"
                :src="require('../assets/images/avatars/user1.jpg')"
                :fit="fill">
        </el-image>
        <span style="margin-left: 40px;">大商电器代理服务平台</span>
    </div>

    <div>
        <el-button type="text" style="padding-right: 5px;color: #fff;font-size: 20px;">用户名</el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="primary" icon="el-icon-message" circle @click="toMail"></el-button>
        <el-button type="info" @click="logout" icon="el-icon-switch-button" style="font-size: 14px">注销</el-button>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            toMail(){
                window.sessionStorage.clear()
              this.$router.push('/mail')
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
        padding-left: 20px;
        align-items: center;
    }
</style>
