import { onMounted,ref } from "vue"

export const useHookDarkMode = () => {
    const mode = ref('');
    onMounted(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            mode.value = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            mode.value = 'light';
        }
    });

    const toggle = () => {
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            mode.value = localStorage.theme = 'light';
        }
        else{
            document.documentElement.classList.add('dark');
            mode.value = localStorage.theme = 'dark';
        }      
    }
    const remove = () => {
        localStorage.removeItem('theme');
    }
    return{
        toggle,
        remove,
        mode,
    }
}