<script>
import H1 from "$lib/components/H1.svelte";
import H2 from "$lib/components/H2.svelte";
import FlexFees from "$lib/components/Stats/FlexFees.svelte";
import FlexTps from "$lib/components/Stats/FlexTps.svelte";
import ItemFees from "$lib/components/Stats/ItemFees.svelte";
import ItemTps from "$lib/components/Stats/ItemTps.svelte";
import { fetchDataTPS } from "$lib/utils/tps";

</script>
<!-- Stats Page starts here -->
<div class="flex flex-col gap-8">
    <H1>Stats</H1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div on:click={fetchDataTPS} class="flex flex-col gap-y-3">
            <H2>Fees</H2>
            <FlexFees>
                <ItemFees name="Metis"/>
                <ItemFees name="Metis"/>
                <ItemFees name="Metis"/>
                <ItemFees name="Metis"/> 
                <ItemFees name="Metis"/> 
            </FlexFees>
        </div>
        <div class="flex flex-col gap-y-3">
            <H2>TPS</H2>
            <FlexTps>
                <ItemTps name="Metis"/> 
                <ItemTps name="Metis"/> 
                <ItemTps name="Metis"/> 
                <ItemTps name="Metis"/> 
                <ItemTps name="Metis"/> 
            </FlexTps>
        </div>
    </div>
</div>