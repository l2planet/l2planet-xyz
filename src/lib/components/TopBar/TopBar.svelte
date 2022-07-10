<script lang="ts">
import { applyTheme } from "$lib/utils/theme";

    import IconMenu from "../icons/IconMenu.svelte";
    import IconTheme from "../icons/IconTheme.svelte";
import Menu from "./Menu.svelte";
import ThemeDropdown from "./ThemeDropdown.svelte";

    let isMenuOpen: boolean = false
    let isThemeOpen: boolean = false

    const toggleScroll =  () => isMenuOpen ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'
</script>

<header class="sticky top-0 z-30 flex items-center justify-between h-16 pl-7 pr-5  text-neutral-900 bg-white/60 dark:text-white dark:bg-gri-800/60 backdrop-blur-xl select-none">
    <!-- Brand logo of the website -->
    <a class="font-extrabold text-2xl w-28" href="/">L2 Planet</a>
    <!-- Navbar that contains anchor elements -->
    <nav class="hidden h-full md:flex items-center">
        <a href="/blog" class="flex items-center h-full px-6 font-medium text-lg text-neutral-900/60 dark:text-white/60 hover:text-fuchsia-600/70 dark:hover:text-fuchsia-400/70 duration-200">Blog</a>
        <a href="/l2 solutions" class="flex items-center h-full px-6 font-medium text-lg text-neutral-900/60 dark:text-white/60 hover:text-fuchsia-600/70 dark:hover:text-fuchsia-400/70 duration-200">L2 Solutions</a>
        <a href="/stats" class="flex items-center h-full px-6 font-medium text-lg text-neutral-900/60 dark:text-white/60 hover:text-fuchsia-600/70 dark:hover:text-fuchsia-400/70 duration-200">Stats</a>
    </nav>
    <!-- This button opens and closes `Menu` component -->
    <button on:click={() => {isMenuOpen = !isMenuOpen; toggleScroll()}} class="h-12 md:hidden p-2 rounded-full active:bg-neutral-900/10 dark:active:bg-white/10 fill-gri-800 dark:fill-white active:scale-90 duration-200">
        <IconMenu/> <p hidden>menu</p>
    </button>
    <!-- This button opens and closes the `ThemeDropdown` component -->
    <div class="hidden md:flex justify-end w-28">
        <button on:click={() => isThemeOpen = !isThemeOpen} class="h-12 p-2 rounded-full hover:bg-black/10 active:bg-black/20  dark:hover:bg-white/10 dark:active:bg-white/20 duration-200 fill-neutral-900 dark:fill-white active:fill-neutral-900 dark:active:fill-white hover:scale-[1.075] active:scale-90">
            <IconTheme/>
        </button>
    </div>
</header>

{#if isMenuOpen}
    <Menu on:click={() => isMenuOpen = !isMenuOpen}/>
{/if}

{#if isThemeOpen }
    <ThemeDropdown on:click={() => {isMenuOpen = !isMenuOpen; toggleScroll()}}/>
{/if}
