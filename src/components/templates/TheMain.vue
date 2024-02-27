<template>
  <main :class="classNames">
  <UserDashboard />
  </main>
</template>

<script>
import UserDashboard from "../pages/UserDashboard.vue";

export default {
  name: "TheMain",
  components:{
    UserDashboard
  },
  props: {
    classNames: {
      type: String,
    },
  },
};
</script>
