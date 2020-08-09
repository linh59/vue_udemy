<template>
  <div class="container">
    <header-bar-2></header-bar-2>
    <router-view name="header-top"></router-view>
    <router-view></router-view>
    <router-view name="header-bottom"></router-view>
  </div>
</template>

<script>
  import HeaderBar2 from './components/Shared/HeaderBar2'

  export default {
    components:{
      HeaderBar2
    },
    created() {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
