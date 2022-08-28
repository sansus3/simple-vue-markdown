<template>
    <textarea :value="value" @input="$emit('update:value',$event.target.value)"></textarea>
</template>

<script setup>
    defineProps(['value'])
</script>