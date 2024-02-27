<template>
    <header>
        <div>
            <a href="javascript:void(0)" class="back-btn">
                <img src="@/assets/img/arrow-left.svg" />
                <span class="sr-only">Go back to ...</span></a>
            <a href="https://oddspedia.com" class="logo">
                <picture>
                    <source media="(min-width:992px)" srcset="@/assets/img/logo.png" />
                    <img src="@/assets/img/logo-mobile.png" alt="Logo" />
                </picture>
            </a>
        </div>
        <h1 class="page-title fs-lg m-0">{{ pageTitle }}</h1>
        <Button :btn-style="'notifications'">
            <div class="notifications-count">
                <span class="sr-only">Notifications count is </span> 2
            </div>
        </button>
    </header>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "../atoms/Button.vue";

export default {
    name: "TheHeader",
    components: {
        Button
    },
    computed: {
        ...mapGetters(["pageTitle"])
    }
};
</script>
