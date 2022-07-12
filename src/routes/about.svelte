<script lang="ts">
import CardAbout from "$lib/components/About/CardAbout.svelte";
import GridAbout from "$lib/components/About/GridAbout.svelte";
import ParagraphAbout from "$lib/components/About/ParagraphAbout.svelte";
import WrapperAbout from "$lib/components/About/WrapperAbout.svelte";
import Footer from "$lib/components/Footer.svelte";
import H1 from "$lib/components/H1.svelte";
import H2 from "$lib/components/H2.svelte";
import Main from "$lib/components/Main.svelte";
import Page from "$lib/components/Page.svelte";
import TopBar from "$lib/components/TopBar/TopBar.svelte";

</script>

<!-- About Page starts here -->
<Page>
    <TopBar/>
    <!-- The contents will be right here -->
    <Main>
        <WrapperAbout>
            <div class="flex flex-col text-center w-full max-w-6xl gap-y-20">
                <div class="flex flex-col gap-y-3 sm:gap-y-4">
                    <H1>About Us</H1>
                    <ParagraphAbout/>
                </div>
                <div class="flex flex-col gap-y-8 sm:gap-y-12">
                    <H2>What we do</H2>
                    <GridAbout>
                        <CardAbout title="Newsletter">People can easily track the state of L2s by reading</CardAbout>
                        <CardAbout title="Newsletter">People can easily track the state of L2s by reading</CardAbout>
                        <CardAbout title="Newsletter">People can easily track the state of L2s by reading</CardAbout>
                        <CardAbout title="Newsletter">People can easily track the state of L2s by reading</CardAbout>
                    </GridAbout>
                </div>
            </div>
        </WrapperAbout>
    </Main>
    <Footer/>
</Page>