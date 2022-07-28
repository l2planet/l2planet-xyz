<script lang="ts">
    import IconMenu from "../icons/IconMenu.svelte";
    import IconTheme from "../icons/IconTheme.svelte";
    import Menu from "./Menu.svelte";
    import ThemeDropdown from "./ThemeDropdown.svelte";
    import favicon from "$lib/assets/logo.png"

    let isMenuOpen: boolean = false
    let isThemeOpen: boolean = false

    const toggleScroll =  () => isMenuOpen ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'
</script>

<header class="sticky top-0 z-30 flex items-center justify-between w-full h-16 pl-7 pr-5  text-dark bg-lite/60 dark:text-white dark:bg-dark/60 backdrop-blur-xl select-none">
    <!-- Brand logo of the website -->
    <a class="flex items-center justify-between font-extrabold text-[1.375rem] min-w-[8.75rem]" href="/">
        <img src={favicon} alt="logo" class="h-8 w-8"/>
        L2 Planet
    </a>
    <!-- Navbar that contains anchor elements -->
    <nav class="hidden h-full md:flex items-center gap-x-6">
        <a href="/" class="flex items-center h-10 px-4 rounded-xl font-semibold text-lg scaler btn-full">Home</a>
        <a href="/newsletter" class="flex items-center h-10 px-4 rounded-xl font-semibold text-lg scaler btn-full">Newsletter</a>
        <a href="/stats" class="flex items-center h-10 px-4 rounded-xl font-semibold text-lg scaler btn-full">Stats</a>
        <a href="/about" class="flex items-center h-10 px-4 rounded-xl font-semibold text-lg scaler btn-full">About</a>
    </nav>
    <!-- This button opens and closes `Menu` component -->
    <button on:click={() => {isMenuOpen = !isMenuOpen; toggleScroll()}} class="md:hidden p-1.5 rounded-full scaler btn-full">
        <IconMenu/> <p hidden>menu</p>
    </button>
    <!-- This button opens and closes the `ThemeDropdown` component -->
    <div class="hidden md:flex justify-end min-w-[8.75rem]">
        <button on:click={() => isThemeOpen = !isThemeOpen} class="p-1.5 rounded-full scaler btn-full">
            <IconTheme/>
        </button>
    </div>
</header>

{#if isMenuOpen }
    <Menu on:click={() => {isMenuOpen = !isMenuOpen; toggleScroll()}}/>
{/if}

{#if isThemeOpen }
    <ThemeDropdown on:click={() => isThemeOpen = !isThemeOpen}/>
{/if}
