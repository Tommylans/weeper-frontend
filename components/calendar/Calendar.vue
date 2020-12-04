<template>
  <div class="agenda-card">
    <div class="agenda-header">
      <div class="pijl-container">
        <button v-show="!isCurrentWeek" class="pijltje-button" @click="switchWeek(-1)">
          <Pijltje class="pijltje left"/>
        </button>
      </div>
      <div class="month">
        <span>{{currentMonthName}}</span>
      </div>
      <div class="pijl-container">
        <button class="pijltje-button" @click="switchWeek(1)">
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
    <div class="time-slots-container">
      <ul v-if="timeslots.length > 0" class="time-slots-list">
        <TimeSlotItem v-for="timeslot in timeslots"
                      :timeslot="timeslot"
                      :key="timeslot.id"
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
    },
    switchWeek(amount) {
      this.selectedDate = this.selectedDate.add(amount, 'week')
    },
    isSelectedDate(date) {
      return this.selectedDate.isSame(date, "date")
    },
    selectTimeslot(timeslot) {
      this.selectedTimeslot = timeslot;
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
    }
  },
  data() {
    return {
      selectedDate: this.$dayjs(),
      selectedTimeslot: null,
      timeslotsData: [
        // Dummy data
        {id: 1, dateTime: this.$dayjs().add(15, 'minute'), price: 15},
        {id: 2, dateTime: this.$dayjs().add(30, 'minute'), price: 15},
        {id: 3, dateTime: this.$dayjs().add(45, 'minute'), price: 15},

        {id: 4, dateTime: this.$dayjs().add(1, 'day').add(4, 'hour').add(15, 'minute'), price: 15},
        {id: 5, dateTime: this.$dayjs().add(1, 'day').add(4, 'hour').add(30, 'minute'), price: 15},
        {id: 6, dateTime: this.$dayjs().add(1, 'day').add(4, 'hour').add(45, 'minute'), price: 15},
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .agenda-card {
    height: 500px;
    border: solid #00000070 1pt;
    border-radius: 5px;

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
    }

    .selected-day {
      padding-bottom: 13px;
      width: 100%;
      display: flex;
      justify-content: center;
      font-weight: bold;
      border-bottom: solid #00000070 1px;
    }

    .time-slots-container {

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
