<script lang="ts">
    import IconMenu from "./icons/IconMenu.svelte";
</script>

<header class="sticky top-0 z-30 flex items-center justify-between h-16 px-7 bg-white/20 backdrop-blur-lg">
    <a class="font-extrabold text-2xl" href="/">L2 Planet</a>
    <button class="md:hidden p-2 rounded-full hover:bg-neutral-900/10 active:bg-neutral-700/20 duration-200">
        <IconMenu/> <p hidden>menu</p>
    </button>
</header>