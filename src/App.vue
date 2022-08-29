<script setup>
  import { ref,computed } from 'vue';
  import Markdown from 'vue3-markdown-it';
  import { useHookDarkMode } from './hooks/DarkMode';
  import TheTextarea from './components/TheTextarea.vue';
  const markdown = ref(':sparkles: [webferrol.com](https://www.webferrol.com)');
  
  const {toggle,remove,mode} = useHookDarkMode();
  const btn = computed(()=>mode.value === 'dark' ? 'light':'dark');



</script>

<template>
 

  <main class="p-5">
    <h1 class="my-5 text-xl text-center">Markdown</h1>
    <TheTextarea class="dark:text-black" placeholder="Su Markdown personalizado aquí" v-model:value="markdown"></TheTextarea>
    <Markdown :source="markdown"></Markdown>
  </main>
  <h2 class="m-5 text-lg">Modo {{mode}}</h2>
  <button type="button" class="inline-block mx-5 bg-indigo-500 rounded text-white px-5" @click="toggle()">Cambiar a modo {{btn}}</button>
  <button type="button" class="bg-indigo-500 hover:bg-blue-500 hover:scale-x-95 duration-1000 rounded-full text-white px-5" @click="remove()">Eliminar modo</button>
</template>

<style>
  ul,ol,li{
    padding: initial !important;
    margin: initial !important;
    list-style-position: initial !important;
    list-style-type: initial !important;
  }
  a{text-decoration: underline !important;}
</style>