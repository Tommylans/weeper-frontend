<template>
  <div class="container">
    <KapperNavigatie/>
    <h1 class="container-header">Agenda</h1>
    <div class="container-overzicht">
      <AfsprakenOverzicht class="afspraken-container"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "agenda"
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container-header {
    width: 85%;
  }

  .container-overzicht {
    width: 85%;
  }
}

</style>
