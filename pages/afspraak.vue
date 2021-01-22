<template>
  <div class="container-navigatie">
    <div class="container-index">
      <div class="left-container">
        <div class="bestel-container">
          <BestelNavigation/>
        </div>
        <NavigatieLinks class="navigatie-links" v-if="navigationOpened"/>
        <div class="container-options">
          <div class="page-title">
            <button class="terug-knop card button" v-if="step > 0 && step < 3" tabindex="0" @click="vorigeStap">Vorige
              stap
            </button>
            <span class="title">Kapsalon Kapper</span>
          </div>
            <div class="treatment-container" v-if="step === 0">
              <TreatmentOverview/>
            </div>
            <div class="calendar-container" v-if="step === 1">
              <Calendar class="inner-calendar-container" @selectDateTimeslot="selectDateTimeslot"/>
            </div>
            <div class="contact-container" v-if="step === 2">
              <Contact/>
            </div>
            <div class="appointment-container" v-if="step === 3">
              <AppointmentConfirm/>
            </div>
            <div class="bottom-container-options">
              <button class="next-page button" @click="changeStep" v-if="step <= 2">Volgende stap</button>
            </div>
          </div>
        </div>
        <div class="winkelwagen-container" v-if="step <= 3" :class="{'hide-winkelwagen':!winkelwagenOpened}">
          <Winkelwagen @changeStep="changeStep"/>
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
import BestelNavigation from "@/components/Navigatie/BestelNavigation";
import LoadingCheckIcon from "@/components/icons/LoadingCheckIcon";
import Swal from "sweetalert2";

export default {
  components: {
    BestelNavigation, AlgemeneNavigatie, Calendar, Contact, TreatmentOverview, AppointmentConfirm, Winkelwagen
  },
  computed: {
    treatmentChoices() {
      return this.$store.state.winkelwagen.treatmentChoices;
    },
    dateTime() {
      return this.$store.state.winkelwagen.dateTime;
    },
    contact() {
      return this.$store.state.winkelwagen.contact;
    },
    step: {
      get: function () {
        return this.$store.state.winkelwagen.step;
      },
      set: function (value) {
        this.$store.commit('winkelwagen/setStep', value)
      }
    },
    winkelwagenOpened() {
      return this.$store.state.winkelwagen.winkelwagenOpened
    },
    navigationOpened() {
      return this.$store.state.winkelwagen.navigationOpened
    }
  },
  methods: {
    selectDateTimeslot(datetime) {
      this.$store.commit('winkelwagen/setDateTime', datetime)
    },
    async changeStep() {
      console.log(this)
      if(this.treatmentChoices.length === 0) {
        Swal.fire({
          title: 'Error!',
          text: 'Voeg een behandeling toe om door de gaan naar de volgende stap.',
          icon: 'error'
        });
        return
      }
      if(this.dateTime === null && this.step === 1) {
        Swal.fire({
          title: 'Error!',
          text: 'Kies een datum en tijd om door te gaan naar de volgende stap.',
          icon: 'error'
        });
        return
      }
      if(Object.entries(this.contact).length < 4  && this.step === 2) {
        Swal.fire({
          title: 'Error!',
          text: 'Vul al uw gegevens in om door te gaan.',
          icon: 'error'
        });
        return
      } else if (this.step === 2) {
        await this.createAfspraak();
      }

      this.step += 1;
    },
    async createAfspraak() {
      return await this.$axios.$post('/appointment/create', {
        contactDetails: this.contact,
        dateTime: this.dateTime.dateTime.unix(),
        treatmentChoices: this.treatmentChoices.map(treatmentChoice => treatmentChoice.id),
      })
    },
    vorigeStap() {
      this.step -= 1;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/include-media";

.container-navigatie {
  min-height: 100vh;

  @include media('<=tablet') {
    min-height: 95vh;
  }

  .container-index {
    width: 100%;
    min-height: 100%;
    display: flex;

    .left-container {
      width: 75%;
      display: flex;
      flex-direction: column;

      @include media('<=tablet') {
        width: 100%;
      }

      .bestel-container {
        width: 100vw;
      }

      .navigatie-links {
        padding-left: 1.5rem;
      }

      .container-options {
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        @include media('<=tablet') {
          padding: 0.5rem 1.5rem;
        }

        .page-title {
          width: 85%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 1em;

          .terug-knop {
            border: none;
            height: 3rem;
            width: 7em;
            padding: 0.3em 0.6em;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            cursor: pointer;

            &:hover {
              background: #c97757;
            }
          }

          .title {
            font-size: 2em;
            font-weight: 500;
            padding-top: 1em;
          }

          @include media('<=tablet') {
            width: 100%;
          }
        }

        .treatment-container {
          width: 85%;
          max-height: 70vh;

          @include media('<=tablet') {
            width: 100%;
          }
        }

        .calendar-container {
          width: 85%;
          min-width: 320px;
          max-height: 70vh;

          @include media('<=tablet') {
            width: 100%;
          }

          .inner-calendar-container {
            max-width: 30em;

            @include media('<=tablet') {
              max-width: 100%;
            }
          }
        }

        .contact-container {
          width: 85%;
          min-width: 320px;
          max-height: 70vh;

          @include media('<=tablet') {
            width: 100%;
          }
        }

        .bottom-container-options {
          width: 85%;
          margin-top: 1em;
          display: flex;
          justify-content: flex-end;

          @include media('<=tablet') {
            width: 100%;
          }

          @include media('>tablet') {
            display: none;
          }

          .next-page {
            text-decoration: none;
            align-items: center;
            justify-content: center;
            font-size: 1.1em;
            font-weight: 500;
            border: none;
            display: flex;
            padding: 0.7rem;
            border-radius: 0.7rem;
          }
        }

        .appointment-container {
          width: 100%;
          height: 100%;
        }
      }
    }

    .winkelwagen-container {
      height: 100vh;
      width: 100%;

      @include media('<=tablet'){
        height: 92vh;
      }

      @include media('<=tablet') {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.5rem;

        &.hide-winkelwagen {
          display: none;
        }
      }

      @include media('>tablet') {
        min-width: 20rem;
        max-width: 25rem;
      }
    }
  }
}

</style>
