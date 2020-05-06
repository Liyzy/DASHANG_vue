<template>
    <div style="width: 100%">
        <div style="width: 100%;margin-bottom: 50px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;">商品管理</span>
        </div>
<!--        <div style="float: right;width: 500px;margin: 20px">-->
<!--            <el-input-->
<!--                    placeholder="请输入内容"-->
<!--                    prefix-icon="el-icon-search"-->
<!--                    v-model="input"-->
<!--                    style="margin: 5px;width: 100%">-->
<!--            </el-input>-->
<!--        </div>-->

        <el-table
                :data="managerGoodsList"
                style="width: 100%;height: 500px"
                max-height="5000px">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="商品图片" style="display: block">
                            <img :src="props.row.PIC" style="height: 100px;width: 100px"/>
                        </el-form-item>
                        <el-form-item label="商品名称：">
                            <span>{{ props.row.PRODUCT_NAME }}</span>
                        </el-form-item>
                        <el-form-item label="商品 ID：">
                            <span>{{ props.row.PRODUCT_ID }}</span>
                        </el-form-item>
                        <el-form-item label="商品描述：">
                            <span>{{ props.row.DESCRIPTION }}</span>
<!--                            <el-button type="text"><i class="el-icon-edit"></i></el-button>-->
                        </el-form-item>
                        <el-form-item label="商品售价：">
<!--                            <el-input-number v-model="props.row.PRICE" controls-position="right" @change="handleChange" :min="0" :max="100000"></el-input-number>-->
<!--                            <el-button type="primary" style="margin-left: 20px">确定</el-button>-->
                            <span>{{ props.row.PRICE }}</span>
                        </el-form-item>


                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="序号"
                    width="200px"
                    type="index"
                    align="center"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    label="商品 ID"
                    width="200px"
                    align="center"
                    prop="PRODUCT_ID">
            </el-table-column>
            <el-table-column
                    label="商品名称"
                    width="200px"
                    align="center"
                    prop="PRODUCT_NAME">
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="商品报价区间"-->
<!--                    width="240px"-->
<!--                    align="center"-->
<!--                    prop="goodsOffer">-->
<!--            </el-table-column>-->
            <el-table-column
                    label="商品售价"
                    width="200px"
                    align="center"
                    prop="PRICE">
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="商品状态"-->
<!--                    width="180px"-->
<!--                    align="center"-->
<!--                    prop="goodsState">-->
<!--                <template slot-scope="scope">-->
<!--                    <el-switch-->
<!--                            v-model="value1"-->
<!--                            active-text="上架"-->
<!--                            inactive-text="下架">-->
<!--                    </el-switch>-->
<!--                </template>-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    label="操作"-->
<!--                    fixed="right"-->
<!--                    align="center"-->
<!--                    width="100px">-->
<!--                <template slot-scope="scope">-->
<!--                    <el-button type="primary" size="small">删除</el-button>-->
<!--                </template>-->
<!--            </el-table-column>-->
        </el-table>
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="queryInfo.pageNum"
                    :page-size="queryInfo.pageSize"
                    layout="prev, pager, next, jumper"
                    :total="total"
                    style="margin-top: 10px ">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "managerGoods",
        data() {
            return {
                value1: true,
                input: '',
                queryInfo:{
                    pageNum:1,
                    pageSize:10
                },
                total:10,
                managerGoodsList:[],
                tableData: [{
                    goodsId:'12312321',
                    goodsName:'三星智能手机S10旗舰版全网通',
                    goodsPrice:'3130',
                    goodsOffer:'2130-2530',
                    goodsDesc: '旗舰版-全网通-4G-套餐一',
                    goodsImageUrl:'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',
                }, ]
            }
        },
        created() {
            this.getManagerGoods();
        },
        methods: {
            handleSizeChange(newSize) {
                this.queryInfo.pageSize=newSize;
                this.getManagerGoods();

                console.log(`每页 ${newSize} 条`);
            },
            handleCurrentChange(newPage){
                this.queryInfo.pageNum= newPage;
                this.getManagerGoods();

            },
            handleChange(value) {
                console.log(value);
            },
            async getTotal(){
                this.$http({
                    url:'/getNum',
                    method:'post',
                    data:{
                        name:'product',
                    }
                }).then((response)=>{

                    this.total=response.data;

                }).catch((error)=>{
                    console.log(error);
                })


                console.log(this.managerGoodsList)
            },

            async getManagerGoods() {
                // const {data:res}=await this.$http.post('getAll',{
                //     params:this.queryInfo
                // })
                this.$http({
                    url:'/getAll',
                    method:'post',
                    data:{
                        pageNum:this.queryInfo.pageNum,
                        pageSize:this.queryInfo.pageSize,
                    }
                }).then((response)=>{

                    this.managerGoodsList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.getTotal();


                console.log(this.managerGoodsList)
            }
        }
    }
</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
