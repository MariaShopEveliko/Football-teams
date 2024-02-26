<template>
    <div class="not-found-wrp text-center">
        <img src="@/assets/img/no-results.png" alt="Not found image" />
        <p class="text-muted not-found-text" v-if="errorText">{{ errorText }}</p>
    </div>
</template>

<script>
export default {
    name: "NotFound",
    props: {
        errorText: String
    },
}
</script>