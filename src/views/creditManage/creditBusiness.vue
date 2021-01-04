<template>
<div>
<el-form :inline="true" :model="formInline" class="demo-form-inline" ref='formInline'>
  <el-form-item label="客户名称" prop='custName'>
    <el-input v-model="formInline.custName" placeholder="客户名称"></el-input>
  </el-form-item>
  <el-form-item label="联系电话" prop='phone'>
    <!-- <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select> -->
     <el-input v-model="formInline.phone" placeholder="联系电话"></el-input>
  </el-form-item>
  <el-form-item label="企业名称" prop='enterPriseName'>
    <el-input v-model="formInline.enterPriseName" placeholder="企业名称"></el-input>
  </el-form-item>
   <el-form-item label="贷款时间" prop='creditTime'>
    <el-input v-model="formInline.creditTime" placeholder="贷款时间"></el-input>
  </el-form-item> 
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
    <el-button type="primary" @click="reSet('formInline')">重置</el-button>
  </el-form-item>
</el-form>

    


  <el-table
    :data="tableData3"
    height="500"
    border
    style="width: 100%"
    @row-click="rowClick"
    >
    <el-table-column
      prop="id"
      label="流水号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="custName"
      label="客户姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="enterPriseName"
      label="企业名称"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="phone"
      label="联系电话"
      width="180"
      >
    </el-table-column>
        <el-table-column
      prop="getMoney"
      label="实际提款"
      width="180">
    </el-table-column>
    <el-table-column
      prop="creditMoney"
      label="信贷金额"
      width="180">
    </el-table-column>
    <el-table-column
      prop="busiMoney"
      label="业务金额">
    </el-table-column>
    <el-table-column
      prop="address"
      label="客户地址">
    </el-table-column>
    <el-table-column
      prop="creditTime"
      label="信贷时间">
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

  </div>
</template>

<script>
import detail from '@/views/creditManage/creditBusinessDetail'
import fan from '@/assets/business/fan.jpg'
import zheng from '@/assets/business/zheng.jpg'
export default {
  name: "creditBusiness",
  components: {},
  data() {
    return { 
        tableData3: [{
          id :'1',
          custName:'张三',
          enterPriseName:'企业1',
          phone:123456789,
          getMoney:590000,
      
          creditMoney: 600000,
          busiMoney: 10000,
          address: '湖南省长沙市星沙3区1411号',
          creditTime:'2020-10-22 10:22:30'
        }, {
          id :'2',
          custName:'张三',
          enterPriseName:'企业2',
          phone:123456789,
          getMoney:590000,
          creditMoney: 600000,
          busiMoney: 10000,
          address: '湖南省长沙市星沙3区1411号',
          creditTime:'2020-10-22 10:22:30' 
        }, {
          id :'3',
          custName:'张三',
          enterPriseName:'企业3',
          phone:123456789,
          phone:123456789,
          getMoney:590000,
          creditMoney: 600000,
          busiMoney: 10000,
          address: '湖南省长沙市星沙3区1411号',
          creditTime:'2020-10-22 10:22:30'
        }, {
          id :'4',
          custName:'张三',
          enterPriseName:'企业4',
          phone:123456789,
          getMoney:590000,
          creditMoney: 600000,
          busiMoney: 10000,
          address: '湖南省长沙市星沙3区1411号',
          creditTime:'2020-10-22 10:22:30'
        }, {
          id :'5',
          custName:'张三',
          enterPriseName:'企业5',
          phone:123456789,
          getMoney:590000,
          creditMoney: 600000,
          busiMoney: 10000,
          address: '湖南省长沙市星沙3区1411号',
          creditTime:'2020-10-22 10:22:30'
        }, {
         id :'6',
          custName:'张三',
          enterPriseName:'企业6',
          phone:123456789,
          getMoney:590000,
          creditMoney: 600000,
          busiMoney: 10000,
          address: '湖南省长沙市星沙3区1411号',
          creditTime:'2020-10-22 10:22:30'
        }, {
          id :'7',
          custName:'张三',
          enterPriseName:'企业7',
          phone:123456789,
          getMoney:590000,
          creditMoney: 600000,
          busiMoney: 10000,
          address: '湖南省长沙市星沙3区1411号',
          creditTime:'2020-10-22 10:22:30'
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
        zheng:zheng,
        fan:fan
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
      }


  },
  watch: {},
  created() {}
};
</script>

<style lang="less" scoped>
.el-table th {
    text-align: center;
} 
</style>