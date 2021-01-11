<template>

  <div class="navigation-links">
    <NuxtLink to="/" class="link navigationbutton soft-shadow">Home</NuxtLink>
    <NuxtLink to="/" class="link navigationbutton soft-shadow">Voor de salons</NuxtLink>
    <NuxtLink to="/" class="link navigationbutton soft-shadow">Zoek een salon</NuxtLink>
  </div></template>

<script>
export default {
  name: "NavigatieLinks"
}
</script>

<style lang="scss" scoped>
@import "assets/css/include-media";

.navigation-links {
  display: flex;
  padding: 1.2rem 0;

  @include media('<=tablet'){
    flex-direction: column;
    padding: 0 0.5em;
    margin-top: 0.5em;

  }

  .link {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    padding: 1em;
    height: 3.5rem;
    margin-right: 1em;

    @include media ('<=tablet') {
      margin: 0.2em 0;
    }

    &:hover{
      background-color: #c97757;
    }
  }
}

</style>
