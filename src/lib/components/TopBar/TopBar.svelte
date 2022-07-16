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

<header class="sticky top-0 z-30 flex items-center justify-between w-full h-16 pl-7 pr-5  text-slate-900 bg-white/60 dark:text-white dark:bg-slate-900/60 backdrop-blur-xl select-none">
    <!-- Brand logo of the website -->
    <a class="flex items-center justify-between font-extrabold text-[1.375rem] min-w-[9rem]" href="/">
        <img src={favicon} alt="logo" class="h-8 w-8"/>
        L2 Planet
    </a>
    <!-- Navbar that contains anchor elements -->
    <nav class="hidden h-full md:flex items-center">
        <a href="/" class="flex items-center h-full px-6 font-medium text-lg text-slate-900/60 dark:text-white/60 hover:text-sky-600/70 dark:hover:text-sky-400/70 active:text-slate-900 dark:active:text-white duration-200">Home</a>
        <a href="/newsletter" class="flex items-center h-full px-6 font-medium text-lg text-slate-900/60 dark:text-white/60 hover:text-sky-600/70 dark:hover:text-sky-400/70 active:text-slate-900 dark:active:text-white duration-200">Newsletter</a>
        <a href="/stats" class="flex items-center h-full px-6 font-medium text-lg text-slate-900/60 dark:text-white/60 hover:text-sky-600/70 dark:hover:text-sky-400/70 active:text-slate-900 dark:active:text-white duration-200">Stats</a>
        <a href="/about" class="flex items-center h-full px-6 font-medium text-lg text-slate-900/60 dark:text-white/60 hover:text-sky-600/70 dark:hover:text-sky-400/70 active:text-slate-900 dark:active:text-white duration-200">About</a>
    </nav>
    <!-- This button opens and closes `Menu` component -->
    <button on:click={() => {isMenuOpen = !isMenuOpen; toggleScroll()}} class="h-12 md:hidden p-2 rounded-full active:bg-slate-900/10 dark:active:bg-white/10 fill-slate-900 dark:fill-white active:scale-90 duration-200">
        <IconMenu/> <p hidden>menu</p>
    </button>
    <!-- This button opens and closes the `ThemeDropdown` component -->
    <div class="hidden md:flex justify-end min-w-[9rem]">
        <button on:click={() => isThemeOpen = !isThemeOpen} class="h-12 p-2 rounded-full hover:bg-slate-900/10 active:bg-slate-900/20  dark:hover:bg-white/10 dark:active:bg-white/20 duration-200 fill-slate-900 dark:fill-white hover:scale-[1.075] active:scale-90">
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
