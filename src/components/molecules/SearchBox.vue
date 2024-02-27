<template>
    <div class="input-wrp">
        <label for="searchInput" class="sr-only">{{ label }}</label>
        <input id="searchInput" type="text" :value="value" @input="$emit('input', $event.target.value)" :placeholder="label"
            class="input" />
        <Button :btn-style="'clear-btn'" :handle-click="clearSearch" v-show="value" :sr-text="'Clear input'" />
    </div>
</template>
  
<script>
import Button from '../atoms/Button.vue';

export default {
    name: "SearchBox",
    components: {
        Button
    },
    props: {
        value: String,
        label: {
            type: String,
            default: "Search"
        }
    },
    methods: {
        clearSearch() {
            this.$emit('clear');
        }
    }
};
</script>