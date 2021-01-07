<template>
  <div class="contentContainer" >
    <div id="content-desktop">
      <div class="grijsVlak">
        <img src="@/assets/grijs-vlak.png" alt="plaatje" style="width: 100%; height: 100%";>
      </div>
      <div class="inlogForm">
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
            class="textVakken"
            placeholder="Voorbeeld@example.com"
          />
          <FormulateInput
            name="password"
            label="Wachtwoord"
            validation="required"
            class="textVakken"
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
          <nav class="WWVergeten">
            <a href="//" class="WWVergeten">Wachtwoord vergeten</a>
          </nav>
        </FormulateForm>
      </div>
    </div>
    <div id="content-mobile">
      <div class="inlogForm">
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
            class="textVakken"
            placeholder="Voorbeeld@example.com"
          />
          <FormulateInput
            name="password"
            label="Wachtwoord"
            validation="required"
            class="textVakken"
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
          <nav class="WWVergeten">
            <a href="//" class="WWVergeten">Wachtwoord vergeten</a>
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
.inlogForm {
  display: flex;
  width: 45%;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.grijsVlak {
  display: flex;
  width: 55%;
  height: 100vh;
}
.contentContainer {
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
  height: 100vh;
}
.WWVergeten {
  border: none;
  background-color: white;
  color: blue;
  text-decoration: none;
}
.textVakken {
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
