<template>
    <header>
        <div>
            <a href="javascript:void(0)" class="back-btn">
                <img src="@/assets/img/arrow-left.svg" alt="Go back icon" />
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
            <span class="notifications-count">
                <span class="sr-only">Notifications count is </span> 2
            </span>
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
