<script lang="ts">

    import { onDragOver, onDrop, onPaste, type Block } from "$lib/utils/editor";
    
    export let block: Block
    $: isYoutube = block.content.startsWith('https://www.youtube.com/watch?v=')
</script>


<div class="flex justify-center py-1.5 px-4 sm:py-2 sm:px-5 md:py-3 md:px-6">
    <div class="flex flex-1 w-full max-w-3xl aspect-video">
        {#if isYoutube}
        <iframe class="rounded-[1.25rem]" width="100%" height="100%" src={block.content.replace('https://www.youtube.com/watch?v=', 'https://www.youtube-nocookie.com/embed/')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {:else}
        <div class="w-full flex items-center justify-center btn rounded-[1.25rem] font-semibold text-2xl sm:text-3xl">Invalid URL</div>
        {/if}
    </div>
</div>
<div contenteditable type="text" spellcheck placeholder="Youtube URL..." class="editor-block underline text-sky-500 dark:text-sky-400 {!isYoutube ? 'opacity-100': 'opacity-50 hover:opacity-75 focus:opacity-100'}"
    id={block.id}
    bind:textContent={block.content}
    on:keydown
    on:input={()=>console.log(document.getElementById('hj'))}
    on:focus
    on:paste={onPaste}
    on:drop={onDrop}
    on:dragover={onDragOver}
/>