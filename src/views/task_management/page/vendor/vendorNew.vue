<template>
    <div style="height: calc(100vh - 160px);">
        <div style="width: 100%;margin-bottom: 50px;text-align:center;padding-top:50px;">
            <span style="font-weight: bold;font-size: 40px;">注册商品</span>
        </div>
        <div style="width:500px;margin: 0 auto">
            <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div style="width:500px;margin: 0 auto">
            <span style="font-size: 20px">商品名称：</span>
            <el-input v-model="product" placeholder="请输入商品名称" style="width:400px;"></el-input>
        </div>
        <div style="width:500px;margin: 0 auto">
            <span style="font-size: 20px">商品品牌：</span>
            <el-input v-model="brand" placeholder="请输入商品品牌" style="width:400px;"></el-input>
        </div>
<!--        <div style="width:500px;margin: 0 auto">-->
<!--            <span style="font-size: 20px">商品图片：</span>-->
<!--            <el-input v-model="picture" placeholder="请输入商品图片" style="width:400px;"></el-input>-->
<!--        </div>-->
        <div style="width:500px;margin: 0 auto">
            <span style="font-size: 20px">商品描述：</span>
            <el-input v-model="desc" placeholder="请输入商品介绍" style="width:400px;"></el-input>
        </div>
        <div style="width:500px;margin: 0 auto">
            <span style="font-size: 20px">商品报价：</span>
            <el-input-number style="width:400px" v-model="price" controls-position="right" @change="handleChange" :min="0" :max="99999"></el-input-number>
        </div>

        <div style="width:500px;margin: 0 auto;padding-top: 10px">
            <el-button type="primary" @click="addNew" style="margin-left: 0px">注册</el-button>
            <el-button type="primary" @click="reset" style="margin-left: 20px">重置</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vendorNew",
        data() {
            return {
                imageUrl: '',

                product: '',
                brand:'',
                picture:'',
                desc:'',
                price:0,
                num: 0,
                }
            },
        methods: {

            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },



            async addNew(){
                this.$http({
                    url:'/registerProduct',
                    method:'post',
                    data:{
                        PRODUCT_NAME:this.product,
                        PRODUCT_BRAND:this.brand,
                        PRICE:this.price,
                        DESCRIPTION:this.desc,
                        PIC:this.imageUrl,
                        USER_ID:this.$store.state.userId,
                        USER_TYPE:3,
                    }
                }).then((response)=>{

                    // this.total=response.data;

                }).catch((error)=>{
                    console.log(error);
                })

            },
            reset(){
                this.product= '';
                this.brand='';
                this.picture='';
                this.desc='';
                this.price=0;
                this.num=0;
            },
            handleChange(value) {
                this.price=value;
            },

        },
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
