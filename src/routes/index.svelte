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
import IconEthereum from "$lib/components/icons/IconEthereum.svelte";

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
                <CardPaths name="Etherum" href="/"> <IconEthereum/> </CardPaths>
                <CardPaths name="Etherum" href="/" />
                <CardPaths name="Etherum" href="/" />
                <CardPaths name="Etherum" href="/" />
            </GridPaths>
        </ArticlePaths>
    </Main>
    <Footer/>
</Page>