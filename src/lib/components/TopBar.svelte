<script lang="ts">
    import IconMenu from "./icons/IconMenu.svelte";
</script>

<header class="sticky top-0 z-30 flex items-center justify-between h-16 px-7 bg-white/50 backdrop-blur-xl">
    <!-- This element is like the brand logo of the website -->
    <a class="font-extrabold text-2xl w-28" href="/">L2 Planet</a>
    <nav class="hidden h-full md:flex items-center gap-x-12">
        <a href="/blog" class="flex items-center h-full font-medium text-lg hover:text-violet-600 hover:scale-110  duration-200">Blog</a>
        <a href="/solutions" class="flex items-center h-full font-medium text-lg hover:text-violet-600 hover:scale-110 duration-200">Solutions</a>
        <a href="/stats" class="flex items-center h-full font-medium text-lg hover:text-violet-600 hover:scale-110 duration-200">Stats</a>
    </nav>
    <!-- This button opens and closes the menu screen -->
    <button on:click class="md:hidden p-2 rounded-full active:bg-neutral-700/10 active:scale-90 duration-200">
        <IconMenu/> <p hidden>menu</p>
    </button>
    <!-- Only for testing -->
    <div class="hidden md:flex w-28"/>
</header>