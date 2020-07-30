<template>
  <div class="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
    <div class="card">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Quote',
  props: ['quotes']
}
</script>

<style scoped>

</style>

