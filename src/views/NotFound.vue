<template>
    <div class="container">
        <el-button round class="back-btn" @click="backToLogin()">返回登录页面</el-button>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        methods: {
            backToLogin: function () {
                // 暂定返回登录界面。更好的办法？
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        background: url("../assets/images/404.jpg") no-repeat center;
        background-size: 100% 100%;
    }

    .back-btn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>