<script lang="ts">
import type { Block } from "$lib/utils/editor";
import { fly } from "svelte/transition";

    export let block: Block

</script>

<input
    transition:fly
    placeholder={block.getPlaceholder()}
    id={block.id}
    on:focus
    on:keydown
    on:keyup
    on:keypress
    bind:value={block.content}

    class="float-right px-6 rounded-2xl bg-slate-100 dark:bg-slate-700 outline-none
    {
        block.type == 'paragraph' ? 'h-10 sm:h-12 lg:h-14 text-base sm:text-lg font-medium' :
        block.type == 'heading1' ? 'h-14 sm:h-16 lg:h-20 text-2xl sm:text-3xl lg:text-4xl font-semibold' :
        block.type == 'heading2' ? 'h-12 sm:h-14 lg:h-16 text-xl sm:text-2xl font-semibold' :
        block.type == 'title' ? 'h-16 sm:h-20 lg:h-24 text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-600 dark:text-sky-300 placeholder:text-sky-600/50 placeholder:dark:text-sky-300/50' :
        block.type == 'subtitle' ? 'h-12 sm:h-14 lg:h-16 text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-600 dark:text-sky-300 placeholder:text-sky-600/50 placeholder:dark:text-sky-300/50' : ''
    }"
/>