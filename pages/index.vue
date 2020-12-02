<template>
<FormulateForm
  class="container"
  v-model="formValues"
>
  <h2 class="form-title">Hoe kunnen wij u bereiken?</h2>
  <div class="double-wide">
    <div class="voornaam">
  <FormulateInput
    type="text"
    name="Voornaam"
    label="Voornaam"
    placeholder="Voornaam"
    error-behavior="live"
  />
    </div>
    <div class="achternaam">
  <FormulateInput
    type="text"
    name="Achternaam"
    label="Achternaam"
    placeholder="Achternaam"
    error-behavior="live"
  />
  <div class="container">
    <div>
    <img src="" alt="logo"/>
    </div>
    <div>
      <FormulateInput
        type="button"
        label="Terug naar vorig scherm"
      />
      <p class="title">Kapsalon Kapper</p>
    </div>
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

</FormulateForm>
</template>

<script>
export default {
  plugins: [
    '~/plugins/vue-formulate',
  ]
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
    width: 100%;
  }
}
.voornaam {
  margin-right: 5px;
  width: 50%;
}
.achternaam {
  margin-left: 5px;
  width: 50%;
}
</style>
