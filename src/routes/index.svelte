<script lang="ts">
import Footer from "$lib/components/Footer.svelte";
import Main from "$lib/components/Main.svelte";
import Page from "$lib/components/Page.svelte";
import TopBar from "$lib/components/TopBar/TopBar.svelte";
import ArticlePaths from "$lib/components/Paths/ArticlePaths.svelte";
import HeadingPaths from "$lib/components/Paths/HeadingPaths.svelte";
import GridPaths from "$lib/components/Paths/GridPaths.svelte";
import CardPaths from "$lib/components/Paths/CardPaths.svelte";
import ParagraphPaths from "$lib/components/Paths/ParagraphPaths.svelte";

</script>

<!-- Index Page starts here -->
<Page>
    <TopBar/> <!-- If menu button is clicked, isMenuOpen value will be changed -->
    <!-- The contents will be right here -->
    <Main>
        <ArticlePaths>
            <HeadingPaths/>
            <ParagraphPaths/>
            <GridPaths>
                <CardPaths href="/solutions">L2 Solutions</CardPaths>
                <CardPaths href="/blog">L2 Blog</CardPaths>
                <CardPaths href="/stats">L2 Stats</CardPaths>
                <CardPaths href="/">L2 Stuff</CardPaths>
            </GridPaths>
        </ArticlePaths>
    </Main>
    <Footer/>
</Page>