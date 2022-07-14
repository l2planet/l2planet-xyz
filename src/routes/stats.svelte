<script>
import H1 from "$lib/components/H1.svelte";
import H2 from "$lib/components/H2.svelte";
import TableFees from "$lib/components/Stats/TableFees.svelte";
import TableTps from "$lib/components/Stats/TableTps.svelte";
import RowFees from "$lib/components/Stats/RowFees.svelte";
import RowTps from "$lib/components/Stats/RowTps.svelte";

</script>
<!-- Stats Page starts here -->
<div class="flex flex-col gap-8">
    <H1>Stats</H1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="flex flex-col gap-y-3">
            <H2>Fees</H2>
            <TableFees>
                <RowFees name="Metis"/>
                <RowFees name="Metis"/>
                <RowFees name="Metis"/>
                <RowFees name="Metis"/> 
                <RowFees name="Metis"/> 
            </TableFees>
        </div>
        <div class="flex flex-col gap-y-3">
            <H2>TPS</H2>
            <TableTps>
                <RowTps name="Metis"/> 
                <RowTps name="Metis"/> 
                <RowTps name="Metis"/> 
                <RowTps name="Metis"/> 
                <RowTps name="Metis"/> 
            </TableTps>
        </div>
    </div>
</div>