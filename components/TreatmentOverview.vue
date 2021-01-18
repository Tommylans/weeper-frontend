<template>
  <div class="containerbehandelingen card shadow">
    <div class="top-behandeling card soft-shadow titels">
      <h2 class="titel-behandeling" tabindex="0">Kies uw behandeling</h2>
    </div>

    <div class="body-behandeling">
      <div class="container-behandeling" v-for="treatment in treatments">
        <div class="behandeling-left">
          <div class="left-top">
            <h3 class="naam-behandeling">{{ treatment.name }} </h3>
          </div>

          <div class="left-bottom">
            <div class="behandeling-prijs">
              <p>€{{ treatment.price }},-</p>
            </div>

            <span>&nbsp; - &nbsp;</span>

            <div class="behandeling-tijd">
              <p>{{ treatment.minuteDuration }} min</p>
            </div>
          </div>

        </div>

        <div class="behandeling-right button">
          <button class="toevoegen" @click="addToWinkelwagen(treatment)" role="button" :aria-label="`${treatment.name} € ${treatment.price},- ${treatment.duration} min toevoegen`">
            Toevoegen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "TreatmentOverview",
  data() {
    return {
      treatments: []
    }
  },
  async fetch() {
    this.treatments = await this.$axios.$get('treatment/list');
  },
  methods: {
    addToWinkelwagen(treatment) {
      if(this.treatmentChoices.length >= 6) {
        Swal.fire({
          title: 'Error!',
          text: 'U kan niet meer behandelingen toevoegen',
          icon: 'error',
        });
        return
      }
      this.$store.commit('winkelwagen/addTreatmentChoice', treatment);
    }
  },
  computed: {
    treatmentChoices() {
      return this.$store.state.winkelwagen.treatmentChoices;
    },
  },
}
</script>

<style scoped>
.containerbehandelingen{
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: inherit;
}

.top-behandeling {
  padding: 1.5rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.top-behandeling .titel-behandeling {
  font-size: 1.5em;
  color:#4E5050;
}

.body-behandeling {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0.7rem 0;
  overflow-y: scroll;
}

.container-behandeling {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5em;
  border-radius: .7em;
  background: #00000010;
}

.behandeling-left {
  display: flex;
  flex-direction: column;
  padding: 0.5em;
}

.behandeling-left .naam-behandeling {
  font-weight: 400;
}

.behandeling-left .left-bottom {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.behandeling-left .left-bottom p {
  font-weight: 300;
}

.behandeling-left .left-bottom span {
  font-weight: 500;
}

.behandeling-right {
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: center;
  border-radius: 0 0.7em 0.7em 0;
}

.behandeling-right:hover {
  background: #c97757;
}

.behandeling-right .toevoegen {
  text-decoration: none;
  width: 100%;
  height:100%;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: none;
  display: flex;
  cursor: pointer;
  background: none;
}

</style>
