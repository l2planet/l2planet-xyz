<script lang="ts">
    import IconMenu from "./icons/IconMenu.svelte";
</script>

<header class="sticky top-0 z-30 flex items-center justify-between h-16 px-7 bg-white">
    <!-- This element is like the brand logo of the website -->
    <a class="font-extrabold text-2xl" href="/">L2 Planet</a>
    <!-- This button opens and closes the menu screen -->
    <button on:click class="md:hidden p-2 rounded-full hover:bg-neutral-900/10 active:bg-neutral-700/20 duration-200">
        <IconMenu/> <p hidden>menu</p>
    </button>
</header>