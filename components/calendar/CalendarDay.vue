<template>
    <div class="date-block day-number" tabindex="0"
            :class="{selected: selected, 'no-time-slots': isPast}"
            @click="click" @keyup.enter="click">
      <span class="day">{{shortDayName}}</span>
      <span>{{dayNumber}}</span>
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
    padding: 10px 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 0.7rem;
    text-align: center;

    &.day-number {
      width: 3rem;
      border: none;
      background-color: transparent;

      transition: background-color 100ms;

      &:hover:not([disabled]):not(.selected) {
        background-color: var(--primary-color-hover);
        cursor: pointer;
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
