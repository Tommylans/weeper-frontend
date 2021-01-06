<template>
  <div class="container">
    <div id="content-mobile">
      <div class="bovensteBalk">
        <nav class="plaatje">
          <a href="//"><img src="@/assets/Logo-placeholder.JPG" alt="logo" style="width: 100px; height: 90px"></a>
        </nav>
        <nav class="Uitloggen">
          <a href="//" class="title">Uitloggen</a>
        </nav>
      </div>
      <div class="ondersteBalk">
        <nav class="Kapsalon">
          <a href="//" class="title">Kapsalon Kapper</a>
        </nav>
        <div class="dropdown">
          <button class="dropbtn">Menu dropdown</button>
          <div class="dropdown-content">
            <a href="#">Agenda</a>
            <a href="#">Behandeling</a>
            <a href="#">Medewerkers</a>
            <a href="#">Account</a>
          </div>
        </div>
      </div>
    </div>
    <div id="content-desktop">
      <div class="bovensteBalk">
        <nav class="plaatje">
          <a href="//"><img src="@/assets/Logo-placeholder.JPG" alt="logo" style="width: 100px; height: 90px"></a>
        </nav>
        <nav class="Uitloggen">
          <a href="//" class="title">Uitloggen</a>
        </nav>
      </div>
      <div class="ondersteBalk">
        <nav class="Kapsalon">
          <a href="//" class="title">Kapsalon Kapper</a>
        </nav>
        <div class="linkjes">
          <a class="linkje">Agenda</a>
          <a class="linkje">Behandeling</a>
          <a class="linkje">Medewerkers</a>
          <a class="linkje">Account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KapperNavigatieV1"
}
</script>

<style scoped>
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
  color: black;
  letter-spacing: 1px;
}

.bovensteBalk{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  border-bottom: 1px solid black;
  background: var(--primary-color);
}

.ondersteBalk{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  border-bottom: 1px solid black;
  height: 80px;
}

.linkje {
  font-weight: 600;
  font-size: 20px;
  color: black;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-underline: none;
  width: 40%;
  margin-right: 30px;
}

.linkjes {
  display: flex;
  align-items: center;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}


.plaatje {
  display: flex;
  width: 10%;
  margin-left: 5%;
}

.Kapsalon {
  display: flex;
  margin-left: 6%;
  align-items: center;
}

.Uitloggen {
  display: flex;
  margin-right: 6%;
  align-items: center;
}
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}

#content-desktop {display: flex;}
#content-mobile {display: none;}

@media screen and (max-width: 768px) {

  #content-desktop {display: none;}
  #content-mobile {display: flex;}

}
#content-desktop {width: 100vw; flex-direction: column}
#content-mobile {width: 100vw; justify-content: center; flex-direction: column}
</style>
