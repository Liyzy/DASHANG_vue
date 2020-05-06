<template>
    <div style="width: 100%">
        <div style="width: 100%;margin-bottom: 50px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;margin: 10px auto">订单管理</span>
        </div>
<!--        <div style="float: right;width: 500px;margin: 20px">-->
<!--            <el-input-->
<!--                placeholder="请输入内容"-->
<!--                prefix-icon="el-icon-search"-->
<!--                v-model="input"-->
<!--                style="margin: 5px;width: 100%">-->
<!--            </el-input>-->
<!--        </div>-->
        <el-table
                ref="filterTable"
                :data="orderList"
                style="width: 100%;height: 500px"
                max-height="500px">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="订单 ID：">
                            <span>{{ props.row.ORDER_ID }}</span>
                        </el-form-item>
                        <el-form-item label="订单状态：">
                           <span>{{ props.row.RECEIPT }}</span>
                        </el-form-item>
                        <el-form-item label="收货人ID：">
                            <span>{{ props.row.USER_ID }}</span>
                        </el-form-item>
                        <el-form-item label="商品名称：">
                            <span>{{ props.row.PRODUCT_NAME }}</span>
                        </el-form-item>
                        <el-form-item label="商品数量：">
                            <span>{{ props.row.NUMS }}</span>
                        </el-form-item>
                        <el-form-item label="商品单价：">
                            <span>{{ props.row.PRICE }}</span>
                        </el-form-item>
<!--                        <el-form-item label="订单内容：" style="display: block">-->
<!--                            <el-table-->
<!--                                    :data="goodsTableData"-->
<!--                                    stripe-->
<!--                                    style="width: 1200px">-->
<!--                                <el-table-column-->
<!--                                        prop="goodsId"-->
<!--                                        label="商品编号"-->
<!--                                        width="200">-->
<!--                                </el-table-column>-->
<!--                                <el-table-column-->
<!--                                        prop="goodsName"-->
<!--                                        label="商品名称"-->
<!--                                        width="400">-->
<!--                                </el-table-column>-->
<!--                                <el-table-column-->
<!--                                        prop="goodsPrice"-->
<!--                                        label="商品售价"-->
<!--                                        width="200">-->
<!--                                </el-table-column>-->
<!--                                <el-table-column-->
<!--                                        prop="goodsAmount"-->
<!--                                        label="商品数量"-->
<!--                                        width="200">-->
<!--                                </el-table-column>-->
<!--                                <el-table-column-->
<!--                                        prop="goodsAmountSP"-->
<!--                                        label="合计"-->
<!--                                        align="center"-->
<!--                                        width="200">-->
<!--                                </el-table-column>-->
<!--                            </el-table>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item>-->
<!--                            <el-button type="primary" style="margin-top: 20px">接单</el-button>-->
<!--                            <el-button type="primary" style="margin-top: 20px">到货</el-button>-->
<!--                        </el-form-item>-->
                        <el-form-item label="总价：">
                            <span>{{ props.row.PRICE*props.row.NUMS }}</span>
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
                    label="订单 ID"
                    width="200"
                    align="center"
                    prop="ORDER_ID">
            </el-table-column>
            <el-table-column
                    label="订单状态"
                    width="200"
                    align="center"
                    prop="RECEIPT"
                    :filters="[{ text: '待接单', value: '待接单' },
                    { text: '待收货', value: '待收货' },
                    { text: '已完成', value: '已完成' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
            </el-table-column>
            <el-table-column
                    label="商品名称"
                    width="200"
                    align="center"
                    prop="PRODUCT_NAME">
            </el-table-column>
            <el-table-column
                    label="收货人ID"
                    width="200"
                    align="center"
                    prop="USER_ID">
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="下单日期"-->
<!--                    prop="orderDate"-->
<!--                    sortable-->
<!--                    width="180"-->
<!--                    column-key="orderDate"-->
<!--                    :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"-->
<!--                    :filter-method="filterHandler">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    label="操作"-->
<!--                    align="center"-->
<!--                    fixed="right"-->
<!--                    width="100px">-->
<!--                <template slot-scope="scope">-->
<!--                    <el-button type="primary" size="small" @click="fun(scope.$index)">接单</el-button>-->
<!--                </template>-->
<!--            </el-table-column>-->
        </el-table>

<!--        <el-dialog-->
<!--                title="提示"-->
<!--                :visible.sync="centerDialogVisible"-->
<!--                width="30%"-->
<!--                append-to-body-->
<!--                center>-->
<!--            <div style="text-align: center">-->
<!--                <div>是否接单？</div>-->
<!--            </div>-->
<!--            <span slot="footer" class="dialog-footer">-->
<!--                            <el-button @click="centerDialogVisible = false">取 消</el-button>-->
<!--                            <el-button type="primary" @click="buy">确 定</el-button>-->
<!--                        </span>-->
<!--        </el-dialog>-->


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
        name: "managerOrder",
        data() {
            return {
                input: '',
                orderList:[],
                queryInfo:{
                    query:'',
                    page:1,
                    size:10
                },
                total:1000,
                goodsTableData: [{
                    goodsId:'12312321',
                    goodsName:'三星智能手机S10旗舰版全网通',
                    goodsPrice:'3130',
                    goodsAmount:'5',
                    goodsAmountSP:'3130*5'
                }, ]
            }
        },
        created() {
            this.getOrder();
        },
        methods: {
            async getTotal(){
                this.$http({
                    url:'/getNum',
                    method:'post',
                    data:{
                        name:'orders',
                    }
                }).then((response)=>{

                    this.total=response.data;

                }).catch((error)=>{
                    console.log(error);
                })


                console.log(this.managerGoodsList)
            },

            async getOrder() {
                // const {data:res}=await this.$http.get('/showAllProducts',{params:this.queryInfo})
                this.$http({
                    url:'/showAllOrder',
                    method:'get',
                    params:{
                    }
                }).then((response)=>{
                    this.orderList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.getTotal();

                console.log(this.orderList)
            },


            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(newPage) {
                this.queryInfo.page = newPage;
                this.getOrder();
            },

            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
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
