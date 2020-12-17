<template>
  <div class="winkelmandcontainer">
    <div class="winkelmand card shadow">
      <div class="top-winkelmand card soft-shadow titels">
        <h2 v-if="treatmentChoices.length !== 1">{{ treatmentChoices.length }} Behandelingen</h2>
        <h2 v-else>{{ treatmentChoices.length }} Behandeling</h2>
      </div>
      <div class="body-winkelmand">
        <Treatments class="gekozen-behandeling" v-for="treatment in treatmentChoices"
                    :key="treatment.id"
                    :treatment="treatment"
        />
        <template v-if="dateTime !== null">
          <font-awesome-icon :icon="['fas','minus-square']" class="minus-icon"/>
          <span class="datum-tijd"> {{ timeFormatted }} uur</span>
          <span class="tijd-datum"> {{ dateTimeFormatted }}</span>
        </template>
      </div>
      <div class="bottom-winkelmand button">
        <button class="next-page" @click="changeStep" :disabled="isDisabled">Volgende stap</button>
      </div>
    </div>
  </div>
</template>

<script>
import Treatments from "@/components/Treatments";

export default {
  name: "Winkelwagen",
  components: {Treatments},
  computed: {
    treatmentChoices() {
      return this.$store.state.winkelwagen.treatmentChoices;
    },
    contact() {
      return this.$store.state.winkelwagen.contact;
    },
    dateTime() {
      return this.$store.state.winkelwagen.dateTime;
    },
    dateTimeFormatted() {
      if (this.dateTime == null) {
        return null;
      }
      return this.dateTime.dateTime.format('D MMMM YYYY');
    },
    timeFormatted() {
      if (this.dateTime == null) {
        return null;
      }
      return this.dateTime.dateTime.format('HH:mm');
    },
    step: {
      get: function () {
        return this.$store.state.winkelwagen.step;
      },
      set: function (value) {
        this.$store.commit('winkelwagen/setStep', value)
      }
    },
    isDisabled() {
      return false;
    }
  },
  methods: {
    changeStep() {
      this.step += 1;
    }
  }
}
</script>

<style scoped>

.winkelmand {
  height: 95vh;
  width: 20em;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  overflow: hidden;
}

.top-winkelmand {
  width: 100%;
  height: 7rem;
  display:flex;
  justify-content: center;
  align-items: center;
}

.body-winkelmand {
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
}

.datum-tijd {
  margin-top: 0.5em;
}

.bottom-winkelmand {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 .7rem .7rem;
}

.bottom-winkelmand .next-page {
  text-decoration: none;
  width: 100%;
  height:100%;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  font-weight: 500;
  border: none;
  display: flex;
  background: none;
}

.next-page:disabled {
}

.bottom-winkelmand .next-page:hover {
  cursor: pointer;
}

</style>
