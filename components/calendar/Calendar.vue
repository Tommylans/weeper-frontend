<template>
  <div class="agenda-card card shadow">
    <div class="card soft-shadow">
      <div class="agenda-header">
        <div class="pijl-container">
          <button v-show="!isCurrentWeek" class="pijltje-button" aria-label="Vorige week" @click="switchWeek(-1)">
            <Pijltje class="pijltje left"/>
          </button>
        </div>
        <div class="month">
          <span tabindex="0">{{currentMonthName}}</span>
        </div>
        <div class="pijl-container">
          <button class="pijltje-button" aria-label="Volgende week" @click="switchWeek(1)">
            <Pijltje class="pijltje"/>
          </button>
        </div>
      </div>
      <div class="days">
        <CalendarDay v-for="date in dateOptions"
                     :date="date"
                     :selected="isSelectedDate(date)"
                     :key="date.unix()"
                     @selectDate="selectDate"
        />
      </div>
      <div class="selected-day">
        <span>{{selectedDayName}}</span>
      </div>
    </div>
    <div class="time-slots-container">
      <ul v-if="timeslots.length > 0" class="time-slots-list">
        <TimeSlotItem v-for="timeslot in timeslots"
                      role="button"
                      aria-label=""
                      :timeslot="timeslot"
                      :key="timeslot.timeStamp"
                      :selected="timeslot === selectedTimeslot"
                      @selectTimeslot="selectTimeslot"
        />
      </ul>
      <div v-else class="no-time-slots">
        <span>Geen tijdsloten beschikbaar</span>
      </div>
    </div>
  </div>
</template>

<script>
import Pijltje from "../icons/Pijltje";
import CalendarDay from "./CalendarDay";
import TimeSlotItem from "./TimeSlotItem";

export default {
  name: "Calendar",
  components: {TimeSlotItem, CalendarDay, Pijltje},
  methods: {
    selectDate(date) {
      this.selectedDate = date;
      this.selectedTimeslot = null;
      this.changedDateTimeslot()
    },
    switchWeek(amount) {
      this.selectedDate = this.selectedDate.add(amount, 'week')
      this.selectedTimeslot = null;
      this.changedDateTimeslot()
    },
    isSelectedDate(date) {
      return this.selectedDate.isSame(date, "date")
    },
    selectTimeslot(timeslot) {
      this.selectedTimeslot = timeslot;
      this.changedDateTimeslot()
    },
    changedDateTimeslot() {
      if (!this.timeslots) {
        this.$emit('selectDateTimeslot', null)
        return;
      }
      this.$emit('selectDateTimeslot', this.selectedTimeslot)
    }
  },
  computed: {
    currentMonthName() {
      return this.$dayjs(this.selectedDate).startOf('isoWeek').format('MMMM YYYY')
    },
    selectedDayName() {
      return this.selectedDate.format('dddd')
    },
    dateOptions() {
      const output = []
      const startOfWeekDate = this.$dayjs(this.selectedDate).startOf('isoWeek');

      // Dit loopje maakt de dagen aan van maandag tot en met zondag
      for (let i = 0; i < 7; i++) {
        output.push(this.$dayjs(startOfWeekDate).add(i, 'day'))
      }
      return output;
    },
    isCurrentWeek() {
      return this.selectedDate.isSame(this.$dayjs(), "week")
    },
    timeslots() {
      return this.timeslotsData.filter(value => this.selectedDate.isSame(value.dateTime, 'date'));
    },
    treatmentChoices() {
      return this.$store.state.winkelwagen.treatmentChoices;
    },
  },
  async fetch() {
    const timeslots = await this.$axios.$post('/appointment/listAvailableSpots', this.treatmentChoices.map(treatment => treatment.id));
    this.timeslotsData = timeslots.map(timeslot => {
      timeslot.dateTime = this.$dayjs(timeslot.startDateTime);
      return timeslot
    })
  },
  data() {
    return {
      selectedDate: this.$dayjs(),
      selectedTimeslot: null,
      timeslotsData: []
    }
  },
}
</script>

<style lang="scss" scoped>
  .agenda-card {
    min-width: 300px;
    height: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .agenda-header {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px 15px 0;

      .month {
        display: flex;
        align-items: center;
        font-weight: 500;
      }

      .pijl-container {
        height: 25px;
        width: 25px;

        .pijltje-button {
          border: none;
          background-color: inherit;

          .pijltje {
            height: 100%;
            width: 100%;
            cursor: pointer;

            &.left {
              transform: rotate(180deg);
            }
          }
        }
      }
    }

    .days {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 20px;
    }

    .selected-day {
      padding-bottom: 13px;
      width: 100%;
      display: flex;
      justify-content: center;
      font-weight: bold;
    }

    .time-slots-container {
      padding: 0 10px;
      overflow-y: scroll;

      .time-slots-list {
        padding: 0;
        list-style: none;
      }

      .no-time-slots {
        width: 100%;
        opacity: 0.8;

        padding: 40px;
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
