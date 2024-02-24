<template>
  <div id="app" class="d-flex flex-column h-100">
    <TheHeader />
    <TheMain :class-names="'flex-1'" />
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
