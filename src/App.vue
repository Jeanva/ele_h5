<template>
  <div id="app">
    <router-view/>
    <!-- <Header></Header> -->
    <!-- <HeaderView></HeaderView> -->
    <!-- <Tabbar></Tabbar> -->
    <!-- <mt-navbar v-model="selected">
      <mt-tab-item id="tab-container1">选项一</mt-tab-item>
      <mt-tab-item id="tab-container2">选项二</mt-tab-item>
      <mt-tab-item id="tab-container3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
          <mt-tab-container-item id="tab-container1">
              <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
              <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
              <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
          </mt-tab-container-item>
      </mt-tab-container> -->
    <FooterView></FooterView>
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
