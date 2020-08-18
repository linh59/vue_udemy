<template>
  <div class="container">
    <header-bar-2></header-bar-2>
    <router-view name="header-top"></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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
.slide-enter-active{
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active{
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from{
    transform: translateY(-30px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0);
    opacity: 1;
  }
  to{
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
