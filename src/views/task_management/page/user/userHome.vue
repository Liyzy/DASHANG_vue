<template>
    <div class="userHome">
        <img :src="avatarURL"/>
        <div>
            <div>
                <div>用户名：</div>
                <div>E-mail：</div>
                <div>身份证号：</div>
                <div>联系电话：</div>
                <div>收货地址：</div>
                <div>
                    <el-button type="primary" icon="el-icon-edit" @click="toModifyInfo">设置</el-button>
                </div>
            </div>
            <div>
                <div>{{name}}</div>
                <div>{{this.$store.state.email}}</div>
                <div>{{this.$store.state.IDNumber}}</div>
                <div>{{this.$store.state.telephone}}</div>
                <div>{{this.$store.state.address}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from "../../../../store";

    export default {
        name: "userHome",
        data() {
            return {
                avatarURL: this.$store.state.pic,  // 登录成功后动态获取
                name: this.$store.state.username
            }
        },
        mounted() {
            this.$http({
                url: '/getUserInfo',
                method: 'post',
                data: {
                    userId: this.$store.state.userId
                },
            }).then((response) => {
                console.log(response);
                // response.data才是获得response中的数据
                this.$store.state.userName = response.data.detail.userName;
                this.$store.state.IDNumber = response.data.detail.cid;
                this.$store.state.email = response.data.detail.email;
                this.$store.state.telephone = response.data.detail.telNumber;
                this.$store.state.address = response.data.detail.address;
                this.$store.state.pic = response.data.detail.pic;
            }).catch((error) => {
                console.log(error);
            })
        },

        methods: {
            toModifyInfo() {
                this.$router.push('/modifyInfo')
            }
        }

    }
</script>

<style scoped>
    .userHome {
        height: calc(100vh - 140px);
        width: 100%;
        padding: 0;
        margin-top: -16px;
        margin-left: -22px;
        background-image: url("../../../../assets/images/background/background.jpg");
        position: fixed;
    }

    .userHome > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-left: 140px;
        margin-top: 90px;
    }

    .userHome > div {
        display: flex;
        font-size: 20px;
        padding-top: 140px;
        padding-left: 120px;
        margin-top: -60px;
        line-height: 40px;
        font-weight: bold;
    }

    .userHome > div > div:nth-child(1) {
        width: 150px
    }

    .userHome > div > div:nth-child(1) > div:nth-last-child(1) {
        margin-top: 100px
    }
</style>
