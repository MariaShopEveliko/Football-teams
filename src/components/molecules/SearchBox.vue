<template>
    <div class="input-wrp">
        <input type="text" :value="value" @input="$emit('input', $event.target.value)" placeholder="Search for a team"
            class="input" />
        <button type="button" class="btn clear-btn" @click="clearSearch" v-show="value">
            <span class="sr-only">Clear input</span>
        </button>
    </div>
</template>
  
<script>
export default {
    name: "SearchBox",
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