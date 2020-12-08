<template>
  <div class="date-block">
    <span class="day">{{shortDayName}}</span>
    <button class="day-number"
            :class="{today: isToday, selected: selected, 'no-time-slots': isPast}"
            @click="click">{{dayNumber}}</button>
  </div>
</template>

<script>

export default {
  name: "CalendarDay",
  props: {
    date: Object,
    selected: Boolean
  },
  methods: {
    click() {
      this.$emit('selectDate', this.date)
    }
  },
  computed: {
    isPast() {
      return !this.isToday && this.date.isBefore(this.$dayjs())
    },
    isToday() {
      return this.date.isToday();
    },
    dayNumber() {
      return this.date.format('DD')
    },
    shortDayName() {
      return this.date.format('dd').toUpperCase()
    }
  },
}
</script>

<style lang="scss" scoped>
  .date-block {
    padding: 10px;
    display: flex;
    flex-direction: column;

    .day {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }

    .day-number {
      border-radius: 100%;
      height: 2em;
      width: 2em;
      border: none;
      background-color: transparent;

      transition: background-color 100ms;

      &:hover:not([disabled]):not(.selected) {
        background-color: var(--primary-color-hover);
        cursor: pointer;
      }

      &.today {
        border: #cacaca solid 1px;
      }

      &.selected {
        background-color: var(--primary-color);
        color: white;
      }

      &.no-time-slots {
        opacity: 0.5;
      }
    }
  }
</style>
