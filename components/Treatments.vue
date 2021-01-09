<template>
  <div class="treatments-block">
    <button class="delete-button" @click="deletefromWinkelwagen" role=button :aria-label="`verwijder behandeling ${treatment.name}`">
      <DeleteIcon class="delete-icon" v-if="step === 0"/>
      <ListIcon class="list-icon" v-if="step > 0"/>
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
  computed: {
    step() {
      return this.$store.state.winkelwagen.step;
    }
  },
  methods: {
    deletefromWinkelwagen() {
      this.$store.commit('winkelwagen/removeTreatmentChoice', this.treatment);
    }
  }
}
</script>

<style lang="scss" scoped>
.delete-button {
  background: none;
  border: none;
  margin-right: 0.5em;

  .delete-icon {
    width: 1.2em;
    height: 1.2em;
    cursor: pointer;
  }

  .list-icon {
    width: 0.5em;
    height: 0.5em;
  }
}

</style>
