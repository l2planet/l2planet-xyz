<script lang="ts">
    // isOpen is defined outside as an attribute
    export let isOpen: boolean
</script>

<!-- If isOpen == true, it displays the menu screen, otherwise not -->
{#if isOpen}
    <!-- Menu screen will only be displayed on mobile screens --> 
    <div class="animated md:hidden fixed left-0 top-16 flex flex-col p-4 w-full min-h-[calc(100vh-4rem)] bg-white/50 backdrop-blur-xl select-none">
        <!-- Each anchor element represents a section of the website -->
        <nav class="flex flex-col min-h-80 gap-y-2">
            <a href="/" class="flex items-center p-3 rounded-2xl h-16 font-semibold text-3xl text-neutral-900/50 active:text-violet-600/50 active:bg-neutral-900/10 duration-200 active:scale-95">Home Page</a>
            <a href="/" class="flex items-center p-3 rounded-2xl h-16 font-semibold text-3xl text-neutral-900/50 active:text-violet-600/50 active:bg-neutral-900/10 duration-200 active:scale-95">Statistics</a>
            <a href="/" class="flex items-center p-3 rounded-2xl h-16 font-semibold text-3xl text-neutral-900/50 active:text-violet-600/50 active:bg-neutral-900/10 duration-200 active:scale-95">Our Story</a>
            <a href="/" class="flex items-center p-3 rounded-2xl h-16 font-semibold text-3xl text-neutral-900/50 active:text-violet-600/50 active:bg-neutral-900/10 duration-200 active:scale-95">Sponsor Us</a>
        </nav>
    </div>
{/if}

<style>
    /* We define a class which includes a custom animation */
    .animated {
        animation: slide 200ms ease-in-out;
        transform-origin: center right;
    }
    /* This is the custom animation */
    @keyframes slide {
        /* Each percentage represents a range of frames*/
        0% {
            /* Those persentages represent positions in x and y axis */
            transform: translate(100%, 0%);
        }
        100% {
            transform: translate(0%, 0%);
        }
    }
</style>