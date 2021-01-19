<template>
  <div class="winkelwagen-container">
    <div class="winkelmand card shadow">
      <div class="body-winkelmand topcard">
        <div class="top-winkelmand card soft-shadow titels">
          <template v-if="step <= 2">
            <h2 v-if="treatmentChoices.length !== 1">{{ treatmentChoices.length }} Behandelingen</h2>
            <h2 v-else-if="treatmentChoices.length === 1">{{ treatmentChoices.length }} Behandeling</h2>

            <span>{{totalDurationLabel}}</span>
          </template>
          <h2 v-if="step === 3">Uw afspraak</h2>
        </div>

        <div class="behandelingen-vak">
          <div class="behandelingen-lijst ">
            <Treatment class="gekozen-behandeling" v-for="treatment in treatmentChoices"
                        :key="treatment.id"
                        :treatment="treatment"

            />
          </div>
        </div>
      </div>
      <div class="date-body-winkelmand">
        <div v-if="dateTime !== null" class="inner-body-winkelmand">
          <div class="date-container">
            <span class="datum-tijd"> {{ timeFormatted }} uur</span>
            <span class="tijd-datum"> {{ dateTimeFormatted }}</span>
          </div>
        </div>
      </div>
      <div class="bottom-winkelmand button">
        <button class="next-page" @click="changeStep" v-if="step <= 1">Volgende stap</button>
        <button class="next-page" @click="changeStep" v-if="step === 2">Bevestig afspraak</button>
        <button class="next-page" v-if="step === 3">Nog een afspraak maken</button>
        <button class="close-winkelmand" @click="closeWinkelmand">Sluiten</button>
      </div>
    </div>
  </div>
</template>

<script>
import Treatment from "@/components/Treatment";
import Swal from 'sweetalert2';

export default {
  name: "Winkelwagen",
  components: {Treatment},
  computed: {
    totalDurationLabel() {
      let totalMinutes = 0

      for (const treatment of this.treatmentChoices) {
        totalMinutes += treatment.minuteDuration
      }

      const duration = this.$dayjs.duration(totalMinutes, "minutes");
      const units = []

      if (duration.hours() > 0) {
        units.push(`${duration.hours()} uur`)
      }

      if (duration.minutes() > 0) {
        units.push(`${duration.minutes()} minuten`)
      }

      return units.join(' en ')
    },
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
  },
  methods: {
    changeStep() {
      this.$emit('changeStep')
    },
    closeWinkelmand() {
      this.$store.commit('winkelwagen/toggleWinkelwagen')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/include-media";

.winkelwagen-container {
  padding: 0.5em;

  .winkelmand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    padding: 0;
    overflow: hidden;
    height: 100%;

    .body-winkelmand {
      min-height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 1.2em;

      .top-winkelmand {
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .behandelingen-vak {
        height: 75%;
        padding: 0 0 0 1.5em;
        display: flex;
        flex-direction: row;
        align-items: center;

        .behandelingen-lijst {
          display: flex;
          flex-direction: column;

          .gekozen-behandeling {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .date-body-winkelmand {
      height: 28%;
      display: flex;
      align-items: center;

      .inner-body-winkelmand {
        display: flex;
        flex-direction: row;
        font-size: 1.2em;
        padding: 0.5em 3em;
      }

      .date-container {
        display: flex;
        flex-direction: column;
        font-weight: 500;
      }
    }

    .bottom-winkelmand {
      width: 100%;
      height: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 .7rem .7rem;

      .next-page {
        text-decoration: none;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 1.1em;
        font-weight: 500;
        border: none;
        display: flex;
        background: none;

        @include media('<=tablet') {
          display: none;
        }

        &:hover {
          cursor: pointer;
          background: #c97757;
        }
      }
    }

    .close-winkelmand {
      text-decoration: none;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-size: 1.1em;
      font-weight: 500;
      border: none;
      display: flex;
      background: none;
      cursor: pointer;

      @include media('>tablet') {
        display: none;
      }
    }
  }
}
</style>
