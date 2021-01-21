<template>
  <div class="container">
    <span class="container-header">Welkom!</span>
    <div class="container-modules">
      <NuxtLink to="/kapper/agenda" class="module card soft-shadow">
        <ClockIcon class="module-icon"/>
        <span class="firstline">Agenda</span>
        <span class="secondline">Overzicht van al uw reserveringen</span>
      </NuxtLink>
      <NuxtLink to="/kapper/behandelingen" class="module card soft-shadow">
        <MapIcon class="module-icon"/>
        <span class="firstline">Behandelingen</span>
        <span class="secondline">Beheer de behandelingen die de klant ziet</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import ClockIcon from "../icons/ClockIcon";
import MapIcon from "../icons/MapIcon";
import ProfileIcon from "../icons/ProfileIcon";
import KeyIcon from "../icons/KeyIcon";

export default {
  name: "ModulesOverview",
  components: {
    ClockIcon,
    MapIcon,
    ProfileIcon,
    KeyIcon
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/include-media";

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;

  .container-header {
    width: 75%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.7em;
    font-size: 2em;

    @include media('<=tablet') {
      width: 90%;
    }
  }

  .container-modules {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @include media('<=tablet') {
      width: 90%;
    }

    @include media('<=712px') {
      justify-content: center;
    }
  }

  .module {
    width: 45%;
    min-width: 18em;
    height: 25rem;
    border-radius: 0.7rem;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: black;

    @include media('<=712px') {
      margin-bottom: 2em;
      width: 30em;
    }

    @include media('<=phone') {
      min-width: 100%;
    }

    &:hover {
      cursor: pointer;
    }

    .module-icon {
      width: 2.5em;
    }

    .firstline {
      font-size: 1.1em;
      font-weight: 600;
    }
  }
}
</style>
