<template>
    <div class="wflex">
        <router-view ></router-view>
		<bottom id="bottom"></bottom>
    </div>
</template>
<script>
    import bottom from './bottom.vue';
    export default {
        data(){
            return {
            }
        },
        components:{
            bottom
        },
    }
</script>
<style>
.wflex{
   /* display: flex;
    flex-direction: column;*/
    height: 100%;
    width:100%;
}
#bottom{
    position:fixed;bottom:0;z-index:100
}
</style>