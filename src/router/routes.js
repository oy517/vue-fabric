/*
 * @Author: calebman 
 * @Date: 2018-05-06 12:10:56 
 * @Last Modified by: calebman
 * @Last Modified time: 2018-05-14 10:14:21
 */


/**
* hidden: true                   如果hidden为true则在左侧菜单栏展示，默认为false
* name:'router-name'             路由名称，必须填写
* meta : {
    roles: ['admin','editor']    权限列表，用于页面级的权限控制，默认不设置代表任何权限均可访问
    title: 'title'               对应路由在左侧菜单栏的标题名称
    icon: 'icon-class'             对应路由在左侧菜单栏的图标样式，样式使用iconfont图标库，见assest/iconfont文件夹
  }
**/

import login from '@/views/login';
import page404 from '@/views/error-page/404';
import page401 from '@/views/error-page/401';
import cpw from '@/views/creditManage/creditPreWarning';
import cp from '@/views/creditManage/creditPay';
import ccc from '@/views/creditManage/creditLvComputeConfig';
import cls from '@/views/creditManage/creditLvAndScore';
export const constantRouterMap = [
  { path: '/login', name: 'login', meta: { title: "系统登录", hidden: true }, component: login },
  { path: "/404", name: "page404", meta: { title: "页面走丢了", hidden: true }, component: page404 },
  { path: "/401", name: "page401", meta: { title: "权限不足", hidden: true }, component: page401 }
]


const layout = () => import(/* webpackChunkName: "group-index" */ '@/views/layout');
export const asyncRouterMap = [
  {
    path: '/',
    name: 'main',
    redirect: '/dashboard',
    hidden: true,
    component: layout,
    children: [
      { path: 'dashboard', name: 'dashboard', meta: { title: "首页" }, component: () => import(/* webpackChunkName: "group-index" */'@/views/dashboard') }
    ]
  }
  // ,
  // {
  //   path: '/example',
  //   name: 'example',
  //   meta: { title: "组件", icon: "dbm d-icon-zujian" },
  //   redirect: '/example/datatabledemo',
  //   component: layout,
  //   children: [
  //     { path: "menucarddemo", name: "menuCardDemo", meta: { title: "菜单卡片", icon: "dbm d-icon-qiapian" }, component: () => import('@/views/demo/menu-card-demo') },
  //     { path: "treeviewdemo", name: "treeViewDemo", meta: { title: "树形结构", icon: "dbm d-icon-shu" }, component: () => import('@/views/demo/tree-view-demo') },
  //     { path: "datatabledemo", name: "dataTableDemo", meta: { title: "数据表格", icon: "dbm d-icon-biaoge" }, component: () => import('@/views/demo/datatable/data-table') },
  //     { path: "chartsdemo", name: "chartsDemo", meta: { title: "echarts图表", icon: "dbm d-icon-tubiao" }, component: () => import('@/views/demo/charts-demo') },
  //     { path: "test", name: "test", meta: { title: "布局测试", icon: "icon dbm d-icon-test" }, component: () => import('@/views/demo/layout-test') }
  //   ]
  // }
  ,
  {
    path: '/sysmanage',
    name: 'sysmanage',
    meta: { title: "系统管理", icon: "dbm d-icon-quanxian" },
    redirect: '/sysmanage/authAndRole',
    component: layout,
    children: [

      { path: "authAndRole", name: "authAndRole", meta: { title: "权限与角色管理", roles: ["admin"] }, component: () => import('@/views/sysmanage/authAndRole') },
      { path: "sysuser", name: "sysuser", meta: { title: "用户管理", roles: ["admin", "watcher"] }, component: () => import('@/views/demo/datatable/data-table') },
      { path: "log", name: "log", meta: { title: "日志管理" }, component: () => import('@/views/sysmanage/log') }
    ]
  },
  
   {
    path: '/creditManage',
    name: 'creditManage',
    meta: { title: "信贷管理", icon: "dbm d-icon-qiapian" },
    redirect: '/creditManage/ccc',
    component: layout,
    children: [
      { path: "ccc", name: "ccc", meta: { title: "信贷等级计算配置", icon: "" }, component: ccc },
      { path: "cpw", name: "cpw", meta: { title: "信贷预警配置", icon: "" }, component: cpw },
      { path: "cp", name: "cp", meta: { title: "信贷收费配置", icon: "" }, component: cp },
      { path: "cls", name: "cls", meta: { title: "信贷评分评级", icon: "" }, component: cls },
      { path: "cbm", name: "cbm", meta: { title: "信贷业务管理", icon: "" }, component: () => import('@/views/creditManage/creditBusiness') },
    ]
  },
  {
    path: '/custManage',
    name: 'custManage',
    meta: { title: "客户管理", icon: "dbm d-icon-username" },
    redirect: '/custManage/el',
    component: layout,
    children: [
      { path: "el", name: "el", meta: { title: "下游企业列表" , icon: ""}, component: () => import('@/views/custManage/enterpriseList') },
      { path: "ewl", name: "ewl", meta: { title: "企业白名单管理", icon: ""}, component: () => import('@/views/custManage/enterpriseWhiteList') },
      { path: "fol", name: "fol", meta: { title: "金融机构管理" , icon: ""}, component: () => import('@/views/custManage/financialOrgList') },
      { path: "fowl", name: "fowl", meta: { title: "金融机构白名单管理" , icon: ""}, component: () => import('@/views/custManage/financialOrgWhiteList') },
      { path: "fp", name: "fp", meta: { title: "金融产品管理" , icon: ""}, component: () => import('@/views/custManage/financialProduct') }
    ]
  },
  {
    path: '/dataManage',
    name: 'dataManage',
    meta: { title: "数据管理", icon: "dbm d-icon-3501shuju" },
    redirect: '/dataManage/baseData',
    component: layout,
    children: [
      { path: "bd", name: "bd", meta: { title: "基础数据管理" }, component: () => import('@/views/dataManage/baseData') },
      { path: "bc", name: "bc", meta: { title: "区块链管理"}, component: () => import('@/views/dataManage/bolckchain') },
      { path: "tl", name: "tl", meta: { title: "交易日志管理" }, component: () => import('@/views/dataManage/tradeLog') },
    ]
  }, 
  { path: '*', redirect: '/404', hidden: true }
]