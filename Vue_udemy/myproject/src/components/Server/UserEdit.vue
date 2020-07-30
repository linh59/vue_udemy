<template>
 <div>
   <h3>Edit User</h3>
   <p>User Age: {{ myAge }}</p>
   <button @click="editAge"> Edit Age</button>
   <hr>
   <p>{{ counter }}</p>
   <button @click="counter++">Counter</button>
 </div>
</template>

<script>
export default {
  name: 'UserEdit',
  data: function() {
    return{
      counter: 0
    }
  },
  destroyed(){
    console.log("destroyed!")
  },
  deactivated() {
    console.log("deactivated!")
  },
  activated() {
    console.log("activated!")
  },
  methods: {
    editAge() {
      let myAge = this.myAge;
      myAge = 20;
      this.$emit('AgeReset', myAge);
    }
  },
  props:{
    myAge: {
      type: Number
    }
  }  
}
</script>


