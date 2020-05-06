<template>
    <div style="width: 100%; height: calc(100vh - 160px);">
        <div style="width: 100%;margin-bottom: 50px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;margin: 0 auto">查看商品</span>
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
                :data="goodsList"
                style="width: 100%;height: 400px"
                max-height="400px">
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
                        <el-form-item label="商品售价：">
                            <span>{{ props.row.PRICE }}</span>
                        </el-form-item>
                        <el-form-item label="商品描述：">
                            <span>{{ props.row.DESCRIPTION }}</span>
                        </el-form-item>
                        <el-form-item label="本厂报价：">
                            <el-input-number v-model="goodsPrice[props.$index].price" @change="handleChange(props.$index,goodsPrice[props.$index].price)" :min="0" :max="9999" label="本厂报价"></el-input-number>
                        </el-form-item>
<!--                        <el-form-item label="本厂报价：">-->
<!--                            <el-input-number v-model="props.row.goodsOffer" controls-position="right" @change="handleChange" :min="0" :max="100000"></el-input-number>-->
<!--                            <el-button type="primary" style="margin-left: 20px">确定</el-button>-->
<!--                        </el-form-item>-->
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
                    sortable
                    prop="PRODUCT_ID">
            </el-table-column>
            <el-table-column
                    label="商品名称"
                    width="200px"
                    align="center"
                    prop="PRODUCT_NAME">
            </el-table-column>
            <el-table-column
                    label="商品售价"
                    width="200px"
                    align="center"
                    sortable
                    prop="PRICE">
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="本厂报价"-->
<!--                    width="180px"-->
<!--                    align="center"-->
<!--                    sortable-->
<!--                    prop="goodsOffer">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    label="商品状态"-->
<!--                    width="180px"-->
<!--                    align="center"-->
<!--                    prop="goodsState"-->
<!--                    :filters="[{ text: '上架', value: '上架' },-->
<!--                    { text: '下架', value: '下架' }]"-->
<!--                    :filter-method="filterTag"-->
<!--                    filter-placement="bottom-end">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    label="注册情况"-->
<!--                    width="180px"-->
<!--                    align="center"-->
<!--                    prop="goodsRegister"-->
<!--                    :filters="[{ text: '已注册', value: '已注册' },-->
<!--                    { text: '未注册', value: '未注册' }]"-->
<!--                    :filter-method="filterTag"-->
<!--                    filter-placement="bottom-end">-->
<!--            </el-table-column>-->

            <el-table-column
                    label="操作"
                    fixed="right"
                    align="center"
                    width="100px">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="fun(scope.$index)">注册</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                append-to-body
                center>
            <div style="text-align: center">
                <div>是否注册该商品？</div>
            </div>
            <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="buy">确 定</el-button>
                        </span>
        </el-dialog>

        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="queryInfo.pageNum"
                    :page-size="queryInfo.pageSize"
                    layout="prev, pager, next, jumper"
                    :total="total"
                    style="margin-top: 10px;text-align: center ">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vendorGoods",
        data() {
            return {
                centerDialogVisible: false,
                number:0,
                goodsPrice:[
                    {price:0},
                    {price:0},
                    {price:0},
                    {price:0},
                    {price:0},
                    {price:0},
                    {price:0},
                    {price:0},
                    {price:0},
                    {price:0},
                ],

                input: '',
                queryInfo:{
                    pageNum:1,
                    pageSize:10
                },
                total:10,
                goodsList:[],
                tableData: [{
                    goodsId:'12312321',
                    goodsName:'三星智能手机S10旗舰版全网通',
                    goodsPrice:'3130',
                    goodsOffer:'2130',
                    goodsState:'上架',
                    goodsRegister:'已注册',
                    goodsDesc: '旗舰版-全网通-4G-套餐一',
                    goodsImageUrl:'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',
                }, ]
            }
        },
        created() {
            this.getGoods();
        },
        methods: {
            fun(index){
                this.number=index;
                this.centerDialogVisible = true;
                this.getGoods();
            },
            buy(){
                this.$http({
                    url:'/addToMy',
                    method:'post',
                    data:{
                        PRODUCT_ID:this.goodsList[this.number].PRODUCT_ID,
                        USER_ID:this.$store.state.userId,
                        PRICE:this.goodsPrice[this.number].price,
                    }
                }).then((response)=>{
                    this.goodsList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.centerDialogVisible = false;
                this.getGoods();
            },
            handleSizeChange(newSize) {
                this.queryInfo.pageSize=newSize;
                this.getGoods();

                console.log(`每页 ${newSize} 条`);
            },
            handleCurrentChange(newPage){
                this.queryInfo.pageNum= newPage;
                this.getGoods();

            },
            handleChange(index,price) {

                this.goodsPrice[index].price=price;
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
            async getGoods() {
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

                    this.goodsList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.getTotal();


                console.log(this.managerGoodsList)
            },

            filterTag(value, row) {
                return row.tag === value;
            },
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
