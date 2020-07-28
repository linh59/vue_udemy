<template>
 <div>
   <carousel></carousel>
    <server-status v-for="server in 5" v-bind:key="server"></server-status>
 </div>
</template>

<script>
  import Carousel from './Carousel.vue'
  import ServerStatus from './ServerStatus.vue'

  export default {
    name: 'HelloWorld',
    components: {
      'carousel': Carousel,
      'server-status': ServerStatus
    }
  }
</script>


