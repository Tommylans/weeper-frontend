<template>
  <div class="container">
    <div class="winkelmand">
      <div class="top-winkelmand">
        <h2 v-if="treatmentChoices.length !== 1">{{treatmentChoices.length}} Behandelingen</h2>
        <h2 v-if="treatmentChoices.length === 1">{{treatmentChoices.length}} Behandeling</h2>
      </div>
      <div class="body-winkelmand">
        <Treatments class="gekozen-behandeling" v-for="treatment in treatmentChoices"
                    :treatment="treatment"
        />
        <span class="datum-tijd" v-if="dateTime !== null"> {{ timeFormatted }} uur</span>
        <span class="tijd-datum" v-if="dateTime !== null"> {{ dateTimeFormatted }} </span>
      </div>
      <div class="bottom-winkelmand">
        <p class="tijdsduur">0 min</p>
        <button class="next-page" @click="changeStep" :disabled="isDisabled">Ga door</button>
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
    contact(){
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
        console.log(value);
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Poppins:wght@200;300&family=Quicksand:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400&display=swap');
:root{
  --text-one:'Montserrat', sans-serif;
  --text-two:'Poppins', sans-serif;
  --text-three:'Quicksand', sans-serif;
  --text-four: 'Lato', sans-serif;
  --text-five:'Roboto', sans-serif;
}

.winkelmand {
  height: auto;
  width: 20em;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: #F4F6F6;
}

.top-winkelmand{
  width:100%;
  height:auto;
  color:var(--primary-color);
  padding: 0.5em;
  font-family: var(--text-one);
}

.body-winkelmand{
  height:auto;
  display:flex;
  flex-direction: column;
  padding:0.5em;
  background: #F4F6F6;
}

.datum-tijd{
  margin-top: 0.5em;
}

.bottom-winkelmand{
  width:100%;
  height:auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5em;
  background: var(--primary-color);
  color: #F4F6F6;
}

.bottom-winkelmand .tijdsduur{
  font-family: var(--text-two);
}

.bottom-winkelmand .next-page{
  text-decoration: none;
  color:#F4F6F6;
  border:none;
  height:2em;
  width:35%;
  font-family:var(--text-two);
  background:var(--secondary-color);
  display:flex;
  justify-content: center;
  align-items: center;
}

.next-page:disabled{
  background: #EAEDED;
  color: #A3A3A3;
}

.bottom-winkelmand .next-page:hover{
  border: 1px solid var(--primary-color);
}

</style>
