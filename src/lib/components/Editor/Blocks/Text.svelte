<script lang="ts">
    import { onDragOver, onDrop, onPaste, type Block } from "$lib/utils/editor";
    
    export let block: Block
</script>

<div contenteditable type="text" data-type='Text' spellcheck placeholder="Text..." class="editor-block font-semibold md:text-lg"
    id={block.id}
    bind:textContent={block.content}
    on:keydown
    on:keyup
    on:focus
    on:paste={onPaste}
    on:drop={onDrop}
    on:dragover={onDragOver}
/>