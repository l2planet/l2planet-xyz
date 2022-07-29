<script lang="ts">
import type { Block } from "$lib/utils/editor";
import { fly } from "svelte/transition";
import ButtonIcon from "./ButtonIcon.svelte";
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
    transition:fly={{duration: 200}}
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
        block.type == 'title' ? 'text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-600 dark:text-sky-300 placeholder:text-sky-600/50 placeholder:dark:text-sky-300/50' :
        block.type == 'subtitle' ? 'leading-10 text-2xl sm:text-3xl font-bold text-sky-600 dark:text-sky-300 placeholder:text-sky-600/50 placeholder:dark:text-sky-300/50' : ''
    }"
/>
<div class="flex pr-6 gap-x-4 items-center">
    <button on:click={onRemove}><IconRemove/></button>
    <div class="flex flex-col gap-y-2">
        <button on:click={onUp}><IconArrowUp/></button>
        <button on:click={onDown}><IconArrowDown/></button>
    </div>  
</div>
</div>