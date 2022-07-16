<script lang="ts">
    import { theme } from '$lib/utils/theme'
    import { fly } from 'svelte/transition'
</script>

<div on:click transition:fly={{duration: 200}} class="hidden fixed top-[4.5rem] right-6 z-30 md:flex flex-col rounded-xl p-3 gap-y-2 text-center font-semibold shadow-lg shadow-slate-900/10 dark:shadow-none bg-slate-200/60 dark:bg-slate-700/60 animated-theme backdrop-blur-xl">
    <button on:click={theme.setDark} class="h-8 px-4 rounded-xl hover:scale-105 hover:bg-slate-900/10 dark:hover:bg-white/10 duration-200">Dark</button>
    <button on:click={theme.setLight} class="h-8 px-4 rounded-xl hover:scale-105 hover:bg-slate-900/10 dark:hover:bg-white/10 duration-200">Light</button>
    <button on:click={theme.setSystem} class="h-8 px-4 rounded-xl hover:scale-105 hover:bg-slate-900/10 dark:hover:bg-white/10 duration-200">System</button>
</div>
<div on:click class="hidden fixed md:flex top-0 left-0 z-20 w-full h-screen"/>