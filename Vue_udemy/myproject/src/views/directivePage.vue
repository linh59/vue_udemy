<template>
 <div class="row">
     <div class="col-12">
         <h1>Directive</h1>
         <p v-text="'Some text'"></p>
         <p v-highlight="'blue'">My directive</p>
     </div>
  </div>
</template>

<script>
  import Switch from '../components/Server/Switch';

  export default {
    name: 'formPage',
    data: function() {
      return {
        userData:{
          email: '',
          password: '',
          age: 20
        },
        measage:'A text message',
        sendMail: [],
        gender: 'Male',
        priorities: ['High','Medium','Low'],
        selectedPriority: 'Low',
        dataSwitch: true,
        isSubmitted: false
      }
    },
    methods: {
      submitted() {
        this.isSubmitted = true;
      }
    },
    components: {
      'switch-form': Switch
    }
  }
</script>

<style scoped>

</style>

