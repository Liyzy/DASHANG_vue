<template>
    <div>
        <div style="width: 100%;margin-bottom: 0px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;">品牌展示</span>
        </div>
<!--        <div style="float: right;width: 500px;margin-top: -30px">-->
<!--            <el-input-->
<!--                    placeholder="请输入内容"-->
<!--                    prefix-icon="el-icon-search"-->
<!--                    v-model="input"-->
<!--                    style="margin: 5px; .width: 100%">-->
<!--            </el-input>-->
<!--        </div>-->
        <el-divider></el-divider>
        <div style="overflow: auto;width:100%;height: 799px;padding-right:200px;margin-right: 160px">
            <div style="height:1000px;margin-right: 1%">
                <el-row>
                    <el-col :span="3" v-for="(item) in brandList" :key="item.BRAND_ID" :offset="1">
                        <div style="margin-top:15px">
                            <el-card :body-style="{ padding: '0px'}" shadow="hover">
                                <div style="width: 235px;height: 235px"><img :src="item.BRAND_PICTURE" class="image"/></div>
                                <div style="padding: 14px;height: 150px">
                                    <span><el-button type="text"
                                                     style="color: black">{{item.BRAND_NAME}}</el-button></span><br>
                                    <div class="bottom">
                                        <div class="evaluate" style="font-size: 14px;margin-top: 2px">
                                            <strong style="line-height: 18px">简介：{{item.BRAND_INTRODUCTION}}</strong>

<!--                                            <strong>评价：</strong>-->
<!--                                            <el-rate-->
<!--                                                    v-model="item.value"-->
<!--                                                    disabled-->
<!--                                                    show-score-->
<!--                                                    text-color="#ff9900"-->
<!--                                                    score-template="{value}"-->
<!--                                                    style="display: inline;">-->
<!--                                            </el-rate>-->
                                        </div>
                                    </div>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "userBrand",
        data() {
            return {
                queryInfo:{
                    page:1,
                    size:10
                },
                brandList:[],
                tabledata: [
                    {
                        brand: '三星',
                        value: '3.7'
                    },
                ],

            }
        },
        created() {
            this.getUserBrand()
        },
        methods: {
            async getUserBrand() {
                // const {data:res}=await this.$http.get('showAllBands',{params:this.queryInfo})
                this.$http({
                    url:'/showAllBrands',
                    method:'get',
                    params:{
                        page:this.queryInfo.page,
                        size:this.queryInfo.size,
                    }
                }).then((response)=>{
                    this.brandList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })

                console.log(this.brandList)
            }
        }
    }
</script>

<style scoped>
    .evaluate {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .image {
        width: 90%;
        height: auto;
        display: block;
    }
</style>
