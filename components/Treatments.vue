<template>
  <div class="treatments-block">
    <button class="delete-button" @click="deletefromWinkelwagen">
      <DeleteIcon class="delete-icon"/>
    </button>
    <span class="treatment">{{ treatment.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Treatments",
  props: {
    treatment: Object
  },
  methods: {
    deletefromWinkelwagen() {
      this.$store.commit('winkelwagen/removeTreatmentChoice');
    }
  }
}
</script>

<style lang="scss" scoped>
  .delete-button {
    background: none;
    border: none;
    margin-right: 0.7em;

    .delete-icon {
      width: 1.2em;
      height: 1.2em;
    }
  }

</style>
