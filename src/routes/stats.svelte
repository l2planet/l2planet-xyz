<script lang="ts">
import Footer from "$lib/components/Footer.svelte";
import Main from "$lib/components/Main.svelte";
import Menu from "$lib/components/Menu.svelte";
import Page from "$lib/components/Page.svelte";
import TopBar from "$lib/components/TopBar.svelte";
import ArticlePaths from "$lib/components/Paths/ArticlePaths.svelte";
import HeadingPaths from "$lib/components/Paths/HeadingPaths.svelte";
import GridPaths from "$lib/components/Paths/GridPaths.svelte";
import CardPaths from "$lib/components/Paths/CardPaths.svelte";
import ParagraphPaths from "$lib/components/Paths/ParagraphPaths.svelte";

// isMenuOpen handles how menu screen is displayed
let isMenuOpen: boolean = false
</script>

<!-- Stats Page starts here -->
<Page>
    <TopBar on:click={() => isMenuOpen = !isMenuOpen}/> <!-- If menu button is clicked, isMenuOpen value will be changed -->
    <Menu isOpen={isMenuOpen}/>
    <!-- The contents will be right here -->
    <Main>
        Stats...
    </Main>
    <Footer/>
</Page>