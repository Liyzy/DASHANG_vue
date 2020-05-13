<template>
    <div style="width: 100%">
        <div style="width: 100%;margin-bottom: 50px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;">任务管理</span>
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
                :data="managerTaskList"
                style="width: 100%;height: 500px"
                max-height="500px">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
<!--                        <el-form-item label="商品图片" style="display: block">-->
<!--                            <img :src="props.row.goodsImageUrl" style="height: 100px;width: 100px"/>-->
<!--                        </el-form-item>-->
                        <el-form-item label="任务ID：">
                            <span>{{ props.row.TASK_ID }}</span>
                        </el-form-item>
                        <el-form-item label="商品名称：">
                            <span>{{ props.row.PRODUCT_NAME }}</span>
                        </el-form-item>
                        <el-form-item label="报价：">
                            <span>{{ props.row.PRICE }}元</span>
                        </el-form-item>
                        <el-form-item label="商品数量：">
                            <span>{{ props.row.NUMS }}</span>
                        </el-form-item>
                        <el-form-item label="任务状态：">
                            <span v-if="props.row.TASK_STATE==0">待接受</span>
                            <span v-if="props.row.TASK_STATE==1">已接受</span>
                        </el-form-item>
<!--                        <el-form-item label="采购数量：">-->
<!--                            <span>{{ props.row.taskAmount }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="生产厂家：">-->
<!--                            <span>{{ props.row.taskVender }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="厂家联系方式：">-->
<!--                            <span>{{ props.row.telephoneVender }}</span>-->
<!--                        </el-form-item>-->
                        <el-form-item label="总价：">
                            <span>{{ props.row.NUMS*props.row.PRICE }}元</span>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="margin-top: 20px" :disabled="props.row.TASK_STATE==0" @click="fun1(props.row.TASK_ID)">拒绝</el-button>
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
                    label="任务 ID"
                    width="200px"
                    align="center"
                    sortable
                    prop="TASK_ID">
            </el-table-column>
            <el-table-column
                    label="厂商 ID"
                    width="200px"
                    align="center"
                    sortable
                    prop="USER_ID">
                <template slot-scope="scope">
                    <span v-if="scope.row.USER_ID==0">无</span>
                    <span v-if="scope.row.USER_ID!=0">{{scope.row.USER_ID}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="任务状态"
                    width="200px"
                    prop="TASK_STATE"
                    align="center"
                    sortable>
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
                    sortable
                    align="center"
                    prop="NUMS">
            </el-table-column>
            <el-table-column
                    label="报价"
                    width="200px"
                    sortable
                    align="center"
                    prop="PRICE">
                <template slot-scope="scope">
                    <span>{{scope.row.PRICE}}元</span>
                </template>
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="总价"-->
<!--                    width="180px"-->
<!--                    sortable-->
<!--                    prop="taskAmountOffer">-->
<!--            </el-table-column>-->
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
                    <el-button type="primary" size="small" :disabled="scope.row.TASK_STATE==0" @click="fun2(scope.row.TASK_ID)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible1"
                width="30%"
                append-to-body
                center>
            <div style="text-align: center">
                <div>是否拒绝？</div>
            </div>
            <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible1 = false">取 消</el-button>
                            <el-button type="primary" @click="buy1">拒 绝</el-button>
                        </span>
        </el-dialog>

        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible2"
                width="30%"
                append-to-body
                center>
            <div style="text-align: center">
                <div>是否删除？</div>
            </div>
            <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible2 = false">取 消</el-button>
                            <el-button type="primary" @click="buy2">删除</el-button>
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
                    style="margin-top: 10px ">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "managerTask",
        inject:['reload'],
        data() {
            return {
                input: '',
                queryInfo:{
                    pageNum:1,
                    pageSize:10
                },
                total:10,



                centerDialogVisible1: false,
                centerDialogVisible2: false,
                taskId:0,



                managerTaskList:[],
                tableData: [{
                    taskName: '三星智能手机S10旗舰版全网通',
                    taskId: '12987122',
                    goodsImageUrl:'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',
                    taskPrice: '3130',
                    taskOffer: '2130',
                    taskState: '待收货',
                    taskAmount: '1233',
                    taskDate: '2019-5-1',
                    taskVender: '上海嘉定三星电子厂',
                    telephoneVender: '13838384438',
                    taskAmountOffer: '2130*1233',
                },  ]
            }
        },
        created() {
            this.getManagerTask()
        },
        methods: {
            fun1(taskId){
                this.taskId=taskId;
                this.centerDialogVisible1 = true;
                this.getManagerTask();
            },
            buy1(){
                this.$http({
                    url:'/refuseTask',
                    method:'post',
                    data:{
                        numMesg:this.taskId,
                    }
                }).then((response)=>{
                }).catch((error)=>{
                    console.log(error);
                })
                this.centerDialogVisible1 = false;
                this.getManagerTask();
                this.centerDialogVisible1 = false;
                this.reload()
            },

            fun2(taskId){
                this.taskId=taskId;
                this.centerDialogVisible2 = true;
                this.getManagerTask();
            },
            buy2(){
                this.$http({
                    url:'/receiveProduct',
                    method:'post',
                    data:{
                        numMesg:this.taskId,
                    }
                }).then((response)=>{
                }).catch((error)=>{
                    console.log(error);
                })
                this.centerDialogVisible2 = false;
                this.getManagerTask();
                this.reload()
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


                console.log(this.managerGoodsList)
            },
            handleSizeChange(newSize) {
                this.queryInfo.pageSize=newSize
                this.getManagerTask()
                console.log(`每页 ${newSize} 条`);
            },
            handleCurrentChange(newPage){
                this.queryInfo.pageNum= newPage
                this.getManagerTask()

            },

            async getManagerTask() {
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

                    this.managerTaskList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.getTotal();


                console.log(this.managerTaskList)
            },

            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
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
