<script lang="ts">
    import { theme } from '$lib/utils/theme'
    import { fly } from 'svelte/transition'
</script>

<div on:click transition:fly={{duration: 200}} class="hidden fixed top-[4.5rem] right-6 z-30 md:flex flex-col rounded-xl p-3 gap-y-2 text-center font-semibold shadow-lg shadow-slate-900/10 dark:shadow-none border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 backdrop-blur-lg">
    <button on:click={theme.setDark} class="h-8 px-4 rounded-xl scaler border-and-bg">Dark</button>
    <button on:click={theme.setLight} class="h-8 px-4 rounded-xl scaler border-and-bg">Light</button>
    <button on:click={theme.setSystem} class="h-8 px-4 rounded-xl scaler border-and-bg">System</button>
</div>
<div on:click class="hidden fixed md:flex top-0 left-0 z-20 w-full h-screen"/>