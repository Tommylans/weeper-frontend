<template>
  <li tabindex="0" @click="selectTimeslot" @keyup.enter="selectTimeslot" :class="{selected: selected}">
    <span>{{time}} - {{endTime}}</span>
    <span>€ {{price}}</span>
  </li>
</template>

<script>
export default {
  name: "TimeSlotItem",
  props: {
    timeslot: Object,
    selected: Boolean
  },
  computed: {
    time() {
      return this.timeslot.dateTime.format('HH:mm')
    },
    endTime() {
      return this.$dayjs(this.timeslot.endDateTime).format('HH:mm')
    },
    price() {
      return this.timeslot.price.toFixed(2)
    }
  },
  methods: {
    selectTimeslot() {
      this.$emit('selectTimeslot', this.timeslot)
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    margin: 6px 0;
    padding: 8px;
    line-height: 30px;

    border-radius: 0.7rem;

    display: flex;
    justify-content: space-between;

    &.selected {
      background-color: #00000020;
    }

    &:hover:not(.selected) {
      background-color: #00000010;
      cursor: pointer;
    }
  }
</style>
