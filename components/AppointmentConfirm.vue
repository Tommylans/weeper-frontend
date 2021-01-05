<template>
<div class="container">
  <div class="confirm-container">
    <div class="check-container">
      <font-awesome-icon :icon="['fas','check-double']" class="check-icon"/>
    </div>
    <div class="confirmation-text">
      <span class="first-line">Bedankt voor het maken van uw afspraak!</span>
      <span class="second-line">Zodra de afspraak bij ons is doorgekomen, krijgt u een bevestiging per mail.</span>
    </div>
    <div class="appointment-details">
      <div class="chosen-treatments">
        <Treatments v-for="treatment in treatmentChoices"
                    :key="treatment.id"
                    :treatment="treatment"
        />
      </div>
      <!--<div class="chosen-hairdresser">

      </div>-->
      <div class="date-time">
        <span class="datum-tijd" v-if="dateTime !== null"> {{ timeFormatted }} uur</span>
        <span class="datum-tijd" v-if="dateTime !== null"> {{ dateTimeFormatted }} </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Treatments from "@/components/Treatments";

export default {
  name: "AppointmentConfirm",
  components: {Treatments},
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

<style scoped>

.confirm-container{
  width:100%;
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.check-container .check-icon{
  font-size: 20em;
  color: var(--third-color);
}

.confirmation-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.appointment-details{
  display:flex;
  flex-direction: row;
  width:100%;
  justify-content: space-around;
}

.appointment-details .chosen-treatments{
  display: flex;
  flex-direction: column;
  background: #F4F6F6;
  color: var(--primary-color);
  padding: 1em;
  border-bottom: 1px solid var(--primary-color);
}

.appointment-details .chosen-hairdresser{
  width:10em;
  height:10em;
  border: black 1px solid;
  border-radius: 100px;
}

.appointment-details .date-time{
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F4F6F6;
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}

</style>
