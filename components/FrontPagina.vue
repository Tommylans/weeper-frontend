<template>
  <div class="container">
    <div class="content">
      <div class="page-title">
        <h1 class="title" tabindex="0">Kapsalon Kapper</h1>
      </div>
      <div class="knop">
        <button @click="redirectToAfspraak" @keyup.enter="redirectToAfspraak" class="verder-knop button" tabindex="0">Maak een afspraak</button>
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

.verder-knop {
  border-radius: 0.7rem;
  padding: 1em 1.5em;
  border: none;
  cursor: pointer;
}
</style>
