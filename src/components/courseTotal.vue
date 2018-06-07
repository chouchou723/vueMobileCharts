<template>
  <div class="hello">
    <div class="selectT">
      <div class="band">
       	<div class="bandone">5月8号00:00至当前总课耗</div>
       	<div class="bandone bandn">801</div>
       	<div class="bandone">比昨日上升90↑</div>
      </div>
    </div>
    <div class="selectT mb5">
    	<div class="selectD">
    		 	<div class='band4'>
      		<div class="fz5">100</div>
      		<div class="fz3g">沟通量</div>
      	</div>
        <div class='band4'>
      		<div class="fz5">100</div>
      		<div  class="fz3g">邀约量</div>
      	</div>
        <div class='band4'>
      		<div class="fz5">100%</div>
      		<div  class="fz3g">邀约率</div>
      	</div>
        <div class='band4'>
      		<div class="fz5">100</div>
      		<div  class="fz3g">到访量</div>
      	</div>
        <div class='band4'>
      		<div class="fz5">100%</div>
      		<div  class="fz3g">到访率</div>
      	</div>		
    	</div>
    </div>
    <div class="selectTitle">
    	 <div class="selectT">
      <div :class="['selecto',a==1?'select':'']" @click="active(1)">近7天</div>
      <div :class="['selecto',a==2?'select':'']" @click="active(2)">近30天</div>
      <div :class="['selecto dateS',a==3?'dateselect':'']" @click="active(3)">日期范围</div>
    </div>
      <div class="dateP">
        <vue-datepicker-local v-show="dateShow" v-model="time" placeholder="请选择日期" :showButtons='trueO' />
   </div>
    <div class="selectT selectF">
    	<div :class="['tagF', choose===1?'tabSelect':'']" @click="chooseS(1)">总课耗</div>
    	<div :class="['tagF', choose===2?'tabSelect':'']" @click="chooseS(2)">出勤率</div>
    	<div :class="['tagF', choose===3?'tabSelect':'']" @click="chooseS(3)">旷课量</div>
    	<div :class="['tagF', choose===4?'tabSelect':'']" @click="chooseS(4)">活动消耗</div>
    	<div :class="['tagF', choose===4?'tabSelect':'']" @click="chooseS(4)">请假量</div>
    </div>
	 <div class="echarts1">
    <IEcharts :option="line2" ></IEcharts>
    <!-- <button @click="doRandom">Random</button> -->
  </div>

    </div>
  </div>
</template>

<script>
 import VueDatepickerLocal  from './VueDatepickerLocal.vue'
 import IEcharts from 'vue-echarts-v3/src/lite.js';
 import 'echarts/lib/chart/line';
 
export default {
  components:{
    VueDatepickerLocal,IEcharts
  },
  data () {
    return {
      choose:1,
      line2: {
                    // color: ['#1fb5ad','#1fb5ad','#1fb5ad','#1fb5ad'],
                    // title: {
    
                    //     textStyle: {
                    //         fontSize: 17
                    //     },
                    //     padding: [15, 5, 5, 5]
                    // },
                    // tooltip: {
                    //     trigger: 'axis',
                    //     formatter: "{a} : {c} <br/>"
                    // },
                    // dataZoom: [{
                    //     startValue: '2017-05-01',
                    //     textStyle:{
                    //         fontSize:9
                    //     }
                    // }, 
                    // {
                    //     type: 'inside',
                        
                    //     // maxSpan:2
                    //     // filterMode: 'filter'
                    // }],
                    lineStyle:{
                      color:'#1fb5ad'
                    },
                    itemStyle:{
                      color:'#1fb5ad'
                    },
                    xAxis: {
                    	axisLabel:{

                    		fontSize:12
                    	},
                        axisTick: {
                            alignWithLabel: true
                        },
                        data:["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                        
    
                    },
                    yAxis: {
                    	axisLabel:{

                    		fontSize:12
                    	},
                        splitLine: {
                            show: true
                        }
                    },
                    series: [{
                    	name:'人数',
            type:'line',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)',

                }
            },
            lineStyle:{
            	width:4
            },
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //             offset: 0,
            //             color: 'rgb(255, 158, 68)'
            //         }, {
            //             offset: 1,
            //             color: 'rgb(255, 70, 131)'
            //         }])
            //     }
            // },
            data:  [2, 5, 10, 5, 1, 5, 10]
                    }]
                },
                  dateShow:false,
          time:[],
          trueO:true,
    }
  },
  methods: {
    active (n) {
      
      this.a = n;
      if(n===3){
        this.dateShow = true;
        this.time = [];
      }else{
        this.dateShow = false;


      }
    },
    chooseS(num){
      this.choose = num;
    }
  },
  created(){
     this.line2.xAxis.axisLabel.fontSize=devicePixelRatio===2?24:36;
     this.line2.yAxis.axisLabel.fontSize=devicePixelRatio===2?24:36;
     this.line2.tooltip.textStyle.fontSize=devicePixelRatio===2?24:36;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mb5{
  margin-bottom:.5rem;
}
.fz5{
 font-size:.5rem;
}
.fz3g{
  font-size:.3rem;color:grey;
}
.selectTitle{
  padding-bottom:1rem;background:white;
}
.dateP{
  width:100%;display:flex;justify-content:center;
}

.selectT{
  display: flex;
  justify-content: center;
  align-items: center;
width:100%;
    flex-wrap: wrap;
    background: white;
}
.selectD{
	 display: flex;
  justify-content: flex-start;
  align-items: center;
width:80%;
    flex-wrap: wrap;
}
.selecto{
  flex:auto;
  height: 1rem;
  background: white;
  font-size: 0.3rem;
  color:grey;
  display: flex;
  justify-content: center;
  align-items: center;
  border:1px solid #f3f3f3;
}
.select{
  color:#1fb5ad;
  background: #f3f3f3
}
.band{
  width: 100%;
  background: linear-gradient(#5dded7,#1fb5ad);
  height: 2rem;
  display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
}
.bandone{
  flex:auto;
  display: flex;
   justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.3rem;
  color:white;
}
.bandn{
  font-size: 0.6rem;
}
  .echarts1 {
    width: 100%;
    height: 4rem;
  }
  .tagF{
  	/*width: 25%;*/
  	flex:1 1 20%;
  	height: 1rem;
  	line-height: 1rem;
  	text-align: center;
  	font-size: 0.25rem;
  }
  .tabSelect{
  	font-weight: 600;
  	position: relative;

  }
  .tabSelect::before{
  	position: absolute;
  	content: '';
  	bottom:10%;
  	width: 34%;
  	left:0;
  	right:0;
  	margin:0 auto;
  	height: 0.07rem;
  	background: #1fb5ad;
  	border-radius: 10px;
  }
.band4{
  	flex:0 0 33%;
  	height: 1.4rem;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  }
  .dateS{
    position: relative;
  }
.dateS::after{
  content: '';
  position: absolute;
  top:44%;
  right:0.5rem;
  border-top:.15rem solid grey;
  border-left:.1rem solid transparent;
  border-right:.1rem solid transparent;
}
.dateselect{
  color:#1fb5ad;
  background: #f3f3f3
}
.dateselect::after{
  content: '';
  position: absolute;
  right:0.5rem;
  border-top:.15rem solid #1fb5ad;
  border-left:.1rem solid transparent;
  border-right:.1rem solid transparent;
}
.selectF{
  border-bottom:1px solid gainsboro
}
</style>
