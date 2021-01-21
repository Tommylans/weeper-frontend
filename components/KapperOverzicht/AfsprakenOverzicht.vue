<template>
<div class="container-afspraken card shadow">
  <div class="top-afspraken card soft-shadow titels">
    <h2 class="titel-afspraken" tabindex="0">Afspraken {{ selectedDateName }}</h2>
    <div class="days">
      <CalendarDay v-for="date in dateOptions"
                   :date="date"
                   :selected="isSelectedDate(date)"
                   :key="date.unix()"
                   @selectDate="selectDate"
      />
    </div>
  </div>
  <div class="body-afspraken">
    <ul v-if="appointments.length > 0" class="afspraken-list">
      <AfspraakItem v-for="appointment in appointments"
                    :appointment="appointment"
                    :key="appointment.id"

      />
    </ul>
    <div v-else class="no-afspraken">
      <span>Geen afspraken ingepland</span>
    </div>
  </div>
</div>
</template>

<script>
import CalendarDay from "@/components/calendar/CalendarDay";

export default {
  name: "AfsprakenOverzicht",
  components: {CalendarDay},
  async fetch() {
    let existingAppointments = await this.$axios.$get('/appointment/listexisting');
    this.appointmentsData = existingAppointments.map(appointment => {
      appointment.dateTime = this.$dayjs(appointment.startDateTime).toDate();
      appointment.treatmentsLabel = appointment.treatments.map(treatment => treatment.name).join(" - ");

      return appointment
    })
  },
  methods: {
    selectDate(date) {
      this.selectedDate = date.toDate();
    },
    isSelectedDate(date) {
      return this.selectedDate.isSame(date, "date")
    },
  },
  computed: {
    selectedDateName() {
      return this.selectedDate.format('DD MMMM YYYY')
    },
    dateOptions() {
      const output = []

      // Dit loopje maakt de dagen aan van maandag tot en met zondag
      for (let i = 0; i < 7; i++) {
        output.push(this.$dayjs(this.currentDate).add(i, 'day'))
      }
      return output;
    },
    appointments() {
      return this.appointmentsData.filter(value => this.selectedDate.isSame(value.dateTime, 'date'));
    },
    selectedDate: {
      set(newDate) {
        this.selectedDateDate = newDate
      },
      get() {
        return this.$dayjs(this.selectedDateDate)
      }
    },
    currentDate: {
      set(newDate) {
        this.currentDateDate = newDate
      },
      get() {
        return this.$dayjs(this.currentDateDate)
      }
    }
  },
  data () {
    return {
      selectedDateDate: this.$dayjs().toDate(),
      currentDateDate: this.$dayjs().startOf("isoWeek").toDate(),
      appointmentsData: []
    }
  },
}
</script>

<style lang="scss" scoped>
.container-afspraken {
  overflow: hidden;
  display: flex;
  flex-direction: column;


  .top-afspraken {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1.5rem;

    .titel-afspraken {
      font-size: 1.5em;
    }

    .days {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .body-afspraken {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.8rem;

    .afspraken-list{
      list-style: none;
      padding: 0;
    }

    .no-afspraken{
      width: 100%;
      opacity: 0.8;
      padding: 40px;
      display: flex;
      justify-content: center;
    }

  }
}

</style>
