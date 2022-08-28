<script setup>
  import { ref } from 'vue';
  import Markdown from 'vue3-markdown-it';
  import TheTextarea from './components/TheTextarea.vue';
  const markdown = ref('[Hellow world](https://www.webferrol.com)');
</script>

<template>
 

  <main>
    <TheTextarea v-model:value="markdown"></TheTextarea>
    <Markdown :source="markdown"></Markdown>
    {{markdown}}
  </main>
</template>