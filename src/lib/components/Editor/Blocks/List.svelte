<script lang="ts">
    import { onDragOver, onDrop, onPaste, type Block } from "$lib/utils/editor";
    
    export let block: Block
</script>

<div class="flex items-center  px-4 sm:px-5 md:px-6  rounded-2xl font-semibold md:text-lg border border-lite focus-within:border-slate-300 dark:border-dark dark:focus-within:border-slate-700 bg-transparent empty:text-dark/25 dark:empty:text-lite/25 hover:bg-slate-100 focus-within:bg-slate-100 dark:hover:bg-slate-800 dark:focus-within:bg-slate-800 outline-none duration-200 overflow-hidden break-words">
    <div class="pr-2">•</div>
    <div contenteditable type="text" spellcheck placeholder="• List..." class="outline-none w-full rounded-2xl py-1.5 sm:py-2  md:py-3 h-full"
        id={block.id}
        bind:textContent={block.content}
        on:keydown
        on:keyup
        on:focus
        on:paste={onPaste}
        on:drop={onDrop}
        on:dragover={onDragOver}
    />
</div>