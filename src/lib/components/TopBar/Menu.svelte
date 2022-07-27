<script lang="ts">
import { theme } from '$lib/utils/theme';
import { slide } from 'svelte/transition'
</script>

<!-- Menu screen will only be displayed on mobile screens --> 
<div transition:slide={{duration: 200}} class="md:hidden fixed left-0 top-16 flex flex-col p-4 gap-y-8 w-full min-h-fit h-[calc(100vh-4rem)] overflow-y-auto bg-lite/60 dark:bg-dark/60 backdrop-blur-xl select-none">
    <!-- Each anchor element represents a section of the website -->
    <nav class="flex flex-col min-h-96 gap-y-2">
        <a on:click href="/" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-dark/60 dark:text-lite/60">Home</a>
        <a on:click href="/newsletter" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-dark/60 dark:text-lite/60">Newsletter</a>
        <a on:click href="/stats" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-dark/60 dark:text-lite/60">Stats</a>
        <a on:click href="/about" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-dark/60 dark:text-lite/60">About</a>
    </nav>
    <div on:click class="flex w-fit gap-x-5 min-h-14">
        <button on:click={theme.setDark} class="font-semibold text-xl h-12 px-4 rounded-xl scaler border-and-bg">Dark</button>
        <button on:click={theme.setLight} class="font-semibold text-xl h-12 px-4 rounded-xl scaler border-and-bg">Light</button>
        <button on:click={theme.setSystem} class="font-semibold text-xl h-12 px-4 rounded-xl scaler border-and-bg">System</button>
    </div>
</div>