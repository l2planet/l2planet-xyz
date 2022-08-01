<script lang="ts">
    import { onDragOver, onDrop, onPaste, type Block } from "$lib/utils/editor";
    
    export let block: Block
</script>

<div contenteditable type="text" spellcheck placeholder="Title..." class="editor-block font-bold text-4xl sm:text-5xl md:text-6xl"
    id={block.id}
    bind:textContent={block.content}
    on:keydown
    on:keyup
    on:focus
    on:paste={onPaste}
    on:drop={onDrop}
    on:dragover={onDragOver}
/>