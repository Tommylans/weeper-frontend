<template>
  <div class="bestel-navigation">
    <div class="clickable-icon card shadow">
      <span class="icon-hamburger"/>
    </div>
    <div class="clickable-icon card shadow" @click="cartClick" @keyup.enter="cartClick" tabindex="0" aria-label="Winkelwagen openen">
      <span class="icon-cart"/>
    </div>

    <div class="page-title">
      <span class="title">Kapsalon Kapper</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BestelNavigation",
  methods: {
    cartClick() {
      this.$store.commit('winkelwagen/toggleWinkelwagen')
    }
  }
}
</script>

<style lang="scss" scoped>
.bestel-navigation {
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1.5rem 0;

  .clickable-icon {
    height: 3.5rem;
    width: 3.5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-cart {
      font-size: 1.5rem;
    }

    .icon-hamburger {
      font-size: 0.7rem;
    }
  }

  .page-title {
    .title{
      font-size: 2.5em;
      font-weight:500;
    }
  }
}
</style>
