<template>
    <header>
        <div>
            <a href="#" class="back-btn">
                <img src="@/assets/img/arrow-left.svg" />
                <span class="sr-only">Go back to ...</span></a>
            <a href="https://oddspedia.com" class="logo">
                <picture>
                    <source media="(min-width:1280px)" srcset="@/assets/img/logo.png" />
                    <img src="@/assets/img/logo-mobile.png" alt="Logo" />
                </picture>
            </a>
        </div>
        <h1 class="page-title m-0">{{ pageTitle }}</h1>
        <button type="button" class="btn notifications">
            <div class="notifications-count">
                <span class="sr-only">Notifications count is </span> 2
            </div>
        </button>
    </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "TheHeader",
    computed: {
        ...mapGetters(["pageTitle"])
    }
};
</script>
