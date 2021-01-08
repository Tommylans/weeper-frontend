<template>
  <div class="bestel-navigation">
    <div class="clickable-icon-hamburger card shadow" @click="navigationClick" aria-label="Menu openen" tabindex="0"
         @keyup.enter="navigationClick">
      <span class="icon-hamburger"/>
    </div>

    <div class="clickable-icon-cart card shadow" @click="cartClick" @keyup.enter="cartClick" tabindex="0"
         aria-label="Winkelwagen openen">
      <span class="icon-cart"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "BestelNavigation",
  computed: {
    step: {
      get: function () {
        return this.$store.state.winkelwagen.step;
      },
      set: function (value) {
        this.$store.commit('winkelwagen/setStep', value)
      }
    },
  },
  methods: {
    cartClick() {
      this.$store.commit('winkelwagen/toggleWinkelwagen')
    },
    navigationClick() {
      this.$store.commit('winkelwagen/toggleNavigation')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/include-media";

.bestel-navigation {
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1.5rem 0;

  .clickable-icon-cart {
    height: 3.5rem;
    width: 3.5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    @include media('>tablet') {
      display: none;
    }

    .icon-cart {
      font-size: 1.5rem;
    }
  }

  .clickable-icon-hamburger {
    height: 3.5rem;
    width: 3.5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .icon-hamburger {
      font-size: 0.7rem;
    }

  }
}
</style>
