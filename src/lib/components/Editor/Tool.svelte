<script lang="ts">
    import { fade } from 'svelte/transition'
    export let top: number
    export let left: number
    export let isShown: boolean
    export let
        onText: () => void,
        onNote: () => void,
        onList: () => void,
        onLarge: () => void,
        onMedium: () => void,
        onSmall: () => void,
        onLink: () => void,
        onImage: () => void,
        onTweet: () => void,
        onYoutube: () => void
</script>

{#if isShown}
    <div on:click class="fixed top-0 left-0 z-20 w-full h-full">

    </div>
    <div on:click transition:fade={{duration: 150}} class="flex flex-col absolute z-20 w-40 h-60 p-2.5 pr-0.5 rounded-xl font-semibold backdrop-blur-xl btn"
        style="top: {top}px; left: {left}px;"
    >
        <div class="flex flex-col gap-y-2 overflow-auto pr-1.5">
            <button on:click={onText} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Text
            </button>
            <button on:click={onNote} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Note
            </button>
            <button on:click={onList} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                List
            </button>
            <button on:click={onLarge} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Large
            </button>
            <button on:click={onMedium} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Medium
            </button>
            <button on:click={onSmall} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Small
            </button>
            <button on:click={onImage} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Image
            </button>
            <button on:click={onLink} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Link
            </button>
            <button on:click={onTweet} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Tweet
            </button>
            <button on:click={onYoutube} class="px-2 py-1.5 rounded-xl border border-sky-900/10 dark:border-sky-200/10 bg-sky-900/10 hover:bg-sky-900/20 dark:bg-sky-200/10 dark:hover:bg-sky-200/20 duration-200">
                Youtube
            </button>
        </div>
    </div>
{/if}