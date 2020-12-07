<template>
  <div class="container">
   <div>
     <TreatmentOverview>

     </TreatmentOverview>
   </div>
  </div>
</template>

<script>
import TreatmentOverview from "@/components/TreatmentOverview";
export default {
  components: {TreatmentOverview}
}
</script>

<style scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 1em;

}

</style>
