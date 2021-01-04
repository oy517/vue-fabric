<template>
<div>
<el-form :inline="true" :model="formInline" label-width="120px" ref='formInline' :label-position='labelPosition'>
      <el-row :gutter="24">
        <el-col :span='6'><el-form-item label="客户名称:" ><el-input placeholder="客户名称" value=""></el-input></el-form-item></el-col>
         <el-col :span='6'><el-form-item label="营业执照:" ><el-input placeholder="营业执照" value=""></el-input></el-form-item></el-col>
         <el-col :span='6'><el-form-item label="法人名称:" ><el-input placeholder="法人名称" value=""></el-input></el-form-item> </el-col>
        <el-col :span='6'> <el-form-item label="电话:" ><el-input placeholder="电    话" value=""></el-input></el-form-item></el-col>
      </el-row>
        <el-row :gutter="24">
       
     
         <el-col :span='6'><el-form-item label="身份证:"><el-input placeholder="身 份 证" value=""></el-input></el-form-item></el-col>
         <!-- <el-form-item label="客户名称:" ><el-input placeholder="客户名称" value=""></el-input></el-form-item> -->
         <!-- <el-form-item label="客户名称:" ><el-input placeholder="客户名称" value=""></el-input></el-form-item> -->
         <el-col :span='6'>
         <el-form-item label="省:"><el-select placeholder="省" size="small"></el-select></el-form-item>
         </el-col>
          <el-col :span='6'>
         <el-form-item label="市:"><el-select placeholder="市" size="small"></el-select></el-form-item>
          </el-col>
          <el-col :span='6'><el-form-item label="地址:" ><el-input placeholder="地址" value=""></el-input></el-form-item> </el-col>
        
        </el-row>
         <el-row :gutter="24">
   
         <el-col :span='6'><el-form-item label="类别:"><el-select placeholder="类   别" size="small"></el-select></el-form-item> </el-col>
         <el-col :span='6'><el-form-item label="状态:" ><el-select placeholder="状   态" size="small"></el-select></el-form-item></el-col>
         <el-col :span='6'><el-form-item><el-button type="primary" @click="onSubmit">查询</el-button><el-button type="primary" @click="reSet('formInline')">重置</el-button></el-form-item></el-col>
         </el-row>
</el-form>


<el-table
    :data="tableData3"
    height="500"
    border
    style="width: 100%"
    @row-click="rowClick"
    >
    <el-table-column
      prop="custName"
      label="客户名称"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="allows"
      label="营业执照"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="person"
      label="法人"
      align="center"
      >
    </el-table-column>
        <el-table-column
      prop="area"
      label="地区"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="detail"
      label="详细"
      align="center"
      >

      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">企业详细</el-button>
        <el-button type="text" size="small">交易详细</el-button>
      </template>
    </el-table-column>

  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>


    <el-dialog :title="detailTitle" :visible.sync="dialogAddgsVisible"  @close="closeDialogAddgsVisible">
        <el-tabs v-model="tab" @tab-click="tabClick" >
            <el-tab-pane label="身份认证" name="first">

                <div>
                    <el-form :inline="true" class="demo-form-inline">
                    <div>
                     <el-row :gutter="20">
                        <el-col :span="10"><img :src="yzgnImg1" /> </el-col>
                        <el-col :span="10"><img :src="fan"></el-col>

                    </el-row>
                    </div>
                    <div>
                    <el-row :gutter="20">
                        <el-col :span="8"> <el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                        <el-col :span="8"><el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                        <el-col :span="8"><el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                    </el-row>
                     <el-row :gutter="20">
                        <el-col :span="8"><el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                        <el-col :span="8"><el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                        <el-col :span="8"><el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8"><el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                        <el-col :span="8"><el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                        <el-col :span="8"><el-form-item label="客户名称"><el-input placeholder="客户名称" value="韦小宝"></el-input></el-form-item></el-col>
                    </el-row>
                    </div>
                    </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane label="基本信息" name="second">基本信息</el-tab-pane>
            <el-tab-pane label="银行卡信息" name="third">银行卡信息</el-tab-pane>
            <el-tab-pane label="房产信息" name="fourth">房产信息</el-tab-pane>
        </el-tabs>
    </el-dialog>
  </div>

  
</template>


<script>
export default {
  name: "creditBusiness",
  components: {},
  data() {
    return { 
        tableData3: [{
          custName:'XXXXX公司',
          allows:'企业1',
          person:'李四',
          area:'上海',
          address: '上海市浦东新区张江科技园1151号',
          status: '正常'
        }, {
          custName:'XXXXX公司',
          allows:'企业2',
          person:'张三',
          area:'上海',
          address: '上海市浦东新区张江科技园100号',
          status: '封闭'
        }, {
          custName:'XXXXX公司',
          allows:'企业3',
          person:'王五',
          area:'上海',
          address: '上海市浦东新区张江科技园1151号',
          status: '封闭',
          detail: '<a href="#">企业详细</a><a href="#">交易详细</a>'
        }, {
          custName:'XXXXX公司',
          allows:'企业4',
          person:'李全',
          area:'上海',
          address: '上海市浦东新区张江科技园11号',
          status: '正常'
        }, {
          custName:'XXXXX公司',
          allows:'企业5',
          person:'陌陌',
          area:'上海',
          address: '上海市浦东新区张江科技园177号',
          status: '正常'
        }, {
          custName:'XXXXX公司',
          allows:'企业6',
          person:'呵呵',
          area:'上海',
          address: '上海市浦东新区张江科技园8888号',
          status: '正常'
        }, {
          custName:'XXXXX公司',
          allows:'企业7',
          person:'张某某',
          area:'上海',
          address: '上海市浦东新区张江科技园1号',
          status: '正常'
        }],
        formInline: {
          custName: '',
          phone: '',
          enterPriseName:'',
          creditTime:''
        },
        currentPage4: 4,
        dialogAddgsVisible :false,
        detailTitle:'业务详情',
        tab:'first',
        labelPosition:'right'
    }
  },
  props: {},
  computed: {},
  methods: {
      rowClick(){
         this.dialogAddgsVisible = true;

      },
      reSet(searchForm){
          this.$refs[searchForm].resetFields();
      },
      tabClick(tab, event){
          console.log(tab, event);
      },
       handleClick(row) {
        console.log(row);
      }


  },
  watch: {},
  created() {}
};
</script>

<style scoped>
.el-form {
  margin-top: 14px;
}
</style>