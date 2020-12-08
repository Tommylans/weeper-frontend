<template>
  <div class="container">
    <div class="bovensteBalk">
      <nav class="plaatje">
        <a href="//"><img src="@/assets/Logo-placeholder.JPG" alt="logo" style="width: 100px; height: 90px"> </a>
      </nav>
      <nav class="linkjes">
        <a href="//" class="linkje">Voor de salons</a>
        <a href="//" class="linkje">Zoek jouw salon</a>
      </nav>
    </div>
    <div class="ondersteBalk">
      <div class="terugKnop">
        <button class="terugKnop">
          <img src="@/assets/terugPijl.png" alt="Terug" style="width: 20px; height: 20px;">
          <p class="subtitle">Terug</p>
        </button>
      </div>
        <nav class="Kapsalon">
          <a href="//" class="title">Kapsalon Kapper</a>
        </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
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
  font-weight: 600;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}

.bovensteBalk{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
  background: var(--primary-color);
}

.ondersteBalk{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
  height: 80px;
}

.subtitle {
  font-weight: 600;
  font-size: 15px;
  color: #526488;
  word-spacing: 5px;
}

.linkje {
  font-weight: 600;
  font-size: 15px;
  color: black;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-underline: none;
  width: 40%;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
.linkjes {
  display: flex;
  min-width: 20%;
  justify-content: space-between;
  align-items: center;
  margin-right: 5%;
  max-width: 50%;
}

.plaatje {
  display: flex;
  width: 10%;
  margin-left: 5%;
}

.Kapsalon {
  display: flex;
  margin-right: 6%;
  align-items: center;
}

.terugKnop {
  display: flex;
  margin-left: 5%;
  align-items: center;
}
</style>
