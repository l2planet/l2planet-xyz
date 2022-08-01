<script lang="ts">
    import { onDragOver, onDrop, onPaste, type Block } from "$lib/utils/editor";
    
    export let block: Block
    let isImgHidden: boolean = true
</script>


<img alt="img"
    src={block.content}
    on:load={() => isImgHidden = false}
    on:error={() => isImgHidden = true}
    class='rounded-2xl bg-dark/30 disabled:bg-red-500 cursor-pointer'
    style="display: {isImgHidden ? 'none': 'flex'};"
/>
<div contenteditable type="text" spellcheck placeholder="Image URL..." class="editor-block underline text-sky-500 dark:text-sky-400 {isImgHidden ? 'opacity-100': 'opacity-50 hover:opacity-75 focus:opacity-100'}"
    id={block.id}
    bind:textContent={block.content}
    on:keydown
    on:keyup
    on:focus
    on:paste={onPaste}
    on:drop={onDrop}
    on:dragover={onDragOver}
/>