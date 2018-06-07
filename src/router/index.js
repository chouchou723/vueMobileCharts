import Vue from 'vue'

import Router from 'vue-router'
import home from '@/components/home'
import customerFollow from '@/components/customerFollow'//客户跟进
import SalePer from '@/components/SalePer'//销售业绩
import saleRank from '@/components/saleRank'//销售排行榜
import saleTarget from '@/components/saleTarget'//销售指标
import schoolTarget from '@/components/schoolTarget'//销售指标(校区)
import courseRank from '@/components/courseRank'//课耗排行榜
import courseTarget from '@/components/courseTarget'//课耗指标
import courseTargetSchool from '@/components/courseTargetSchool'//课耗指标(校区)
import courseTotal from '@/components/courseTotal'//课耗统计
import signTotal from '@/components/signTotal'//报名统计
import signTotalPerson from '@/components/signTotalPerson'//报名统计个人

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect:'/customerFollow',
      children:[
    //     {
    //   path: '/',
    //   name: 'customerFollow',
    //   component: customerFollow
    // },
     {
      path: '/salePer',
      name: 'salePer',
      component: SalePer
    },
     {
      path: '/saleRank',
      name: 'saleRank',
      component: saleRank
    },
     {
      path: '/saleTarget',
      name: 'saleTarget',
      component: saleTarget
    },
     {
      path: '/schoolTarget',
      name: 'schoolTarget',
      component: schoolTarget
    },
     {
      path: '/customerFollow',
      name: 'customerFollow',
      component: customerFollow
    },
     {
      path: '/courseRank',
      name: 'courseRank',
      component: courseRank
    },
     {
      path: '/courseTarget',
      name: 'courseTarget',
      component: courseTarget
    },
    {
      path: '/courseTargetSchool',
      name: 'courseTargetSchool',
      component: courseTargetSchool
    },
     {
      path: '/courseTotal',
      name: 'courseTotal',
      component: courseTotal
    },
     {
      path: '/signTotal',
      name: 'signTotal',
      component: signTotal
    },
     {
      path: '/signTotalPerson',
      name: 'signTotalPerson',
      component: signTotalPerson
    }
    ]
    },
     
  ]
})
