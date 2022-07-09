<script lang="ts">
    // isOpen is defined outside as an attribute
    export let isOpen: boolean
</script>

<!-- If isOpen == true, it displays the menu screen, otherwise not -->
{#if isOpen}
    <!-- Menu screen will only be displayed on mobile screens --> 
    <div class="animated md:hidden fixed left-0 top-16 flex flex-col w-full min-h-[calc(100vh-4rem)] bg-white/50 backdrop-blur-xl">
        <!-- Each anchor element represents a section of the website -->
        <nav class="flex flex-col min-h-80 p-7 gap-y-2">
            <a href="/" class="flex items-center h-16 font-semibold text-3xl text-neutral-600">Home Page</a>
            <a href="/" class="flex items-center h-16 font-semibold text-3xl text-neutral-600">Statistics</a>
            <a href="/" class="flex items-center h-16 font-semibold text-3xl text-neutral-600">Our Story</a>
            <a href="/" class="flex items-center h-16 font-semibold text-3xl text-neutral-600">Sponsor Us</a>
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