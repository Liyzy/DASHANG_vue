<template>
    <div style="width: 100%">
        <div style="width: 100%;margin-bottom: 50px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;margin: 10px auto">订单管理</span>
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
                            <span v-if="props.row.RECEIPT==0">待接单</span>
                            <span v-if="props.row.RECEIPT==1">已接单</span>
                        </el-form-item>
                        <el-form-item label="收货人姓名：">
                            <span>{{name}}</span>
                        </el-form-item>
                        <el-form-item label="收货人电话：">
                            <span>{{ tel }}</span>
<!--                            <el-button type="text"><i class="el-icon-edit"></i></el-button>-->
                        </el-form-item>
                        <el-form-item label="收货人email：">
                            <span>{{ email }}</span>
<!--                            <el-button type="text"><i class="el-icon-edit"></i></el-button>-->
                        </el-form-item>
                        <el-form-item label="收货人地址：">
                            <span>{{ address }}</span>
<!--                            <el-button type="text"><i class="el-icon-edit"></i></el-button>-->
                        </el-form-item>
                        <el-form-item label="商品：">
                            <span>{{ props.row.PRODUCT_NAME }}</span>
                        </el-form-item>
                        <el-form-item label="数量：">
                            <span>{{ props.row.NUMS }}</span>
<!--                            <el-input-number v-model="props.row.NUMS" @change="handleChange" :min="1" :max="9999" label="数量"></el-input-number>-->
                        </el-form-item>
                        <el-form-item label="总价：">
                            <span>{{ props.row.PRICE * props.row.NUMS }}</span>
                        </el-form-item>
<!--                        <el-form-item style="display: block">-->
<!--                            <el-button type="primary" style="margin-top: 10px;">立即下单</el-button>-->
<!--                            &lt;!&ndash;                            <el-button type="primary" style="margin-top: 20px">收货</el-button>&ndash;&gt;-->
<!--                        </el-form-item>-->
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="序号"
                    width="100px"
                    type="index"
                    align="center"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    label="订单 ID"
                    width="200px"
                    align="center"
                    sortable
                    prop="ORDER_ID">
            </el-table-column>
            <el-table-column
                    label="订单状态"
                    width="200px"
                    align="center"
                    prop="RECEIPT"
                    sortable>
                <template slot-scope="scope">
                    <span v-if="scope.row.RECEIPT==0">待接单</span>
                    <span v-if="scope.row.RECEIPT==1">已接单</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品名称"
                    width="200px"
                    align="center"
                    prop="PRODUCT_NAME">
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="下单日期"-->
<!--                    prop="orderDate"-->
<!--                    sortable-->
<!--                    align="center"-->
<!--                    width="180"-->
<!--                    column-key="orderDate"-->
<!--                    :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"-->
<!--                    :filter-method="filterHandler">-->
<!--            </el-table-column>-->
            <el-table-column
                    label="操作"
                    align="center"
                    fixed="right"
                    width="100px">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" :disabled="scope.row.RECEIPT==1" @click="buy(scope.row.ORDER_ID)">收货</el-button>
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
                <div>订单{{this.orderID}}是否确定收货？</div>
            </div>
            <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="fun">确 定</el-button>
                        </span>
        </el-dialog>


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
        name: "userOrder",
        data() {
            return {
                centerDialogVisible: false,
                orderID:0,

                queryInfo:{
                    page:1,
                    size:10
                },
                total:10,


                value: null,
                input: '',
                orderList:[],
                name:this.$store.state.userName,
                tel:this.$store.state.telephone,
                email:this.$store.state.email,
                address:this.$store.state.address,
                goodsTableData: [{
                    goodsId:'12312321',
                    goodsName:'三星智能手机S10旗舰版全网通',
                    goodsPrice:'3130',
                    goodsAmount:'5',
                    goodsAmountSP:'3130*5'
                },],
                tableData: [{
                    orderId: '12987122',
                    orderState:'待接单',
                    orderName:'三星智能手机S10旗舰版全网通,三星智能手机S10旗舰版全网通,三星智能手机S10旗舰版全网通,三星智能手机S10旗舰版全网通,三星智能手机S10旗舰版全网通',
                    userName:'LV驴',
                    userTelephone:'13838384438',
                    userEmail:'1231231@qq.com',
                    userAddress:'辽宁省朝阳市清水县童家堡平安街14号',
                    orderAmountPrice:'3130*5*6',
                    orderDate: '2019/2/29'
                },  ]
            }
        },
        created() {
            this.getUserOrder();
        },
        methods: {
            //收货
            // async getUserOrder() {
            //     const {data:response}=await this.$http.get('showAllOrder',)
            //
            //     this.orderList=response.data
            //
            //     console.log(this.orderList)
            // },
            async getUserOrder() {
                // this.$http.get('showAllOrder').then((response)=>{
                //     this.orderList=response.data;
                // })
                this.$http({
                    url:'/showUserOrder',
                    method:'get',
                    params:{
                        userId:this.$store.state.userId,
                        page:this.queryInfo.page,
                        size:this.queryInfo.size,
                    }

                }).then((response)=>{
                    this.orderList = response.data;
                }).catch((error)=>{
                    console.log(error);
                })

                    console.log(this.orderList);
                },

            handleSizeChange(newSize) {
                this.queryInfo.size=newSize;
                this.getUserOrder();


                console.log(`每页 $ {newSize} 条`);
            },
            handleCurrentChange(newPage){
                this.queryInfo.page= newPage;
                this.getUserOrder();

            },

            handleChange(value) {
                console.log(value);
            },


            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            buy(orderId){
                this.orderID=orderId;
                this.centerDialogVisible = true;
            },
            async fun(){
                this.$http({
                    url:'/Receipt',
                    method:'get',
                    params:{
                        orderId:this.orderID,
                    }

                }).then((response)=>{
                }).catch((error)=>{
                    console.log(error);
                });
                this.getUserOrder();
                this.centerDialogVisible = false;
                // console.log(this.orderList[this.number].RECEIPT);
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
