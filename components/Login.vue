<template>
  <div class="content-container" >
    <div id="content-desktop">
      <div class="grijs-vlak">
        <img src="@/assets/grijs-vlak.png" alt="plaatje" style="width: 100%; height: 100%";>
      </div>
      <div class="inlog-form">
        <FormulateForm
          name="login"
          @submit="setSomeErrors"
          v-model="formData"
          class="login-form"
        >
          <h1 class="form-title">Inloggen</h1>
          <FormulateInput
            name="email"
            label="Email"
            validation="required|email"
            class="text-vakken"
            placeholder="Voorbeeld@example.com"
          />
          <FormulateInput
            name="password"
            label="Wachtwoord"
            validation="required"
            class="text-vakken"
            placeholder="Wachtwoord"
            type="password"
          />
          <FormulateErrors />
          <div class="actions">
            <FormulateInput
              type="submit"
              label="inloggen"
            />
          </div>
          <nav class="wwvergeten">
            <a href="//" class="wwvergeten">Wachtwoord vergeten</a>
          </nav>
        </FormulateForm>
      </div>
    </div>
    <div id="content-mobile">
      <div class="inlog-form">
        <FormulateForm
          name="login"
          @submit="setSomeErrors"
          v-model="formData"
          class="login-form"
        >
          <h1 class="form-title">Inloggen</h1>
          <FormulateInput
            name="email"
            label="Email"
            validation="required|email"
            class="text-vakken"
            placeholder="Voorbeeld@example.com"
          />
          <FormulateInput
            name="password"
            label="Wachtwoord"
            validation="required"
            class="text-vakken"
            placeholder="Wachtwoord"
            type="password"
          />
          <FormulateErrors />
          <div class="actions">
            <FormulateInput
              type="submit"
              label="inloggen"
            />
          </div>
          <nav class="wwvergeten">
            <a href="//" class="wwvergeten">Wachtwoord vergeten</a>
          </nav>
        </FormulateForm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    setSomeErrors () {
      // do some processing...
      const errors = {
        fieldErrors: { username: 'Sorry, no such username exists!' },
        formErrors: ['Incorrect login, please try again.']
      }
      this.$formulate.handle(errors, 'login')
    }
  }
}
</script>

<style scoped>
.inlog-form::v-deep button {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin-top: 20px;
  background-color: darkgray;
  color: white;
  border: none;
}

.inlog-form::v-deep input {
  padding: 0.5rem 1rem;
  border-radius: 10px;
}
.actions {
  display: flex;
  margin-bottom: 3px;
}
.login-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.form-title {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
}
.inlog-form {
  display: flex;
  width: 45%;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.grijs-vlak {
  display: flex;
  width: 55%;
  height: 100vh;
}
.content-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
  height: 100vh;
}
.wwvergeten {
  border: none;
  background-color: white;
  color: blue;
  text-decoration: none;
}
.text-vakken {
  margin: 15px 0px 15px 0px;
}
#content-desktop {display: flex;}
#content-mobile {display: none;}

@media screen and (max-width: 768px) {

  #content-desktop {display: none;}
  #content-mobile {display: flex;}

}
#content-desktop {width: 100vw}
#content-mobile {width: 100vw; justify-content: center}
</style>
