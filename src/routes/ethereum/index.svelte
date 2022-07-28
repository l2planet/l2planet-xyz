<script lang="ts">
import H1 from "$lib/components/common/H1.svelte";
import H2 from "$lib/components/common/H2.svelte";
import TabMenuSolutions from "$lib/components/Solutions/TabMenuSolutions.svelte";
import TabSolutions from "$lib/components/Solutions/TabSolutions.svelte";
    $: dib = [true, false, false, false, false]
    $: activeTab = 0
    const onTabClick = (id: number) => {
        const ar = [false, false, false, false, false]
        ar[id] = true
        dib = ar
    }
</script>
<!-- Ethereum Page starts here -->
<div class="flex flex-col items-center gap-y-8">
    <H1>Ethereum</H1>
    <TabMenuSolutions>
        <TabSolutions on:click={() => onTabClick(0)} active={dib[0]}><p>ZK</p><span class="sm:hidden">&nbsp;</span><p>Rollup</p></TabSolutions>
        <TabSolutions on:click={() => onTabClick(1)} active={dib[1]}><p>Optimistic</p><span class="sm:hidden">&nbsp;</span><p>Rollup</p></TabSolutions>
        <TabSolutions on:click={() => onTabClick(2)} active={dib[2]}>Validium</TabSolutions>
        <TabSolutions on:click={() => onTabClick(3)} active={dib[3]}>Plasma</TabSolutions>
        <TabSolutions on:click={() => onTabClick(4)} active={dib[4]}><p>State</p><span class="sm:hidden">&nbsp;</span><p>Channel</p></TabSolutions>
    </TabMenuSolutions>
    <H2>
    {#if activeTab == 0}
        ZK Rollup
    {:else if activeTab == 1}
        Optimistic Rollup
    {:else if activeTab == 2}
        Validium
    {:else if activeTab == 3}
        Plasma
    {:else if activeTab == 4}
        State Channel
    {/if}
    </H2>
</div>