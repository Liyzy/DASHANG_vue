<template>
    <div style="width: 100%">
        <div style="width: 100%;margin-bottom: 50px;text-align:center">
            <span style="font-weight: bold;font-size: 40px;">采购管理</span>
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
                :data="purchaseList"
                style="width: 100%;height: 500px"
                max-height="500px">
<!--            <el-table-column type="expand">-->
<!--                <template slot-scope="props">-->
<!--                    <el-form label-position="left" inline class="demo-table-expand">-->
<!--&lt;!&ndash;                        <el-form-item label="商品图片" style="display: block">&ndash;&gt;-->
<!--&lt;!&ndash;                            <img :src="props.row.goodsImageUrl" style="height: 100px;width: 100px"/>&ndash;&gt;-->
<!--&lt;!&ndash;                        </el-form-item>&ndash;&gt;-->
<!--                        <el-form-item label="采购ID：">-->
<!--                            <span>{{ props.row.PURCHASE_ID }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="商品名称：">-->
<!--                            <span>{{ props.row.PRODUCT_NAME }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="商品数量：">-->
<!--                            <span>{{ props.row.NUMS }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="报价厂商：">-->
<!--                            <span>{{ props.row.venderOffer }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="厂商联系方式：">-->
<!--                            <span>{{ props.row.telephoneVender }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="商品描述：">-->
<!--                            <span>{{ props.row.goodsDesc }}</span>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="选择厂商：">-->
<!--                            <el-select v-model="value" placeholder="请选择厂商">-->
<!--                                <el-option-group-->
<!--                                        v-for="group in options"-->
<!--                                        :key="group.label"-->
<!--                                        :label="group.label">-->
<!--                                    <el-option-->
<!--                                            v-for="item in group.options"-->
<!--                                            :key="item.value"-->
<!--                                            :label="item.label"-->
<!--                                            :value="item.value">-->
<!--                                    </el-option>-->
<!--                                </el-option-group>-->
<!--                            </el-select>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="采购数量：">-->
<!--                            <el-input-number v-model="props.row.goodsPAmount" controls-position="right" @change="handleChange" :min="0" :max="100000"></el-input-number>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item>-->
<!--                            <el-button type="primary" style="margin-top: 20px">采购</el-button>-->
<!--                        </el-form-item>-->
<!--                    </el-form>-->
<!--                </template>-->
<!--            </el-table-column>-->
            <el-table-column
                    label="序号"
                    width="200px"
                    type="index"
                    align="center"
                    show-overflow-tooltip>
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="采购 ID"-->
<!--                    width="200px"-->
<!--                    prop="PURCHASE_ID">-->
<!--            </el-table-column>-->
            <el-table-column
                    label="商品ID"
                    width="200px"
                    sortable
                    prop="PRODUCT_ID">
            </el-table-column>
            <el-table-column
                    label="商品名称"
                    width="200px"
                    prop="PRODUCT_NAME">
            </el-table-column>
            <el-table-column
                    label="采购数量"
                    width="200px"
                    sortable
                    prop="NUMS">
            </el-table-column>
<!--            <el-table-column-->
<!--                    label="采购日期"-->
<!--                    prop="purchaseDate"-->
<!--                    sortable-->
<!--                    width="180"-->
<!--                    column-key="purchaseDate"-->
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
                    width="200px">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="fun(scope.row.PURCHASE_ID,scope.row.PRODUCT_ID,scope.row.NUMS,scope.$index)">采购</el-button>
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
                <div>是否确定采购{{this.number}}个{{this.purchaseList[this.index].PRODUCT_NAME}}？</div>
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
                    style="margin-top: 10px ">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "managerPurchase",
        inject:['reload'],
        data() {
            return {
                input: '',
                queryInfo:{
                    pageNum:1,
                    pageSize:10
                },
                total:10,

                purchase:0,
                product:0,
                number:0,
                index:0,
                centerDialogVisible: false,

                purchaseList:[],
                tableData: [{
                    goodsId: '12987122',
                    goodsName: '三星智能手机S10旗舰版全网通',
                    goodsImageUrl:'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',
                    vendorOffer: '上海嘉定三星电子厂',
                    goodsOffer: '2130',
                    goodsDesc: '旗舰版-全网通-4G-套餐一',
                    telephoneVender: '13838384438',
                    goodsPAmount:'1233',
                    purchaseDate: '2019-5-1'
                },
                ],
                // options: [{
                //     label: '最低报价厂家',
                //     options: [{
                //         value: 'Shanghai',
                //         label: '上海嘉定三星电子厂'
                //     },
                //     ]
                // }, {
                //     label: '供货厂家',
                //     options: [{
                //         value: 'Chengdu',
                //         label: '成都三星电子厂'
                //     }, {
                //         value: 'Shenzhen',
                //         label: '深圳三星电子厂'
                //     }, {
                //         value: 'Guangzhou',
                //         label: '广州三星电子厂'
                //     }, {
                //         value: 'Dalian',
                //         label: '大连三星电子厂'
                //     }]
                // }],
                value: '',
            }
        },
        created() {
            this.getPurchaseList()
        },
        methods: {

            fun(pur,pro,num,ind){
                this.purchase=pur;
                this.product=pro;
                this.number=num;
                this.index=ind;
                this.centerDialogVisible = true;
                this.getPurchaseList();
            },
            buy(){
                this.$http({
                    url:'/buy',
                    method:'post',
                    data:{
                        PURCHASE_ID:this.purchase,
                        PRODUCT_ID:this.product,
                        NUMS:this.number,
                    }
                }).then((response)=>{

                }).catch((error)=>{
                    console.log(error);
                })
                this.centerDialogVisible = false;
                this.getPurchaseList();
                this.reload()

            },
            async getTotal(){
                this.$http({
                    url:'/getNum',
                    method:'post',
                    data:{
                        name:'purchase',
                    }
                }).then((response)=>{

                    this.total=response.data;

                }).catch((error)=>{
                    console.log(error);
                })


                console.log(this.managerGoodsList)
            },

            handleSizeChange(newSize) {
                this.queryInfo.pageSize=newSize;
                this.getPurchaseList();

                console.log(`每页 ${newSize} 条`);
            },
            handleCurrentChange(newPage){
                this.queryInfo.pageNum= newPage
                this.getPurchaseList()

            },
            handleChange(value) {
                console.log(value);
            },
            async getPurchaseList() {
                // const {data:res}=await this.$http.post('getPurchase',{
                //     params:this.queryInfo
                // })
                this.$http({
                    url:'/getPurchase',
                    method:'post',
                    data:{
                        pageNum:this.queryInfo.pageNum,
                        pageSize:this.queryInfo.pageSize,
                    }
                }).then((response)=>{
                    this.purchaseList=response.data;

                }).catch((error)=>{
                    console.log(error);
                })
                this.getTotal();



                console.log(this.purchaseList)
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
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
