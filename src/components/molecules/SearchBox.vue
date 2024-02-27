<template>
    <div class="input-wrp">
        <input type="text" :value="value" @input="$emit('input', $event.target.value)" placeholder="Search for a team"
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
        value: String
    },
    methods: {
        clearSearch() {
            this.$emit('clear');
        }
    }
};
</script>