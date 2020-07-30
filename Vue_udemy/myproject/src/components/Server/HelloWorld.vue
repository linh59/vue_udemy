<template>
 <div>
   <carousel></carousel>
   <div class="row">
      <div class="col">
       <h3>Parent</h3>
       <button @click="changeName"> Change name</button>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <hr>
     </div>
   </div>
    <div class="row">
     <div class="col">
       <button @click="selectedComponent = 'user-detail'" class="btn btn-primary">Detail</button>
       <button @click="selectedComponent = 'user-edit'" class="btn btn-primary">Edit</button>
       <p>{{ selectedComponent }}</p>
     </div>
   </div>
    <div class="row">
      <div class="col">
        <!-- <quote>
           <h2 slot="title" class="quote">Quote:</h2>
           <p slot="content"> {{ quote }}</p>
        </quote> -->
          <keep-alive>
            <component :is="selectedComponent">
              <p>Default</p>
            </component>
          </keep-alive>
          
      </div>
    </div>  
 </div>
</template>

<script>
  import Carousel from './Carousel.vue'
  import UserDetail from './UserDetail.vue'
  import UserEdit from './UserEdit.vue'

  export default {
    name: 'HelloWorld',
    data: function(){
      return {
        name: 'Linh',
        age: 2,
        quote: 'My quote',
        selectedComponent: 'user-detail'
      }
    },
    components: {
      'carousel': Carousel,
      'user-detail': UserDetail,
      'user-edit': UserEdit,
    },
    methods: {
      changeName() {
        this.name = "Lele"
      },
      resetName() {
        this.name = "LyLy";
      }
    },
    created() {

    }
  }
</script>


