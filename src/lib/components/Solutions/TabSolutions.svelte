<script lang="ts">
    export let active: boolean
</script>

<button disabled={active} on:click class="flex sm:flex-col items-center justify-center w-full h-16 rounded-2xl shadow-md shadow-slate-900/10 dark:shadow-none enabled:md:hover:rotate-6 enabled:md:active:-rotate-6 bg-slate-300/70 disabled:bg-sky-400/70 dark:bg-slate-700/70 dark:disabled:bg-sky-700/70 duration-200 cursor-pointer">
    <slot/>
</button>