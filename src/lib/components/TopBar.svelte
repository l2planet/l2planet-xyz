<script lang="ts">
    import IconMenu from "./icons/IconMenu.svelte";
    import Menu from "./Menu.svelte";
    // isMenuOpen handles how menu screen is displayed
    let isMenuOpen: boolean = false
</script>

<header class="sticky top-0 z-30 flex items-center justify-between h-16 px-7 bg-white/20 backdrop-blur-lg">
    <!-- This element is like the brand logo of the website -->
    <a class="font-extrabold text-2xl" href="/">L2 Planet</a>
    <!-- This button opens and closes the menu screen -->
    <button on:click={() => isMenuOpen = !isMenuOpen} class="md:hidden p-2 rounded-full hover:bg-neutral-900/10 active:bg-neutral-700/20 duration-200">
        <IconMenu/> <p hidden>menu</p>
    </button>
    <!-- If button is clicked display the menu screen -->
    {#if isMenuOpen}
        <Menu/>
    {/if}
</header>