<template>
  <div class="container">
    <div class="winkelwagen-container" v-if="step <= 3">
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
</template>

<script>

import Winkelwagen from "@/components/Winkelwagen";
import AppointmentConfirm from "@/components/AppointmentConfirm";
import TreatmentOverview from "@/components/TreatmentOverview";
import EmailVak from "@/components/EmailVak";
import Calendar from "@/components/calendar/Calendar";

export default {
  components: {Calendar, EmailVak, TreatmentOverview, AppointmentConfirm, Winkelwagen},
  computed: {
    step() {
      return this.$store.state.winkelwagen.step
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

<style scoped>
.container {
  width: 100%;
  height: auto;
}

.winkelwagen-container {
  position: fixed;
  right: 0;
}

.container-options {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.calendar-container {
  width: 23em;
}

</style>
