<template>
    <div style="width: 100%;height: calc(100vh - 160px);">
        <div style="width: 100%;margin-bottom: 50px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;margin: 10px auto">任务管理</span>
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
                :data="taskList"
                style="width: 100%;height: 400px"
                max-height="500px">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
<!--                        <el-form-item label="商品图片" style="display: block">-->
<!--                            <img :src="props.row.goodsImageUrl" style="height: 100px;width: 100px"/>-->
<!--                        </el-form-item>-->
                        <el-form-item label="任务 ID：">
                            <span>{{ props.row.TASK_ID }}</span>
                        </el-form-item>
                        <el-form-item label="任务状态：">
                            <span v-if="props.row.TASK_STATE==0">待接受</span>
                            <span v-if="props.row.TASK_STATE==1">已接受</span>
                        </el-form-item>
                        <el-form-item label="商品 ID：">
                            <span>{{ props.row.PRODUCT_ID }}</span>
                        </el-form-item>
                        <el-form-item label="商品名称：">
                            <span>{{ props.row.PRODUCT_NAME }}</span>
                        </el-form-item>
                        <el-form-item label="采购数量：">
                            <span>{{ props.row.NUMS }}</span>
                        </el-form-item>
                        <el-form-item label="我的报价：">
                            <span v-if="props.row.TASK_STATE==1">{{props.row.PRICE}}元</span>
                            <el-input-number v-if="props.row.TASK_STATE==0" v-model="myPrice[props.$index].price" @change="handleChange(props.$index,myPrice[props.$index].price)" :min="0" :max="9999999" label="报价"></el-input-number>
                        </el-form-item>
                        <el-form-item label="总价：">
                            <span v-if="props.row.TASK_STATE==1">{{props.row.PRICE*props.row.NUMS}}元</span>
                            <span v-if="props.row.TASK_STATE==0">{{ myPrice[props.$index].price * props.row.NUMS }}元</span>
                        </el-form-item>
<!--                        <el-form-item label="物业地址：">-->
<!--                            <span>{{ props.row.managerAddress }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="物业联系方式：">-->
<!--                            <span>{{ props.row.telephoneManager }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item>-->
<!--                            <el-button type="primary" style="margin-top: 20px">接单</el-button>-->
<!--                            <el-button type="primary" style="margin-top: 20px;margin-left: 25px">到货</el-button>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="采购数量：" style="margin-top: 20px">-->
<!--                            <el-input-number v-model="props.row.taskAmount" controls-position="right"-->
<!--                                             @change="handleChange" :min="0" :max="100000"></el-input-number>-->
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
                    label="任务 ID"
                    width="200px"
                    align="center"
                    sortable
                    prop="TASK_ID">
            </el-table-column>
            <el-table-column
                    label="任务厂商 ID"
                    width="200px"
                    align="center"
                    sortable
                    prop="USER_ID">
            </el-table-column>
            <el-table-column
                    label="任务状态"
                    width="200px"
                    align="center"
                    sortable
                    prop="TASK_STATE">
                <template slot-scope="scope">
                    <span v-if="scope.row.TASK_STATE==0">待接受</span>
                    <span v-if="scope.row.TASK_STATE==1">已接受</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="任务商品"
                    width="200px"
                    align="center"
                    prop="PRODUCT_NAME">
            </el-table-column>
            <el-table-column
                    label="采购数量"
                    width="200px"
                    align="center"
                    sortable
                    prop="NUMS">
            </el-table-column>
            <el-table-column
                    label="我的报价"
                    width="200px"
                    align="center"
                    sortable
                    prop="PRICE">
                <template slot-scope="scope">
                    <span v-if="scope.row.TASK_STATE==1">{{scope.row.PRICE}}元</span>
                    <span v-if="scope.row.TASK_STATE==0">{{myPrice[scope.$index].price}}元</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="总价"
                    width="200px"
                    align="center"
                    sortable
                    prop="PRICE * NUMS">
                <template slot-scope="scope">
                    <span v-if="scope.row.TASK_STATE==1">{{scope.row.PRICE*scope.row.NUMS}}元</span>
                    <span v-if="scope.row.TASK_STATE==0">{{myPrice[scope.$index].price * scope.row.NUMS}}元</span>
                </template>
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="任务日期"-->
<!--                    prop="taskDate"-->
<!--                    sortable-->
<!--                    width="180"-->
<!--                    column-key="taskDate"-->
<!--                    :filters="[{text: '2019-05-01', value: '2019-05-01'},-->
<!--                    {text: '2019-05-02', value: '2019-05-02'},-->
<!--                    {text: '2019-05-03', value: '2019-05-03'},-->
<!--                    {text: '2019-05-04', value: '2019-05-04'}]"-->
<!--                    :filter-method="filterHandler">-->
<!--            </el-table-column>-->
            <el-table-column
                    label="操作"
                    fixed="right"
                    align="center"
                    width="100px">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" :disabled="scope.row.TASK_STATE==1" @click="fun(scope.$index)">接受</el-button>
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
                <div>是否接受该任务？</div>
            </div>
            <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="buy">接 受</el-button>
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
                    style="margin-top: 10px;text-align: center">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vendorTask",
        inject:['reload'],
        data() {
            return {
                input: '',
                centerDialogVisible: false,
                number:0,
                myPrice:[
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


                queryInfo:{
                    pageNum:1,
                    pageSize:10
                },
                total:10,
                taskList:[],
                tableData: [{
                    taskName: '三星智能手机S10旗舰版全网通',
                    taskId: '12987122',
                    goodsImageUrl: 'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',
                    taskPrice: '3130',
                    taskOffer: '2130',
                    taskState: '待收货',
                    taskAmount: '1233',
                    taskDate: '2019-5-1',
                    managerAddress: '上海市浦东区青桥镇顺安街215号',
                    telephoneManager: '13838384438',
                    taskAmountOffer: '2130*1233',
                }, ]
            }
        },
        created() {
            this.getTask();
        },
        methods: {
            fun(index){
                this.number=index;
                this.centerDialogVisible = true;
                this.getTask();
            },
            buy(){
                this.$http({
                    url:'/takeTask',
                    method:'post',
                    data:{
                        TASK_ID:this.taskList[this.number].TASK_ID,
                        USER_ID:this.$store.state.userId,
                        PRICE:this.myPrice[this.number].price,
                    }
                }).then((response)=>{
                }).catch((error)=>{
                    console.log(error);
                })
                this.centerDialogVisible = false;
                // this.myPrice[this.number].price=1;
                this.getTask();
                this.reload()
            },

            handleSizeChange(newSize) {
                this.queryInfo.pageSize=newSize
                this.getTask()
                console.log(`每页 ${newSize} 条`);
            },
            handleCurrentChange(newPage){
                this.queryInfo.pageNum= newPage
                this.getTask()

            },

            async getTotal(){
                this.$http({
                    url:'/getNum',
                    method:'post',
                    data:{
                        name:'task',
                    }
                }).then((response)=>{

                    this.total=response.data;

                }).catch((error)=>{
                    console.log(error);
                })


            },

            async getTask() {
                // const {data:res}=await this.$http.post('getTask',{
                //     params:this.queryInfo
                // })
                this.$http({
                    url:'/getTask',
                    method:'post',
                    data:{
                        pageNum:this.queryInfo.pageNum,
                        pageSize:this.queryInfo.pageSize,
                    }
                }).then((response)=>{

                    this.taskList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.getTotal();

            },

            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            handleChange(index,price) {
                this.myPrice[index].price=price;
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
