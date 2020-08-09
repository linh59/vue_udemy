<template>
 <div class="row">
     <div class="col-12">
         <h1 class="font-red">Animations</h1>
        <hr>
        <button class="btn- btn-primary mb-5" @click="show = !show">Show Alert</button>
        {{alertAnimation}}
        <select v-model="alertAnimation" class="form-control" name="" id="">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <!-- <transition name="fade">
          <div class="alert alert-info" v-if="show" role="alert">
            A simple primary alert—check it out!
          </div>
        </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show" role="alert">
            A simple primary alert—check it out!
          </div>
        </transition> -->
        <!-- <transition         
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__shakeX"
        >
          <div class="alert alert-info" v-if="show" role="alert">
            A simple primary alert—check it out!
          </div>
        </transition> -->
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show" role="alert">
            A simple primary alert—check it out!
          </div>
        </transition>
     </div>
  </div>
</template>

<script>
  import Switch from '../components/Server/Switch';

  export default {
    name: 'formPage',
    data: function() {
      return {
        show: true,
        alertAnimation: 'fade'
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>

<style scoped>
.font-red{
  color: red;
}
  .fade-enter{
    opacity: 0;
  }

  .fade-enter-active{
    transition: opacity 1s;
    
  }
  
  .fade-leave{
    opacity: 1;
  }

  .fade-leave-active{
    transform: opacity 1s;
    opacity: 0;
  }

  .slide-enter{
    opacity: 0;
  }

  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px)
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0)
    }
    to {
      transform: translateY(20px);
    }
  }
</style>

