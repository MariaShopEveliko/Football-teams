<template>
    <button :class="btnStyle" @click="handleClick" :type="btnType">
        <slot></slot>
        {{ btnText ?? btnText }}
        <span v-if="srText" class="sr-only">{{ srText }}</span>
    </button>
</template>
  
<script>
export default {
    name: "Button",
    props: {
        btnStyle: String,
        handleClick: {
            type: Function,
            default: () => { }
        },
        srText: String,
        btnText: String,
        btnType: {
            type: String,
            default: 'button'
        },
    }
};
</script>