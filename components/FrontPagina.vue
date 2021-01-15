<template>
  <div class="container">
    <div id="content-desktop">
      <div class="content">
       <div class="page-title">
         <h1 class="title">Kapsalon Kapper</h1>
        </div>
        <div class="knop">
         <button @click="redirectToAfspraak" @keyup.enter="redirectToAfspraak" class="verder-knop button" tabindex="0">Maak een afspraak</button>
        </div>
      </div>
    </div>
    <div id="content-mobile">
      <div class="content">
        <div class="page-title-mobile">
          <h1 class="title-mobile">Kapsalon Kapper</h1>
        </div>
        <div class="knop">
          <button @click="redirectToAfspraak"class="verder-knop button">Maak een afspraak</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontPagina",
  methods: {
    redirectToAfspraak(){
      this.$router.push("/afspraak")
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 30%;
}

.title {
  font-size: 6.5rem;
}

.title-mobile {
  display: flex;
  font-size: 3rem;
  width: 55%;
}

.page-title-mobile{
  display: flex;
  justify-content: center;
}

.verder-knop {
  border-radius: 0.7rem;
  padding: 1em 1.5em;
  border: none;
  cursor: pointer;
}
#content-desktop {display: flex;}
#content-mobile {display: none;}

@media screen and (max-width: 768px) {

  #content-desktop {display: none;}
  #content-mobile {display: flex;}

}
</style>
