<template>
  <div id="app">
    <TheHeader />
    <TheMain />
  </div>
</template>

<script>
import TheHeader from "./components/templates/TheHeader.vue";
import TheMain from "./components/templates/TheMain.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
  },
};
</script>
