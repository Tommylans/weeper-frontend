<template>
  <div class="container">
    <div id="content-mobile">
      <div class="bovenste-balk-mobile card soft-shadow titels">
        <nav class="kapsalon">
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
      <div class="bovenste-balk card soft-shadow titels">
        <nav class="linkjes">
          <a href="//" class="title">Kapsalon Kapper</a>
          <a href="//" class="linkje">Agenda</a>
          <a href="//" class="linkje">Behandeling</a>
          <a href="//" class="linkje">Medewerkers</a>
          <a href="//" class="linkje">Account</a>
          <a href="//" class="linkje">Uitloggen</a>
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
  padding: 1.5em 2em 0;
}

.title {
  font-weight: 600;
  font-size: 20px;
  color: black;
  letter-spacing: 1px;
}

.bovenste-balk {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

}

.bovenste-balk-mobile {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.linkje {
  font-weight: 600;
  font-size: 18px;
  color: black;
  word-spacing: 5px;
  text-underline: none;
}

.linkjes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.kapsalon {
  display: flex;
  align-items: center;
}

.dropbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
  background-color: white;
  border-radius: 0.7em;
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
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
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
#content-desktop {width: 100%; flex-direction: column; justify-content: center}
#content-mobile {width: 100%; justify-content: center; flex-direction: row}

</style>
