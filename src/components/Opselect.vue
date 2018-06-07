<template>
      <div class="selectT">
        <div class="clickselect" >
          <input type="text" v-model="name" @blur="close1"  @touchend="close" readonly style="user-select:none;" class="input">
           <div :class="[show?'show':'hidden']" >
           	<div class="option" v-for="(item,index) in op.filter(item=>item.name!==name)" :key="item.id"  @click="showh(item)">{{item.name}}</div>
           </div>
        </div>
      </div>
</template>

<script>
export default {
	props: {
  	name:'',
    op:'',
  },
  data () {
    return {
      show:false,
    }
  },
  methods: {
    close(){
      if(this.show){
        this.show = false;
      }else{
        this.show = true;
      }
    },
    close1(){
      this.show = false;
    }, 
    showh(a){     
    	this.$emit('showh',a)

    }
  },
  mounted(){
    // document.querySelector('#app').addEventListener('touchend', (e)=> {
    //   // console.log(e.target.className)
    //         if(e.target.className !== 'option') {  
    //           if(this.show){
    //     this.show = false;
    //   }else{
    //     this.show = true;
    //   }
    //         }  
    //     });  
  }
  // watch:{
        // "name": function(newVal, oldVal){
        //   if()
        // // console.log('new: %s, old: %s', newVal, oldVal)
        // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped >
input{
  border:none;
  font-size:0.3rem;
  width:70%;
  color:transparent;
  text-shadow:0 0 0 #1fb5ad;
  outline:none;
  background:#f7f7f7;
}
.selectT{
  display: flex;
  justify-content: center;
  align-items: center;
	

}
.clickselect{
	  width: 100%;
	  height: 1rem;
	  color: #1fb5ad;
	  position: relative;
	  font-size: 0.3rem;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	
	}
  .clickselect::after{
	position: absolute;
	content: '';
	top:0;
	bottom:0;
	margin:auto;
	right:0.1rem;
	 width: 0;
    height: 0;
    border-left: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    border-top: 0.1rem solid #1fb5ad;
}

.hidden{
  display: none;
 /* position: absolute;
  top:1rem;
  left:0;
  width: 100%;
  height: 1rem;
  background: white;
  border:1px solid gainsboro;
  border-radius: 5px;*/
}
.show{
	 position: absolute;
  top:1rem;
  left:0;
  width: 100%;
  /*height: 1rem;*/
  background: white;
  border:1px solid gainsboro;
  border-radius: 5px;
  z-index:100;
}
.option{
	color: black;
	border-bottom: 1px solid gainsboro;
	padding:0.1rem;
  text-align:center;
}
.option:last-child{
	border-bottom: none;
}
</style>
