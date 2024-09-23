<template>
  <Suspense>
    <MainComponent />
  </Suspense>
</template>

<script>
import MainComponent from "./components/MainComponent.vue";

export default {
  components: {
    MainComponent,
  },
};
</script>

<style></style>
