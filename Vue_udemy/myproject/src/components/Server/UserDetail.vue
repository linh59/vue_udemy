<template>
 <div>
    <h3>User Detail</h3>
    <div class="name">Name: {{ switchName() }}</div>
    <div class="age">Age: {{ myAge }}</div>   
    <div class="status">Status: {{ status }}</div>   
    <button @click="changeStatus"> Change status</button>
    <!-- <button @click="resetName"> Reset Name</button> -->
    <button @click="resetNameFn()"> Reset Name</button>
    <hr>
    <div>
      <div class="quote-title">
          <slot name="title"></slot>
      </div>
        <div class="quote-content">
          <slot name="content">The subtitle</slot>
      </div>
    </div>
 </div>
</template>

<script>

export default {
  name: 'ServerStatus',
  data: function(){
    return {
      status: 'Working'
    }
  },
  methods: {
    changeStatus() {
      this.status = "Worked"
    },
    switchName() {
      return this.myName;
    },
    resetName() {
      //should replicate the props data into a variable to avoid bug - Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
      let myName = this.myName;
      myName = 'Ly';
      this.$emit('nameWasReset', myName);
    }
  },
  created() {

    
  },
  props:{
    myName: {
      type: String,
    },
    resetNameFn: Function,
    myAge: Number
    // myName: {
    //   type: Object,
    //   default: function() {
    //     return {
    //       name: 'He'
    //     }
    //   }
    // },
  }
}
</script>


