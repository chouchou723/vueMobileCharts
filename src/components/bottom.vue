<template>
      <div class="selectT">
       <div class='selectThree' @click="showC">
	       	<span class="three">
	       		<div class="threeO"></div>
	       		<div class="threeO"></div>
	       		<div class="threeO"></div>
	       </span>
	       <span>
	       	{{title}}
	       </span>
	   </div>
	   <div class="model" v-if="show">
	   	<div class='w100'>
	   			<div class='titleName'>销售报表</div>
	   			<div class='chooseTitle'>
	   				<router-link to="/customerFollow" :class="['fourborder',choose===1?'tabSelect':'']" @click.native="chooseS(1)">客户跟进</router-link>
	   				<router-link  to="/salePer" :class="['fourborder',choose===2?'tabSelect':'']" @click.native="chooseS(2)">销售业绩</router-link>
	   				<router-link  to="/saleTarget" :class="['fourborder',choose===3?'tabSelect':'']" @click.native="chooseS(3)">销售指标</router-link>
	   				<router-link  to="/saleRank" :class="['fourborder',choose===4?'tabSelect':'']" @click.native="chooseS(4)">销售业绩排行</router-link>
	   			</div>
	   	</div>
	   		<div  class='w100'>
	   			<div class='titleName'>销售报表</div>
	   			<div class='chooseTitle'>
	   				<router-link  to="/courseTotal" :class="['fourborder',choose===5?'tabSelect':'']" @click.native="chooseS(5)">课耗统计</router-link>
	   				<router-link  to="/courseTarget" :class="['fourborder',choose===6?'tabSelect':'']" @click.native="chooseS(6)">课耗指标</router-link>
	   				<router-link  to="/signTotal" :class="['fourborder',choose===7?'tabSelect':'']" @click.native="chooseS(7)">报名统计</router-link>
	   				<router-link  to="/courseRank" :class="['fourborder',choose===8?'tabSelect':'']" @click.native="chooseS(8)">课耗排行榜</router-link>
	   			</div>
	   	</div>
	   </div>
     <div class="modal" v-if="show" @click="showC">
       
     </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      show:false,
      // title:'客户跟进',
     	// choose:1,
    }
  },
  methods: {
    showC(){
    	// console.log(10)
      if(this.show){
        this.show = false;
      }else{
        this.show = true;
      }
    },
    chooseS(num){
    //   this.choose = num;
       this.show = false;
    },
  },
  created(){
  	// console.log(this.$route.path)
  	// this.getChoose();
  	
  },
  mounted(){
    let ele = document.getElementById('app');
    ele.addEventListener('touchmove',  event=> { 　　
    if(this.show){　　　　　　　　　　　　　　　　　　　　　　　
        event.preventDefault();
    }
})
  },
  computed:{
  	title(){
  		let path = this.$route.path
		switch (path) {
			case '/customerFollow':
				return '客户跟进'
			case '/salePer':
				return  '销售业绩';
			case '/saleTarget':
				return '销售指标';
			case '/saleRank':
				return '销售业绩排行';
			case '/courseTotal':
				return '课耗统计';
			case '/courseTarget':
				return '课耗指标';
			case '/signTotal':
				return '报名统计';
			case '/courseRank':
				return '课耗排行榜';
			default:
				// statements_def
				break;
		}
	  },

	choose(){
		let path = this.$route.path
		// console.log(path)
  	switch (path) {
  		case '/customerFollow':
  			return 1;
  		case '/salePer':
  			return 2;
  		case '/saleTarget':
  			return 3;
  		case '/saleRank':
		  return 4;
  		case '/courseTotal':
		  return 5;
  		case '/courseTarget':
  			return 6;
  		case '/signTotal':
  			return 7;
  		case '/courseRank':
  			return 8;
  		default:
  			// statements_def
  			break;
	  }
	}
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped >
.selectT{
	height: 1rem;
	font-size: .34rem;
	background: #ffffff;
	line-height: 1rem;
	text-align: center;
	width: 100%;
	border-top:1px solid gainsboro;
	color:#838383;
	position: relative;
}
.three{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: .3rem;
	height: .23rem;
	margin-right: .1rem;
}
.threeO{
	height: .03rem;
	width: 100%;
	background: #838383;
}
.model{
	position: absolute;
	bottom:1rem;
	width: 100%;
	height: 8rem;
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	/*z-index: 5;*/
	/*justify-content: center;*/
}
.fourborder{
	/*padding: 1rem;*/
	font-size: .3rem;
	width: 40%;
	height: 1rem;
	border:1px solid gainsboro;
	border-radius: 30px;
	color: black;
	text-decoration: none;
}
.tabSelect{
	background: #1fb5ad;
	color: white;
}
.selectThree{
 display:flex;align-items: center;justify-content: center;background: #ffffff;
}
.w100{
  width: 100%;
}
.titleName{
  width:73%;margin:0 auto;text-align:left
}
.chooseTitle{
  display:flex;align-items: center;justify-content: space-around;flex-direction: row;flex-wrap:wrap;width:80%;height:3rem;margin:0 auto
}
.modal{
 width:100%;height:100%;position:fixed;top:0;background:black;opacity:.7;z-index:-1
}
</style>
