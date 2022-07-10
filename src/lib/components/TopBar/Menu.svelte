<script lang="ts">
    import { slide } from 'svelte/transition'
</script>

<!-- Menu screen will only be displayed on mobile screens --> 
<div transition:slide={{duration: 200}} class="md:hidden fixed left-0 top-16 flex flex-col p-4 w-full min-h-fit h-[calc(100vh-4rem)] overflow-y-auto bg-white/60 dark:bg-gri-900/60 backdrop-blur-xl select-none">
    <!-- Each anchor element represents a section of the website -->
    <nav class="flex flex-col min-h-96 gap-y-2">
        <a href="/l2 solutions" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-neutral-500">L2 Solutions</a>
        <a href="/stats" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-neutral-500">Stats</a>
        <a href="/blog" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-neutral-500">Blog</a>
        <a href="/story" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-neutral-500">Our Story</a>
        <a href="/sponsor" class="flex items-center p-3 min-h-16 font-semibold text-3xl text-neutral-500">Sponsor Us</a>
    </nav>
</div>