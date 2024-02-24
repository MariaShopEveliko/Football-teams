<template>
  <header class="d-flex">
    <a href="#" class="back-btn">
      <img src="@/assets/img/arrow-left.svg" />
      <span class="sr-only">Go back to ...</span></a>
    <a href="https://oddspedia.com" class="logo">
      <picture>
        <source media="(min-width:992px)" srcset="@/assets/img/logo.png" />
        <img src="@/assets/img/logo-mobile.png" alt="Logo" />
      </picture>
    </a>
    <button type="button" class="btn notifications">
      <div class="notification-count">
        <span class="sr-only">Notifications count is </span> 2
      </div>
    </button>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>
