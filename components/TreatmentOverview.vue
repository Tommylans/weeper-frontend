<template>
  <div class="container">
    <div class="top-behandeling">
      <h2 class="titel-behandeling">Kies uw behandeling</h2>
    </div>

    <div class="body-behandeling">
      <div class="container-behandeling" v-for="treatment in treatments">
        <div class="behandeling-left">
          <div class="left-top">
            <h3 class="naam-behandeling">{{treatment.name}}</h3>
          </div>

          <div class="left-bottom">
            <div class="behandeling-prijs">
              <p>€{{treatment.price}},-</p>
            </div>

            <div class="behandeling-tijd">
              <p>{{treatment.duration}} min</p>
            </div>
          </div>

        </div>

        <div class="behandeling-right">
          <button class="toevoegen" @click="addToWinkelwagen(treatment)">
            Toevoegen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"TreatmentOverview",
  methods: {
    addToWinkelwagen(treatment) {
      this.$store.commit('winkelwagen/addTreatmentChoice', treatment);
    }
  },
  props: {
    treatments: { //dummy
      type: Array,
      default: () => [
        {price: 15, duration: 45, name: 'Knippen - Wassen - Drogen'},
        {price: 45, duration: 15, name: 'Knippen - Wassen - Drogen'},
        {price: 30, duration: 30, name: 'Knippen - Wassen - Drogen'},
        {price: 100, duration: 80, name: 'Knippen - Wassen - Drogen'},
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Poppins:wght@200;300&family=Quicksand:wght@300;400;500&display=swap%27');
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400&display=swap%27');
:root{
  --text-one:'Montserrat', sans-serif;
  --text-two:'Poppins', sans-serif;
  --text-three:'Quicksand', sans-serif;
  --text-four: 'Lato', sans-serif;
  --text-five:'Roboto', sans-serif;
}

.top-behandeling {
  height: auto;
  background: var(--primary-color);
  width: 50em;
  padding: 0.5em;
  display: flex;
  align-items: flex-start;
}

.top-behandeling .titel-behandeling{
  font-size: 1.5em;
  font-family: var(--text-one);
}

.body-behandeling{
  width: 50em;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #F4F6F6;
}

.container-behandeling{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em;
  border-bottom: var(--secondary-color) 1px solid;
}

.behandeling-left{
  display: flex;
  flex-direction: column;

}
.behandeling-left .naam-behandeling {
  font-family: var(--text-five);
  font-weight: 400;
}
.behandeling-left .left-bottom{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.behandeling-left .left-bottom p{
  font-family: var(--text-five);
  font-weight: 300;
}
.behandeling-right{
  display: flex;
  align-items: center;
}
.behandeling-right .toevoegen{
  border: none;
  height: 90%;
  font-family: var(--text-two);
  color: white;
  background: var(--secondary-color);
}


</style>
