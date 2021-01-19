<template>
  <li tabindex="0" class="afspraak">
    <span class="tijd-afspraak">{{ time }} uur</span>
    <span class="naam-afspraak">{{ name }}</span>
    <span class="behandeling-afspraak">{{ behandeling }}</span>
  </li>
</template>

<script>
export default {
  name: "AfspraakItem",
  props: {
    appointment: Object,
  },
  computed: {
    time() {
      return this.appointment.dateTime.format('HH:mm')
    },
    name() {
      return this.appointment.contactDetails.firstname
    },
    behandeling() {
      return this.appointment.treatmentsLabel
    }
  }
}
</script>

<style lang="scss" scoped>

li {
  display: flex;
  border-radius: 0.7rem;
  background: #00000010;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-bottom: 0.5em;

  .tijd-afspraak {
    width: 33%;
  }

  .naam-afspraak {
    width: 33%;
    text-align: center;
  }

  .behandeling-afspraak {
    width: 33%;
    text-align: right;
  }
}

</style>
