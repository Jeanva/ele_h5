<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/tabbar.vue'
// import Header from './components/header.vue'
// import HeaderView from './components/headerView.vue'
import FooterView from './components/footerView.vue'

export default {
  name: 'App',
  data(){
    return {selected:'tab-container1'}
  },
  components:{
    Tabbar,
    // Header
    // HeaderView,
    FooterView
  },
  beforeCreate (){
    // this.$router.push('/');
  },
 
  
}
</script>

<style>
*{margin:0;padding:0}
body{background: #f5f5f5;}
a{ text-decoration: none; color:#666;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* font-size:36px; */
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
