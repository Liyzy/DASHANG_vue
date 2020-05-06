<template>
    <div style="width: 100%">
        <div style="width: 100%;margin-bottom: 0px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;">商品货架</span>
        </div>
        <div style="float: right;width: 500px;margin: 20px">
            <el-autocomplete
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    :fetch-suggestions="querySearchAsync"
                    @select="handleSelect"
                    v-model="state"
                    clearable
                    style="margin: 5px;width: 100%">
            </el-autocomplete>
        </div>

        <el-table
                :data="goodsList"
                style="width: 100%;height: 500px"
                max-height="500px">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="商品图片" style="display: block">
                            <img :src="props.row.PIC" style="height: 100px;width: 100px"/>
                        </el-form-item>
                        <el-form-item label="商品名称：">
                            <span>{{ props.row.PRODUCT_NAME }}</span>
                        </el-form-item>
                        <el-form-item label="商品品牌：">
                            <span>{{ props.row.PRODUCT_BRAND }}</span>
                        </el-form-item>
                        <el-form-item label="商品描述：">
                            <span>{{ props.row.DESCRIPTION }}</span>
                        </el-form-item>
                        <el-form-item label="商品售价：">
                            <span>{{ props.row.PRICE }}元</span>
                        </el-form-item>
                        <el-form-item label="数量：">
                            <el-input-number v-model="goodsNum[props.$index].num" @change="handleChange(props.$index,goodsNum[props.$index].num)" :min="1" :max="9999" label="数量"></el-input-number>
                        </el-form-item>
                        <el-form-item label="商品总价：">
                            <span>{{ props.row.PRICE*goodsNum[props.$index].num }}元</span>
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
                    label="商品名称"
                    width="200px"
                    align="center"
                    prop="PRODUCT_NAME">
            </el-table-column>
            <el-table-column
                    label="商品品牌"
                    width="200px"
                    align="center"
                    sortable
                    prop="PRODUCT_BRAND">
            </el-table-column>
            <el-table-column
                    label="商品售价"
                    width="200px"
                    align="center"
                    sortable
                    prop="PRICE">
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="商品介绍"-->
<!--                    prop="DESCRIPTION">-->
<!--            </el-table-column>-->
            <el-table-column
                    label="操作"
                    fixed="right"
                    align="center"
                    width="200px">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="fun(scope.$index)">立即购买</el-button>
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
                <div>是否确定购买{{this.goodsNum[this.number].num}}个{{this.goodsList[this.number].PRODUCT_NAME}}？</div>
            </div>
            <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="buy">确 定</el-button>
                        </span>
        </el-dialog>


<!--        分页-->
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="queryInfo.page"
                    :page-size="queryInfo.size"
                    layout="prev, pager, next, jumper"
                    :total="total"
                    style="margin-top: 10px ">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userGoods",
        data() {
            return {
                centerDialogVisible: false,
                number:0,
                allBrand:[],
                goodsNum:[
                    {num:1},
                    {num:1},
                    {num:1},
                    {num:1},
                    {num:1},
                    {num:1},
                    {num:1},
                    {num:1},
                    {num:1},
                    {num:1},
                ],
                //查询参数对象
                queryInfo:{
                    query:'',
                    page:1,
                    size:10
                },
                restaurants: [],
                timeout:  null,
                goodsList:[],
                total:0,//总数据条数
                value1: true,
                state: '',
                tableData: [{
                    goodsBrand:'三星',
                    goodsName:'三星智能手机S10旗舰版全网通',
                    goodsPrice:'3130',
                    goodsDesc: '旗舰版-全网通-4G-套餐一',
                    goodsImageUrl:'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',
                }]
            }
        },
        created() {
            this.getUserGoods()
        },
        methods: {
            // getBrand(){
            //     this.$http({
            //         url:'/showAllBrands',
            //         method:'get',
            //         params:{
            //             page:1,
            //             size:9999,
            //         }
            //     }).then((response)=>{
            //         this.allBrand=response.data;
            //
            //     }).catch((error)=>{
            //         console.log(error);
            //     })
            // },
            loadAll() {
                // this.getBrand();
                return [
                    {"value":"华为"},
                    {"value":"三星"},
                    {"value":"松下"},
                    {"value":"美的"},
                    {"value":"格力"},
                    {"value":"西门子"},
                    {"value":"方太"},
                ];
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                this.getBrandProduct(item.value);
                this.total=10;
                console.log(item.value);
            },
            getBrandProduct(value){
                this.$http({
                    url:'/selectProducts',
                    method:'post',
                    data:{
                        message:this.state,
                    }
                }).then((response)=>{
                    this.goodsList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
            },








            fun(index){
                this.number=index;
                this.centerDialogVisible = true;
                this.getUserGoods();
            },
            buy(){
                this.$http({
                    url:'/submitUserOrder',
                    method:'get',
                    params:{
                        productId:this.goodsList[this.number].PRODUCT_ID,
                        userId:this.$store.state.userId,
                        nums:this.number,
                    }
                }).then((response)=>{
                    this.goodsList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.centerDialogVisible = false;
                this.goodsNum[this.number].num=1;
                this.getUserGoods();
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
            async getUserGoods() {
                // const {data:res}=await this.$http.get('/showAllProducts',{params:this.queryInfo})
                this.state='';
                this.$http({
                    url:'/showAllProducts',
                    method:'get',
                    params:{
                        page:this.queryInfo.page,
                        size:this.queryInfo.size,
                    }
                }).then((response)=>{
                    this.goodsList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.getTotal();

                console.log(this.goodsList)
            },


            handleSizeChange(newSize) {
                this.queryInfo.size=newSize
                this.getUserGoods()


                console.log(`每页 ${newSize} 条`);
            },
            handleCurrentChange(newPage){
                this.queryInfo.page= newPage
                this.getUserGoods()

            },
            handleChange(index,num) {
                this.goodsNum[index].num=num;
            },


        },
        mounted() {
            this.restaurants = this.loadAll();
        },
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
