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
import IconBitcoin from "$lib/components/icons/IconBitcoin.svelte";
import IconCardano from "$lib/components/icons/IconCardano.svelte";
import IconTezos from "$lib/components/icons/IconTezos.svelte";
import IconMina from "$lib/components/icons/IconMina.svelte";
import IconFantom from "$lib/components/icons/IconFantom.svelte";
import IconSysCoin from "$lib/components/icons/IconSysCoin.svelte";
import IconMoonBeam from "$lib/components/icons/IconMoonBeam.svelte";

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
                <CardPaths name="Ethereum" href="/ethereum"> <IconEthereum/> </CardPaths>
                <CardPaths name="Bitcoin" href="/bitcoin"> <IconBitcoin/> </CardPaths>
                <CardPaths name="Cardano" href="/cardano"> <IconCardano/> </CardPaths>
                <CardPaths name="Tezos" href="/tezos"> <IconTezos/> </CardPaths>
                <CardPaths name="Mina" href="/mina"> <IconMina/> </CardPaths>
                <CardPaths name="Fantom" href="/fantom"> <IconFantom/> </CardPaths>
                <CardPaths name="MoonBeam" href="/moonbeam"> <IconMoonBeam/> </CardPaths>
                <CardPaths name="SysCoin" href="/syscoin"> <IconSysCoin/> </CardPaths>
            </GridPaths>
        </ArticlePaths>
    </Main>
    <Footer/>
</Page>