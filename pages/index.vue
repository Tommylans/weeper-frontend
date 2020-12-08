<template>
  <div class="container">
    <div>
      <Calendar/>
    </div>
  </div>
</template>

<script>
import Calendar from "../components/calendar/Calendar";
export default {
  components: {Calendar}
}
</script>

<style scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

}

</style>
