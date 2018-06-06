<template>
  <div class="hello">
    <div class="selectT selectA" >
    	<div :class="['weekR',choose==1?'select':'']"  @click="chooseS(1)">周排行</div>
    	<div :class="['monthR',choose==2?'select':'']" @click="chooseS(2)">月排行</div>
    </div>
     <div class="selectT selectA" >
    	<div class="selectTA">
    		<div class="selectRank">排名</div>
    		<div class="selectRank1">
    		 <Opselect :name='name1' :op='op1' key='totalsign'  @showh="showh"  ></Opselect>
    		 </div>
    	</div>
    </div>
    <div>
    	<div v-for="item in ranklist" class="rankL">
    		<div  :class="['rankNo',item.no<=3?'green':'grey']">{{item.no}}</div>
    		<div><img :src="item.img" alt="" class="rankImg"></div>
    		<div class="ml2">{{item.name}}</div>
    		<div :class="['rankNumber',item.no<=3?'greenB':'greyB']">{{item.number}}</div>
    	</div>
    </div>
  </div>
</template>

<script>
import Opselect from './Opselect.vue'
export default {
  components:{
    Opselect
  },
  data () {
    return {
    	ranklist:[{no:1,img:'../../static/image/test.png',name:'王飞雪',number:70},{no:2,img:'../../static/image/test.png',name:'王飞雪',number:62},{no:3,img:'../../static/image/test.png',name:'王飞雪',number:49},{no:4,img:'../../static/image/test.png',name:'王飞雪',number:11},{no:5,img:'../../static/image/test.png',name:'王飞雪',number:8},{no:6,img:'../../static/image/test.png',name:'王飞雪',number:2},],
      choose:1,
      name1:'总签单数',
      op1:[{id:1,name:'总到访'},{id:2,name:'总邀约'},{id:3,name:'总签单数'}],
    }
  },
  methods: {
    showh(data){
      console.log(data)
      this.name1 = data.name
      // if(data.b=='show'){

      // this.name1 = data.a
      // }else{
      //    this.name2 = data.a
      // }
    },
    chooseS(num){
      this.choose = num;
    }
  },
  created(){
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
.select{
  color:#1fb5ad;
  border-bottom:0.08rem solid #1fb5ad;
  /*background: #f3f3f3*/
}
  .green{
  	color:#1fb5ad;
  }
  .grey{
  	color:grey
  }
.greenB{
  	color:#1fb5ad;
  	font-size: .6rem;
  }
  .greyB{
  	color:grey;
  	font-size: .5rem;
  }
  .selectA{
   font-size:0.35rem;border-bottom:1px solid gainsboro;
  }
  .weekR{
    height:1rem;line-height:1rem;border-right:1px solid gainsboro;text-align:center;flex:auto;box-sizing:border-box;
  }
  .monthR{
   height:1rem;line-height:1rem;text-align:center;flex:auto;box-sizing:border-box;
  }
  .selectTA{
    display:flex;justify-content:space-between;width:100%
  }
  .selectRank{
    flex:0 0 50%;text-align:left;line-height:1rem;padding-left:0.3rem;box-sizing:border-box;
  }
  .selectRank1{
   flex:0 0 50%;text-align:right;line-height:1rem;box-sizing:border-box;padding-left:23%
  }
  .rankL{
  display:flex;font-size:0.35rem;align-items:center;height:1.4rem;border-bottom:1px solid gainsboro
}
.rankNo{
 flex:0 0 .7rem;text-align:center;
}
.rankImg{
 width:.9rem;height:.9rem;border-radius:50%
}
.ml2{
  margin-left:.2rem
}
.rankNumber{
  flex:auto;text-align:right;padding-right:.5rem;
}
</style>
