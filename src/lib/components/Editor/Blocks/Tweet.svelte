<script lang="ts">
    import { onDragOver, onDrop, onPaste, type Block } from "$lib/utils/editor";
    
    export let block: Block
    $: isTweet = block.content.startsWith('https://twitter.com/')
    $: tweetId = isTweet ? block.content.slice(block.content.indexOf('status') + 7, block.content.indexOf('status') + 26) : ''
</script>

<svelte:head>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"></script>
  </svelte:head>

<div class="flex justify-center py-1.5 px-4 sm:py-2 sm:px-5 md:py-3 md:px-6">
    <div class="flex flex-1 w-full h-96 max-w-lg text-center">
        {#if isTweet}
        <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency allowfullscreen style="width: 550px; height: 384px;" title="Twitter Tweet" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0ZndfcmVmc3JjX3Nlc3Npb24iOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X3Jlc3VsdF9taWdyYXRpb25fMTM5NzkiOnsiYnVja2V0IjoidHdlZXRfcmVzdWx0IiwidmVyc2lvbiI6bnVsbH0sInRmd19zZW5zaXRpdmVfbWVkaWFfaW50ZXJzdGl0aWFsXzEzOTYzIjp7ImJ1Y2tldCI6ImludGVyc3RpdGlhbCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvZmYiLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id={tweetId}&amp;lang=en&amp;origin=https%3A%2F%2Fsveltekit-embed.vercel.app%2F&amp;sessionId=fa71c0f02bbdcf2783b82e19cd0bc51771c76207&amp;theme=light&amp;widgetsVersion=6da0b7085cc99%3A1658260301864&amp;width=550px" data-tweet-id="959078631434731521"></iframe>
        {:else}
            <div class="w-full h-full flex items-center justify-center btn rounded-[1.25rem] font-semibold text-2xl sm:text-3xl">Invalid Tweet</div>
        {/if}
    </div>
</div>

<div contenteditable type="text" spellcheck placeholder="Tweet URL..." class="editor-block underline text-sky-500 dark:text-sky-400"
    id={block.id}
    bind:textContent={block.content}
    on:keydown
    on:focus
    on:paste={onPaste}
    on:drop={onDrop}
    on:dragover={onDragOver}
/>