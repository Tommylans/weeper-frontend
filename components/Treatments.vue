<template>
  <div class="treatments-block">
    <span class="treatment">{{ treatment.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Treatments",
  props: {
    treatment: Object
  },
}
</script>

<style scoped>

</style>
