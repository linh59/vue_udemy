<template>
 <div>
    <p class="font-monospace">This is in monospace</p>
    <p class="text-muted">
      Muted text with a <a href="#" class="text-reset">reset link</a>.
    </p>
    <div class="status">Status: {{status}}</div>
    <hr>
    <button @click="changeStatus"> Change status</button>
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
    changeStatus(){
      this.status = "Worked"
    }
  }
}
</script>


