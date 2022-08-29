<template>
    <textarea :placeholder="placeholder" class="h-8 w-full border-none p-2 rounded-md bg-slate-200" :value="value"
        @input="$emit('update:value', $event.target.value)"></textarea>
</template>

<script setup>
defineProps({
    value: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: 'Escriba aquí su texto',
    }
})
</script>