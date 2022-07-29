<script lang="ts">
import type { Block } from "$lib/utils/editor";
import IconRemove from "../icons/IconRemove.svelte";
import IconArrowUp from "../icons/IconArrowUp.svelte";
import IconArrowDown from "../icons/IconArrowDown.svelte";

    export let block: Block
    export let onRemove: () => void
    export let onUp: () => void
    export let onDown: () => void

</script>

<div class="flex relative items-center py-3 rounded-2xl bg-slate-100 dark:bg-slate-700 ">
<input
    placeholder={block.getPlaceholder()}
    id={block.id}
    on:focus
    on:keydown
    on:keyup
    on:keypress
    bind:value={block.content}

    class="w-full pl-6 pr-10 bg-transparent outline-none
    {
        block.type == 'paragraph' ? 'text-base sm:text-lg font-medium' :
        block.type == 'heading1' ? 'text-2xl sm:text-3xl font-semibold' :
        block.type == 'heading2' ? 'text-xl sm:text-2xl font-semibold' :
        block.type == 'title' ? 'text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-700 dark:text-sky-300 placeholder:text-sky-600/50 placeholder:dark:text-sky-300/50' :
        block.type == 'subtitle' ? 'text-2xl sm:text-3xl font-bold text-sky-700 dark:text-sky-300 placeholder:text-sky-600/50 placeholder:dark:text-sky-300/50' :
        block.type == 'image' ? 'text-base sm:text-lg font-semibold text-sky-600 dark:text-sky-400 placeholder:text-sky-500/50 placeholder:dark:text-sky-200/50' : ''
        
    }"
/>
<div class="flex pr-6 gap-x-2 items-center">
    <button class="hover:bg-dark/10 active:bg-dark/20 dark:hover:bg-lite/10 dark:active:bg-lite/20 rounded-full p-1 duration-200"  on:click={onRemove}><IconRemove/></button>
    <div class="flex flex-col gap-y-2">
        <button class="hover:bg-dark/10 active:bg-dark/20 dark:hover:bg-lite/10 dark:active:bg-lite/20 rounded-full p-1 duration-200" on:click={onUp}><IconArrowUp/></button>
        <button class="hover:bg-dark/10 active:bg-dark/20 dark:hover:bg-lite/10 dark:active:bg-lite/20 rounded-full p-1 duration-200" on:click={onDown}><IconArrowDown/></button>
    </div>  
</div>
</div>