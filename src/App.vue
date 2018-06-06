<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
  height: 100%;
  width: 100%;

}
#app .datepicker-range{
  font-size:.3rem;
  width: 100%;
  margin-top:.1rem;
}
#app .datepicker>input{
  font-size:.3rem;
  height:.8rem;
  text-align: center;
  border:1px solid gainsboro;
  border-radius:10px;
 }
#app .calendar{
  width:48%;
 }
 #app  .calendar-body{
  width: 100%;
 }
#app .datepicker__button-cancel, #app .datepicker__button-select{
  font-size: .3rem;
  padding:.1rem .2rem;
  border:1px solid gainsboro;
  border-radius:5px;
  
}
#app .datepicker__button-select{
  background:#1fb5ad;
  color:white;
}
#app .datepicker__buttons{
  padding-bottom:.1rem;
}

</style>
