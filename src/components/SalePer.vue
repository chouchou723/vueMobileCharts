<template>
  <div class="salePer">
    <div class="selectT">
      <div class="band">
       	<div class="bandone">5月8号00:00至当前销售总额 (元)</div>
       	<div class="bandone bandn">18,900,801</div>
       	<div class="bandone">比昨日上升1890元↑</div>
      </div>
    </div>
    <div class="selectT card">
    	
    <div class="echarts">
    <IEcharts :option="pie_radius2" ></IEcharts>
    <!-- <button @click="doRandom">Random</button> -->
  </div>
  <div>
  	<div  class="cardOne">
  		<div><span class="cardSpan"><span class="circleO"></span>新签</span><span class="ml5">35%</span></div>
  			<div><span class="cardSpan"><span class="circleT"></span>续费</span><span class="ml5">35%</span></div>
  			<div><span class="cardSpan"><span class="circleR"></span>转课补费</span><span class="ml5">30%</span></div>
  </div>
    </div>
    </div>
    <div class="selectT card">
    	<div class="selectT selectN">
    		<div class="coloumM">类型</div>
    		<div class="coloumM">单数</div>
    		<div class="coloumM">金额</div>
    	</div>
    	<div class="selectT coloumT" >
    		<div class="coloumM">新签</div>
    		<div class="coloumM">8</div>
    		<div class="coloumM">11888889</div>
    	</div>
   <div class="selectT coloumT" >
    		<div class="coloumM">续费</div>
    		<div class="coloumM">8</div>
    		<div class="coloumM">11888889</div>
    	</div><div class="selectT coloumP" >
    		<div class="coloumM">转课补费</div>
    		<div class="coloumM">8</div>
    		<div class="coloumM">11888889</div>
    	</div>
    </div>
    <div class="selectR">
    	 <div class="selectT">
      <div :class="['selecto',a==1?'select':'']" @click="active(1)">近7天</div>
      <div :class="['selecto',a==2?'select':'']" @click="active(2)">近30天</div>
      <div :class="['selecto dateS',a==3?'dateselect':'']" @click="active(3)">日期范围</div>
    </div>
     <div class="dateP">
     
      <vue-datepicker-local v-show="dateShow" v-model="time" placeholder="请选择日期" :showButtons='trueO' />
   </div>
    <div class="selectT selectBB" >
    	<div :class="['tagF', choose===1?'tabSelect':'']" @click="chooseS(1)">总金额</div>
    	<div :class="['tagF', choose===2?'tabSelect':'']" @click="chooseS(2)">新签</div>
    	<div :class="['tagF', choose===3?'tabSelect':'']" @click="chooseS(3)">续费</div>
    	<div :class="['tagF', choose===4?'tabSelect':'']" @click="chooseS(4)">转课补费</div>
    </div>
	 <div class="echarts1">
    <IEcharts :option="line2" ></IEcharts>
    <!-- <button @click="doRandom">Random</button> -->
  </div>

    </div>
  </div>
</template>

<script>
import Opselect from './Opselect.vue'
 import VueDatepickerLocal  from './VueDatepickerLocal.vue'
 import IEcharts from 'vue-echarts-v3/src/full.js';
export default {
  components:{
    Opselect,IEcharts,VueDatepickerLocal
  },
  data () {
    return {
       dateShow:false,
          time:[],
          trueO:true,
          a:1,
      choose:1,
      pie_radius2: {
                color: [ "#e57959","#31bfe9","#ffd34d", ],
                // legend: {
                //     orient: 'horizontal',
                //     bottom: 10,
                //     data: ["常规班", "夏令营", "暑假班", "考级班"]
                // },
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{b}:{c} ({d}%)"
                // },
                // graphic: [{
                //     type: 'image',
                //     id: 'logo',
                //     right: 'center',
                //     top: 'center',
                //     z: -10,
                //     bounding: 'raw',
                //     origin: [75, 75],
                //     style: {
                //         image: '../../../static/img/charts.png',
                //         width: 150,
                //         height: 150,
                //         opacity: 0.4
                //     }
                // }],
                // grid: {
                //     width: 200,
                //     // left:'20%'
                // },
                series: [{
                	data:[{
                value: 20,
                name: '常规班'
            }, {
                value: 30,
                name: '夏令营'
            }, {
                value: 30,
                name: '暑假班'
            }],
                    center: ['50%', '50%'],
                    name: '常规班等',
                    type: 'pie',
                    radius: ['45%', '80%'],
                    label: {
                        normal: {
                            show: false,
                            formatter: "{b}\n{c}({d}%)",
                            align: 'right'
                        }
                    },
                    // labelLine: {
                    //     normal: {
                    //         length2: 5
                    //     }
                    // },
                    // itemStyle: {
                    //     emphasis: {
                    //         shadowBlur: 10,
                    //         shadowOffsetX: 0,
                    //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                    //     }
                    // }
                }],
                backgroundColor: 'white'
            },
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
     this.line2.color =['#1fb5ad']
  	 // this.line2.series = [{ //以后改成动态获取
    //                 name: "人数",
    //                 type: "line",
    //                 data: [2, 5, 10, 5, 1, 5, 10]
    //             }]
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selectT{
  display: flex;
  justify-content: center;
  align-items: center;
width:100%;
    flex-wrap: wrap;
}
.card{
	margin:0.5rem auto;
	width:90%;
	border:1px solid gainsboro;
	 box-shadow: 3px 4px 15px gainsboro;
	 border-radius: 20px;
   background-color: white;
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
.echarts {
    width: 50%;
    height: 4rem;
  }
  .echarts1 {
    width: 100%;
    height: 4rem;
  }
  .cardOne{
  	font-size: 0.3rem;
  	color:black;
  }
  .tagF{
  	width: 25%;
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
.cardSpan{
  width:1.5rem;text-align:left;display:inline-block;vertical-align: middle;padding:0.2rem 0 
}
.circleO{
   width:0.2rem;height:0.2rem;border-radius:50%;background:#31bfe9;display:inline-block;margin-right:0.1rem
}
.circleT{
 width:0.2rem;height:0.2rem;border-radius:50%;background:#e57959;display:inline-block;margin-right:0.1rem
}
.circleR{
 width:0.2rem;height:0.2rem;border-radius:50%;background:#ffd34d;display:inline-block;margin-right:0.1rem
}
.ml5{
 margin-left:.5rem
}
.selectN{
   width:100%;background:#ececec4f;padding:0 5%;border-bottom:1px solid gainsboro
}
.coloumM{
 width:33%;text-align:center;font-size:0.3rem;padding:0.2rem 0
}
.coloumT{
 width:100%;padding:0 5%;border-bottom:1px solid gainsboro
}
.coloumP{
 width:100%;padding:0 5%
}
.selectR{
 padding-bottom:1rem;background:white;
}
.dateP{
  width:100%;display:flex;justify-content:center;
}
.selectBB{
 border-bottom:1px solid gainsboro
}
</style>
