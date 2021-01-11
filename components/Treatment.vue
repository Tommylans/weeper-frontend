<template>
  <div class="treatments-block">
    <button class="delete-button" v-if="step === 0" @click="deletefromWinkelwagen" :aria-label="`verwijder behandeling ${treatment.name}`">
      <DeleteIcon class="delete-icon"/>
    </button>
    <div class="container-list-icon" v-if="step > 0" >
      <ListIcon class="list-icon"/>
    </div>

    <span class="treatment">{{ treatment.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Treatment",
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
}

.container-list-icon {
  margin-right: 0.5em;

  .list-icon {
    width: 0.5em;
    height: 0.5em;
  }
}

</style>
