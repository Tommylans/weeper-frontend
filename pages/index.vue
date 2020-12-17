<template>
  <div class="container-navigatie">
    <!--<AlgemeneNavigatie/>-->
    <div class="container-index">
      <div class="winkelwagen-container" v-if="step <= 3 && winkelwagenOpened">
        <Winkelwagen/>
      </div>
      <div class="container-options">
        <div class="treatment-container" v-if="step === 0">
          <TreatmentOverview/>
        </div>
        <div class="calendar-container" v-if="step === 2">
          <Calendar @selectDateTimeslot="selectDateTimeslot"/>
        </div>
        <div class="email-container" v-if="step === 3">
          <EmailVak/>
        </div>
        <div class="appointment-container" v-if="step === 4">
          <AppointmentConfirm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Winkelwagen from "@/components/Winkelwagen";
import AppointmentConfirm from "@/components/AppointmentConfirm";
import TreatmentOverview from "@/components/TreatmentOverview";
import EmailVak from "@/components/EmailVak";
import Calendar from "@/components/calendar/Calendar";
import AlgemeneNavigatie from "@/components/AlgemeneNavigatie";

export default {
  components: {AlgemeneNavigatie, Calendar, EmailVak, TreatmentOverview, AppointmentConfirm, Winkelwagen},
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
  .container-index {
    width: 100%;
    height: 100vh;

    .winkelwagen-container {
      position: fixed;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      height: 100%;
      padding: 10px;

      @include media('<=tablet') {
        left: 0;
      }

      @include media('>tablet') {
        width: 22vw;
        min-width: 20rem;
        max-width: 25rem;
      }
    }

    .container-options {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
    }
  }
}

</style>
