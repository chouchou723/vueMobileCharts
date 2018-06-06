<template>
  <div class="signTotal">
    <div class="selectT">
      <div :class="['selecto',a==1?'select':'']" @click="active(1)">近7天</div>
      <div :class="['selecto',a==2?'select':'']" @click="active(2)">近30天</div>
      <div :class="['selecto dateS',a==3?'dateselect':'']" @click="active(3)">日期范围</div>
    </div>
   <div class="dateP">
     
      <vue-datepicker-local v-show="dateShow" v-model="time" placeholder="请选择日期" :showButtons='trueO' />
   </div>
  
    <div class="selectT">
      <div class="band">
        <div class="bandone bbb">
          <div class="bandn">18</div>
          <div>新签量</div>
        </div>
        <div class="bandone">
            <div class="bandn">18</div>
          <div>续费量</div>
        </div>
      </div>
    </div>
    <div  class="selectT selectTwo" >
      <div class="pieBlock">
        
        <div class="pieTitle">新签分析</div>
        <div class="pieTwo">
          <div class="eall">
            <div class="echarts">
          <IEcharts :option="pie_radius1" ></IEcharts>
             </div>
            <div class="titleTwo">
              <div class="eall">
              <div class="fz5">50%</div>
              <div class="fz3"><span class="circle1"></span>其他</div>
                
              </div>
              <div class="eall">
            <div class="fz5">50%</div>
              <div class="fz3"><span class="circle2"></span>转介绍</div>
                
              </div>
            </div>
          </div>
           <div class="eall">
            <div class="echarts">
          <IEcharts :option="pie_radius2" ></IEcharts>
             </div>
            <div class="titleTwo">
              <div class="eall">
              <div class="fz5">50%</div>
              <div class="fz3"><span class="circle3"></span>试听</div>
                
              </div>
              <div class="eall">
            <div class="fz5">50%</div>
              <div class="fz3"><span class="circle4"></span>试听报名</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <schoolTarget style="padding-bottom:1.4rem"></schoolTarget>
    </div>
  </div>
</template>

<script>
import schoolTarget from './schoolTarget.vue'
 import IEcharts from 'vue-echarts-v3/src/full.js';
 import VueDatepickerLocal  from './VueDatepickerLocal.vue'
export default {
  components:{
    schoolTarget,IEcharts,VueDatepickerLocal
  },
  data () {
    return {
      a: 1,
      trueO:true,
      dateShow:false,
      start:'',
      time:[],
      end:'',
      pie_radius1: {
                color: [ "#3258c8","#4cbcf9"],
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
                value: 30,
                name: '其他'
            }, {
                value: 30,
                name: '转介绍'
            }],
                    center: ['50%', '50%'],
                    name: '常规班等',
                    type: 'pie',
                    radius: ['55%', '80%'],
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
      pie_radius2: {
                color: ["#38995f", "#68d58c" ],
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
                value: 30,
                name: '试听'
            }, {
                value: 30,
                name: '试听报名'
            }],
                    center: ['50%', '50%'],
                    name: '常规班等',
                    type: 'pie',
                    radius: ['55%', '80%'],
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
    }
  },
  methods: {
    active (n) {
      // console.log(1)
      this.a = n
      if(n===3){
        this.dateShow = true;
        this.time = [];
      }else{
        this.dateShow = false;


      }
    },
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selectT{
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
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
  width: 90%;
  background: linear-gradient(#5dded7,#1fb5ad);
  border-radius: 10px;
  height: 2rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 15px grey;
}
.pieBlock{
   width: 90%;
  border-radius: 10px;
  height: 6rem;
  margin: 0.4rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 1px 1px 15px grey;
}
.pieTwo{
    width: 100%;
  height: 100%;
 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.titleTwo{
    width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
.bandone:first-child{
  border-right: 1px solid gainsboro;
}
.bandn{
  font-size: 0.5rem;
}
.eall{
    width: 100%;
    height: 100%;
    justify-content: center;
  align-items: center;
  flex-direction: column;
}
.echarts {
    width: 100%;
    height: 3.5rem;

  }
  .dateselect{
  color:#1fb5ad;
  background: #f3f3f3
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
.dateselect::after{
  content: '';
  position: absolute;
  right:0.5rem;
  border-top:.15rem solid #1fb5ad;
  border-left:.1rem solid transparent;
  border-right:.1rem solid transparent;
}
.dateP{
 width:100%;display:flex;justify-content:center;
}
.selectTwo{
 padding-bottom:.5rem;margin-bottom:.5rem;
}
.pieTitle{
 font-size:.3rem;width:100%;height:1rem;line-height:1rem;border-bottom:1px solid gainsboro
}
.fz5{
  font-size: .5rem;
}
.fz3{
  font-size: .3rem;
}
.circle1{
  display:inline-block;width:.2rem;height:.2rem;border-radius:50%;background:#4cbcf9;margin-right:.2rem
}
.circle2{
  display:inline-block;width:.2rem;height:.2rem;border-radius:50%;background:#3258c8;margin-right:.2rem
}
.circle3{
 display:inline-block;width:.2rem;height:.2rem;border-radius:50%;background:#68d58c;margin-right:.2rem
}
.circle4{
  display:inline-block;width:.2rem;height:.2rem;border-radius:50%;background:#38995f;margin-right:.2rem
}
</style>
