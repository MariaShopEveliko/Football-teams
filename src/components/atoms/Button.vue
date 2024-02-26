<template>
    <button :class="['btn', btnStyle]" @click="handleClick">
        {{ btnText }}
        <span v-if="srText" class="visually-hidden">{{ srText }}</span>
    </button>
</template>
  
<script>
export default {
    name: "Button",
    props: {
        btnStyle: String,
        handleClick: {
            type: Function,
            required: true
        },
        srText: String,
        btnText: String
    }
};
</script>