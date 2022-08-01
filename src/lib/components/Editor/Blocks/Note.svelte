<script lang="ts">
    import { onDragOver, onDrop, onPaste, type Block } from "$lib/utils/editor";
    
    export let block: Block
</script>

<div contenteditable type="text" spellcheck placeholder="Note..." class="editor-block font-medium md:text-lg italic text-dark/75 dark:text-lite/75"
    id={block.id}
    bind:textContent={block.content}
    on:keydown
    on:keyup
    on:focus
    on:paste={onPaste}
    on:drop={onDrop}
    on:dragover={onDragOver}
/>