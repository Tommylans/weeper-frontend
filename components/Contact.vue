<template>
  <div class="container card shadow">
    <FormulateForm
      class="form-container"
      v-model="contactDetails"
    >
      <h2 class="form-title">Hoe kunnen wij u bereiken?</h2>
      <div class="name-inputs">
        <FormulateInput
          class="voornaam"
          type="text"
          name="firstname"
          label="Voornaam"
          placeholder="Voornaam"
          validation="required|min:2"
        />
        <FormulateInput
          class="achternaam"
        type="text"
        name="lastname"
        label="Achternaam"
        placeholder="Achternaam"
        validation="required|min:2"
      />
    </div>
      <FormulateInput
        type="email"
        name="email"
        label="E-mailadres"
        placeholder="voorbeeld@example.nl"
        validation="required|email"
        class="full-width-input"
      />

      <FormulateInput
        type="tel"
        name="phonenumber"
        label="Telefoonnummer"
        placeholder="0612345678"
        validation="required"
        class="full-width-input"
      />

    </FormulateForm>
  </div>
</template>

<script>
export default {
  name: "Contact",
  computed: {
    contactDetails: {
      get: function () {
        return this.$store.state.winkelwagen.contact;
      },
      set: function (value) {
        this.$store.commit('winkelwagen/setContactDetails', value)
      }
    }
  }
}

</script>

<style lang="scss" scoped>

.container {
  padding: 2em;

  .form-title {
    margin-bottom: 2rem;
  }

  .form-container {

    > div {
      margin: 12px 0;
    }

    .formulate-input::v-deep {
      label {
        margin-left: 5px;
      }

      input {
        margin-top: 4px;
        padding: 10px;
        border-radius: 0.7rem;
        border: var(--primary-color) 1px solid;
      }
    }

    .name-inputs {
      display: flex;
      width: 100%;

      justify-content: space-between;

      .voornaam {
        width: 48%;
      }

      .achternaam {
        width: 48%;
      }

      .formulate-input::v-deep input {
        width: 100%;
      }
    }

    .full-width-input.formulate-input::v-deep input {
      width: 100%;
    }
  }
}
</style>
