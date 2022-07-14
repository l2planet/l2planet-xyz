<script lang="ts">
import GridChains from "$lib/components/Chains/GridChains.svelte";
import CardChains from "$lib/components/Chains/CardChains.svelte";
import ParagraphChains from "$lib/components/Chains/ParagraphChains.svelte";
import IconEthereum from "$lib/components/icons/IconEthereum.svelte";
import IconBitcoin from "$lib/components/icons/IconBitcoin.svelte";
import IconCardano from "$lib/components/icons/IconCardano.svelte";
import IconTezos from "$lib/components/icons/IconTezos.svelte";
import IconMina from "$lib/components/icons/IconMina.svelte";
import IconFantom from "$lib/components/icons/IconFantom.svelte";
import IconSysCoin from "$lib/components/icons/IconSysCoin.svelte";
import IconMoonBeam from "$lib/components/icons/IconMoonBeam.svelte";
import H1 from "$lib/components/H1.svelte";
import Sections from "$lib/components/Section.svelte";
import Section from "$lib/components/Section.svelte";

</script>

<!-- Index Page starts here -->
<Section>
    <div class="flex flex-col gap-y-8">
        <H1>Pick a Path</H1>
        <ParagraphChains>Pick your path on the road of L2s</ParagraphChains>
        <GridChains>
            <CardChains name="Ethereum" href="/ethereum"> <IconEthereum/> </CardChains>
            <CardChains name="Bitcoin" href="/bitcoin"> <IconBitcoin/> </CardChains>
            <CardChains name="Cardano" href="/cardano"> <IconCardano/> </CardChains>
            <CardChains name="Tezos" href="/tezos"> <IconTezos/> </CardChains>
            <CardChains name="Mina" href="/mina"> <IconMina/> </CardChains>
            <CardChains name="Fantom" href="/fantom"> <IconFantom/> </CardChains>
            <CardChains name="MoonBeam" href="/moonbeam"> <IconMoonBeam/> </CardChains>
            <CardChains name="SysCoin" href="/syscoin"> <IconSysCoin/> </CardChains>
        </GridChains>
    </div>
</Section>
