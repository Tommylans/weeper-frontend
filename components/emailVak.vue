<template>
  <div class="double-wide">
    <FormulateInput
      class="voornaam"
      type="text"
      name="Voornaam"
      label="Voornaam"
      placeholder="Voornaam"
      error-behavior="live"
    />
    <FormulateInput
      class="achternaam"
      type="text"
      name="Achternaam"
      label="Achternaam"
      placeholder="Achternaam"
      error-behavior="live"
    />
  </div>

  <FormulateInput
    type="email"
    name="Email"
    label="E-mail adress"
    placeholder="voorbeeld@example.nl"
    validation="required|email"
  />

  <FormulateInput
    type="tel"
    name="Nummer"
    label="Telefoon nummer"
    placeholder="06-12345678"
    validation="required"
  />
</template>

<script>
export default {
  name: "EmailVak",
}

</script>

<style scoped>

</style>
