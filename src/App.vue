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
  mounted() {
    const params = new URLSearchParams(window.location.search);
    const k = params.get('kanji') || params.get('q') || params.get('k');
    if (!k) return;

    // If you use v-model="search":
    if (this.search !== undefined) {
      this.search = k;
    }

    // Or target a plain input:
    const box = document.querySelector('#filter');
    if (box) {
      box.value = k;
      box.dispatchEvent(new Event('input', { bubbles: true }));
      box.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
    }
  }
};
</script>

<style></style>
