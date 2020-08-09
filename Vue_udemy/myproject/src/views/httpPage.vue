<template>
 <div class="row">
     <div class="col-12">
        <h1>HTTP</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="">Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <input type="text" class="form-control" v-model="node">
        <button class="btn btn-primary" @click="fetchData">GEt data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="(user,index) in users" v-bind:key="index">
            {{user.username}} - {{user.email}}
          </li>
        </ul>
     </div>
  </div>
</template>

<script>

  export default {
    name: 'formPage',
    data: function() {
      return {
       user: {
         username: '',
         email: ''
       },
       users: [],
       resource: {},
       node: 'data'
      }
    },
    methods: {
      submit() {
        // this.$http.post('data.json', this.user)
        //   .then(response => {
        //     console.log(response)
        //   }, error => {
        //     console.log(error);
        //   });
        //this.resource.save({}, this.user);
        this.resource.saveAlt(this.user);
      },
      fetchData() {
        //  this.$http.get('data.json')
        //  .then(response => {
        //   return response.json();
        //  })
        //  .then(data => {
        //    const resultArray = [];
        //    for (let key in data) {
        //      resultArray.push(data[key]);
        //    }
        //    this.users = resultArray;
        //  });
        this.resource.getData({node: this.node})
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
          });
       }
    },
    components: {

    },
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET'}
      }
      this.resource = this.$resource('{node}/{another}.json', {}, customActions);
    }
  }
</script>

<style scoped>
  
</style>

