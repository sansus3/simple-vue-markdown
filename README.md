# :sparkles: simple-vue-markdown :sparkles:

1. Proyecto donde trabajaremos con el plugin [vue3-markdown-it](https://www.npmjs.com/package/vue3-markdown-it). 
2. También creamos un composable para mostrar el __mode dark__ en **tailwind**

El script interesante es

```JavaScript
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    //Resto del código
}
```


## Project Setup

```sh
npm i vue3-markdown-it
```

___

## Components

* Markdown
* TheTextarea
___

## Instalación de tailwind


