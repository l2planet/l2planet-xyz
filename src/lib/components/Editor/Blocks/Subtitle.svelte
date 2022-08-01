<script lang="ts">
    import { onDragOver, onDrop, onPaste, type Block } from "$lib/utils/editor";
    
    export let block: Block
</script>

<div contenteditable type="text" data-type='Subtitle' spellcheck placeholder="Subtitle..." class="editor-block font-semibold text-lg sm:text-xl md:text-2xl text-dark/80 dark:text-lite/80"
    id={block.id}
    bind:textContent={block.content}
    on:keydown
    on:keyup
    on:focus
    on:paste={onPaste}
    on:drop={onDrop}
    on:dragover={onDragOver}
/>