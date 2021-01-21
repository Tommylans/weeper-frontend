<template>
  <div class="confirm-container">
    <div class="check-container">
      <CheckIcon class="check-icon"/>
    </div>
    <div class="confirmation-text">
      <span class="first-line">Bedankt voor het maken van uw afspraak!</span>
      <span class="second-line">Zodra de afspraak bij ons is doorgekomen, krijgt u een bevestiging per mail.</span>
    </div>

  </div>
</template>

<script>
import Treatment from "@/components/Treatment";

export default {
  name: "AppointmentConfirm",
  components: {Treatment},
  computed: {
    treatmentChoices() {
      return this.$store.state.winkelwagen.treatmentChoices;
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
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/include-media";

.confirm-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 7%;

  @include media('<=tablet') {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }

  .confirmation-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.2em;
  }

  .check-container {
    .check-icon {
      width: 10em;
      height: 10em;
    }
  }

  .appointment-details {

    .top-appointment-details {
      padding: 1.5rem 2rem;
    }

    .body-appointment-details {
      padding: 1.5rem 2rem;
      line-height: 2rem;


      .treatment-appointment-details {
        margin-bottom: 1em;
      }

      .date-appointment-details {
        display: flex;
        flex-direction: column;
        line-height: 1.3rem;
        font-weight: 500;
      }
    }
  }
}

</style>
