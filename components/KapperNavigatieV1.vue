<template>
  <div class="container">
    <div id="content-mobile">
      <div class="bovensteBalkMobile card soft-shadow titels">
        <nav class="plaatjeMobile">
          <a href="//"><img src="@/assets/Logo-placeholder.JPG" alt="logo" style="width: 75px; height: 67.5px"></a>
        </nav>
        <nav class="Kapsalon">
          <a href="//" class="title">Kapsalon Kapper</a>
        </nav>
        <div class="dropdown">
          <button class="dropbtn" style="float:right"><span class="icon-hamburger"/></button>
          <div class="dropdown-content titels">
            <a href="#">Agenda</a>
            <a href="#">Behandeling</a>
            <a href="#">Medewerkers</a>
            <a href="#">Account</a>
            <a href="#">Uitloggen</a>
          </div>
        </div>
      </div>
    </div>
    <div id="content-desktop">
      <div class="bovensteBalk card soft-shadow titels">
        <nav class="linkjes">
          <a href="//" class="title">Kapsalon Kapper</a>
          <a href="//" class="linkje">Agenda</a>
          <a href="//" class="linkje">Behandeling</a>
          <a href="//" class="linkje">Medewerkers</a>
          <a href="//" class="linkje">Account</a>
          <a href="//" class="title">Uitloggen</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KapperNavigatieV2"
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
  display: block;
  font-weight: 600;
  font-size: 20px;
  color: #393e46;
  letter-spacing: 1px;
  margin-right: 5vw;
}

.bovensteBalk {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
}

.Logo-Titel {
  display: flex;
  width: 25vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 5vw;
}

.bovensteBalkMobile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
}

.linkje {
  font-weight: 600;
  font-size: 18px;
  color: #393e46;
  word-spacing: 5px;
  text-underline: none;
}

.linkjes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 90px;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.plaatjeMobile {
  display: flex;
}

.Kapsalon {
  display: flex;
  align-items: center;
}

.dropbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
  background-color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 20vw;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
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
#content-desktop {width: 100vw; flex-direction: column; justify-content: center}
#content-mobile {width: 100vw; justify-content: center; flex-direction: row}

.card {
  border-radius: 0 0 0.7rem 0.7rem;
}
</style>
