<template>
  <li tabindex="0" class="afspraak">
    <span class="tijd-afspraak"> {{ time }} uur</span>
    <span class="naam-afspraak"> {{ name }} </span>
    <span class="email-afspraak"> {{ mailadres }} </span>
    <span class="telefoon-afspraak"> {{ telefoon }} </span>
    <span class="behandeling-afspraak"> {{ behandeling }} </span>
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
      const startDateLabel = this.$dayjs(this.appointment.startDateTime).format('HH:mm');
      const endDateLabel = this.$dayjs(this.appointment.endDateTime).format('HH:mm');

      return `${startDateLabel} - ${endDateLabel}`
    },
    name() {
      return `${this.appointment.contactDetails.firstname} ${this.appointment.contactDetails.lastname}`
    },
    mailadres() {
      return this.appointment.contactDetails.email
    },
    telefoon() {
      return this.appointment.contactDetails.phoneNumber
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
    width: 20%;
  }

  .naam-afspraak {
    width: 20%;
    text-align: center;
  }

  .email-afspraak {
    width: 20%;
    text-align: center;
  }

  .telefoon-afspraak {
    width: 20%;
    text-align: center;
  }

  .behandeling-afspraak {
    width: 20%;
    text-align: right;
  }
}

</style>
