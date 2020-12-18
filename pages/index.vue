<template>
  <div class="container-navigatie">
    <!--<AlgemeneNavigatie/>-->
    <div class="container-index">
      <div class="bestel-container">
        <BestelNavigation/>
      </div>
      <div class="container-options">
        <div class="treatment-container" v-if="step === 0">
          <TreatmentOverview/>
        </div>
        <div class="calendar-container" v-if="step === 2">
          <Calendar @selectDateTimeslot="selectDateTimeslot"/>
        </div>
        <div class="contact-container" v-if="step === 3">
          <Contact/>
        </div>
        <div class="appointment-container" v-if="step === 4">
          <AppointmentConfirm/>
        </div>
      </div>
      <div class="winkelwagen-container" v-if="step <= 3 && winkelwagenOpened">
        <Winkelwagen/>
      </div>
    </div>
  </div>
</template>

<script>

import Winkelwagen from "@/components/Winkelwagen";
import AppointmentConfirm from "@/components/AppointmentConfirm";
import TreatmentOverview from "@/components/TreatmentOverview";
import Contact from "@/components/Contact";
import Calendar from "@/components/calendar/Calendar";
import AlgemeneNavigatie from "@/components/AlgemeneNavigatie";
import BestelNavigation from "@/components/BestelNavigation";

export default {
  components: {
    BestelNavigation, AlgemeneNavigatie, Calendar, Contact, TreatmentOverview, AppointmentConfirm, Winkelwagen
  },
  computed: {
    step() {
      return this.$store.state.winkelwagen.step
    },
    winkelwagenOpened() {
      return this.$store.state.winkelwagen.winkelwagenOpened
    }
  },
  methods: {
    selectDateTimeslot(datetime) {
      console.log(datetime);
      this.$store.commit('winkelwagen/setDateTime', datetime)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/include-media";

.container-navigatie {
  min-height: 100vh;
  .container-index {
    width: 100%;
    min-height: 100%;

    @include media('>tablet') {
      display: grid;

      grid-template-columns: 75% auto;

      grid-template-rows: auto;

      grid-template-areas:
        "bestel winkelwagen"
        "options winkelwagen";
    }

    .bestel-container {
      grid-area: bestel;
    }

    .container-options {
      grid-area: options;

      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .treatment-container {
        width: 65%;
        max-height: 80vh;

        @include media('<=1500px') {
          width: 85%;
        }

        @include media('<=tablet') {
          width: 100%;
        }
      }

      .calendar-container {
        width: 30%;
        min-width: 320px;
        max-height: 80vh;

        @include media('<=1500px') {
          width: 60%;
        }

        @include media('<=tablet') {
          width: 100%;
        }
      }

      .contact-container {
        width: 50%;
        min-width: 320px;
        max-height: 80vh;

        @include media('<=1500px') {
          width: 70%;
        }

        @include media('<=tablet') {
          width: 100%;
        }
      }
    }

    .winkelwagen-container {
      grid-area: winkelwagen;
      height: 100%;
      width: 100%;

      padding: 0.5rem;

      @include media('<=tablet') {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      @include media('>tablet') {
        min-width: 20rem;
        max-width: 25rem;
      }
    }
  }
}

</style>
