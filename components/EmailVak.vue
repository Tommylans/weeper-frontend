<template>
  <div>
    <FormulateForm
      v-model="contactDetails"
    >
      <div class="double-wide">
      <FormulateInput
        class="voornaam"
        type="text"
        name="firstname"
        label="Voornaam"
        placeholder="Voornaam"
        error-behavior="live"
      />
      <FormulateInput
        class="achternaam"
        type="text"
        name="lastname"
        label="Achternaam"
        placeholder="Achternaam"
        error-behavior="live"
      />
    </div>
      <FormulateInput
        type="email"
        name="email"
        label="E-mail adress"
        placeholder="voorbeeld@example.nl"
        validation="required|email"
      />

      <FormulateInput
        type="tel"
        name="phonenumber"
        label="Telefoonnummer"
        placeholder="0612345678"
        validation="required"
      />

    </FormulateForm>
  </div>
</template>

<script>
export default {
  name: "EmailVak",
  computed: {
    contactDetails: {
      get: function() {
        return this.$store.state.winkelwagen.contact;
      },
      set: function(value) {
        this.$store.commit('winkelwagen/setContactDetails', value)
      }
    }
  }
}

</script>

<style scoped>

</style>
