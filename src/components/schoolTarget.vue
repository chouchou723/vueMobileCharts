<template>
  <div class="hello">
    <div class="selectT selectA" >
        <div :class="['selectO',choose==1?'select':'']"  @click="chooseS(1)">周指标</div>
      <div :class="['selectP',choose==2?'select':'']"  @click="chooseS(2)">月指标</div>
    </div>
     <div class="selectT selectA" >
      <div class="selectB">
        <div class="selectC">
         <Opselect :name='name1' :op='op1'  key='totalsign'  @showh="showh" ></Opselect>
         </div>
        <div class="selectD">
         <Opselect :name='name2' :op='op2' key='totalsign1'  @showh="showh1" style="width:65%"></Opselect>
         </div>
      </div>
    </div>
    <div>
      <div v-for="item in ranklist" class="ranklist">
        
        <div style="margin-left:.2rem;font-size:.3rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-clamp:3;box-orient:vertical;max-height: 1.2rem;">{{item.name}}</div>
        <div class="rankL">
          <span :style="`width:${item.width*100/(item.target)>100?85:item.width*100/(item.target)}%;display:inline-block;background:${item.width<item.target?'#1fb5ad':'#e57959'};height:100% `"></span>
          <span :style="`position:absolute;top:0;left:0;z-index:-1;height:100%;width:0.05rem;width:${item.target*100/(item.width*2)>100?100:item.target*100/(item.width*2)}%;background:#bdb8b8;display:inline-block;`"></span>
          <span :style="`position:absolute;top:0;height:100%;width:0.05rem;background:black;left:${item.target*100/(item.width*2)>100?100:item.target*100/(item.width*2)}%;`"></span>
          <span :style="`position:absolute;bottom:-0.5rem;left:${(item.target*100/(item.width*2)-8)>100?84:item.target*100/(item.width*2)-8}%;font-size:.3rem;color:#e57959;width:1rem`">指标{{item.target}}</span>
          <span style="position:absolute;left:.2rem;height:100%;line-height:0.8rem;color:white;font-size:.3rem;">{{item.desc}}</span>
        </div>
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
     ranklist:[{no:1,img:'../../static/image/test.png',name:'中山公园体验馆飞飞飞飞废凤飞飞呃呃呃弃物',width:10,target:18,desc:'已完成10,(占比65%)'},
      {no:1,img:'../../static/image/test.png',name:'松江校区',width:32,target:15,desc:'已完成32,(占比165%)'},
      {no:1,img:'../../static/image/test.png',name:'闵行校区',width:22,target:25,desc:'已完成22,(占比85%)'},
      {no:1,img:'../../static/image/test.png',name:'八佰伴校区',width:12,target:35,desc:'已完成12,(占比35%)'},],

      choose:1,
      name1:'总签单数',
      name2:'已完成指标',
      op1:[{id:1,name:'总到访'},{id:2,name:'总邀约'},{id:3,name:'总签单数'}],
      op2:[{id:1,name:'未完成指标'},{id:2,name:'已完成指标'}],
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
    showh1(data){
      console.log(data)
      this.name2 = data.name
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
  .selectA{
    font-size:0.35rem;border-bottom:1px solid gainsboro;
  }
  .selectO{
 height:1rem;line-height:1rem;border-right:1px solid gainsboro;text-align:center;flex:auto;box-sizing:border-box;
}
.selectP{
  height:1rem;line-height:1rem;text-align:center;flex:auto;box-sizing:border-box;
}
.selectB{
  display:flex;justify-content:space-between;width:100%
}
.selectC{
   flex:0 0 50%;line-height:1rem;box-sizing:border-box;padding-left:23%
}
.selectD{
  flex:0 0 50%;line-height:1rem;box-sizing:border-box;
}
.ranklist{
  display:flex;font-size:0.35rem;align-items:center;height:1.4rem;justify-content: space-between;
}
.nameH{
   margin-left:.2rem;font-size:.3rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-clamp:3;box-orient:vertical
}
.rankL{
  flex:0 0 75%;border:1px solid gainsboro;height:.8rem;margin-right:.2rem;text-align:left;position:relative
}
</style>
